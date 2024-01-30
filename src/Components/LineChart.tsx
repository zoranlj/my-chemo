import { ResponsiveLine, Serie } from '@nivo/line'
import nivo from '../Theme/nivo'

const LineChart = ({ data }: { data: Serie[] }) => (
    <ResponsiveLine
        data={data}
        theme={nivo}
        margin={{ top: 16, right: 32, bottom: 96, left: 56 }}
        colors={{ datum: 'color' }}
        curve="basis"
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        yScale={{
            max: 5,
            min: 1,
            type: 'linear',
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 75,
            legend: 'Date',
            legendOffset: 80,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Pain',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 16,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                toggleSerie: true,
                symbolBorderColor: 'rgba(255, 255, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
    />
)

export default LineChart
