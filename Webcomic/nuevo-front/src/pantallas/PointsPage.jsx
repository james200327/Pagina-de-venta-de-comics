// src/App.js
import React from 'react';
import PaymentMethods from '../componentes/PaymentMethod.jsx';
import PointCard from '../componentes/PointCard.jsx';
import { Navbar } from "../componentes/Navbar.jsx";
import '../Estilos/PointsPage.css';

export default function PointsPage() {
    return (
        <>
         <Navbar/>
        <div className="PointsPage">
            <header>
                <h1>Seleccionar Método de Compra</h1>
                <PaymentMethods/>
            </header>
            <main>
                <PointCard />
            </main>
        </div>
        </>
        
    );
}

