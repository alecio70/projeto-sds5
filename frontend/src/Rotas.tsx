import Dasboard from "pages/Dashboard";
import Home from "pages/Home";
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
//import {  } from "react-router-dom";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dasboard" element={<Dasboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;