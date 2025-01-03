import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Estilos/TramitarPedido.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
export default function TramitarPedido() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({ nombre: '', email: '', Ciudad: '', calle: '', codigo_Postal: '' });
  const userId = localStorage.getItem('userId');
  const [errorForm, setErrorsForms] = useState({});
  const navigate = useNavigate();
  const [idPedido, setIdPedido] = useState([]);
  // Obtener el carrito desde el backend
  const obtenerIdPedido = async () => {
    try {
      const carritoResponse = await axios.get(`http://localhost:8080/api/pedidos/usuario/${userId}/carrito`);
      const idCarrito = carritoResponse.data.id;
      setIdPedido(idCarrito); // Extrae el pedidoId

    } catch (error) {
      console.error('Error al obtener el id pedido:', error);
    }
  }

  const redirect = useNavigate();

  const Inicio = () => {
    redirect("/inicio");
  }

  const fetchCarrito = async () => {

    try {
      const response = await axios.get(`http://localhost:8080/api/pedidos/usuario/${userId}/carrito`);
      setCarrito(response.data.items || []);
      calculateTotal(response.data.items || []);
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  };

  const calculateTotal = (items) => {
    const newTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    setTotal(newTotal);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validarForm = () => {
    const errores = {};
    let esValido = true;
    if (!form.nombre.trim()) {
      errores.nombre = 'El campo Nombre es obligatorio';
      esValido = false
    }
    if (!form.email.trim()) {
      errores.email = 'El campo Correo Electrónico es obligatorio';
      esValido = false
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errores.email = 'El correo electrónico no es válido';
      esValido = false
    }
    if (!form.Ciudad.trim()) {
      errores.ciudad = 'El campo Ciudad es obligatorio';
      esValido = false;
    }
    if (!form.calle.trim()) {
      errores.calle = 'El campo Calle es obligatorio';
      esValido = false;
    }
    if (!form.codigo_Postal.trim()) {
      errores.codigo_postal = 'El campo Codigo Postal es obligatorio';
      esValido = false;
    }

    setErrorsForms(errores);

    return esValido;
  }

  const confirmarPedido = async () => {
    if(!validarForm()){
      return;
    }
    try {

      const response = await axios.post(`http://localhost:8080/api/pedidos/${idPedido}/confirmar`);
      MySwal.fire({
        title: 'Pedido confirmado',
        text: 'Tu pedido ha sido realizado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      // Redirigir al main page o vaciar el carrito
      navigate('/inicio');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        MySwal.fire({
          title: 'Error',
          text: error.response.data,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      } else {
        console.error('Error al confirmar el pedido:', error);
      }
    }
  };

  useEffect(() => {
    obtenerIdPedido();
    fetchCarrito();

  }, []);



  return (
    <div className="checkout">
      <h1>Confirmar Pedido</h1>
      <div className="checkout-container">
        {/* Formulario que ocupa el 70% */}
        <div className="checkout-form-div">
          <h2>Datos de Envío</h2>
          <form className='checkout-form'>
          {errorForm.nombre && <span className="error">{errorForm.nombre}</span>}
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleFormChange}
              required
            />
            {errorForm.email && <span className="error">{errorForm.email}</span>}
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={form.email}
              onChange={handleFormChange}
            />
            {errorForm.ciudad && <span className="error">{errorForm.ciudad}</span>}
            <input
              type="text"
              name="Ciudad"
              placeholder="Ciudad"
              value={form.Ciudad}
              onChange={handleFormChange}
            />
            {errorForm.calle && <span className="error">{errorForm.calle}</span>}
            <input
              type="text"
              name="calle"
              placeholder="Calle"
              value={form.calle}
              onChange={handleFormChange}
            />
            {errorForm.codigo_postal && <span className="error">{errorForm.codigo_postal}</span>}
            <input
              type="text"
              name="codigo_Postal"
              placeholder="Codigo postal"
              value={form.codigo_Postal}
              onChange={handleFormChange}
            />
          </form>
          <div className="checkout-summary">
            <h3>Total: {total} puntos</h3>
            <button type='submit' className="confirm-button" onClick={confirmarPedido}>
              Confirmar Pedido
            </button>
          </div>
          <button onClick={Inicio} className='menu-button'>Volver al menu</button>
        </div>

        {/* Productos que ocupan el 30% */}
        <div className="checkout-products">
          <h2>Tu Pedido</h2>
          <div className="checkout-products-scroll">
            {carrito.map((item) => (
              <div key={item.comic.id} className="checkout-item">
                <img src={`http://localhost:8080${item.comic.imagenUrl}`} alt={item.comic.titulo} />
                <div className="checkout-item-info">
                  <h3>{item.comic.titulo}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: {item.precio * item.cantidad} puntos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



  );
}