//button animations 
work = document.getElementById("work");

work.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'DirecTV' width = 100px, height = 100px>";
  document.getElementById("buttonClick2").innerHTML = "<h3>Business Analyst for American Communications 2013-Present</h3>";
  document.getElementById("buttonClick3").innerHTML = "<style>ul{color:black;} li{margin-bottom: 10px;}</style> <ul><li> Produced daily, monthly, quarterly, and annual reports utilizing MySQL to showcase the revenue generated from each client,\
   identify trends and similarities among the newly acquired customers, and monitor the health of the existing one thousand plus accounts that make up ACs “DirecTV for Business” customer base. This has contributed to the companys\
    new customer acquisition cost being just 88% of what it was in 2012 and the existing customer churn has improved exponentially as well when adjusted for industry factors.\
     Throughout this time DirecTVs number of paying subscribers decreased by an estimated 35% while ACs number increased by 337%.    </li>\
     <li> Automated elements of monthly reporting and daily contractor invoicing by constructing a Python program which featured web scraping via selenium, functions, and loops.\
      With this automation came the elimination of simple human errors within the invoicing which has saved an undefined but significant amount of capital and time. \
      Contractor invoice audits changed from a weekly occurrence to now mostly non-existent. </li></ul>";

});