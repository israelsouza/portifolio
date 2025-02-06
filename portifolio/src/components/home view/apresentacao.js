import style from './Apresentacao.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Apresentacao() {
    return (
        <div className={style.apresentacao}>
            <div className={`${style.apresentacao__content}`}>
                <div className={style.apresentacao__text}>
                    <p>Olá, visitante!!</p>
                    <h1>Desenvolvedor Front-End</h1>
                    <p>Estudante da Fatec Zona Leste</p>
                </div>
                <div className={style.apresentacao__icon}>
                    <a href="https://github.com/israelsouza" target="_blank" rel="noreferrer noopener" className={style.apresentacao__iconLink}>
                        <FaGithubSquare />
                    </a>
                    <a href="https://br.linkedin.com/in/israel-de-souza-lima-7a2a6320a" target="_blank" rel="noreferrer noopener" className={style.apresentacao__iconLink}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Apresentacao;