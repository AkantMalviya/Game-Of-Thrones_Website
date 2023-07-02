
var images = [
      "./images/game.jpg",
      "./images/clash.jpg",
      "./images/storm.jpg",
      "./images/heage.jpeg",
      "./images/feast.jpg",
      "./images/sworn.jpg",
      "./images/mystery.jpg",
      "./images/dragon.jpg",
      "./images/princess.jpg",
      "./images/rogues.jpg"
    ]
      $(document).ready(function(){
      $("#result").empty();
   $.ajax(
      {
        url : 'https://www.anapioficeandfire.com/api/books',
        type : "GET",
        success :function(data)
        {
  
        for(var i=0 ; i<data.length;i++)
      {
          $("#result").append(
            `
            <div class="card" style="width:200px ; height:300px ; border: 1px solid black">
            <div class="card-img-top">
              <img src="${images[i]}" style="width:200px ; height:200px"> 
            </div>
            <div class="card-body" style="color:black;">
  
              <h5>${data[i].name}</h5>
              <h6>${data[i].country}</h6>
               <h6>${data[i].authors}</h6>
               <h6>${data[i].publisher}</h6>
               
  
            </div>
            </div>
            `
              )
      }
        }
  })
  })
    