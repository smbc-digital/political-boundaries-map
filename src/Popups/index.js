const polling_districtPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-id-card" aria-hidden="true"></i><p class="title">Polling District</p>
  <p class="info">Polling District: ${feature.properties.polling_name}</p>
  </div>`

  layer.bindPopup(content)
}

const wardPopup = (feature, layer) => {
  const content = `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Ward</p>
  <p class="info">Ward: ${feature.properties.ward_name}</p>
  <p class="info">Councillors: <br>
  ${feature.properties.cllr_1} (${feature.properties.cllr_1_party})<br> 
  ${feature.properties.cllr_2} (${feature.properties.cllr_2_party})<br> 
  ${feature.properties.cllr_3} (${feature.properties.cllr_3_party}) </p>
  
  </div>`

  layer.bindPopup(content)
}

const area_committeePopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-university" aria-hidden="true"></i><p class="title">Area Committee</p>
  <p class="info">Area Committee: ${feature.properties.committee_name}</p>
  
  </div>`

  layer.bindPopup(content)
}

const parliamentaryPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-university" aria-hidden="true"></i><p class="title">Parliamentary</p>
  <p class="info">Parliamentary Constituency: ${feature.properties.name}</p>
  
  </div>`

  layer.bindPopup(content)
}

const polling_stationPopup = (feature, circleMarker) => {
  const content = `<div class="item"><i class="fa fa-university" aria-hidden="true"></i><p class="title">Polling Station</p>
  <p class="info">${feature.properties.name}</p>
  
  </div>`

  circleMarker.bindPopup(content)
}

export {
  wardPopup,
  polling_districtPopup,
  area_committeePopup,
  parliamentaryPopup,
  polling_stationPopup
}