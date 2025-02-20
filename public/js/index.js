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

