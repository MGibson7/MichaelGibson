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
      document.getElementById("totalCredits").textContent = `$${credits}`
      document.getElementById("nowPlaying").innerHTML = '<video width="1000" height="1000" controls> <source src="./video/FantasyTrading.mp4" type="video/mp4"></video> <p>Personal Use</p> <p>Description: Fantasy football trading card game that assigns you a random player from a random year and then up to you to accept or reject a trade offer for them. </p><p>HTML, CSS, JAVASCRIPT, PYTHON, DJANGO</p> '
      
    }
    else if (document.getElementById("purchase").innerHTML == "UNLOCK PROJECT"){
      document.getElementById("totalCredits").textContent = `Insufficient Funds for Purchase Reload page to add more credits! Credits =  $${credits}`
  
    }
    else{
      
  
    }
    });