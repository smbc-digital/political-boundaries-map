import Leaflet from 'leaflet'
import { wardPopup, polling_districtPopup, area_committeePopup, parliamentaryPopup, polling_stationPopup } from './Popups'
import { PollingDistrictstyle, AreaCommitteestyle, WardAreastyle, ParliamentaryBoundarystyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391143700822745, -2.1195786108406702],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: false,
        DisplayStreets: true,
        EnableAddressSearch: true
    },
    DynamicData: [

        {
            key: 'Area Committee',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:committee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: area_committeePopup,
                maxZoom: 2,
                style: AreaCommitteestyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Polling Districts',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_districts&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: polling_districtPopup,
                maxZoom: 2,
                style: PollingDistrictstyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Ward Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: wardPopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Parliamentary Boundary',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:parliamentary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: parliamentaryPopup,
                maxZoom: 2,
                style: ParliamentaryBoundarystyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Polling Stations',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations_4326&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: polling_stationPopup,
                maxZoom: 6,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#8dd3c7',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                }
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
    ],
    StaticData: [
    ]
}

export default Configuration