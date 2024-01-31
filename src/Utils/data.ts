import { Serie } from '@nivo/line'
import { forEach, sumBy } from 'lodash'

export const addAverage = (series: Serie[]) => {
    if (!series.length) return [];
    const averageSerie: Serie = {
        id: 'Average',
        data: [],
        color: '#FFF',
    }
    forEach(series[0]?.data, (sideEffect, index) => {
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
        color: '#066dc7',
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
            {
                x: '28.01.2023.',
                y: 1,
            },
            {
                x: '29.01.2023.',
                y: 1,
            },
            {
                x: '30.01.2023.',
                y: 1,
            },
        ],
    },
    {
        id: 'abdominal pain',
        color: '#047966',
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
            {
                x: '28.01.2023.',
                y: 1,
            },
            {
                x: '29.01.2023.',
                y: 1,
            },
            {
                x: '30.01.2023.',
                y: 1,
            },
        ],
    },
]

export default addAverage(data)