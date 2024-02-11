import React from 'react'
import { CircularProgress } from '@mui/material'
import { Serie } from '@nivo/line'
import { last, toString } from 'lodash'
import classes from '../Pages/Home.module.scss'

const feelings = [
    { threshold: 1, text: 'Feeling good today', class: 'good' },
    { threshold: 2, text: 'Feeling mild today', class: 'mild' },
    { threshold: 3, text: 'Feeling moderate today', class: 'moderate' },
    { threshold: 4, text: 'Feeling severe today', class: 'severe' },
    { threshold: 5, text: 'Feeling worst today', class: 'worst' },
]

const TodayFeel: React.FC<{ data: Serie[] }> = ({ data }) => {
    const todayFeel = Math.floor(last(last(data)?.data)?.y as number)
    const feeling = feelings.find((f) => f.threshold >= todayFeel)
    return (
        <>
            {!todayFeel && <CircularProgress />}
            {!!todayFeel && (
                <h1 className={classes[toString(feeling?.class)]}>
                    {feeling?.text}
                </h1>
            )}
        </>
    )
}

export default TodayFeel
