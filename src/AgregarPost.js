import App from "./App";
import {useState, useEffect} from 'react';
import {app} from "./firebase-config";
import Post from "./Post";

export const agregarPost = () =>{
    const [posts, setPost] = useState([]);

    const agregarNuevoPost = (post)=>{
      const tempPost = posts.slice();
      tempPost.push(post);
      setContactos(tempPost);
    }



    useEffect(()=>{
        const listado = [];

        app.collection('posts')
        .get()
        .then( resultado => {
        resultado.forEach( post=>{
            listado.push(post.data());
        })
        setPost(listado);
        }).catch( error=>console.log(error));
    }, []);

    return (
        <div className="App">
          <header className="App-header">
            <App agregarNuevoPost={agregarNuevoPost} />
            {
              posts && posts.slice().reverse().map((post, i)=>{
                  const {usuario, mensaje} = post;
                  return (<Post key={i} usuario={usuario} mensaje={mensaje}/>) 
              })
            }
            
    
          </header>
        </div>
      );
}
    