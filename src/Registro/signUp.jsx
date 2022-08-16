import { React, useState} from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import validator from 'validator';


export const SignUp = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [_nombre, set_nombre] = useState("");
  const [_apellido, set_apellido] = useState("");
  const [errors, seterrors] = useState({})

  const navegacion = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    const errores = ValidacionFormulario()
        
    // Comprobar si el objeto errores está vacio. Si está vacio al momento de validar el formulario quiere decir que no hay errores.
    if (Object.entries(errores).length > 0) {
        seterrors({...errores})
    }
    else{
      seterrors({})
      try {
        const user = await auth.createUserWithEmailAndPassword(
          registerEmail,
          registerPassword
        );
        console.log(user);
        navegacion("/Login");
      } catch (error) {
        console.log(error.message);
      }

      try {
        const registro = {
          usuario: registerEmail,
          nombre: _nombre,
          apellido: _apellido,
        };

        await addDoc(collection(db, "user"), registro);
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  const ValidacionFormulario = () =>{
      let error = {};
      if(_nombre === ""){
          error._nombre ="El nombre es requerido"
      }
      if(_apellido === ""){
          error._apellido ="El apellido es requerido"
      }

      if(validator.isEmail(registerEmail) === false){
          error.registerEmail = "Correo invalido"
      }

      if(registerPassword === ""){
        error.registerPassword = "Ingrese una contraseña valida"
      }
      return error;
    }

  return (
    <section class="text-center">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-1 bg-info bg-opacity-50">
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center ">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">Registrate ahora</h2>
              <form
                onSubmit={(e) => {
                  register(e);
                }}
              >
                <div class="row">
                  <div class="form-outline mb-4">
                    <input
                      class="form-control"
                      type="text"
                      name="nombre"
                      autoComplete="off"
                      placeholder="Nombre"
                      value={_nombre}
                      onChange={(event) => {
                        set_nombre(event.target.value);
                      }}
                      //required
                    />
                    {errors._nombre && <p className="text-danger">{errors._nombre}</p>}
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      class="form-control"
                      type="text"
                      name="apellido"
                      autoComplete="off"
                      placeholder="Apellido"
                      value={_apellido}
                      onChange={(event) => {
                        set_apellido(event.target.value);
                      }}
                      //required
                    />
                    {errors._apellido && <p className="text-danger">{errors._apellido}</p>}
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input
                    class="form-control"
                    type="email"
                    name="usuario"
                    autoComplete="off"
                    placeholder="Usuario"
                    value={registerEmail}
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    //required
                  />
                  {errors.registerEmail && <p className="text-danger">{errors.registerEmail}</p>}
                </div>
                <div class="form-outline mb-4">
                  <input
                    class="form-control"
                    type="password"
                    name="clave"
                    autoComplete="off"
                    placeholder="Contraseña"
                    value={registerPassword}
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    //required
                  />
                  {errors.registerPassword && <p className="text-danger">{errors.registerPassword}</p>}
                </div>
                <div class="mb-3 d-flex justify-content-center ">
                  <button class="btn btn-primary btn-block mb-4">
                    Guardar
                  </button>
                </div>
                <div className="mt-6 mb-6 bg-yellow  px-8 py-2 rounded-lg">
                  <Link to={`/Login`}>Ya tengo una cuenta</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};