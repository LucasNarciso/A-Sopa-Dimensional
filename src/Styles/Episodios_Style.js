import styled, {createGlobalStyle} from 'styled-components';

//Estilização global do site, retirando definições padrões
export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #561D25;
    }

    /*Personaliza a Calha da Barra de rolagem */
    ::-webkit-scrollbar {
        width: 0.50em;
        height: 0.5em;
        background-color: white;
    }

    /*Personaliza a Barra de Rolagem*/
    ::-webkit-scrollbar-thumb {
        background: #240A0E;
    }
`

export const DivPrincipal = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1366px;
    margin: auto;
    padding: 0em 5% 0em 5%;
`

export const ImagemFundo = styled.img`
    width: 100%;
    position: absolute;
    margin-top: 7%;
    z-index: -1;
`

export const TituloPrincipal = styled.p`
    color: white;
    font-family: 'Courier New';
    font-weight: bold;
    margin-top: 5%;
    font-size: 1.8em;
`

export const Janela = styled.div`
    background-color: #FFFFFF;
    border-radius: 1em;
    width: 100%;
    height: auto;
    padding: 2em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const TextoRodape = styled.p`
    color: white;
    margin: 3em 0em 3em 0em;
`
