import Leaflet from 'leaflet'
import { wardPopup, polling_districtPopup, area_committeePopup, parliamentaryPopup, polling_stationPopup } from './Popups'
import { PollingDistrictstyle, AreaCommitteestyle, WardAreastyle, ParliamentaryBoundarystyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391143700822745, -2.1195786108406702],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
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