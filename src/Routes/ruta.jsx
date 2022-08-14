import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { LogIn } from "../Login/logIn";
import { SignUp } from "../Registro/signUp";
import App from "../App"

export const RoutesMain = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element= {<App />}/>
                <Route exact path = '/Login' element= {<LogIn />}/>
                <Route exact path = '/Registro' element= {<SignUp />}/> 
            </Routes>
        </BrowserRouter>
    )
}
