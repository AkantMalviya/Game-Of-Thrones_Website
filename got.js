function fetchData(){
    xhr= new XMLHttpRequest();
    xhr.open("GET","https://api.gameofthronesquotes.xyz/v1/random/5");
    xhr.send();
    var data;
    xhr.onreadystatechange = function() {
        if (this.readyState == 2 && this.status == 200) {
            // divMain.innerHTML = "FETCHING THE DATA";
            alert('PLEASE Wait ... checking your internet connection');
         }
        if (this.readyState == 4 && this.status == 200) {
        data=JSON.parse(this.responseText);
        console.log(data);
            
    let a=document.createElement("div");   
    for(let i=0; i< data.length; i++)
    {   let name =  document.createElement("p");
        name.innerHTML=  data[i].sentence;
        console.log( data[i].sentence);
        a.appendChild(document.createElement("br"));
        a.appendChild(name);
    }
        
    document.getElementById("Results").appendChild(a);   }  };
}
