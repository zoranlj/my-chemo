import { Datum, Serie } from '@nivo/line'
import { forEach, sumBy } from 'lodash'
import { addDays, format, isBefore, isThursday, isToday } from 'date-fns'

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

/**
 * Returns an array of past and current Thursdays.
 *
 * @returns {string[]} An array of formatted strings representing the past and current Thursdays.
 */
export const getThursdays = (): string[] => {
    let currentDate = new Date(2024, 0, 18) //18. January 2024
    const today = new Date()
    let thursdays = []

    while (isBefore(currentDate, today) || isToday(currentDate)) {
        if (isThursday(currentDate)) {
            thursdays.push(format(currentDate, 'dd.MM.yyyy.'))
        }
        currentDate = addDays(currentDate, 1)
    }

    return thursdays
}
