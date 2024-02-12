import { addAverage } from './data'
import { expect, describe, it } from '@jest/globals'
import { Serie } from '@nivo/line'

describe('addAverage', () => {
    it('should return an empty array when the input is an empty array', () => {
        const series: Serie[] = []
        const result = addAverage(series)
        expect(result.length).toBe(0)
    })

    it('should add an average series with proper id and color', () => {
        const series: Serie[] = [
            {
                id: 'Test',
                data: [{ x: '2022', y: 30 }],
            },
        ]
        const result = addAverage(series)
        expect(result.length).toBe(2)
        expect(result[1].id).toBe('Average')
        expect(result[1].color).toBe('#FFF')
    })

    it('should calculate the average value correctly', () => {
        const series: Serie[] = [
            { id: 'Test1', data: [{ x: '2022', y: 30 }] },
            { id: 'Test2', data: [{ x: '2022', y: 40 }] },
            { id: 'Test3', data: [{ x: '2022', y: 50 }] },
        ]
        const result = addAverage(series)
        expect(result[3].data[0].y).toBe(40)
    })

    it('should handle null entries correctly', () => {
        const series: Serie[] = [
            { id: 'Test1', data: [{ x: '2022', y: null }] },
            { id: 'Test2', data: [{ x: '2022', y: 40 }] },
            { id: 'Test3', data: [{ x: '2022', y: 50 }] },
        ]
        const result = addAverage(series)
        expect(result[3].data[0].y).toBe(30)
    })
})
