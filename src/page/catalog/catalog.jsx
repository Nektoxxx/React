import { useState } from 'react'
import Item1 from '../../assets/img/item1.png'
import Card from '../../component/card/card'
import { pass } from '../../component/date/data'
import Modal from '../../component/modal/modal';
export default function Catalog() {

    const [query, setQuery] = useState("");
    function search(e) {
        setQuery(e.target.value)
    }
    const norm = pass.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <main className="main__body mrtop">

                <section className="catalog__items">
                    <div className="container">
                        <div className="catalog__items_body">
                            <h2>Боевые пропуски</h2>
                            <input className='modal__input' type="text" onChange={search} />
                            <div className="catalog__items_content">
                                {norm.length ?
                                    norm.map((card, id) => {

                                        return (
                                            <Card key={id} {...card} />
                                        )
                                    }) :
                                    <p>не получи лося</p>

                                }

                            </div>
                        </div>
                    </div>
                </section>
                <section className="catalog__items currency">
                    <div className="container">
                        <div className="catalog__items_body currency">
                            <h2>Облигации </h2>
                            <div className="catalog__items_content currency">
                                <div className="product__item currency">
                                    <div className="catalog__img">
                                        <img className="catalog__img" src={Item1} alt="#" />
                                    </div>
                                    <div className="product__item_content">
                                        <p className="product__item_title"> 60 <span>+6</span></p>
                                        <p><span className="product__item_text">Цена 14.99$</span></p>
                                    </div>
                                </div>
                                <div className="product__item currency">
                                    <div className="catalog__img">
                                        <img className="catalog__img" src={Item1} alt="#" />
                                    </div>
                                    <div className="product__item_content">
                                        <p className="product__item_title"> 60 <span>+6</span></p>
                                        <p><span className="product__item_text">Цена 14.99$</span></p>
                                    </div>
                                </div>
                                <div className="product__item currency">
                                    <div className="catalog__img">
                                        <img className="catalog__img" src={Item1} alt="#" />
                                    </div>
                                    <div className="product__item_content">
                                        <p className="product__item_title"> 60 <span>+6</span></p>
                                        <p><span className="product__item_text">Цена 14.99$</span></p>
                                    </div>
                                </div>
                                <div className="product__item currency">
                                    <div className="catalog__img">
                                        <img className="catalog__img" src={Item1} alt="#" />
                                    </div>
                                    <div className="product__item_content">
                                        <p className="product__item_title"> 60 <span>+6</span></p>
                                        <p><span className="product__item_text">Цена 14.99$</span></p>
                                    </div>
                                </div>
                                <div className="product__item currency">
                                    <div className="catalog__img">
                                        <img className="catalog__img" src={Item1} alt="#" />
                                    </div>
                                    <div className="product__item_content">
                                        <p className="product__item_title"> 60 <span>+6</span></p>
                                        <p><span className="product__item_text">Цена 14.99$</span></p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}