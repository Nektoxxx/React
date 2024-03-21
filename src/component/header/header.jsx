import profile_icon from '../../assets/img/profile/profile_icon.png'
import {Link} from 'react-router-dom'
export default function header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="logo">
                        <Link to="/"><span>Донат</span>.Оф</Link>
                    </div>
                    <nav className="links">
                        <Link className="link" to="/">
                            Главная
                        </Link>
                        <Link className="link" to="/create">
                            Добавить
                        </Link>
                        <Link className="link" to="/catalog">
                            Каталог
                        </Link>
                        <Link className="link" to="#">
                            О нас
                        </Link>
                        <Link className="link" to="/reviews">
                            Отзывы
                        </Link>
                        <Link className="link" to="/users">
                            Пользователи
                        </Link>
                        <div className="profile__header">
                            <img className="profile__icon__img" src={profile_icon} alt="#" />
                            <div className="profile__header__content">
                                <p className="profile__header__title">MyLogin</p>
                                <span className="line"></span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}