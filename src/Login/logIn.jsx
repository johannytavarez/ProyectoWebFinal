import React from "react";
import { Link } from "react-router-dom";


export const LogIn = ()=>{
    return (
        
        < section class="vh-100 bg-info bg-opacity-75">
            <div class="container py-5 h-100 ">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-sm-6 text-black">
                        <div class="card">
                            <div class="row g-0">

                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" class="img-fluid rounded-2" />
                                </div>

                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                    {/* <div class="d-flex justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 "> */}
                                        <form class="flex flex-col items-center mt-20 w-1/4 bg-white shadow-md rounded-md">

                                            <div>
                                                <h2 class="mb-5">Acceder</h2>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    placeholder="Usuario"
                                                    autoComplete="off"
                                                    name="NombreUsuario"
                                                    required
                                                    class="form-control"
                                                />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    placeholder="Contraseña"
                                                    autoComplete="off"
                                                    name="contraseña"
                                                    required
                                                    class="form-control"
                                                />
                                            </div>

                                            <div>
                                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                                    Entrar
                                                </button>
                                            </div>

                                            <div class='mt-2 mb-6'>
                                                <p>¿No tienes una cuenta aún?  
                                                    <Link to={`/Registro`} class='text-blue-top-buttom'>
                                                        Crear
                                                    </Link>
                                                </p>
                                            </div>


                                        </form> 
                                    {/* </div> */}
                                    </div>
                                </div>       
                            </div>
                        </div>
                    </div>
              </div>
                
 
                
            </div>
        

        </section>
    );
}