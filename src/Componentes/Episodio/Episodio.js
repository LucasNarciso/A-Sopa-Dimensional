//Styled Components
import { DivDivisoria, LinhaDivisoria, TextoGeral, DivTesteSelecionada, DivTesteNaoSelecionada } from "./Episodio_Style";

function Episodio (props) {

    if(props.Selecionado === true){
        return(
            <>
                <DivDivisoria onClick={() => {props.FunSelecionar(props.Ep)}}>
                    
                    <LinhaDivisoria> 
                        
                        <h3> {props.ConteudoEp.Titulo} </h3>
    
                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.54254 0.781675L14.9792 8.21832L0.105897 8.21832L7.54254 0.781675Z" fill="#CE8147"/>
                        </svg>
    
                    </LinhaDivisoria>
    
                </DivDivisoria>

                <DivTesteSelecionada>
                    <TextoGeral>{props.ConteudoEp.Texto}</TextoGeral>
                </DivTesteSelecionada>
                
            </>
        )
    }else{
        return(
            <>
                <DivDivisoria onClick={() => {props.FunSelecionar(props.Ep)}}>
                    
                    <LinhaDivisoria> 
                        
                        <h3> {props.ConteudoEp.Titulo} </h3>
    
                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.54266 8.21832L0.105957 0.781677H14.9793L7.54266 8.21832Z" fill="#CE8147"/>
                        </svg>
    
    
                    </LinhaDivisoria>
    
                </DivDivisoria>

                <DivTesteNaoSelecionada>
                    <TextoGeral>{props.ConteudoEp.Texto}</TextoGeral>
                </DivTesteNaoSelecionada>
            </>
        )
    }
}

export default Episodio;