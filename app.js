const container = document.querySelector('.container')
const input = document.querySelector('input')
const btn = document.querySelector('button')
let temperature = document.querySelector('.temperature')
let city = document.querySelector('h1')
let description = document.querySelector('.description')
let temp  = document.querySelector('.temp')
let img = document.querySelector('img')
let feelsLike = document.querySelector('.feels-like')
let humidity =document.querySelector('.humidity')
let visibility =document.querySelector('.visibility')
let pressure =document.querySelector('.pressure')
let wind = document.querySelector('.wind')

const apiKey = `7fd780c3c987cc66a03206e9736fa65e`

btn.addEventListener('click', function() {
 
 let cityName = input.value

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
 .then(response => response.json())
 .then(data => {
    
   console.log(data);

   city.textContent = `${data.name}, ${data.sys.country}`
   description.textContent = data.weather[0].description.toUpperCase()
   let icon = data.weather[0].icon
   img.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
   temp.textContent = `${data.main.temp.toFixed()}°C`
   feelsLike.textContent = `Feels Like ${data.main.feels_like.toFixed()}°C`
   humidity.textContent = `Humidity ${data.main.humidity}%`
   pressure.textContent = `Pressure ${data.main.pressure}mb`
   visibility.textContent = `Visibility ${data.visibility}m`
   wind.textContent = `Wind Speed ${data.wind.speed}km/h`
  input.value = ''
  input.focus()
  
 })


 


 



 


})

/*
let town = 'london'
let town2 = town.slice(1)
let town3 = town.charAt(0).toUpperCase() + town.slice(1);
console.log(town2);
*/