const PollingDistrictstyle = {
    color: '#ff0000',
    weight: 3,
    opacity: 1,
    fillColor: '#ff0000',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

function getColor_AreaCommittees(d) {
    switch (d) {
        case 'Bramhall and Cheadle Hulme South':
            return '#ffffb3'
        case 'Cheadle':
            return '#bebada'
        case 'Stockport Central':
            return '#fb8072'
        case 'Werneth':
            return '#80b1d3'
        case 'Heatons and Reddish':
            return '#b3de69'
        case 'Marple':
            return '#fccde5'
        case 'Stepping Hill':
            return '#ffed6f'
    }
}

function AreaCommitteestyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_name),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
    }
}

const WardAreastyle = {
    color: '#000000',
    weight: 5,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
}

const ParliamentaryBoundarystyle = {
    color: '#bc80bd',
    weight: 4,
    opacity: 1,
    fillColor: '#bc80bd',
    fillOpacity: 0
}

export {
    PollingDistrictstyle,
    AreaCommitteestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle
}