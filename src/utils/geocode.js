const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=2&access_token=pk.eyJ1Ijoic2hhc2hhbmswOCIsImEiOiJjbDY0b3Ezb2EwOWp6M2twODEyOGcyc2NqIn0.yaARvxC_HJ9aizF03u0tmw&limit=1'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.features.length == 0){
            callback('Unable to find location. Try another search.',undefined)
        }
        else{
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode