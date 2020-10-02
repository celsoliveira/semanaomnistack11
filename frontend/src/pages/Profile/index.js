import React from "react";
import logoImg from "../../assets/logo.jpg";
import {Link} from "react-router-dom";
import {FiPower, FiTrash2} from "react-icons/fi";

import "./styles.css";

export default function Profile (){
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R4 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R4 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R4 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R4 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>


            </ul>



        </div>

    );
}