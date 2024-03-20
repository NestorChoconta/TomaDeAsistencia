import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';
import imagen from '../../img/imagendash.jpg'

function Dashboard() {
    return (
        <div className="dashboard">
            <header>
                <h1>Dashboard</h1>
            </header>
            <div className="menu-container">
                <div className="menu">
                    <Link to="/" className="box">
                        <h2>Fichas</h2>
                        <p>Descripción del contenido del panel de Fichas.</p>
                    </Link>
                    <Link to="/" className="box">
                        <h2>Teams</h2>
                        <p>Descripción del contenido del Teams.</p>
                    </Link>
                    <Link to="/" className="box">
                        <h2>Asistencia</h2>
                        <p>Descripción del contenido de Asistencia.</p>
                    </Link>
                    <Link to="/" className="box">
                        <h2>Aprendices</h2>
                        <p>Descripción del contenido de Aprendices.</p>
                    </Link>
                </div>
                <img src={imagen} alt="Menu Icon" className="menu-icon" />
            </div>
        </div>
    );
}

export default Dashboard;

