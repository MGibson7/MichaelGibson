//button animations 

me = document.getElementById("me");
me.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "";
  document.getElementById("buttonClick2").innerHTML = "";
  document.getElementById("buttonClick3").innerHTML = "";
  document.getElementById("buttonClick4").innerHTML = "";

});

work = document.getElementById("work");

work.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'DirecTV' width = 100px, height = 100px>";
  document.getElementById("buttonClick2").innerHTML = "<h3>Business Analyst for American Communications</h3>";
  document.getElementById("buttonClick3").innerHTML = "<p>2013-Present</p>";
  document.getElementById("buttonClick4").innerHTML = "<style>li{margin-bottom: 10px; div {flex-basis:100%;}}</style><div><ul><li> Produced daily, monthly, quarterly, and annual reports utilizing MySQL to showcase the revenue generated from each client, identify trends and similarities among the newly acquired customers, and monitor the health of the existing one thousand plus accounts that make up ACs DirecTV for Business customer base. \
  This has contributed to the companys new customer acquisition cost being just 88% of what it was in 2012 and the existing customer churn has improved exponentially as well when adjusted for industry factors. \
  Throughout this time DirecTVs number of paying subscribers decreased by an estimated 35% while ACs number increased by 337%. </li>\
  <li>Automated elements of monthly reporting and daily contractor invoicing by constructing a Python program which featured web scraping via selenium,\
   functions, and loops. With this automation came the elimination of simple human errors within the invoicing which has saved an undefined but significant amount\
    of capital and time. Contractor invoice audits changed from a weekly occurrence to now mostly non-existent. </li> \
    <li>Forecasted monthly inventory needed using web\
     scraping, regression analysis, and data visualization via Python and Excel. This allowed for the business to on average decrease \
     its shipping expenses by 62% annually. </li></ul></div>";

});

school = document.getElementById("school");

school.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/uncw.png' alt = 'UNCW' width = 100px, height = 100px> ";
  document.getElementById("buttonClick2").innerHTML = "<h3>Bachelor of Science in Business Administration</h3>";
  document.getElementById("buttonClick3").innerHTML = "<p>Graduated December 2013</p>";
  document.getElementById("buttonClick4").innerHTML = "<style>li{margin-bottom: 10px;}</style><ul><li> 3.3 GPA with a concentration in economics </li>\</ul>";

});

skills = document.getElementById("skills");

