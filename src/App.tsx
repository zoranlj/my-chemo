import React from 'react'
import './App.scss'
import LineChart from './components/LineChart'
import data from './data/data'

function App() {
    return (
        <div className="container">
            <h1>Zoran's CAPOX side effects</h1>
            <div className="lineChartWrapper">
                <LineChart data={data} />
            </div>
        </div>
    )
}

export default App
