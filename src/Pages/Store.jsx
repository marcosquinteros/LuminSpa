import { Navbar } from "react-bootstrap"

const Store = () => {
    return(
    <div className="container-fluid d-flex align-items-center justify-content-around vh-100 wh-100 p-0 m-0">
        <div class="container-fluid align-items-center row col-sm vh-100 p-0">
            <div class="col-12 row-4 row-md-12 col-md-4 d-flex align-items-center justify-content-center text-center m-0 p-0 vh-100 store-hair">
                Hair
            </div>
            <div class="col-12 row-4 row-md-12 col-md-4 d-flex align-items-center justify-content-center text-center store-body m-0 p-0 vh-100">
                Body
            </div>
            <div class="col-12 row-4 row-md-12 col-md-4 d-flex align-items-center justify-content-center text-center store-face m-0 p-0 vh-100">
                <img src="" alt="" />
                Face
            </div>
        </div>
    </div>
    )
}

export default Store;