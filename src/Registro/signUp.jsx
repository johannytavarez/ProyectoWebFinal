import { React, useState, useEffect } from "react";
import { useForm } from '../hooks/useForm';
import { Link } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const SignUp = ()=>{
    const [formValues, handleInputChanges] =useForm({
        nombre: "",
        apellido: "",
        usuario: "",
        clave: ""
    })

    const [registerEmail, setRegisterEmail] =useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});
    const navegacion = useNavigate()
 

    const register = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(
              auth,
              registerEmail,
              registerPassword
            );

            console.log(user);
            navegacion('/Login')
        } catch (error) {
            console.log(error.message);
        }
    };

    const {nombre, apellido, usuario, clave} = formValues;

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    },[user]);

    return (
        <section class = "text-center">
            <div class="card mx-4 mx-md-5 shadow-5-strong mt-1 bg-info bg-opacity-50">
                <div class="card-body py-5 px-md-5">

                    <div class="row d-flex justify-content-center ">
                        <div class="col-lg-8">
                            <h2 class="fw-bold mb-5">Registrate ahora</h2>
                            <form onSubmit={(e)=>{register(e)}}>

                                    <div class="row">
                                        <div class="form-outline mb-4">
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
                                        <div class="form-outline mb-4">
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
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input 
                                            class="form-control"
                                            type="text"
                                            name='usuario'
                                            autoComplete='off'
                                            placeholder='Usuario'
                                            value={registerEmail}
                                            onChange={(event) => {
                                                setRegisterEmail(event.target.value);
                                              }}
                                            //required
                                        /> 
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            class="form-control"
                                            type="password"
                                            name='clave'
                                            autoComplete='off'
                                            placeholder='Contraseña'
                                            value={registerPassword}
                                            onChange={(event) => {
                                                setRegisterPassword(event.target.value);
                                              }}
                                            //required
                                        /> 
                                    </div>
                                    <div class="mb-3 d-flex justify-content-center ">
                                        <button class="btn btn-primary btn-block mb-4">Guardar</button>
                                    </div>
                                    <div className='mt-6 mb-6 bg-yellow  px-8 py-2 rounded-lg'>
                                        <Link to={`/Login`}>
                                        Ya tengo una cuenta
                                        </Link>
                                </div>
                                
                            </form>
                        </div>
                     </div>
                </div>
            </div>
        </section>
        
    );
}