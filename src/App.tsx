import React from 'react'
import './App.scss'
import LineChart from './components/LineChart'
import data from './data/data'
import useSetHeaderHeight from './hooks/useSetHeaderHeight'

function App() {
    // set header height
    useSetHeaderHeight()
    return (
        <div className="container">
            <header>
                <h1>CAPOX side effects</h1>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={data} />
            </main>
        </div>
    )
}

export default App
