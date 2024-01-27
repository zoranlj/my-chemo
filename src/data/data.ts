import { Serie } from '@nivo/line'
import { forEach, sumBy } from 'lodash'

const addAverage = (series: Serie[]) => {
    const averageSerie: Serie = {
        id: 'average',
        data: [],
        color: '#FFF',
    }
    forEach(series[0].data, (sideEffect, index) => {
        averageSerie.data.push({
            x: sideEffect.x,
            y: sumBy(series, (s) => s.data[index].y as number) / series.length,
        })
    })
    return [...series, averageSerie]
}

const data: Serie[] = [
    {
        id: 'nerve-pain',
        color: '#8ABEEA',
        data: [
            {
                x: '18.01.2023.',
                y: 3,
            },
            {
                x: '19.01.2023.',
                y: 2,
            },
            {
                x: '20.01.2023.',
                y: 2,
            },
            {
                x: '21.01.2023.',
                y: 2,
            },
            {
                x: '22.01.2023.',
                y: 2,
            },
            {
                x: '23.01.2023.',
                y: 2,
            },
            {
                x: '24.01.2023.',
                y: 2,
            },
            {
                x: '25.01.2023.',
                y: 2,
            },
            {
                x: '26.01.2023.',
                y: 2,
            },
            {
                x: '27.01.2023.',
                y: 1,
            },
        ],
    },
    {
        id: 'abdominal pain',
        color: '#29CCB5',
        data: [
            {
                x: '18.01.2023.',
                y: 1,
            },
            {
                x: '19.01.2023.',
                y: 2,
            },
            {
                x: '20.01.2023.',
                y: 2,
            },
            {
                x: '21.01.2023.',
                y: 2,
            },
            {
                x: '22.01.2023.',
                y: 2,
            },
            {
                x: '23.01.2023.',
                y: 1,
            },
            {
                x: '24.01.2023.',
                y: 1,
            },
            {
                x: '25.01.2023.',
                y: 1,
            },
            {
                x: '26.01.2023.',
                y: 1,
            },
            {
                x: '27.01.2023.',
                y: 1,
            },
        ],
    },
]

export default addAverage(data)
