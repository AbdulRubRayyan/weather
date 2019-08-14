const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ea08260e513ecc32754cce5c92d2ebf0/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +'?units=si';

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Try another place. ', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, ''+body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+' degrees out. The minimum temperature can be '+body.daily.data[0].temperatureMin+' degrees and the maximum can be '+body.daily.data[0].temperatureMax+' degrees. There is a '+body.currently.precipProbability+'% chance of rain. ');
        }
    })
}

module.exports = forecast