function fetchData(){

    xhr= new XMLHttpRequest();
    xhr.open("GET","https://www.goodreads.com/work/quotes/1466917-a-game-of-thrones");
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
            
    var a=document.createElement("div");   
    var name=document.createElement("li");
    name.innerHTML=data.quote;
    a.appendChild(name);
    document.getElementById("Results").appendChild(a);   }  };
}
            