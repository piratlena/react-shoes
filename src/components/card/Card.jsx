import  './card.module.scss';
import Bookmark from '../../assets/img/bookmark.svg'

const Card = (props) => {

 return (
    <div className="card">
        <div className="card__bookmark">
            <img src={Bookmark} alt="bookmark" colorFill/>
        </div>
        <img width={133} height={112} src={props.imageUrl}alt="Sneakers" />
        <h5>{props.descr}</h5>
        <div className="card__bottom">
                <div className="card__price">
                <span>{props.textPrice}</span>
                <b>{props.price}</b>
                </div>
                <div className="card__plus"></div>
        </div>
</div>
    )

}
export default Card;