// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Img = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.dir(heading.textContent);
// console.dir(heading.innerText);
// // set the textContent property on that element
// // heading.textContent = 'Josh is cool';
// // console.dir(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕 ');
// pizzaList.insertAdjacentText('beforeend', '🍕');

/* --- Classes! --- */
// const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');

// console.log(pic.classList);

// function toggleRound() {
//   pic.classList.toggle('round');
// }

// pic.addEventListener('click', toggleRound);

/* --- Build in and Custom Data Attributes --- */
// pic.alt = 'Cute Pup'; // setter
// console.log(pic.alt); // getter
// console.log(pic.naturalWidth); // getter

// window.addEventListener('load', function () {
//   console.log(pic.naturalWidth); // getter
// });

// pic.setAttribute('alt', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));

// const custom = document.querySelector('.custom');
// console.log(custom.dataset);

// custom.addEventListener('click', function () {
//   alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
// });
