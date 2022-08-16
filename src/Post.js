

function Post({usuario, mensaje}){

    return(
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-info">{usuario}</h5>
                        <p className="card-text">{mensaje}</p>
                    </div>
                </div>
            </div>
    );
}

export default Post;
     