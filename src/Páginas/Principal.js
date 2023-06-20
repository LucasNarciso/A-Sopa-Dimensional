//REACT
import React from "react";

//Styled Components
import { GlobalStyle, DivPrincipal, ImagemFundo, TituloPrincipal, Janela, LinhaDivisoria, DivDivisoria, TextoGeral, TextoRodape, AtalhoSobre} from "../Styles/Principal_Style"

//Components
import BotaoNavBar from "../Componentes/BotaoNavBar/BotaoNavBar.js";

//Rotas
import { useNavigate } from "react-router-dom";
import { irParaPaginaEpisodios, irParaPaginaSobre } from "../Routes/Coordinator";

//Assets
import Fundo from "../Assets/SVG/Fundo.svg"

function Principal () {

    const navigate = useNavigate();

    return(
        <>
            <DivPrincipal>
                <GlobalStyle/>
                <ImagemFundo src={Fundo}/>
                <TituloPrincipal>A Sopa Dimensional</TituloPrincipal>
                <div>
                    <BotaoNavBar selected={true} texto={"Home"}/>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaEpisodios(navigate)}} texto={"Episódios"}/>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaSobre(navigate)}} texto={"Sobre"}/>
                </div>
                
                <Janela>

                    <DivDivisoria>
                        
                        <LinhaDivisoria> 
                             
                            <h3> Novidades </h3>
                             
                            <h4> 19/07/2022 </h4>
                        </LinhaDivisoria>

                    </DivDivisoria>

                    <TextoGeral> Seja Bem Vindo(a) à Sopa Dimensional!. <br/> <br/> Uma ideia maluca tentando sair da mente de um jovem perdido. O primeiro episódio ainda não está disponível... </TextoGeral>

                    <DivDivisoria>
                        
                        <LinhaDivisoria> 
                             
                            <h3> Último Episódio </h3>
                             
                            <h4> 19/07/2022 </h4>
                        </LinhaDivisoria>
                        
                    </DivDivisoria>

                    <TextoGeral> ...</TextoGeral>

                    <DivDivisoria>
                        
                        <LinhaDivisoria> 
                             
                            <h3> Sobre </h3>
                             
                            <h4> 19/07/2022 </h4>
                        </LinhaDivisoria>
                        
                    </DivDivisoria>

                    <TextoGeral>Em resumo, nesse site encontrará todos os episódios Oficiais da série. Ao decorrer do tempo serão lançados mais episódios, fique ligado pra não perder.<AtalhoSobre onClick={() => {irParaPaginaSobre(navigate)}}>Saiba mais</AtalhoSobre>. </TextoGeral>

                </Janela>
                
                <TextoRodape>Todos os Direitos Reservados ©</TextoRodape>

            </DivPrincipal>
        </>
    )
}

export default Principal;