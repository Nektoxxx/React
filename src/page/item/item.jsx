import { useParams } from "react-router-dom"
import { pass } from "../../component/date/data";
import Item2 from '../../assets/img/item2.png'

export default function ItemPage() {
    const { id } = useParams();
    const item = pass.find(item => item.id === parseInt(id));
    return (
        <>
            <main className="main__body mrtop">
                <section className="item">
                    <div className="container">
                        <div className="item__body">
                            <h1>{item.name}</h1>
                            <div className="item__header">
                                <div className="item__img_block">
                                    <img src={Item2} alt="#" className="item_img" />
                                </div>
                                <div className="item__header__text">
                                    <div className="item__header_title fonts24">
                                        Донатный набор из игры Arena Breakout на Premium Battle Pass
                                    </div>
                                    <div className="product__item_price item__header_price">
                                        <div className="product__item_price_discount">
                                            <h2 className="fonts24">Цена {item.price}$</h2>
                                        </div>
                                        <div className="product__item_price">
                                            <h2 className="fonts24"><span className="product__item_text">Цена </span></h2>
                                            <div className="product__discont__line_block">
                                                <h2 className="fonts24"><span>14.99$</span></h2>
                                                <div className="product__discont_line line"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Просто 1000 алмазов на ваш личный счет по разумной цене, крайне популярен. Хорошая
                                        возможность добить необходимую сумму на покупку нового агента или для покупки нового
                                        скина для оружия.
                                        Просто на ваш личный счет по разумной цене, крайне популярен. Хорошая возможность добить
                                        необходимую сумму на покупку нового агента или для покупки нового скина для оружия.</p>

                                </div>
                            </div>
                            <div className="order__body">
                                <p className="order_title fonts24">Оформить заказ</p>
                                <form className="order__content">
                                    <div className="order__item">
                                        <div className="order__item_title">
                                            <h3 className="order__item_numb">1</h3>
                                            <h3 className="">Введите ваш ID</h3>
                                        </div>
                                        <div className="modal__item">
                                            <div className="modal__item__text_block">
                                                <div className="modal__text">ID *</div>
                                                <div href="#" className="profile_collaboration_link">Последний ID</div>
                                            </div>
                                            <input type="text" className="modal__input" placeholder="user_277" />
                                        </div>
                                    </div>
                                    <div className="order__item">
                                        <div className="order__item_title">
                                            <h3 className="order__item_numb">2</h3>
                                            <h3 className="">Выберите способ оплаты</h3>
                                        </div>
                                        <div className="order__way">
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div><div className="order__way__item">

                                            </div>
                                            <div className="order__way__item">

                                            </div>

                                        </div>
                                    </div>
                                    <div className="order__item">
                                        <div className="order__item_title">
                                            <h3 className="order__item_numb">3</h3>
                                            <h3 className="">Подтвердите оплату</h3>
                                        </div>
                                        <div className="order__item__button btn">Оплатить</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}