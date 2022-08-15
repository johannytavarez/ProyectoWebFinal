import React, {useRef}from 'react';
import {db} from './firebase-config';
// import { auth } from "../firebase-config";
// import{ signOut } from "firebase/auth"; 
// import {l} from "./Login/logIn"



function App() {

  // const logout = async () => {
  //   await signOut(auth);
  // };

  const usuarioRef = useRef(null);
  const mensajeRef = useRef(null);

  const enviar = ()=>{
      const post = {
          usuario: usuarioRef.current.value,
          mensaje: mensajeRef.current.value,
      
      }

     db.firestore().collection('posts')
      .add(post);

      usuarioRef.current.value = "";
      mensajeRef.current.value = "";
  }

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-info bg-opacity-50">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Muro Interactivo</a>

          <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto mb-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/Registro">Sign up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/Login">Log In</a> 
            </li>
          </ul>
        </div>
        </div>
      </nav>




        {/* Modal */}
      <div class="d-flex justify-content-end my-5 me-3 d-grid gap-2">
        {/* <h4> User Logged In: </h4>
        {user?.email}
        <button onClick={logout}> Sign Out </button> */}
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          ¿Qué estas pensando?
        </button>
      </div>
        

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel" ref={usuarioRef}>Nombre de usuario</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea cols={60} rows={10} placeholder="¿Qué estas pensando?" ref={mensajeRef}></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" onClick={enviar}>Publicar</button>
            </div>
          </div>
        </div>
      </div> 

        

    </div>
  );
}

export default App;
