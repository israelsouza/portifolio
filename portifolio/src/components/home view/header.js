import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header }>
            <div className={`${style.header__content}`}>
                <h2 className={style.header__title}>
                    &lt; IsRael / &gt;
                </h2>

                <nav className={style.header__menu}>
                    <ul className={style.header__list}>
                        <li className={style.header__listItem}>
                            <a href="" target="_self" className={style.header__link}>
                                Inicio
                            </a>
                        </li>
                        <li className={style.header__listItem}>
                            <a href="" target="_self" className={style.header__link}>
                                Sobre
                            </a>
                        </li>
                        <li className={style.header__listItem}>
                            <a href="" target="_self" className={style.header__link}>
                                Projetos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;