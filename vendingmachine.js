 button = document.getElementById("Do")
 
 button.addEventListener("click", function(){
  const container = document.querySelector('#container');

  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = 'This is the glorious text-content!';

  container.appendChild(content);

  const newContent = document.createElement('p')

  newContent.setAttribute('style', 'color: red;');    

  newContent.classList.add('newContent');
  newContent.textContent = "Hey I'm Red!";

  container.appendChild(newContent);

  const newContent2 = document.createElement('h3')

  newContent2.setAttribute('style', 'color: blue;');    

  newContent2.classList.add('newContent');
  newContent2.textContent = "Hey I'm Blue!";

  container.appendChild(newContent2);

  const content3 = document.createElement('div');
  content3.setAttribute('style', 'background-color: pink;')
  content3.classList.add('content');

  const content4 = document.createElement('h1');
  content4.classList.add('content4');
  content4.textContent = "Hey I'm H1!";

  const content5 = document.createElement('p');
  content5.classList.add('content4');
  content5.textContent = "Me too!";

  content3.appendChild(content4);
  content3.appendChild(content5);





  container.appendChild(content3);


 })
  




