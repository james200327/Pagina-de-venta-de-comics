import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../Estilos/ProductDetailPage.css';
import { Navbar } from '../componentes/Navbar';
import InfinityPoints from '../Imagenes/InfinityPoints.png';
import { useNavigate } from 'react-router-dom';

export default function ProductDetailPage({}) {
    const redirect = useNavigate();
    const {productId} =  useParams();// ID del producto desde la URL
    const userId = localStorage.getItem("userId");
    console.log(productId)
    // Estado local para los datos del producto
    const [product, setProduct] = useState(null);


    const goMainPage = () => {
        redirect("/inicio");
    };

    useEffect(() => {
      // Cargar los detalles del producto desde el backend
      axios
          .get(`http://localhost:8080/api/comics/${productId}`)
          .then((response) => setProduct(response.data))
          .catch((error) => console.error("Error al cargar los detalles del producto:", error));
  }, [productId]);

  const añadirAlCarrito = async () => {
    try {
        // Enviar solicitud para agregar el producto al carrito
        await axios.post(
            `http://localhost:8080/api/pedidos/usuario/${userId}/agregarProducto/${productId}`,
            null,
            { params: { cantidad: 1 } } // Añadir 1 unidad al carrito
        );
        Swal.fire({
            title: "Producto añadido",
            text: "El producto se ha añadido correctamente al carrito.",
            icon: "success",
            confirmButtonText: "Aceptar",
        }).then(() => {
            // Recargar la página solo después de cerrar el SweetAlert
            window.location.reload();
        });
    } catch (error) {
        console.error("Error al añadir producto al carrito:", error);
        Swal.fire({
            title: 'Hubo un error al añadir el producto al carrito',
            icon: 'error',
            confirmButtonText: 'Continuar'
          });
    }
};
    
      if (!product) return <p>Cargando producto...</p>;
    return (
        <>
            <Navbar/>
            <div className="product-detail">
                <nav className="breadcrumb">
                    <span onClick={goMainPage}>Home</span> {'>'} {product.titulo}
                </nav>
                <div className="product-main">
                    <div className="product-images">
                    <img src={`http://localhost:8080${product.imagenUrl}`} alt={product.titulo} />
                    </div>
                    <div className="product-info">
                        <h1>{product.titulo}</h1>
                        <div className="rating">
                            <span>4.5 ★</span>
                            <span>10 Opiniones</span>
                        </div>
                        <div className="product-description">
                            <h2>Sobre el cómic</h2>
                            <p>{product.descripcion}</p>
                        </div>
                    </div>
                    <div className='product-addcontainer'>
                        <div className="price">
                            <span>{product.precio}</span>
                            <span><img src={InfinityPoints} alt="" /></span>
                        </div>
                        <button className='add-to-card' onClick={añadirAlCarrito}>Añadir al carrito</button>
                        {/* <div className="delivery-info">{product.autor}</div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
