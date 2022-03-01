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

skills = document.getElementById("skills");

skills.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/python.png' alt = 'python' width = 100px, height = 100px> \
  <img src = './img/sql.png' alt = 'sql' width = 100px, height = 100px> \
  <img src = './img/htmlcss.png' alt = 'sql' width = 100px, height = 100px>\
  <img src = './img/java.png' alt = 'sql' width = 100px, height = 100px>";
  document.getElementById("buttonClick2").innerHTML = "";
  document.getElementById("buttonClick3").innerHTML = "";

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



projectview = document.getElementById("projectView");

projectview.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<h2>You just earned 10 Credits!</h2>";
  document.getElementById("buttonClick2").innerHTML = "";
  document.getElementById("buttonClick3").innerHTML = "";
  credits = credits + 10
  document.getElementById("credits").textContent = `Credits =  ${credits}`;

});


purchase = document.getElementById("purchase");
purchase2 = document.getElementById("purchase2");
purchase3 = document.getElementById("purchase3");
purchase4 = document.getElementById("purchase4");
purchase5 = document.getElementById("purchase5");
purchase6 = document.getElementById("purchase6");
purchase7 = document.getElementById("purchase7");
purchase8 = document.getElementById("purchase8");
purchase9 = document.getElementById("purchase9");
purchase10 = document.getElementById("purchase10");
purchase11 = document.getElementById("purchase11");

//doing the math for projects//

