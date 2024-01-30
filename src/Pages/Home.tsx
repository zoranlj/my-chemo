import TodayFeel from '../Components/TodayFeel'
import LineChart from '../Components/LineChart'
import React, { useContext } from 'react'
import { Context } from '../Context/AuthContext'
import useSetHeaderHeight from '../Hooks/useSetHeaderHeight'

export const Home = () => {
    useSetHeaderHeight()
    const { series } = useContext(Context)
    console.log(series)
    return (
        <div className="container">
            <header>
                <TodayFeel data={series} />
                <h6>
                    <span className="allGood">1 - All good</span>,{' '}
                    <span className="mild">2 - Mild</span>,{' '}
                    <span className="moderate">3 - Moderate</span>,{' '}
                    <span className="severe">4 - Severe</span>,{' '}
                    <span className="worst">5 - Worst</span>
                </h6>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={series} />
            </main>
        </div>
    )
}
