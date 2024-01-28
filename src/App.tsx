import React from 'react'
import './App.scss'
import LineChart from './components/LineChart'
import TodayFeel from './components/TodayFeel'
import useSetHeaderHeight from './hooks/useSetHeaderHeight'
import data from './data/data'

function App() {
    useSetHeaderHeight()
    return (
        <div className="container">
            <header>
                <TodayFeel data={data} />
                <h6>
                    <span className="allGood">1 - All good</span>,{' '}
                    <span className="mild">2 - Mild</span>,{' '}
                    <span className="moderate">3 - Moderate</span>,{' '}
                    <span className="severe">4 - Severe</span>,{' '}
                    <span className="worst">5 - Worst</span>
                </h6>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={data} />
            </main>
        </div>
    )
}

export default App
