import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

const Categories = () => {
    return(
    <div className="container-fluid d-flex align-items-center justify-content-around vh-100 wh-100 p-0 m-0 no-overflow">
        <div class="container-fluid align-items-center row col-sm vh-100 p-0 contenedor">
            <div class="col-12  col-md-4 d-flex align-items-center justify-content-center text-center store-hair m-0 p-0">
                <Link to="/Store/cabello"><div>Cabello</div></Link>
            </div>
            <div class="col-12  col-md-4 d-flex align-items-center justify-content-center text-center store-body m-0 p-0">
            <Link to="/Store/cuerpo"><div>Cuerpo</div></Link>
            </div>
            <div class="col-12  col-md-4 d-flex align-items-center justify-content-center text-center store-face m-0 p-0">
            <Link to="/Store/cara"><div>Cara</div></Link>
            </div>
        </div>
    </div>
    )
}

export default Categories;