let credits = 10.00
let project_price = 1.00
let project_price2 = 2.00



document.getElementById("credits").textContent = `Credits =  ${credits}`;
document.getElementById("projectprice").textContent = `Project Price =  $${project_price}`;
document.getElementById("projectprice2").textContent = `Project Price =  $${project_price2}`;


function calccredits(a, b){
  credits = (a-b);
  console.log(credits);
};


purchase = document.getElementById("purchase");

//doing the math for first project//

purchase.addEventListener('click', function(){
  if (credits > 0 && document.getElementById("purchase").innerHTML == "UNLOCK PROJECT"){
    credits = credits - project_price;
    document.getElementById("credits").textContent = `Credits =  ${credits}`
    
  }
  else if (document.getElementById("purchase").innerHTML == "UNLOCK PROJECT"){
    document.getElementById("credits").textContent = `Insufficient Funds for Purchase Reload page to add more credits! Credits =  $${credits}`

  }
  else{
    

  }
  });



purchase.addEventListener('click', function(){
  if (credits>0){
    document.getElementById('videolink').textContent = `LIVE DEMO`;
    document.getElementById('gitlink').textContent = `SOURCE CODE`;
    document.getElementById('description').textContent = "Fantasy football trading card game that assigns you a random player from a random year and then it's up to you to accept or reject a trade offer for them.";
    document.getElementById('purchase').textContent = `UNLOCKED`;
    

  }
  else{
    document.getElementById('videolink').textContent = ``;

  }
}
)

//doing the math for second project//

purchase2.addEventListener('click', function(){
  if (credits > 0 && document.getElementById("purchase2").innerHTML == "UNLOCK PROJECT"){
    credits = credits - project_price2;
    document.getElementById("credits").textContent = `Credits =  ${credits}`
    
  }
  else if (document.getElementById("purchase2").innerHTML == "UNLOCK PROJECT"){
    document.getElementById("credits").textContent = `Insufficient Funds for Purchase Reload page to add more credits! Credits =  $${credits}`

  }
  else{
    

  }
  });



purchase2.addEventListener('click', function(){
  if (credits>0){
    document.getElementById('videolink2').textContent = `LIVE DEMO`;
    document.getElementById('gitlink2').textContent = `SOURCE CODE`;
    document.getElementById('purchase2').textContent = `UNLOCKED`;
    

  }
  else{
    document.getElementById('videolink2').textContent = ``;

  }
}
)
  




