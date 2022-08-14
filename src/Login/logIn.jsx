import React from "react";
import { Link } from "react-router-dom";
//import './index.css'
//import bootstrap from "bootstrap";

export const LogIn = ()=>{
    return (
        
        <>
        <div className="flex items-center flex-col mt-20">
            <form className="flex flex-col items-center mt-20 w-1/4 bg-white shadow-md rounded-md">

                <div className="mt-6">
                    <h2 className="text-center text-3xl font-bold font-poppins">Acceder</h2>
                </div>

                <div className="mt-10 w-4/5">
                    <input
                        type="text"
                        placeholder="Usuario"
                        autoComplete="off"
                        name="NombreUsuario"
                        required
                        className="border-light-blue outline-none text-center border-b-2 w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                </div>

                <div className="mt-6 w-4/5">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        name="contraseña"
                        required
                        className="text-center outline-none border-b-2 border-light-blue w-full focus:border-dark-blue placeholder:text-dark-blue"
                    />
                </div>

                <div className="mt-6 bg-green text-white px-6 py-1 rounded-md">
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div className='mt-2 mb-6'>
                    <p>¿No tienes una cuenta aún?  
                        <Link to={`/Registro`} className='text-blue-top-buttom'>
                            Crear
                        </Link>
                    </p>
                </div>

            </form>    
        </div>
    </>
    );
}