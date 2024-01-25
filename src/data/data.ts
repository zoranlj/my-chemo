import { Serie } from '@nivo/line'

const addAverage = (data: Serie[]) => {
    const withAverage = data
    data.map((d) => {
        console.log(d)
    })
    withAverage.push({
        id: 'average',
        data: [],
    })
    return withAverage
}

const data: Serie[] = [
    {
        id: 'nerve-pain',
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
                y: 3,
            },
            {
                x: '24.01.2023.',
                y: 2,
            },
        ],
    },
    {
        id: 'dizziness',
        data: [
            {
                x: '18.01.2023.',
                y: 2,
            },
            {
                x: '19.01.2023.',
                y: 1,
            },
            {
                x: '20.01.2023.',
                y: 1,
            },
            {
                x: '21.01.2023.',
                y: 1,
            },
            {
                x: '22.01.2023.',
                y: 1,
            },
            {
                x: '23.01.2023.',
                y: 1,
            },
            {
                x: '24.01.2023.',
                y: 1,
            },
        ],
    },
    {
        id: 'difficulty sleeping',
        data: [
            {
                x: '18.01.2023.',
                y: 3,
            },
            {
                x: '19.01.2023.',
                y: 1,
            },
            {
                x: '20.01.2023.',
                y: 1,
            },
            {
                x: '21.01.2023.',
                y: 4,
            },
            {
                x: '22.01.2023.',
                y: 3,
            },
            {
                x: '23.01.2023.',
                y: 1,
            },
            {
                x: '24.01.2023.',
                y: 1,
            },
        ],
    },
    {
        id: 'abdominal pain',
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
        ],
    },
]

export default addAverage(data)
