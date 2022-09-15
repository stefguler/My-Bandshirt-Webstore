import { useState } from "react";
import './style.css';
import Tshirt from "../Tshirt/Tshirt";

function Store() {

   const [products, setProducts] = useState([
        {
            productId: 1,
            title: 'T-Shirt 1',
            description: 'I am a nice T-Shirt',
            avatar: 't_shirt_1.png',
            cost: 50,
        },
        {
            productId: 2,
            title: 'T-Shirt 2',
            description: 'I am a nice T-Shirt YO',
            avatar: 't_shirt_2.png',
            cost: 75,
        },
        {
            productId: 3, 
            title: 'T-Shirt 3',
            description: 'I am a nice T-Shirt Foo',
            avatar: 't_shirt_3.png',
            cost: 55,
        },
        {
            productId: 4,
            title: 'T-Shirt 4',
            description: 'I am a nice T-Shirt',
            avatar: 't_shirt_4.png',
            cost: 100,
        },
        {
            productId: 5,
            title: 'T-Shirt 5',
            description: 'I am a nice T-Shirt YO',
            avatar: 't_shirt_5.png',
            cost: 80,
        },
        {
            productId: 6, 
            title: 'T-Shirt 6',
            description: 'I am a nice T-Shirt Foo',
            avatar: 't_shirt_6.png',
            cost: 90,
        },
        {
            productId: 7,
            title: 'T-Shirt 7',
            description: 'I am a nice T-Shirt',
            avatar: 't_shirt_7.png',
            cost: 45,
        },
        {
            productId: 8,
            title: 'T-Shirt 8',
            description: 'I am a nice T-Shirt YO',
            avatar: 't_shirt_8.png',
            cost: 55,
        },
        {
            productId: 9, 
            title: 'T-Shirt 9',
            description: 'I am a nice T-Shirt Foo',
            avatar: 't_shirt_9.png',
            cost: 70,
        }
    ])

    console.log(products)

    return (
        <>
        <div className="store-container">
            {products.map((product, idx) => {
            return <Tshirt key={idx} product={product}/>
        })}
        </div>         
        </>
    )
}

export default Store;