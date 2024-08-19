import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial}) => {

    const [qty, setQty] = useState(initial);
    
    const handleClick = (op) => {
        console.log(op);

        // op === '-'? clickMenos() : clickMas (); Operador ternario

        if (op === '-') {
            clickMenos();
        } else {
            clickMas();
        }
    }
    // let qty = 1;
    
    const clickMenos = () => {
        if(qty === 1){
            alert('No se puede pedir menos de 1 producto')
            return;
        }
        setQty(qty - 1);
    }

    const clickMas = () => {
        if(qty === stock){
            alert ('No queda más stock')
            return;
        }
        setQty(qty + 1);
    }




    return(
        <div>
            <button onClick={() => handleClick('-')}>-</button>
            <span>{qty}</span>
            <button onClick={() => handleClick('+')}>+</button>
            {/* <h1>Item Count</h1> */}
        </ div>
    )
}

export default ItemCount