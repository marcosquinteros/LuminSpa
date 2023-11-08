import Products from "../Components/Store/Products";
import StoreCat from "../Components/Store/StoreCat";
import { useParams } from 'react-router-dom';


const Store = () =>{
    const { categoria } = useParams();
    return(
        <>
            <StoreCat categoria={categoria} productos={Products}/>
        </>
    )
}

export default Store;