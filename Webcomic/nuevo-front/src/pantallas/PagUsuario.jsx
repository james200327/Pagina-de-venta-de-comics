import '../Estilos/pagMiCuenta.css';
import React from 'react';
import logos from '../Imagenes/Designer.jpeg';

import logoUsuario from '../Imagenes/logoUsaurio.png';
import logoCarrito from '../Imagenes/carrito.png';

import lupa from '../Imagenes/lupita.png';
//import axios from 'axios';


const pagUsuario = () => {
    return (
        <div class="Home-page">
            <header>
                <div class="logo">
                    <img src={logos} alt="Logo" />
                </div>
                <nav>

                    <input type="text" placeholder='Buscar' id='barraBuscar' />

                    <button type='submit' id='botonBuscar'>
                        <img src={lupa} alt="logoBuscar" />
                    </button>
                    <button type='submit' id='botonCuenta'>
                        <img src={logoUsuario} alt='logoUsaurio' />

                    </button>
                    <button type='submit' id='botonCarrito'>
                        <img src={logoCarrito} alt="logoCarrito" />
                    </button>
                </nav>

            </header>

            <div class="contenedor-cuenta">
                <div class="hola">
                    <div class="datos">
                        <h1>Mis datos</h1>
                        <h3>Nombre:</h3>
                        <input type="text" id="nombreUsuario" class="inputsDatos" />
                        <h3>Correo:</h3>
                        <input type="text" id="emailUsuario" class="inputsDatos"/><br />
                        <button type='submit' id='userEdit'>Editar</button>
                    </div>

                    <div class="datos">
                        <h1>Direccion:</h1>
                        <h3>Calle:</h3>
                        <input type="text" id="calleUsuario" class="inputsDatos"/>
                        <h3>Codigo Postal:</h3>
                        <input type="text" id="c-Postal" class="inputsDatos"/>
                        <h3>Poblacion:</h3>
                        <input type="text" id="poblacionUsuario" class="inputsDatos"/><br />
                        <button type='submit' id='userEdit'>Editar</button>
                    </div>

                    <div class="datos">
                        <h1>Mis pedidos</h1>
                        <h3>Actualmente no tienes ningun pedido</h3>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default pagUsuario;