

function Post({usuario, mensaje}){

    return(
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{usuario}</h5>
                        <p className="card-text">{mensaje}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
     