import style from './BoxDefault.module.css'

function Econs({ title, tech, desc, print }) {
    return (
        <div className={style.projeto}>
            <div className={`${style.projeto__content} ${style.container}`}>
                <div className={style.projeto__box}>
                    <div>
                        <img src={print} className={style.projeto__img_box} />
                    </div>
                    <div className={style.projeto__description}>
                        <h3 className={style.projeto__description__title}>{title}</h3>
                        <p className={style.projeto__description__text}>{desc}</p>
                        <p>{tech}</p>
                        <div className={style.projeto__description__btn_box}>

                            <a href='https://github.com/israelsouza/ECONSciente' target='_blank' className={style.projeto__description__link}>
                                <btn className={style.projeto__description__btn}>
                                    Repositório
                                </btn>
                            </a>


                            <a href='https://israelsouza.github.io/ECONSciente/' target='_blank' className={style.projeto__description__link}>
                                <btn className={style.projeto__description__btn}>
                                    Site
                                </btn>
                            </a>

                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Econs;