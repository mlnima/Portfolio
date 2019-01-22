const Axios = require('axios')
const fetch = require('node-fetch')
let googleApi = 'AIzaSyAEYCD5waZLhtWh21mxspBuR9_9RpCADQA'
let getIp =()=>{
    fetch('https://ipapi.co/json/')
        .then(res=>res.json())
        .then(data=>{
          if (data.country === "DE" || data.country_name === "Germany" ) {
              window.location.href = "http://google.com";
          }
        })
}

getIp()