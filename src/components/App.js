import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import Layout from '../components/Layout.jsx'

export default function App() {

    return (

    
     <BrowserRouter>
     <Layout>
            <Switch>
            
            <Route exact path="/" component={MainPage}/> 
         
        
            </Switch>
            </Layout>
    </BrowserRouter>
    )
}
