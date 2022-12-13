 document.addEventListener('DOMContentLoaded', function() {

function fetchUsers(value) {
   
   document.getElementById("repos-list").innerHTML = ""
   // let userName = document.getElementById("search").value
   // To pass the tests, don't forget to return your fetch!
   fetch(`https://api.github.com/search/users?q=${value}`)
   .then((resp) => resp.json())
   .then((users) => {appendUsers(users.items)})
   return appendUsers;
 }
 
 function appendUsers(users) {
   const main = document.querySelector('#user-list');
   users.forEach((user) => {
     const h2 = document.createElement('li');
     h2.addEventListener('click', appendRepos)
     h2.innerHTML = user.login;
     main.appendChild(h2);
   })
}



 function appendRepos() {
   let value = document.querySelector("input[type=text]").value;
   document.querySelector('#user-list').innerHTML = "";
   fetch(`https://api.github.com/users/${value}/repos`)
   .then((resp) => resp.json())
   .then((users) => {
      if(users.length < 1) {
  const main = document.querySelector('#repos-list');
  let h2 = document.createElement('li')
  h2.innerHTML="No repositories available"
  main.appendChild(h2);
}else{
   const main = document.querySelector('#repos-list');
   users.forEach((user) => {
     let h2 = document.createElement('li');
     console.log(user.name)
     h2.innerHTML = user.name;
     main.appendChild(h2);
     
   })}; 
}
)
 }

  let button = document.querySelector("input[type=submit]")
button.addEventListener('click', (e) =>{
   let value = document.querySelector("input[type=text]").value;
   e.preventDefault();
   fetchUsers(value);

   })


function now(users){
   users.forEach((user) =>{console.log(user.name)});
}

 });
 
