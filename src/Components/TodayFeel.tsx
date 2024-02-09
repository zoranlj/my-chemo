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
            {!!data.length && todayFeel < 2 && (
                <h1 className={classes.good}>Feeling good today</h1>
            )}
            {!!data.length && todayFeel >= 2 && todayFeel < 3 && (
                <h1 className={classes.mild}>Feeling mild today</h1>
            )}
            {!!data.length && todayFeel >= 3 && todayFeel < 4 && (
                <h1 className={classes.moderate}>Feeling moderate today</h1>
            )}
            {!!data.length && todayFeel >= 4 && todayFeel < 5 && (
                <h1 className={classes.severe}>Feeling severe today</h1>
            )}
            {!!data.length && todayFeel >= 5 && (
                <h1 className={classes.worst}>Feeling worst today</h1>
            )}
        </>
    )
}

export default TodayFeel