skills.addEventListener("click", function(){
  document.getElementById("buttonClick").innerHTML = "<img src = './img/python.png' alt = 'python' width = 100px, height = 100px> \
  <img src = './img/sql.png' alt = 'sql' width = 100px, height = 100px> \
  <img src = './img/htmlcss.png' alt = 'sql' width = 100px, height = 100px>\
  <img src = './img/java.png' alt = 'sql' width = 100px, height = 100px>";
  document.getElementById("buttonClick2").innerHTML = "";
  document.getElementById("buttonClick3").innerHTML = "";
  document.getElementById("buttonClick4").innerHTML = "<style>li{margin-bottom: 10px;}</style><ul><li> Proficient in JavaScript, Python, CSS, HTML, MySQL </li>\
  <li>Creative Problem Solving</li><li>Excellent Written and Verbal Communication</li><li>Ability to Work Independently and Collaboratively</li>\
  <li>Understanding of Core Business Principles</li></ul>";

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
  document.getElementById("buttonClick2").innerHTML = "<h3>Use them on the Portfolio Vending Machine!</h3>";
  document.getElementById("buttonClick3").innerHTML = "";
  credits = credits + 10
  document.getElementById("credits").textContent = `Credits =  ${credits}`;
  document.getElementById("buttonClick4").innerHTML = "";

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
    document.getElementById("credits").textContent = `Credits =  ${credits}`
    document.getElementById("buttonClick").innerHTML = "<img src = './img/football.png' alt = 'Helmet' width = 100px, height = 100px>";
    document.getElementById("buttonClick2").innerHTML = "<h3>All Time Fantasy Football</h3>";
    document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/ALLTIMEFANTASY' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/FantasyTrading.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
    document.getElementById("buttonClick4").innerHTML = "<p>Fantasy football trading card game that assigns you a random player from a random year and then it's up to you to accept or reject a trade offer for them.</p>\
    <p>HTML, CSS, JAVASCRIPT, PYTHON, DJANGO</p>";
    
  }
  else {
    document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`

  }
  
  });

  purchase2.addEventListener('click', function(){
    if (credits >= project_price2 ){
      credits = credits - project_price2;
      document.getElementById("credits").textContent = `Credits =  ${credits}`
      document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'Viasat' width = 100px, height = 100px>";
      document.getElementById("buttonClick2").innerHTML = "<h3>Viasat Moving Averages</h3>";
      document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/ViasatMovingAvgs' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/viasatmoving.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
      document.getElementById("buttonClick4").innerHTML = "Program to scrape data off company site to provide an indepth report of the 90 day, 60 day, 30 day, and\
       15 day moving averages (normalized for a 30 day period). This was utilized to optimize equipment ordering and save on shipping costs/avoid out of stock reschedules. \
       <p>PYTHON, SELENIUM, SEABORN, MATPLOTLIB</p>";
      
    }
    else {
      document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
  
    }
    
    });

    purchase3.addEventListener('click', function(){
      if (credits >= project_price3 ){
        credits = credits - project_price3;
        document.getElementById("credits").textContent = `Credits =  ${credits}`
        document.getElementById("buttonClick").innerHTML = "<img src = './img/robot.jpeg' alt = 'Robot' width = 100px, height = 100px>";
        document.getElementById("buttonClick2").innerHTML = "<h3>Rock Paper Scissors Java</h3>";
        document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/RockPaperScissorsJava' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/RockPaperScissorsJava.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
        document.getElementById("buttonClick4").innerHTML = "Program that utilizes JavaScript to allow a user to play rock-paper-scissors against the computer in first to 5 matches and keeps track of titles won.  \
                        <p>JAVASCRIPT, HTML, CSS</p>";
        
      }
      else {
        document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
    
      }
      
      });

      purchase4.addEventListener('click', function(){
        if (credits >= project_price4 ){
          credits = credits - project_price4;
          document.getElementById("credits").textContent = `Credits =  ${credits}`
        document.getElementById("buttonClick").innerHTML = "<img src = './img/stock.webp' alt = 'stock' width = 100px, height = 100px>";
        document.getElementById("buttonClick2").innerHTML = "<h3>Stock Correlation</h3>";
        document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/StockCorrelation' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/stockcorrelation.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
        document.getElementById("buttonClick4").innerHTML = "Program to identify the degree to which two stocks have historically been correlated. Also predicts what price of \
        dependent stock should be given X price of independent stock. Can be utilized to identify potential stock arbitrage in sectors.   \
                        <p>PYTHON, SELENIUM, LINEAR REGRESSION, MATPLOTLIB, SEABORN</p>";
          
        }
        else {
          document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
      
        }
        
        });
        purchase5.addEventListener('click', function(){
          if (credits >= project_price5 ){
            credits = credits - project_price5;
            document.getElementById("credits").textContent = `Credits =  ${credits}`
            document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'invoice' width = 100px, height = 100px>";
            document.getElementById("buttonClick2").innerHTML = "<h3>Tech Invoice Maker</h3>";
            document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/FFLTechInvoiceMaker' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ViasatInvoicing.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
            document.getElementById("buttonClick4").innerHTML = "Program that scrapes completed job data from company site and compiles it into a word document invoice based on the inputted tech name and \
            specified date range \
                                        <p>PYTHON, SELENIUM</p>";
            
          }
          else {
            document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
        
          }
          
          });

          purchase6.addEventListener('click', function(){
            if (credits >= project_price6){
              credits = credits - project_price6;
              document.getElementById("credits").textContent = `Credits =  ${credits}`
              document.getElementById("credits").textContent = `Credits =  ${credits}`
              document.getElementById("buttonClick").innerHTML = "<img src = './img/junk.webp' alt = 'junkhaul' width = 100px, height = 100px>";
              document.getElementById("buttonClick2").innerHTML = "<h3>Junk in Truck Job Alert</h3>";
              document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/SMALLBIZAUTOMATION-JunkintheTruck' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/JunkinTruckTexts.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
              document.getElementById("buttonClick4").innerHTML = "Program that sends out text alerts of incoming job opportunities to vendors dependent on their criteria & ability \
                          <p>PYTHON, TWILIO</p>";
              
            }
            else {
              document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
          
            }
            
            });
            purchase7.addEventListener('click', function(){
              if (credits >= project_price7 ){
                credits = credits - project_price7;
                document.getElementById("credits").textContent = `Credits =  ${credits}`
                document.getElementById("buttonClick").innerHTML = "<img src = './img/dtv.png' alt = 'directv' width = 100px, height = 100px>";
                document.getElementById("buttonClick2").innerHTML = "<h3>AC DTV SQL</h3>";
                document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/ACDTVSQLQUERIES' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ACDTVSQL2.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                document.getElementById("buttonClick4").innerHTML = "SQL code for pulling total number of unique accounts and subsequent billing from large assortment of account data. \
                        Group unique accounts, sort by revenue, state, etc. Quick view of new accounts vs lost accounts. See overview of customer base differences month vs month.    \
                        <p>SQL</p>";
                
              }
              else {
                document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
            
              }
              
              });
            
              purchase8.addEventListener('click', function(){
                if (credits >= project_price8 ){
                  credits = credits - project_price8;
                  document.getElementById("credits").textContent = `Credits =  ${credits}`
                  document.getElementById("buttonClick").innerHTML = "<img src = './img/fire.webp' alt = 'fire' width = 100px, height = 100px>";
                  document.getElementById("buttonClick2").innerHTML = "<h3>Financial Independence Calculator</h3>";
                  document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/UltimateFIREProgram' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/fire.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                  document.getElementById("buttonClick4").innerHTML = "Program to forecast potential retirement savings with inputted variables \
                  (having a kid in X year, new home in X year at X price, wage increase/decrease, etc.)  \
                        <p>PYTHON</p>";
                  
                }
                else {
                  document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
              
                }
                
                });

                purchase9.addEventListener('click', function(){
                  if (credits >= project_price9 ){
                    credits = credits - project_price9;
                    document.getElementById("credits").textContent = `Credits =  ${credits}`
                    document.getElementById("buttonClick").innerHTML = "<img src = './img/contact.png' alt = 'phone' width = 100px, height = 100px>";
                    document.getElementById("buttonClick2").innerHTML = "<h3>AC Add Contact Info</h3>";
                    document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/ACAddTechContactInfo' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/addcontactinfovia.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                    document.getElementById("buttonClick4").innerHTML = "Program designed to automate the notation process of adding the technician's contact information on work order notes. \
                    Program uses selenium and adds phone number of corresponding tech that is assigned to that work order.   \
                              <p>PYTHON SELENIUM</p>";
                    
                  }
                  else {
                    document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
                
                  }
                  
                  });
                
                  purchase10.addEventListener('click', function(){
                    if (credits >= project_price10 ){
                      credits = credits - project_price10;
                      document.getElementById("credits").textContent = `Credits =  ${credits}`
                      document.getElementById("buttonClick").innerHTML = "<img src = './img/viasat.png' alt = 'viasat' width = 100px, height = 100px>";
                      document.getElementById("buttonClick2").innerHTML = "<h3>AC Viasat SQL</h3>";
                      document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/ACViasatSQL' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/ViasatSQL.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                      document.getElementById("buttonClick4").innerHTML = "SQL code for combining Viasat workorders with their corresponding payment voucher. Comparing month vs month and for viewing tech, \
                      region, or work order type specific performance.    \
                      <p>SQL</p>";
                      
                    }
                    else {
                      document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
                  
                    }
                    
                    });

                    purchase11.addEventListener('click', function(){
                      if (credits >= project_price11){
                        credits = credits - project_price11;
                        document.getElementById("credits").textContent = `Credits =  ${credits}`
                        document.getElementById("buttonClick").innerHTML = "<img src = './img/football.jpeg' alt = 'football' width = 100px, height = 100px>";
                        document.getElementById("buttonClick2").innerHTML = "<h3>DK Line up Builder</h3>";
                        document.getElementById("buttonClick3").innerHTML = "\
    <a href= 'https://github.com/MGibson7/draftkingslineupbuilder' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './video/draftkings.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>";
                        document.getElementById("buttonClick4").innerHTML = "Program to build draftkings lineups (user sets the number of attempts and feeds in excel file \
                          with point projection or player scores).\
                         Program outputs top ones onto a Word Document with corresponding lineup score.     \
                      <p>PYTHON</p>";
                        
                        
                      }
                      else {
                        document.getElementById("credits").textContent = `Insufficient Funds click projects tab to add more credits! Credits =  ${credits}`
                    
                      }
                      
                      });