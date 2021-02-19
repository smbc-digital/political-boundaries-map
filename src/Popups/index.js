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
  <p class="info">Parliamentary Constituency: ${feature.properties.name_short}</p>
  <p class="info">MP: ${feature.properties.mp_name} (${feature.properties.mp_party})<br> 
  
  </div>`

  layer.bindPopup(content)
}

export {
  wardPopup,
  area_committeePopup,
  parliamentaryPopup
}