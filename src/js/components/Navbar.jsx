import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-3 ms-5" href="#">Leon silva <FontAwesomeIcon icon={faReact} size='1x' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-5">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar