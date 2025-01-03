// src/components/PointsSelection.js
import React from 'react';
import PurchaseOption from './PurchaseOption';
import InfinityPoints from '../Imagenes/InfinityPoints.png';
//import './PointsSelection.css';

const pointsOptions = [
    { points: 475, price: 5, icon: InfinityPoints },
    { points: 1000, price: 10, icon: InfinityPoints },
    { points: 2050, price: 20, icon: InfinityPoints },
    { points: 3650, price: 35, icon: InfinityPoints },
    { points: 5350, price: 50, icon: InfinityPoints },
    { points: 11000, price: 100, icon: InfinityPoints }
];

const PointCard = () => {
    return (
        <div className="points-selection">
            <h2>Seleccionar InfinityPoints</h2>
            <div className="points-options">
                {pointsOptions.map((option, index) => (
                    <PurchaseOption
                        key={index}
                        points={option.points}
                        price={option.price}
                        icon={option.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default PointCard;
