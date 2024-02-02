import { Datum, Serie } from '@nivo/line'
import { forEach, sumBy } from 'lodash'

export const addAverage = (series: Serie[]) => {
    if (!series.length) return []

    const averageSerie: Serie = {
        id: 'Average',
        data: [],
        color: '#FFF',
    }
    forEach(series[0]?.data, (sideEffect, index) => {
        averageSerie.data.push({
            x: sideEffect.x,
            y: sumBy(series, (s) => s.data[index]?.y as number) / series.length,
        })
    })
    return [...series, averageSerie]
}

export const objectToArray = (data: Datum[]) =>
    Object.keys(data).map((key) => ({ key, ...data[key as any] }))
