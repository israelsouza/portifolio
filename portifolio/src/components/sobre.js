import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaBootstrap, FaGitAlt   } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import style from './Sobre.module.css'


function Sobre() {
    return (
        <div className={style.sobre}>
            <div className={`${style.sobre__content} ${style.container}`}>
                <div className={style.sobre__info}>
                    <h2 className={style.sobre__title}>Sobre</h2>

                    <p className={style.sobre__info__content}>
                        Olá, me chamo Israel e sou um desenvolvedor front-end.
                    </p>

                    <p className={style.sobre__info__content}>
                        Nesta página, você encontrará alguns dos meus projetos, incluindo desafios, ideias próprias e a recriação de sites como forma de aprimorar minhas habilidades.
                    </p>

                    <p className={style.sobre__info__content}>
                        Atualmente, estou aprofundando meus conhecimentos para atuar no desenvolvimento completo de aplicativos, por meio da minha graduação na FATEC e de estudos independentes.
                    </p>


                </div>
                <div className={style.sobre__tech}>
                    <h2 className={style.sobre__title}>Tecnologias</h2>

                    <h3>Front-end</h3>
                    <span className={style.sobre__tech__description}>Tecnologias focadas na construção da interface e na experiência do usuário.</span>
                    <div className={style.sobre__tech__itens}>
                        <FaHtml5 className={style.sobre__tech__tags}/>
                        <FaCss3Alt className={style.sobre__tech__tags}/>
                        <FaJsSquare className={style.sobre__tech__tags}/>
                        <FaReact className={style.sobre__tech__tags}/>
                        <FaBootstrap className={style.sobre__tech__tags}/>
                    </div>

                    <h3>Back-end</h3>
                    <span className={style.sobre__tech__description}>Tecnologias responsáveis pela lógica de negócios, APIs e comunicação com o banco de dados.
                    </span>
                    <div className={style.sobre__tech__itens}>
                        <FaJava className={style.sobre__tech__tags} />
                        <BsFiletypeSql className={style.sobre__tech__tags} />
                        <FaGitAlt className={style.sobre__tech__tags} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;