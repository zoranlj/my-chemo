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
                <h6>
                    Pain Scale: 1 fine, 2 mild, 3 moderate, 4 severe, 5 worst.
                </h6>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={data} />
            </main>
        </div>
    )
}

export default App
