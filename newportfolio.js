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