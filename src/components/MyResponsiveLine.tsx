import { ResponsiveLine, Serie } from '@nivo/line'

const theme = {
    background: '#000000',
    text: {
        fontSize: 11,
        fill: '#333333',
        outlineWidth: 0,
        outlineColor: 'transparent',
    },
    axis: {
        domain: {
            line: {
                stroke: '#777777',
                strokeWidth: 1,
            },
        },
        legend: {
            text: {
                fontSize: 12,
                fill: '#cbcbcb',
                outlineWidth: 0,
                outlineColor: 'transparent',
            },
        },
        ticks: {
            line: {
                stroke: '#777777',
                strokeWidth: 1,
            },
            text: {
                fontSize: 11,
                fill: '#cbcbcb',
                outlineWidth: 0,
                outlineColor: 'transparent',
            },
        },
    },
    grid: {
        line: {
            stroke: '#dddddd',
            strokeWidth: 0.5,
        },
    },
    legends: {
        title: {
            text: {
                fontSize: 11,
                fill: '#cbcbcb',
                outlineWidth: 0,
                outlineColor: 'transparent',
            },
        },
        text: {
            fontSize: 11,
            fill: '#cbcbcb',
            outlineWidth: 0,
            outlineColor: 'transparent',
        },
        ticks: {
            line: {},
            text: {
                fontSize: 10,
                fill: '#333333',
                outlineWidth: 0,
                outlineColor: 'transparent',
            },
        },
    },
    annotations: {
        text: {
            fontSize: 13,
            fill: '#333333',
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
        },
        link: {
            stroke: '#000000',
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
        },
        outline: {
            stroke: '#000000',
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
        },
        symbol: {
            fill: '#000000',
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
        },
    },
    tooltip: {
        container: {
            background: '#ffffff',
            fontSize: 12,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
    },
}

const MyResponsiveLine = ({ data }: { data: Serie[] }) => (
    <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        curve="basis"
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Intensity',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
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

export default MyResponsiveLine
