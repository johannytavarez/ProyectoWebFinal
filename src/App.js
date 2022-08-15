import React from 'react';


function App() {
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
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              ¿Qué estas pensando?
        </button>
      </div>
        

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Nombre de usuario</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea cols={60} multiLine rows={10} placeholder="¿Qué estas pensando?"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Publicar</button>
            </div>
          </div>
        </div>
      </div> 

        {/* Mensajes */}
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
