import "./CartWidget.css";
import carrito from "../../img/cart.png";

const CartWidget = () => {
    return (
            <div>
                <img src={carrito} className='carro' alt='carro de compras'/>
            </div>
            )
};

export default CartWidget