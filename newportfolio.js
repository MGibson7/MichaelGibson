let credits = 10.00
let project_price = 1.00
let project_price2 = 2.00



document.getElementById("totalCredits").textContent = `Credits =  $${credits}`;
document.getElementById("projectprice").textContent = `$${project_price}.00`;
document.getElementById("projectprice2").textContent = `$${project_price2}.00`;


function calccredits(a, b){
    credits = (a-b);
    console.log(credits);
  };
  
  
purchase = document.getElementById("purchase");
  
  //doing the math for first project//
  
  purchase.addEventListener('click', function(){
    if (credits > 0){
      credits = credits - project_price;
      document.getElementById("totalCredits").textContent = `CREDITS = $${credits}`
      document.getElementById("nowPlaying").innerHTML = '<h2>All Time Fantasy Game</h2><a href= "https://github.com/MGibson7/ALLTIMEFANTASY"><button>SOURCE CODE</button></a><a href= "./video/FantasyTrading.mp4"><button>LIVE DEMO</button></a><img src = "./img/football.png" alt = "football player">'
      
    }
    else if (document.getElementById("purchase").innerHTML == "UNLOCK PROJECT"){
      document.getElementById("totalCredits").textContent = `Insufficient Funds for Purchase Reload page to add more credits! Credits =  $${credits}`
  
    }
    else{
      
  
    }
    });