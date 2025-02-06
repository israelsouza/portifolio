import style from './Projeto.module.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa";
import BoxDefault from './projects/BoxDefault'
import images from '../imgs/ImagesPath';

function Projeto() {
    return (
        <div className={style.projeto__container}>
            <div className={style.projeto__content}>
                <BoxDefault
                    print={images.econs}
                    title={"ECONS"}
                    desc={"Site informativo realizado em equipe como projeto acadêmico do primeiro semestre"}
                    tech={
                        [
                            <FaHtml5 />,
                            <FaCss3Alt />,
                            <FaJsSquare />,
                            <FaBootstrap />
                        ]
                    }

                />

                




            </div>


        </div>
    )
}

export default Projeto;