function CardStructure({title,img,alt,description,link}){
    return(
        <div className="card me-3" style={{width: '18rem'}}>
            <div className="ratio ratio-4x3">
                <img src={img} className="card-img-top" alt={alt} style={{objectFit:'cover'}}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="d-flex justify-content-center mt-auto">
                <a href={link} className="btn btn-primary mb-2">More info</a>
            </div>
        </div>
    )
}

export default CardStructure