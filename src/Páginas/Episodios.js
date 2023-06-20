//REACT
import React, {useState, useEffect} from "react";

//Styled Components
import { GlobalStyle, DivPrincipal, ImagemFundo, TituloPrincipal, Janela, TextoRodape} from "../Styles/Episodios_Style"

//Components
import BotaoNavBar from "../Componentes/BotaoNavBar/BotaoNavBar.js";
import Episodio from "../Componentes/Episodio/Episodio";

//Rotas
import { useNavigate } from "react-router-dom";
import { irParaPaginaPrincipal, irParaPaginaSobre } from "../Routes/Coordinator";

//Assets
import Fundo from "../Assets/SVG/Fundo.svg";

//Constantes
import { ConteudoEpisodios } from "../Constantes/Episodios_Valores";
import { QtdEpisodios } from "../Constantes/Episodios_Valores";

function Episodios () {

    const navigate = useNavigate();
    const [epSelecionado, setEpSelecionado] = useState([]);

    const selecionarEpisodio = (ep) => {

        const novoVetor = [...epSelecionado, ep]
        setEpSelecionado(novoVetor)

    }

    const recolherEpisodio = (ep) => {
        const novoVetor = epSelecionado.filter((episodio) => {
            return ep !== episodio
        })

        setEpSelecionado(novoVetor)
    }

    const verificaEpisodio = (ep) => {

        const novoVetor = epSelecionado.filter((episodio) => {
            return ep === episodio
        })


        if (novoVetor[0] === ep) {
            return true
        }else{
            return false
        }
    }

    const renderizarEpisodios = QtdEpisodios.map((ep, index) => {
        if (verificaEpisodio(ep)) {

            return(
                <Episodio key={index} FunSelecionar={recolherEpisodio.bind(this)} Ep={ep} ConteudoEp={ConteudoEpisodios[index]} Selecionado={true}></Episodio>
            )
        }else{

            return(
                <Episodio key={index} FunSelecionar={selecionarEpisodio.bind(this)} Ep={ep} ConteudoEp={ConteudoEpisodios[index]} Selecionado={false}></Episodio>
            )
        }
    })

    return(
        <>
            <DivPrincipal>
                <GlobalStyle/>
                <ImagemFundo src={Fundo}/>
                <TituloPrincipal>A Sopa Dimensional</TituloPrincipal>
                <div>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaPrincipal(navigate)}} texto={"Home"}/>
                    <BotaoNavBar selected={true} texto={"Episódios"}/>
                    <BotaoNavBar selected={false} clique={() => {irParaPaginaSobre(navigate)}} texto={"Sobre"}/>
                </div>

                <Janela>
                    
                    {renderizarEpisodios}
                
                </Janela>

                <TextoRodape>Todos os Direitos Reservados ©</TextoRodape>
                
            </DivPrincipal>
        </>
    )
}

export default Episodios;