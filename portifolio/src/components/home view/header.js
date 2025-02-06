import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className={style.header}>
            <div className={`${style.header__content}`}>
                <h2 className={style.header__title}>
                    &lt; IsRael / &gt;
                </h2>

                <nav>
                    <ul className={style.header__list}>
                        <li className={style.header__listItem}>

                            <NavLink to="/" end className={style.header__link}>

                                Inicio

                            </NavLink>

                        </li>
                        <li className={style.header__listItem}>

                            <NavLink to="/sobre" end className={style.header__link}>

                                Sobre

                            </NavLink>

                        </li>
                        <li className={style.header__listItem}>

                            <NavLink to="/projetos" end className={style.header__link}>

                                Projetos

                            </NavLink>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;