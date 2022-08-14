import React from "react";
import { useForm } from '../hooks/useForm';
import { Link } from "react-router-dom";

export const SignUp = ()=>{
    const [formValues, handleInputChanges] =useForm({
        nombre: "",
        apellido: "",
        usuario: "",
        clave: ""
    })

    const {nombre, apellido, usuario, clave} = formValues;

    return (
        <section class = "d-flex justify-content-center">
            <form class="col-md-5">
                <div class="mb-3 d-flex justify-content-center">
                    <h4>Registro de usuario</h4>
                    <div class="mb-2">
                        <input 
                            class="form-control"
                            type="text"
                            name='nombre'
                            autoComplete='off'
                            placeholder='Nombre'
                            value={nombre}
                            onChange={handleInputChanges}
                            required
                        /> 
                    </div>
                    <div class="mb-2">
                        <input 
                            class="form-control"
                            type="text"
                            name='apellido'
                            autoComplete='off'
                            placeholder='Apellido'
                            value={apellido}
                            onChange={handleInputChanges}
                            required
                        /> 
                    </div>
                    <div class="mb-2">
                        <input 
                            class="form-control"
                            type="text"
                            name='usuario'
                            autoComplete='off'
                            placeholder='Usuario'
                            value={usuario}
                            onChange={handleInputChanges}
                            required
                        /> 
                    </div>
                    <div class="mb-2">
                        <input 
                            class="form-control"
                            type="password"
                            name='clave'
                            autoComplete='off'
                            placeholder='Contraseña'
                            value={clave}
                            onChange={handleInputChanges}
                            required
                        /> 
                    </div>
                    <div class="mb-3 d-flex justify-content-center ">
                        <button class="btn btn-primary ">Guardar</button>
                    </div>
                    <div className='mt-6 mb-6 bg-yellow  px-8 py-2 rounded-lg'>
                        <Link to={`/Login`}>
                        Ya tengo una cuenta
                        </Link>
                </div>
                </div>
            </form>
        </section>
        
    );
}

//boton guardar y boton crear usuario