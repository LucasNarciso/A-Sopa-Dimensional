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

                    <TextoGeral> Seja Bem Vindo(a) à Sopa Dimensional!. <br/> <br/> Uma ideia maluca tentando sair da mente de um jovem meio doido. Já Já teremos o primeiro episódio disponível, assim que eu terminar ele '-'. </TextoGeral>

                    <DivDivisoria>
                        
                        <LinhaDivisoria> 
                             
                            <h3> Último Episódio </h3>
                             
                            <h4> 19/07/2022 </h4>
                        </LinhaDivisoria>
                        
                    </DivDivisoria>

                    <TextoGeral> O primeiro episódio ainda está sendo escrito, portanto não temos Último Episodio.</TextoGeral>

                    <DivDivisoria>
                        
                        <LinhaDivisoria> 
                             
                            <h3> Sobre </h3>
                             
                            <h4> 19/07/2022 </h4>
                        </LinhaDivisoria>
                        
                    </DivDivisoria>

                    <TextoGeral>Em resumo, nesse site encontrará todos os episódios Oficiais que essa série possui. Ao decorrer do tempo serão lançados mais episódios, fique ligado pra não perder. Para saber mais, vá para <AtalhoSobre onClick={() => {irParaPaginaSobre(navigate)}}>sobre</AtalhoSobre>. </TextoGeral>

                </Janela>
                
                <TextoRodape>Todos os Direitos Reservados ©</TextoRodape>

            </DivPrincipal>
        </>
    )
}

export default Principal;