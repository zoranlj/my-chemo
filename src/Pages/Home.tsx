import TodayFeel from '../Components/TodayFeel'
import LineChart from '../Components/LineChart'
import React, { useContext } from 'react'
import { Context } from '../Context/AuthContext'
import useSetHeaderHeight from '../Hooks/useSetHeaderHeight'
import classes from './Home.module.scss'
import { addAverage } from '../Utils/data'

export const Home = () => {
    useSetHeaderHeight()
    const { series } = useContext(Context)

    return (
        <div className={classes.container}>
            <header>
                <TodayFeel data={addAverage(series)} />
                <h6>
                    <span className={classes.allGood}>1 - All good</span>,{' '}
                    <span className={classes.mild}>2 - Mild</span>,{' '}
                    <span className={classes.moderate}>3 - Moderate</span>,{' '}
                    <span className={classes.severe}>4 - Severe</span>,{' '}
                    <span className={classes.worst}>5 - Worst</span>
                </h6>
            </header>
            <main className={classes.lineChartWrapper}>
                <LineChart data={addAverage(series)} />
            </main>
        </div>
    )
}
