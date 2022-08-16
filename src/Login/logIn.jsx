import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const navegacion = useNavigate();

  const login_ = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      window.localStorage.setItem("email", loginEmail);
      navegacion("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  return (
    <section className="vh-100 bg-info bg-opacity-75">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-sm-6 text-black">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid rounded-2"
                  />
                </div>

                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form
                      className="flex flex-col items-center mt-20 w-1/4 bg-white shadow-md rounded-md"
                      onSubmit={(e) => {
                        login_(e);
                      }}
                    >
                      <div>
                        <h2 className="mb-5">Acceder</h2>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder="Usuario"
                          autoComplete="off"
                          name="NombreUsuario"
                          required
                          className="form-control"
                          onChange={(event) => {
                            setLoginEmail(event.target.value);
                          }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          placeholder="Contraseña"
                          autoComplete="off"
                          name="contraseña"
                          required
                          className="form-control"
                          onChange={(event) => {
                            setLoginPassword(event.target.value);
                          }}
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Entrar
                        </button>
                      </div>

                      <div className="mt-2 mb-6">
                        <p>
                          ¿No tienes una cuenta aún?
                          <Link
                            to={`/Registro`}
                            className="text-blue-top-buttom"
                          >
                            Crear
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};