purchase.addEventListener('click', function(){
  if (credits >= project_price){
    credits = credits - project_price;
    document.getElementById("credits").textContent = `Credits =  $${credits}`
    document.getElementById("buttonClick").innerHTML = "<img src = './img/football.png' alt = 'Helmet' width = 100px, height = 100px>";
    document.getElementById("buttonClick2").innerHTML = "<h3>All Time Fantasy Football</h3>";
    document.getElementById("buttonClick3").innerHTML = "<p>Fantasy Football Trading Card Game</p>\
    <a href= 'https://github.com/MGibson7/ALLTIMEFANTASY' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/FantasyTrading.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
    
  }
  else {
    document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`

  }
  
  });

  purchase2.addEventListener('click', function(){
    if (credits >= project_price2 ){
      credits = credits - project_price2;
      document.getElementById("credits").textContent = `Credits =  $${credits}`
      document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'Viasat' width = 100px, height = 100px>";
      document.getElementById("buttonClick2").innerHTML = "<h3>Viasat Moving Averages</h3>";
      document.getElementById("buttonClick3").innerHTML = "<p>15-30-60-90 Day Moving Averages for FFL</p>\
    <a href= 'https://github.com/MGibson7/ViasatMovingAvgs' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/viasatmoving.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
      
    }
    else {
      document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
  
    }
    
    });

    purchase3.addEventListener('click', function(){
      if (credits >= project_price3 ){
        credits = credits - project_price3;
        document.getElementById("credits").textContent = `Credits =  $${credits}`
        document.getElementById("credits").textContent = `Credits =  $${credits}`
        document.getElementById("buttonClick").innerHTML = "<img src = './img/robot.jpeg' alt = 'Robot' width = 100px, height = 100px>";
        document.getElementById("buttonClick2").innerHTML = "<h3>Rock Paper Scissors Java</h3>";
        document.getElementById("buttonClick3").innerHTML = "<p>Rock Paper Scissors User vs Computer</p>\
    <a href= 'https://github.com/MGibson7/RockPaperScissorsJava' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/RockPaperScissorsJava.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
        
      }
      else {
        document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
    
      }
      
      });

      purchase4.addEventListener('click', function(){
        if (credits >= project_price4 ){
          credits = credits - project_price4;
          document.getElementById("credits").textContent = `Credits =  $${credits}`
          document.getElementById("credits").textContent = `Credits =  $${credits}`
        document.getElementById("credits").textContent = `Credits =  $${credits}`
        document.getElementById("buttonClick").innerHTML = "<img src = './img/stock.webp' alt = 'stock' width = 100px, height = 100px>";
        document.getElementById("buttonClick2").innerHTML = "<h3>Stock Correlation</h3>";
        document.getElementById("buttonClick3").innerHTML = "<p>Degree two stocks have historically been correlated</p>\
    <a href= 'https://github.com/MGibson7/StockCorrelation' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/stockcorrelation.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
          
        }
        else {
          document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
      
        }
        
        });
        purchase5.addEventListener('click', function(){
          if (credits >= project_price5 ){
            credits = credits - project_price5;
            document.getElementById("credits").textContent = `Credits =  $${credits}`
            document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'invoice' width = 100px, height = 100px>";
            document.getElementById("buttonClick2").innerHTML = "<h3>Tech Invoice Maker</h3>";
            document.getElementById("buttonClick3").innerHTML = "<p>Scrapes data from company site to build invoice</p>\
    <a href= 'https://github.com/MGibson7/FFLTechInvoiceMaker' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ViasatInvoicing.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
            
          }
          else {
            document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
        
          }
          
          });

          purchase6.addEventListener('click', function(){
            if (credits >= project_price6){
              credits = credits - project_price6;
              document.getElementById("credits").textContent = `Credits =  $${credits}`
              document.getElementById("credits").textContent = `Credits =  $${credits}`
              document.getElementById("buttonClick").innerHTML = "<img src = './img/junk.webp' alt = 'junkhaul' width = 100px, height = 100px>";
              document.getElementById("buttonClick2").innerHTML = "<h3>Junk in Truck Job Alert</h3>";
              document.getElementById("buttonClick3").innerHTML = "<p> Text alerts of incoming job opportunities to vendors dependent on their criteria</p>\
    <a href= 'https://github.com/MGibson7/SMALLBIZAUTOMATION-JunkintheTruck' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/JunkinTruckTexts.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
              
            }
            else {
              document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
          
            }
            
            });
            purchase7.addEventListener('click', function(){
              if (credits >= project_price7 ){
                credits = credits - project_price7;
                document.getElementById("credits").textContent = `Credits =  $${credits}`
                document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'directv' width = 100px, height = 100px>";
                document.getElementById("buttonClick2").innerHTML = "<h3>AC DTV SQL</h3>";
                document.getElementById("buttonClick3").innerHTML = "<p>Monthly and Annual Revenue/Customer/Etc. Reporting</p>\
    <a href= 'https://github.com/MGibson7/ACDTVSQLQUERIES' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ACDTVSQL2.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                
              }
              else {
                document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
            
              }
              
              });
            
              purchase8.addEventListener('click', function(){
                if (credits >= project_price8 ){
                  credits = credits - project_price8;
                  document.getElementById("credits").textContent = `Credits =  $${credits}`
                  document.getElementById("credits").textContent = `Credits =  $${credits}`
                  document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'fire' width = 100px, height = 100px>";
                  document.getElementById("buttonClick2").innerHTML = "<h3>Financial Independence Calculator</h3>";
                  document.getElementById("buttonClick3").innerHTML = "<p>Forecast potential retirement savings with inputted variables</p>\
    <a href= 'https://github.com/MGibson7/UltimateFIREProgram' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/fire.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                  
                }
                else {
                  document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
              
                }
                
                });

                purchase9.addEventListener('click', function(){
                  if (credits >= project_price9 ){
                    credits = credits - project_price9;
                    document.getElementById("credits").textContent = `Credits =  $${credits}`
                    document.getElementById("buttonClick").innerHTML = "<img src = './img/contact.png' alt = 'phone' width = 100px, height = 100px>";
                    document.getElementById("buttonClick2").innerHTML = "<h3>AC Add Contact Info</h3>";
                    document.getElementById("buttonClick3").innerHTML = "<p>Automate the notation process of adding the technician's contact info</p>\
    <a href= 'https://github.com/MGibson7/ACAddTechContactInfo' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/addcontactinfovia.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                    
                  }
                  else {
                    document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
                
                  }
                  
                  });
                
                  purchase10.addEventListener('click', function(){
                    if (credits >= project_price10 ){
                      credits = credits - project_price10;
                      document.getElementById("credits").textContent = `Credits =  $${credits}`
                      document.getElementById("credits").textContent = `Credits =  $${credits}`
                      document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'viasat' width = 100px, height = 100px>";
                      document.getElementById("buttonClick2").innerHTML = "<h3>AC Viasat SQL</h3>";
                      document.getElementById("buttonClick3").innerHTML = "<p>Monthly/Annual Viasat Reporting</p>\
    <a href= 'https://github.com/MGibson7/ACViasatSQL' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ViasatSQL.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                      
                    }
                    else {
                      document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
                  
                    }
                    
                    });

                    purchase11.addEventListener('click', function(){
                      if (credits >= project_price11){
                        credits = credits - project_price11;
                        document.getElementById("credits").textContent = `Credits =  $${credits}`
                        document.getElementById("buttonClick").innerHTML = "<img src = './img/football.jpeg' alt = 'football' width = 100px, height = 100px>";
                        document.getElementById("buttonClick2").innerHTML = "<h3>DK Line up Builder</h3>";
                        document.getElementById("buttonClick3").innerHTML = "<p>Build DK Lineups and Optimize Them</p>\
    <a href= 'https://github.com/MGibson7/draftkingslineupbuilder' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/draftkings.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                        
                        
                      }
                      else {
                        document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  $${credits}`
                    
                      }
                      
                      });