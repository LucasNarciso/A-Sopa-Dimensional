//REACT
import { HashRouter, Routes, Route } from "react-router-dom";

//PÁGINAS
import Principal from "../Páginas/Principal";
import Episodios from "../Páginas/Episodios"
import Sobre from "../Páginas/Sobre"
import Erro from "../Páginas/Erro"

export const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index path={"/"} element={<Principal/>}/>
                <Route path={"/episodios"} element={<Episodios/>}/>
                <Route path={"/principal"} element={<Principal/>}/>
                <Route path={"/sobre"} element={<Sobre/>}/>
                <Route path={"*"} element={<Erro/>}/>
            </Routes>
        </HashRouter>
    )
}