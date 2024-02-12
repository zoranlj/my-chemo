import { Datum, Serie } from '@nivo/line'
import { forEach, sumBy } from 'lodash'

/**
 * Calculates the average of the data in each series and adds a new series called 'Average' to the given series array.
 * If the series array is empty, an empty array is returned.
 *
 * @param {Serie[]} series - The array of series to calculate the average for.
 * @return {Serie[]} - The modified series array with the average series added.
 */
export const addAverage = (series: Serie[]): Serie[] => {
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

/**
 * Converts an object to an array of key-value pairs.
 *
 * @param {Datum[]} data - The data object to convert.
 * @returns {Object[]} - An array of objects containing the key-value pairs.
 */
export const objectToArray = (data: Datum[]): object[] =>
    Object.keys(data).map((key) => ({ key, ...data[key as any] }))
