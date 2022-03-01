//button animations 
work = document.getElementById("work");

work.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'DirecTV' width = 100px, height = 100px>";
  document.getElementById("buttonClick2").innerHTML = "<h3>Business Analyst for American Communications</h3>";
  document.getElementById("buttonClick3").innerHTML = "<p>2013-Present</p>";

});

school = document.getElementById("school");

school.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/uncw.png' alt = 'UNCW' width = 100px, height = 100px> ";
  document.getElementById("buttonClick2").innerHTML = "<h3>Bachelor of Science in Business Administration</h3>";
  document.getElementById("buttonClick3").innerHTML = "<p>Graduated December 2013</p>";

});

let credits = 0.00
let project_price = 1.00
let project_price2 = 2.00
let project_price3 = 2.50
let project_price4 = 2.50
let project_price5 = 1.00
let project_price6 = 2.00
let project_price7 = 2.50
let project_price8 = 2.50
let project_price9 = 1.00
let project_price10 = 2.00
let project_price11 = 2.50
let project_price12 = 2.50




document.getElementById("credits").textContent = `Credits =  ${credits}`;
document.getElementById("projectprice").textContent = `credits ${project_price}`;
document.getElementById("projectprice2").textContent = `credits ${project_price2}`;
document.getElementById("projectprice3").textContent = `credits ${project_price3}`;
document.getElementById("projectprice4").textContent = `credits ${project_price4}`;
document.getElementById("projectprice5").textContent = `credits ${project_price5}`;
document.getElementById("projectprice6").textContent = `credits ${project_price6}`;
document.getElementById("projectprice7").textContent = `credits ${project_price7}`;
document.getElementById("projectprice8").textContent = `credits ${project_price8}`;
document.getElementById("projectprice9").textContent = `credits ${project_price9}`;
document.getElementById("projectprice10").textContent = `credits ${project_price10}`;
document.getElementById("projectprice11").textContent = `credits ${project_price11}`;
document.getElementById("projectprice12").textContent = `credits ${project_price12}`;





purchase = document.getElementById("purchase");

//doing the math for projects//

purchase.addEventListener('click', function(){
  if (credits > 0 ){
    credits = credits - project_price;
    document.getElementById("credits").textContent = `Credits =  $${credits}`
    
  }
  else {
    document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`

  }
  
  });