import React from 'react'
import { last } from 'lodash'
import { Serie } from '@nivo/line'
import { CircularProgress } from '@mui/material'
import classes from '../Pages/Home.module.scss'

const TodayFeel = ({ data }: { data: Serie[] }) => {
    const todayFeel = last(last(data)?.data)?.y || 0

    return (
        <>
            {!data.length && (
                <h1>
                    <CircularProgress />
                </h1>
            )}
            {todayFeel < 2 && <h1 className={classes.allGood}>All good</h1>}
            {todayFeel >= 2 && todayFeel < 3 && (
                <h1 className={classes.mild}>Mild</h1>
            )}
            {todayFeel >= 3 && todayFeel < 4 && (
                <h1 className={classes.moderate}>Moderate</h1>
            )}
            {todayFeel >= 4 && todayFeel < 5 && (
                <h1 className={classes.severe}>Severe</h1>
            )}
            {todayFeel >= 5 && <h1 className={classes.worst}>Worst</h1>}
        </>
    )
}

export default TodayFeel
