import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Estilos/RegistroUsuario.css"
import logo from "../Imagenes/logo.png"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const RegistroUsuario = () => {

   



    const [data, actualizarEstado] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
        calle: "",
        codigoPostal: "",
        ciudad: ""
    });

    const [mensaje, setMensaje] = useState("");

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        actualizarEstado({ ...data, [name]: value });
    }

    const redirect = useNavigate();

    const InicioSesion = () => {
        redirect("/");
      }

    const manejarRegistro = async (e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            setMensaje("Las contraseñas no coinciden");

            return
        }

        try {
            const respuesta = await axios.post('http://localhost:8080/api/usuarios/registro', {
                username: data.nombre,
                email: data.email,
                password: data.password,
                direccion: {
                    calle: data.calle,
                    ciudad: data.ciudad,
                    codigoPostal: data.codigoPostal
                }
            });
            MySwal.fire({
                title: 'Usuario registrado correctamente',
                icon: 'success',
                confirmButtonText: 'Continuar'
              }).then(() =>{
                redirect("/");
              })
                


        } catch (error) {
            if (error.response && error.response.data) {
                setMensaje(error.response.data); // Mensaje desde el backend
            }else{
                setMensaje("Nombre o correo ya en uso");
            }
        }
    };



    return (

        < section className="fm-section" >
            <div className="fm-logo">
                <img src={logo} alt="Logo de la empresa" />
            </div>

            <h1 className="fm-h1">Crear cuenta</h1>

            {mensaje && <p className="error-message">{mensaje}</p>}

            {
                <button className="fm-google-button">
                    <img src='/public/images/goggle.png' alt="Google logo" /> Iniciar sesión con Google
                </button>
            }

            <div className="fm-divider">
                <hr className="fm-line" />
                <span className="fm-divider-text">O bien</span>
                <hr className="fm-line" />
            </div>

            <div className="fm-div-info">
                <form onSubmit={manejarRegistro}>
                    <label htmlFor="name" className="fm-label">Nombre</label>
                    <input type="text" name="nombre" placeholder="Nombre" className="fm-input" value={data.nombre} onChange={manejarCambio} required/>

                    <label htmlFor="email" className="fm-label">E-mail*</label>
                    <input type="email" name="email" placeholder="E-mail" className="fm-input" value={data.email} onChange={manejarCambio} required/>

                    <label htmlFor="password" className="fm-label">Contraseña*</label>
                    <input type="password" name="password" placeholder="Contraseña" className="fm-input" value={data.password} onChange={manejarCambio} required/>

                    <label htmlFor="confirm-password" className="fm-label">Repetir contraseña*</label>
                    <input type="password" name="confirmPassword" placeholder="Repetir contraseña" className="fm-input" value={data.confirmPassword} onChange={manejarCambio} required/>

                    <label htmlFor="Street" className="fm-label">Calle</label>
                    <input type="text" name="calle" placeholder="Calle" className="fm-input" value={data.calle} onChange={manejarCambio} required/>

                    <label htmlFor="City" className="fm-label">Ciudad</label>
                    <input type="text" name="ciudad" placeholder="City" className="fm-input" value={data.ciudad} onChange={manejarCambio} required/>

                    <label htmlFor="CT Code" className="fm-label">Codigo Postal</label>
                    <input type="text" name="codigoPostal" placeholder="Codigo Postal" className="fm-input" value={data.codigoPostal} onChange={manejarCambio} required/>
                    <button type="submit" className="fm-button">Registrarse</button>
                    <button type="submit" onClick={InicioSesion} className="fm-button">Volver</button>
                </form>
            </div>


        </ section>

    );
};

export default RegistroUsuario;