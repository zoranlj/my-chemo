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
                <h1 className="fine">CAPOX side effects</h1>
                <h6>
                    Pain Scale: <span className="fine">1 fine</span>,{' '}
                    <span className="mild">2 mild</span>,{' '}
                    <span className="moderate">3 moderate</span>,{' '}
                    <span className="severe">4 severe</span>,{' '}
                    <span className="worst">5 worst</span>
                </h6>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={data} />
            </main>
        </div>
    )
}

export default App
