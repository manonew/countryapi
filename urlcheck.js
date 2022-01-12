/* let urls = [
    'https://restcountries.com/v2/name/peru',
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));
 */


 //get country information   
var countryData = document.getElementById("country_data");
countryData.addEventListener('click',function(e){
 e.preventDefault();
 alert("hello");
 const name = document.getElementById('country_name').value;
 console.log(name);
 //var name = document.getElementById("cityName").value;
 //console.log(name);
 var url = "https://restcountries.com/v2/name/"+name+"?fullText=true";
 //var url1 = "https://restcountries.com/v2/all?fields=name,capital,currencies"
 
  if(name == ""){
      alert("Enter a city name");
  }else{
    fetch(url).then(function(response){
   
      if(response.ok){
        
          return (response.json());
      }else{
          throw new Error(Error);
      }
  }).then(function(data){
    //let cityName = JSON.stringify(data[0].capital);
    console.log(data);
    let countryName = data[0].name;
    let capitalName = data[0].capital;
    let region = data[0].region;
    let language1 = data[0].languages[0].name;
    let {code, name, symbol} = data[0].currencies[0];
    let area= data[0].area;
    let timezone = data[0].timezones[0];
    let population = data[0].population;
    let lat = data[0].latlng[0];
    let lang = data[0].latlng[1];
   
   // let language2 = data[0].languages[1].name;
    let imgUrl = data[0].flag;

   //get map data

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([lat, lang]),
    zoom: 2
  })
  
});


    const html =    `
    <div class="data">
        <h2>Country Name: ${countryName} </h2>
        <p class="reg"> Region: ${region}</p>
        <p class="reg"> Capital: ${capitalName}</p>
        <p class="reg"> Languages Spoken: ${language1}</p>
        <p class="reg"> Currency Code: ${code}, Currency Name: ${name}, Currency Symbol: ${symbol}</p>
        <p class="reg"> Area: ${area}</p>
        <p class="reg"> Time Zone: ${timezone}</p>
        <p class="reg"> Population: ${population}</p>
        <img src="${imgUrl}" width="100px" height="100px"></div>
        ` ;
        console.log(name);
        console.log(typeof(cityName));
       
      document.getElementById("display_data").innerHTML = html;
    
  }).catch(function(error){
      console.log(error);
  });
  }
});