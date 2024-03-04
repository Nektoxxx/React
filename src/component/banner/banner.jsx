import profile_icon from '../../assets/img/profile/profile_icon.png'
export default function banner() {
    return (
        <div className="banner__img_block">
            <div className="banner">
                <div className="container">
                    <div className="banner__body">
                        <h2 className="banner__title">Самый надёжный сайт для покупки доната в игре<br/>
                            <span className="banner__span"> Arena Breakout</span>
                        </h2>
                        <p className="banner__text">
                            Здесь вы можете купить всё, что вам нужно.<br/>
                            Мы работаем только с официальным магазином. <br/>
                            Кроме того, для своих клиентов, <br/>
                            мы предлагаем самые низкие цены, <br/>
                            быструю доставку и доступные способы оплаты.
                        </p>
                        <div className="banner__buttons buttons">
                            <a href="catalog.html" className="buttons__btn btn">Каталог</a>
                            <a href="#openModal_Registr" className="buttons__btn btn buttons__btn_right">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}