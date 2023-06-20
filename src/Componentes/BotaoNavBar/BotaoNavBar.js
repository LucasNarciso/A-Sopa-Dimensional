import { ButtonNavBar, ButtonNavBarSelected } from "./BotaoNavBar_Style"

function BotaoNavBar (props) {
    if (props.selected === true) {
        return(
            <ButtonNavBarSelected>{props.texto}</ButtonNavBarSelected>
        )
    }else{
        return(
            <ButtonNavBar onClick={props.clique}>{props.texto}</ButtonNavBar>
        )
    }
}

export default BotaoNavBar;