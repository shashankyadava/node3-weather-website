const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//**(important)**
// to take input from user use process.argv
// which is array which has first thing path to node executable and second thing is path to the script we ran
// third in this case is required value
// **(important)**

const address = process.argv[2]

if(!address){
    console.log('Please provide a address')
}
else{
    geocode(address,(error,{latitude,longitude,location} = {})=>{
        if(error){
            return console.log(error)
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}





