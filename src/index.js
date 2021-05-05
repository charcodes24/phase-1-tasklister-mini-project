document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms[0];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let info = document.getElementById('new-task-description').value;
    let list = document.createElement('li');
    list.innerHTML = info;
    let button = document.createElement('button');
    button.innerHTML = 'x';
    list.append(button);
    button.addEventListener('onclick', (e) => {
      this.closest('li').innerHTML.remove();
    })
    document.getElementById('tasks').appendChild(list);
  });
  
});



//get info out of input
//create new li 
//info gets into li
//get li onto the page

//create button 
//button has x
//button on page
//event listener for button
//function for button that deletes li ** could be broken into smaller tasks

