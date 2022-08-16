import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { db, auth  } from "./firebase-config";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut} from "firebase/auth";
import Post from "./Post";
import { useNavigate } from "react-router-dom";



function App() {

  const usuarioRef = useRef(null);
  const mensajeRef = useRef(null);
  const [posts, setposts] = useState([]);
  const navegacion = useNavigate();

  const _usuario = window.localStorage.getItem("email");

  const enviar = async () => {
    
    try {
      const posts = {
        usuario: _usuario,
        mensaje: mensajeRef.current.value,
      };

      await addDoc(collection(db, "posts"), posts);
    } catch (error) {
      console.log(error);
    }

    usuarioRef.current.value = "";
    mensajeRef.current.value = "";
  };

  const logout = async () => {
    await signOut(auth);
    window.localStorage.clear();
  };

  const Se_inicio_seccion = async () => {
    if (window.localStorage.length === 0) {
      console.log("inicie seccion");
      navegacion("/Login");
      //$('#myModal').modal('hide');
    }
  };

  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      setposts(
        querySnapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-info bg-opacity-50">
        <div class="container-fluid d-flex">
          <a class="navbar-brand p-2 w-100" href="#">
            Muro Interactivo
          </a>

          <div class="collapse navbar-collapse p-2 flex-shrink-1" id="navbarScroll">
            <ul class="navbar-nav me-auto mb-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link mx-2" aria-current="page" onClick={logout} href="/Registro">
                  Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" aria-current="page" onClick={logout} href="/Login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal   */}
      <div class="d-flex justify-content-end my-5 me-3 d-grid gap-2">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={Se_inicio_seccion}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          ¿Qué estas pensando?
        </button>
      </div>


      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                {_usuario}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                cols={60}
                rows={5}
                placeholder="¿Qué estas pensando?"
                ref={mensajeRef}
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary" onClick={enviar} data-bs-dismiss="modal">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mx-2">
          {posts.map((post) => (
            <Post usuario={post.data.usuario} mensaje={post.data.mensaje} />
          ))}
      </div>
    </div>
  );
}

export default App;
