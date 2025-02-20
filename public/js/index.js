const weekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const months = ['Jan', 'Feb', 'Mar'];

const dateTitle = document.querySelector('#date');
const d = new Date();
const day = d.getDay(); // 0 - 6
const week = weekName[day];
const date = d.getDate();
const month = months[d.getMonth()]; // 0 - 11
const year = d.getFullYear();
dateTitle.textContent = `${week}, ${date} ${month} ${year}`;

const list = document.querySelector('#list');
list.addEventListener('click', function(e) {
  const id = e.target.id;
  const classes = e.target.getAttribute('class').split(' ');
  const completed = classes.includes('completed');
  axios.patch(`http://localhost:3000/items/${id}`, {
    completed: !completed,
  });
  
  const item = document.getElementById(id);
  item.classList.toggle('completed');
});
axios.get('http://localhost:3000/items').then(function(resp) {
  for (let i = 0; i < resp.data.length; i++) {
    const item = resp.data[i];
    const todoItem = document.createElement('li');
    todoItem.classList.add('item');
    if (item.completed) {
      todoItem.classList.add('completed');
    }
    todoItem.setAttribute('id', item.id)
    todoItem.textContent = item.title;
    list.append(todoItem);
  }
});

const form = document.querySelector('#add-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.querySelector('#item')
  const title = input.value;
  input.value = '';

  const id = crypto.randomUUID();
  axios.post('http://localhost:3000/items', {
    id,
    title,
  }).then(function() {
    const todoItem = document.createElement('li');
    todoItem.classList.add('item');
    todoItem.setAttribute('id', id);
    todoItem.textContent = title;
    list.append(todoItem);
  });
});


