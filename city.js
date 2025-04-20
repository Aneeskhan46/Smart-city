
  // Disable right-click context menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable key combinations
  document.addEventListener("keydown", function (e) {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
    }

    // Disable Ctrl+U
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      e.preventDefault();
    }
  });








let inp=document.querySelector(".form-control")
let btn = document.querySelector("#formButton")
let ul= document.querySelector("#ul")
let info=document.querySelector(".info")
let imgdiv=document.querySelector(".imgdiv")
let h2=document.querySelector("#heading")
let day=document.querySelector(".day")




btn.addEventListener("click", ()=>{
    let inpvalue=inp.value
    console.log(inpvalue)
    getWeather(inpvalue);
})


function getdata(result,feels_like){
   
    ul.innerHTML=""
    imgdiv.innerHTML = ""; // ✅ This line clears the previous image
     day.innerText=""
    
   h2.innerText=result[0]; 


    for(let i=1;i< result.length;i++){
        let li =document.createElement("li");
        li.innerText=result[i];
        ul.appendChild(li)
    }
    inp.value="";
  
   let img=document.createElement("img")

   img.style.width = "100%"; // Optional styling
   img.style.height = "100%";
   img.style.objectFit = "cover";

   if(feels_like>35){
    img.src="https://img.freepik.com/premium-vector/too-hot-summer-character-heat-stroke-high-temperature-warning-hot-summer-day-vector_432516-2717.jpg"
    day.innerText="IT'S A SUNNY DAY..."
   }
   else if(feels_like>20){
     img.src ="https://us.123rf.com/450wm/artcuboy/artcuboy2302/artcuboy230200675/199115538-a-cheerful-environment-background-with-a-cute-sunshine-a-playful-and-sunny-illustration-perfect-for.jpg?ver=6"
     day.innerText="IT'S A WARM DAY..."
   }
   else if(feels_like>10){
    img.src="https://static.vecteezy.com/system/resources/previews/000/303/803/non_2x/vector-cloudy-night-nature-landscape.jpg"
    day.innerText="IT'S A CLOUDY DAY..."
   }else{
    img.src="https://cdn.vectorstock.com/i/500p/07/50/winter-snow-landscape-houses-snowflakes-falling-vector-33910750.jpg"
    day.innerText="IT'S A COLD DAY..."
   }

   imgdiv.appendChild(img)


     
   


}


async function getWeather(inpvalue) {
    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpvalue}&appid=5a7709ef0961d0c23e6e05dc04fcdca4`);
        let data = await res.json();
        let feels_like=`${(data.main.feels_like-273.15).toFixed(2)}`
        console.log(feels_like)

        let result = [` ${data.name}`, `Feels_like :🌡️  ${(data.main.feels_like-273.15).toFixed(2)}℃`,`Ground Level : 🌍 ${ data.main.grnd_level} hPa`, `Humidity : 💧 ${ data.main.humidity}%`, `Pressure : 📉 ${ data.main.pressure} hPa`, `Sea level: 🌊 ${  data.main.sea_level} hPa`, `Temperature Maximum : 🌡️ ${(data.main.temp_max - 273.15).toFixed(2)}℃`, `Temperature Minimum : 🌡️ ${ (data.main.temp_min - 273.15).toFixed(2)}℃`]

        // let result = {
        //     name : data.name,
        //     feelslike : data.main.feels_like,
        //     grnd_level : data.main.grnd_level,
        //     humidity : data.main.humidity,
        //     pressure : data.main.pressure,
        //     sea_level : data.main.sea_level,
        //     temp_max: data.main.temp_max,
        //     temp_min : data.main.temp_min
        // }

     getdata(result,feels_like)


    }
    catch(err){
        console.log(err)
    }
   
  }
  
  
  