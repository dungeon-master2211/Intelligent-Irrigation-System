var t=document.getElementById("temp")
var h=document.getElementById("hum")
var m=document.getElementById("mois")

setInterval(()=>{fetch("https://api.thingspeak.com/channels/1402888/feed.json")
.then(response=>response.json())
.then(data=>{
   var alldata=data['feeds']
   t.innerText=alldata[alldata.length-1]['field1']
   h.innerText=alldata[alldata.length-1]['field2']
   m.innerText=alldata[alldata.length-1]['field3']
   if(parseInt(t.innerText)>30){
       document.getElementById('warn').innerText="Temperature is high!!"
   }
   else{
    document.getElementById('warn').innerText="Everything seems normal, sir!"
   }
})
},10000)

function validator(){
    var username=document.getElementById("username").value
    var pwd=document.getElementById('password').value
    var btn=document.getElementById('submit').innerHTML
    if(username=='farm1' && pwd=='farm1'){
        window.location.replace('./visual.html')
    }
    else{
        
        alert("Invalid Credentials")
    }

}
