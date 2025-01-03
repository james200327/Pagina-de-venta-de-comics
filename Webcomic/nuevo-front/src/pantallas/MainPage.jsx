import { Navbar } from "../componentes/Navbar";
import React from 'react';
import { ProductCard } from "../componentes/ProductCard";
import '../Estilos/MainPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const MainPage = () => {
    
    const [selectedGenre, setSelectedGenre] = useState("all"); 
    const [comic, setComic] = useState([]);
    const [mostrarFormComic, setmostrarFormComic] = useState(false);
    const [nuevoComic, setNuevoComic] = useState({
        titulo: '',
        autor: '',
        genero: '',
        precio: '',
        stock: '',
        imagen: null,
        descripcion: ''
        /*fecha_publi:''*/
    });

   
    const rol = localStorage.getItem("role");


    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        const listaComics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/comics/todos');
                setComic(response.data);
            } catch (error) {
                console.error('Error al cargar los cómics:', error);
            }
        };
        listaComics();
    }, []);

    const manejoAddComic = async () => {

        const newComic = new FormData();

        newComic.append('titulo', nuevoComic.titulo);
        newComic.append('autor', nuevoComic.autor);
        newComic.append('genero', nuevoComic.genero);
        newComic.append('precio', nuevoComic.precio);
        newComic.append('stock', nuevoComic.stock);
        newComic.append('descripcion', nuevoComic.descripcion);

        /* newComic.append('fecha_publi', nuevoComic.fecha_publi);*/
        if (nuevoComic.imagen) {
            newComic.append('imagen', nuevoComic.imagen);
        }
        try {
            await axios.post('http://localhost:8080/api/comics/agregar', newComic);
            // Volver a cargar la lista de cómics después de añadir uno nuevo
            const response = await axios.get('http://localhost:8080/api/comics/todos');
            setComic(response.data);
            setmostrarFormComic(false); // Ocultar el formulario

            MySwal.fire({
                title: 'Comic añadido exitosamente',
                icon: 'success',
                confirmButtonText: 'Continuar'
              });

        } catch (error) {
            console.error('Error al agregar el cómic:', error);
        }

       
    };

    const manejoBorrarComic = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/comics/eliminar/${id}`);
            setComic(comic.filter((c) => c.id !== id));
            MySwal.fire({
                title: 'Comic elimando',
                icon: 'success',
                confirmButtonText: 'Continuar'
              });
        } catch (error) {
            console.error('Error al borrar el cómic:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNuevoComic({ ...nuevoComic, imagen: file });
    };

    /*const filteredComics = comic.filter(c => {
        const match = c.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        console.log(`Filtrando cómic "${c.titulo}":`, match); // Verificar filtro
        return match;
    });*/

    const filteredComics = comic.filter(c => {
        const genreMatch = selectedGenre === "all" || c.genero.toLowerCase().includes(selectedGenre.toLowerCase());
        const searchMatch = c.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        return genreMatch && searchMatch;
    });
    

    const manejoEditarComic = async (comicEdit) => {
        const { value: formValues } = await MySwal.fire({
            title: 'Modificar Comic',
            html: `
                <div class="form-container">
                    <label for="titulo" class="custom-label">Titulo:</label>
                    <input id="titulo" class="swal2-input custom-input" placeholder="Título" value="${comicEdit.titulo}">
                    
                    <label for="autor" class="custom-label">Autor:</label>
                    <input id="autor" class="swal2-input custom-input" placeholder="Autor" value="${comicEdit.autor}">
                    
                    <label for="genero" class="custom-label">Genero:</label>
                    <input id="genero" class="swal2-input custom-input" placeholder="Genero" value="${comicEdit.genero}">
                    
                    <label for="precio" class="custom-label">Precio:</label>
                    <input id="precio" class="swal2-input custom-input" placeholder="Precio" value="${comicEdit.precio}">
                    
                    <label for="stock" class="custom-label">Stock:</label>
                    <input id="stock" class="swal2-input custom-input" placeholder="Stock" value="${comicEdit.stock}">
                    
                    <label for="descripcion" class="custom-label">Descripcion:</label>
                    <textarea id="descripcion" class="swal2-textarea custom-textarea" placeholder="Descripción">${comicEdit.descripcion}</textarea>
                </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    titulo: document.getElementById('titulo').value,
                    autor: document.getElementById('autor').value,
                    genero: document.getElementById('genero').value,
                    precio: document.getElementById('precio').value,
                    stock: document.getElementById('stock').value,
                    descripcion: document.getElementById('descripcion').value
                }
            },
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button'
            }
        });
        
        

        if (formValues) {
            try {
                const updatedComic = { ...comicEdit, ...formValues };
                console.log("Datos a actualizar:", updatedComic);
                await axios.put(`http://localhost:8080/api/comics/modificar/${comicEdit.id}`, updatedComic);
                setComic(comic.map((c) => (c.id === comicEdit.id ? updatedComic : c)));
                MySwal.fire({
                    title: 'Comic modificado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
            } catch (error) {
                console.error('Error al modificar el cómic:', error);
            }
        }
    };

   

    return (
        <>
            {rol === "ADMIN" && (
                <div className="admin-main-div">
                    <h1 className="admin-h1">Formulario para añadir comics</h1>

                    <button className="admin-button-create" onClick={() => setmostrarFormComic(!mostrarFormComic)}>Agregar Cómic</button>

                    {mostrarFormComic && (
                        <div className="admin-div-info">
                            <h2>Añadir un nuevo cómic</h2>
                            <input className="div-info-input" type="text" placeholder="Título" onChange={(e) => setNuevoComic({ ...nuevoComic, titulo: e.target.value })} />
                            <input className="div-info-input" type="text" placeholder="Autor" onChange={(e) => setNuevoComic({ ...nuevoComic, autor: e.target.value })} />
                            <input className="div-info-input" type="text" placeholder="Genero" onChange={(e) => setNuevoComic({ ...nuevoComic, genero: e.target.value })} />
                            <input className="div-info-input" type="number" placeholder="Precio" onChange={(e) => setNuevoComic({ ...nuevoComic, precio: e.target.value })} />
                            <input className="div-info-input" type="number" placeholder="Stock" onChange={(e) => setNuevoComic({ ...nuevoComic, stock: e.target.value })} />
                            <textarea 
                                className="div-info-textarea" 
                                placeholder="Descripción" 
                                onChange={(e) => setNuevoComic({ ...nuevoComic, descripcion: e.target.value })}
                            />
                            <button className="div-info-file" onClick={() => document.getElementById('fileInput').click()}>Seleccionar imagen</button>
                                

                            <input 
                                id="fileInput" 
                                type="file" 
                                accept="image/*" 
                                style={{ display: 'none' }} 
                                onChange={handleImageChange} 
                            />

                            <button className="div-info-agregar" onClick={manejoAddComic}>Agregar</button>
                        </div>
                    )}
                </div>
            )}

            <Navbar setSearchTerm={setSearchTerm} setSelectedGenre={setSelectedGenre}/>
            
            <div className="MainPage">

                <h3 className="mp-h3">Nuestras Recomendaciones</h3>
                <div className="div-products">
                    
                {filteredComics.map((comic) => (
                        <ProductCard 
                        key={comic.id}
                        comic={comic} 
                        titulo={comic.titulo} 
                        image={`http://localhost:8080${comic.imagenUrl}`} 
                        rating={comic.rating} 
                        reviews={comic.reviews} 
                        stock={comic.stock}
                        onDelete={() => manejoBorrarComic(comic.id)}
                        onEdit={() => manejoEditarComic(comic)} // Función de eliminación
                            isAdmin={rol === "ADMIN"} // Solo muestra el botón si es administrador
                        />
                         ))}
                </div>
            </div>
        </>
    );

}

export default MainPage;

{/*export default function MainPage (){
    return(
        <>
        {/**esto es un comentario 
        <Navbar/>
        <div className="MainPage">
        <h3 className="mp-h3">Nuestras Recomendaciones</h3>
        <div className="div-products">
        <ProductCard id={1} image={aot1} name="Atack on Titan Vol.1" price={1200} rating={4.5} reviews={12} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard id={2} image={aot2} name="Atack on Titan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={3} image={aot3} name="Atack on Titan Vol.3" price={1500} rating={5} reviews={1} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard id={4} image={aot4} name="Atack on Titan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={5} image={aot5} name="Atack on Titan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard id={6} image={aot6} name="Atack on Titan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={7} image={aot7} name="Atack on Titan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={8} image={aot8} name="Atack on Titan Vol.8" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={9} image={wolv1} name="Old Man Logan Vol.1" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={10} image={wolv2} name="Old Man Logan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard id={11} image={wolv3} name="Old Man Logan Vol.3" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={12} image={wolv4} name="Old Man Logan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={13} image={wolv5} name="Old Man Logan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={14} image={wolv6} name="Old Man Logan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={15} image={wolv7} name="Old Man Logan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>


        </div>
        </>
    )
}*/}
