import './style.css'


function Tshirt(props) {

    const handleClick = (event) => {
        console.log('Clicked -> ', event.target.id)
    }

    return (
        <div className="product">
            <div key={`${props.product.productId}-1`} className={`title`}>{props.product.title}</div>
            <div key={`${props.product.productId}-2`} className={`description`}>{props.product.description}</div>
            <img width="200" src={props.product.avatar} alt="" />
            <div key={`${props.product.productId}-3`} className={`cost`}>{`Price: ${props.product.cost}.00 CHF`}</div>
            <div className="productCartLogo"><i id={props.product.productId} className="fa-solid fa-cart-shopping" onClick={(event) => handleClick(event)}></i></div>
        </div>
    )
}

export default Tshirt;