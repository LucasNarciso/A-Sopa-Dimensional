import styled from 'styled-components';

export const DivDivisoria = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5em;

    :hover{
        cursor: pointer;
    }
        
    animation: fade 0.3s ease-in both;
    
    @keyframes fade{
    
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const LinhaDivisoria = styled.div`
    border-bottom: 0.2em solid #CE8147;
    width: 100%;
    height: em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Calibri';
    color: #CE8147;
    font-weight: bold;
    height: auto;
`

export const TextoGeral = styled.p`
    font-family: "Times New Roman";
`

export const DivTesteSelecionada = styled.div`
    overflow: hidden;

	animation: open 0.1s ease-in both;
    
    @keyframes open{
    
        0% {
            height: 0em;
            margin: 0em 2% 0em 2%;
        }
        100% {
            margin: 0em 2% 3em 2%;
        }
    }
`

export const DivTesteNaoSelecionada = styled.div`
    overflow: hidden;

    animation: close 0.1s ease-out both;

    @keyframes close{
    
        0% {
            margin: 0em 2% 3em 2%;
        }
        100% {
            height: 0em;
            margin: 0em 2% 0em 2%;
        }
    }
`