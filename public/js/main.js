// const submitBtn=document.getElementById('submitBtn');
// const getInfo=(event)=>{
//   event.preventDefault();
//   alert('hii');
// }
//  submitBtn.addEventListener('click',getInfo);
// const cityName = document.getElementById('cityName');
// const submitBtn = document.getElementById('submitBtn');
//
// //const city_name = document.getElementById('city_name');
// const temp_real_val = document.getElementById('temp_real_val');
// const temp_status = document.getElementById('temp_status');
// const datahide = document.querySelector('.middle_layer');
//
// const getInfo = async(event) => {
//     event.preventDefault();
//
//     let cityVal = cityName.value;
//
//     if(cityVal === ""){
//         city_name.innerText = `Plz write the name before search`;
//         datahide.classList.add("data_hide");
//     }else{
//
//         try{
//
//
//
//             //let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
//
// let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d57c13b3ce8577f9844ba84e18c805f4`;
//             const response = await fetch(url);
//
//             const data = await response.json();
//             const arrData = [data];
//             console.log(arrData);
//
//             city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
//             temp_real_val.innerText = arrData[0].main.temp;
//             const tempMood = arrData[0].weather[0].main;
//             console.log(tempMood);
//
//             //condition to check sunny or cloudy
//             if (tempMood == "Clear") {
//             temp_status.innerHTML =
//                 "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
//             } else if (tempMood == "Clouds") {
//             temp_status.innerHTML =
//                 "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
//             } else if (tempMood == "Rain") {
//             temp_status.innerHTML =
//                 "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
//             } else {
//             temp_status.innerHTML =
//                 "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
//
//             }
//             datahide.classList.remove('data_hide');
//             cityVal = "";
//
//
//         }catch{
//             cityVal = " ";
//             datahide.classList.add("data_hide");
//             city_name.innerText =  `please enter the proper city name`;
//             console.log('please add the proper city name');
//         }
//
//     }
// }
//
// submitBtn.addEventListener('click', getInfo);
const cityName = document.getElementById('cityName');
const submitBtn =document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const temp_min =document.getElementById('temp_min');
const temp_max =document.getElementById('temp_max');
const getInfo=async(event)=>{
  event.preventDefault();
  let cityVal= cityName.value;
  if(cityVal==="")
  {
city_name.innerText=`Plz write the name before search`;
datahide.classList.add('data_hide');
  }


else{
try{
  let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d57c13b3ce8577f9844ba84e18c805f4`;
const response=await fetch(url);
const data=await response.json();
const arrData= [data];
console.log(data);
city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;



temp_max.innerText= ` Max-Temp -     ${arrData[0].main.temp_max}\u00B0 C`;
temp_min.innerText = ` Min-Temp -    ${arrData[0].main.temp_min}\u00B0 C`;
  temp_real_val.innerText = arrData[0].main.temp;
//  temp_status.innerText = arrData[0].weather[0].main;
//  console.log(tempMood);
const tempMood= arrData[0].weather[0].main;
//condition to check sunny or cloudy
             if (tempMood == "Clear")
             {
             temp_status.innerHTML =
                 "<i class='fas fa-city' style='color: #eccc68;'></i>";
             }
            // else  if (tempMood == "Clear"&& hours>= 6 && periods=="PM")
            //  {
            //  temp_status.innerHTML =
            //      "<i class='fas  fa-moon' style='color: #eccc68;'></i>";
            //  }
              else if (tempMood == "Clouds") {
             temp_status.innerHTML =
                 "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
             } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                 "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";

             }

              else {
             temp_status.innerHTML =
                 "<i class='fas  fa-city' style='color:#eccc68;'></i>";

             }
             datahide.classList.remove('data_hide');
            cityVal = "";



}
catch{
            cityVal = " ";
             datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
         }
}
}
submitBtn.addEventListener('click',getInfo);
