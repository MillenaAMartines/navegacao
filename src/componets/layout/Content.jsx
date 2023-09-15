import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'; 

import Home from "../../views/examplos/Home"; 
import Param from "../../views/examplos/Param" ;
import About from "../../views/examplos/About"; 
import NotFound from "../../views/examplos/NotFound" ;

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/param/:id" element={<Param />}></Route> 
            <Route path="/" exact element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
       
       
    </main> 
    );


export default Content; 