//REACT
import React from "react";

//Styled Components
import { GlobalStyle, DivPrincipal, ImagemFundo, TituloPrincipal, Janela, TextoRodape} from "../Styles/Sobre_Style"

//Components
import BotaoNavBar from "../Componentes/BotaoNavBar/BotaoNavBar.js";

//Rotas
import { useNavigate } from "react-router-dom";
import { irParaPaginaEpisodios, irParaPaginaPrincipal } from "../Routes/Coordinator";

//Assets
import Fundo from "../Assets/SVG/Fundo.svg"

function Sobre () {

    const navigate = useNavigate();

    return(
        <>
            <DivPrincipal>
                <GlobalStyle/>
                <ImagemFundo src={Fundo}/>
                <TituloPrincipal>A Sopa Dimensional</TituloPrincipal>
                <div>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaPrincipal(navigate)}} texto={"Home"}/>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaEpisodios(navigate)}} texto={"Episódios"}/>
                    <BotaoNavBar selected={true} texto={"Sobre"}/>
                </div>

                <Janela>

                    adasdas
                
                </Janela>
                
                <TextoRodape>Todos os Direitos Reservados ©</TextoRodape>
                
            </DivPrincipal>
        </>
    )
}

export default Sobre;