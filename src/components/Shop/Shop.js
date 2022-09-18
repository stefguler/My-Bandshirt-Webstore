import { useDispatch, useSelector } from "react-redux";
import './style.css';
import Tshirt from "../Tshirt/Tshirt";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Shop() {

    // const getCosts = () => {
    //     return Math.floor(Math.random()*100);
    // }

    //const [products, setProducts] = useState([])

    const products = useSelector((state) => state.shop.s_products);
    const authState = useSelector(state => state.token.token)
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === undefined) {
            navigate('/')
        }
    }, [authState]);


    return (
        <>
            <Header></Header>
            <div className="store-container">
                {products.map((product, idx) => {
                    return <Tshirt key={idx} product={product} />
                })}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Shop;