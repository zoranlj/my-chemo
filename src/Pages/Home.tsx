import TodayFeel from '../Components/TodayFeel'
import data from '../data/data'
import LineChart from '../Components/LineChart'
import React from 'react'
import useSetHeaderHeight from '../Hooks/useSetHeaderHeight'
export const Home = () => {
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
