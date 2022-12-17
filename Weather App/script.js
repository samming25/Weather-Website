const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1490e39f02msh5f2c4fe59404f1dp12a411jsn1508f0f06bac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
     cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
        
        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
getWeather(city.value)
})


    cityName.innerHTML=city

   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
   .then(response => response.json())
   .then(response => {
       
       console.log(response)

       shcloud_pct.innerHTML = response.cloud_pct
       shtemp.innerHTML = response.temp
    
       shfeels_like.innerHTML = response.feels_like
       shhumidity.innerHTML = response.humidity
  
       shmin_temp.innerHTML = response.min_temp
       shmax_temp.innerHTML = response.max_temp
       shwind_speed.innerHTML = response.wind_speed
    
       shwind_degrees.innerHTML = response.wind_degrees
       shsunrise.innerHTML = response.sunrise
       shsunset.innerHTML = response.sunset
       
       
       
   })

   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
   .then(response => response.json())
   .then(response => {
       
       console.log(response)

       bscloud_pct.innerHTML = response.cloud_pct
       bstemp.innerHTML = response.temp
    
       bsfeels_like.innerHTML = response.feels_like
       bshumidity.innerHTML = response.humidity
  
       bsmin_temp.innerHTML = response.min_temp
       bsmax_temp.innerHTML = response.max_temp
       bswind_speed.innerHTML = response.wind_speed
    
       bswind_degrees.innerHTML = response.wind_degrees
       bssunrise.innerHTML = response.sunrise
       bssunset.innerHTML = response.sunset
       
       
       
   })
//    .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response => response.json())
.then(response => {
    
    console.log(response)

    dlcloud_pct.innerHTML = response.cloud_pct
    dltemp.innerHTML = response.temp
 
    dlfeels_like.innerHTML = response.feels_like
    dlhumidity.innerHTML = response.humidity

    dlmin_temp.innerHTML = response.min_temp
    dlmax_temp.innerHTML = response.max_temp
    dlwind_speed.innerHTML = response.wind_speed
 
    dlwind_degrees.innerHTML = response.wind_degrees
    dlsunrise.innerHTML = response.sunrise
    dlsunset.innerHTML = response.sunset
    
    
    
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar', options)
.then(response => response.json())
.then(response => {
    
    console.log(response)

    bbcloud_pct.innerHTML = response.cloud_pct
    bbtemp.innerHTML = response.temp
 
    bbfeels_like.innerHTML = response.feels_like
    bbhumidity.innerHTML = response.humidity

    bbmin_temp.innerHTML = response.min_temp
    bbmax_temp.innerHTML = response.max_temp
    bbwind_speed.innerHTML = response.wind_speed
 
    bbwind_degrees.innerHTML = response.wind_degrees
    bbsunrise.innerHTML = response.sunrise
    bbsunset.innerHTML = response.sunset
    
    
    
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
.then(response => response.json())
.then(response => {
    
    console.log(response)

    hdcloud_pct.innerHTML = response.cloud_pct
    hdtemp.innerHTML = response.temp
 
    hdfeels_like.innerHTML = response.feels_like
    hdhumidity.innerHTML = response.humidity

    hdmin_temp.innerHTML = response.min_temp
    hdmax_temp.innerHTML = response.max_temp
    hdwind_speed.innerHTML = response.wind_speed
 
    hdwind_degrees.innerHTML = response.wind_degrees
    hdsunrise.innerHTML = response.sunrise
    hdsunset.innerHTML = response.sunset
    
    
    
})

getWeather("Bangalore")

