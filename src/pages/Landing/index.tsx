
import logoImg from '../../assets/imagens/logo.svg'
import landingImg from '../../assets/imagens/landing.svg'
import studyIcon from '../../assets/imagens/icons/study.svg'
import giveClassesIcon from '../../assets/imagens/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/imagens/icons/purple-heart.svg'

import './styles.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image" 
                />
                <div className="buttons-container">
                    <a href="/study" className="study">
                        <img src={studyIcon} alt="Estudar"
                        className="hero_image"/>
                        Estudar
                    </a>

                    <a href="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar" />
                        Dar aulas
                    </a>
                </div>

                    <span className="total-connections">
                        total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                    </span>

            </div>

        </div>
    )
}

export default Landing;