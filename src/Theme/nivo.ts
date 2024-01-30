const nivo = {
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
                rotation: 90,
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

export default nivo
