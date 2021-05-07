


document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let info = document.getElementById('new-task-description').value;
    let list = document.createElement('li');
    let ul = document.getElementById('tasks');
    list.innerHTML = info;
    ul.append(list);
    form.reset();
    let button = document.createElement('button');
    button.innerHTML = 'x';
    list.appendChild(button);
    button.onclick = function() {
      this.parentElement.remove();
    }
  });
}); 

