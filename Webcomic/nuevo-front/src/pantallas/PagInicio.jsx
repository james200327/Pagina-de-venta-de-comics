import '../Estilos/PagInicio.css';
import  logos from '../Imagenes/Designer.jpeg';

import logoUsuario from '../Imagenes/logoUsaurio.png';
import logoCarrito from '../Imagenes/carrito.png';

import lupa from '../Imagenes/lupita.png';
import aot_1 from '../Imagenes/aot/aot-1.jpg';
import aot_2 from '../Imagenes/aot/aot2.jpg';
import aot_3 from '../Imagenes/aot/aot3.jpg';
import aot_4 from '../Imagenes/aot/aot4.jpg';
import aot_5 from '../Imagenes/aot/aot5.jpg';
import aot_6 from '../Imagenes/aot/aot6.jpg';
import aot_7 from '../Imagenes/aot/aot7.jpg';
import aot_8 from '../Imagenes/aot/aot8.jpg';

import wolv1 from '../Imagenes/wolverine/wolverine-1.jpeg';
import wolv2 from '../Imagenes/wolverine/wolverine-2.jpg';
import wolv3 from '../Imagenes/wolverine/wolverine-3.jpg';
import wolv4 from '../Imagenes/wolverine/wolverine-4.jpg';
import wolv5 from '../Imagenes/wolverine/wolverine-5.jpg';
import wolv6 from '../Imagenes/wolverine/wolverine-6.jpg';
import wolv7 from '../Imagenes/wolverine/wolverine-7.jpg';
import wolv8 from '../Imagenes/wolverine/wolverine-8.jpg';
const pagInicio = () => {
    return(
        <div class="home-page">

            <header>
            <div class="logo">
                <img src={logos} alt="Logo"/>
            </div>
            <nav>
                
            <input type="text" placeholder='Buscar' id='barraBuscar'/>
            
            <button type='submit' id='botonBuscar'>
                <img src={lupa} alt="logoBuscar" />
            </button>
            <button type='submit' id='botonCuenta'>
                <img src={logoUsuario} alt='logoUsaurio'/>
                
            </button>
            <button type='submit' id='botonCarrito'>
                <img src={logoCarrito} alt="logoCarrito" />
            </button>
            </nav>

            
            
        </header>

        <div class="categoria">
            <div class="caja-texto">
                <h1>Attack on titan</h1>
            </div>
            <div class="container-comics">
            <div class="comics">
                <img src={aot_1} alt="aot-1" id='comics' />
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_2} alt="aot-2" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_3} alt="aot-3" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_4} alt="aot-4" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_5} alt="aot-5" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_6} alt="aot-6" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_7} alt="aot-7" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={aot_8} alt="aot-8" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>
            </div>
            
        </div>

        <div class="categoria">
            <div class="caja-texto">
                <h1>Wolverine</h1>
            </div>
            <div class="container-comics">
            <div class="comics">
                <img src={wolv1} alt="wolv1" id='comics' />
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv2} alt="wolv2" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv3} alt="wolv3" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv4} alt="wolv4" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv5} alt="wolv5" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv6} alt="wolv6" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv7} alt="wolv7" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>

            <div class="comics">
                <img src={wolv8} alt="wolv8" id='comics'/>
                <h2>Titulo: Attack on titan Vol.1</h2>
                <h2>Autor: Hajime Isayama</h2>
                <h3>Precio: 5,99€</h3>
            </div>
            </div>
            
        </div>

        </div>
        
        
        
        // <div class="categoria-wolv>
        //         <div class="comic-wolv>
        //             <img src="" alt="" />
        //         </div>
        //     </div>
    );
}

export default pagInicio;