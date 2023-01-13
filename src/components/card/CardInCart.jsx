import './cardInCart.module.scss'
import Counter from '../counter/Counter'


const CardInCart = (props) => {

    return (
        
        <div className="cartItem">
                <img src={props.image} className="cartItem__img"></img>

                <div className="cartItem__block">
                    <div className="cartItem__block-descr">
                        <p className="cartItem__block-title">{props.description}</p>
                        <span className='cartItem__block-price'>{props.price}</span>
                    </div>

                    <div className="cartItem__block-amount">
                      <Counter/>
                    </div>

                    <img className="cartItem__block-remove" src="img/remove-btn.svg" alt="remove" />
                
                </div>
                
        </div>
    )
}

export default CardInCart