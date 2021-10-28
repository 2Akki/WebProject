const cityname =document.getElementById("cityname")
const city_name =document.getElementById("city_name")
const submitBtn = document.getElementById("sub-btn")
const tempReal_val = document.getElementById("tempReal_val")
const temp_status = document.getElementById("temp_status")
const data_hide= document.querySelector(".middle_layer")


const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal =cityname.value

    if(cityVal===""){
        city_name.innerText =`Plz write the name before search`
        data_hide.classList.add("data_hide")
    }else{
        try{
        let url =`api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1788a8c8c7d0aa49553c7e705bbb83ca`
        const responce = await fetch(url) 
        const data = await responce.json()
        const arrData =[data]

        tempReal_val.innerText = arrData[0].main.temp
 
        city_name.innerText =`${arrData[0].name},${arrData[0].sys.country} `
        const tempmood = arrData[0].weather[0].main  


        if(tempmood =="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style ='color:#eccc68'></i>"
        }else if(tempmood =="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style ='color:#f1f2f6'></i>"
        }else if(tempmood =="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style ='color:#a4b0be'></i>"
        }else{
            temp_status.innerHTML="<i class='fas fa-cloud' style ='color:##eccc68'></i>"
        }
        data_hide.classList.remove("data_hide")
        }catch(err){
            city_name.innerText =`Plz write the city name probebly`
            data_hide.classList.add("data_hide")
        }
    }
}
submitBtn.addEventListener("click",getInfo)
 


