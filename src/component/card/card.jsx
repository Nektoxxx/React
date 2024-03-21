import { Link } from 'react-router-dom';
import Item2 from '../../assets/img/item2.png'
export default function Card({name,price,id}) {
    return (
        <>
            <Link to={`${id}`} className="product__item">
                <div className="catalog__img">
                    <img src={Item2} alt="#" />
                </div>
                <div className="product__item_content">
                    <p className="product__item_title">{name}</p>
                    <div className="product__item_price">
                        <div className="product__item_price"><p><span className="product__item_text">Цена </span> 12</p>
                            <div className="product__discont_line line"></div>
                        </div>
                    </div>

                    <div className="product__item_price_discount">
                        <p>{price}$</p>
                    </div>
                </div>
            </Link>
        </>
    );
}