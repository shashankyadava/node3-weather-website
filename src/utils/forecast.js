const { url } = require('inspector')
const request = require('request')

const forecast = (longitude,latitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=3531297ab5ef27c62cf8719b630eb100&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
            console.log('Unable to connect to weather service!',undefined)
        }
        else if(body.error){
            console.log('Unable to find the location',undefined)
        }
        else {
            // callback(undefined,{
            //     weather_description: body.current.weather_descriptions[0],
            //     Temperature: body.current.temperature,
            //     Feelslike: body.current.feelslike
            // })
            callback(undefined, 'Weather is '+body.current.weather_descriptions[0]+'.' + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike+' degree.')
        }
    })
}

module.exports = forecast