import React from 'react'
import './App.scss'
import MyResponsiveLine from './components/MyResponsiveLine'
import data from './data'

function App() {
    return (
        <div className="container">
            <h1>Zoran's CAPOX side effects</h1>
            <div className="myResponsiveLineWrapper">
                <MyResponsiveLine data={data} />
            </div>
        </div>
    )
}

export default App
