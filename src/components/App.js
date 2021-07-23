import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'


export default function App() {

    return (

    
     <BrowserRouter>
            <Switch>
            
            <Route exact path="/" component={MainPage}/> 
         
        
            </Switch>

    </BrowserRouter>
    )
}
