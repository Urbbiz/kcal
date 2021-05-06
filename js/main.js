/***************
EXECUTION
****************/
// const editMealBtn = document.querySelector('.edit');
const lightbox = document.querySelector('.lightbox');
const form = lightbox.querySelector('form');
const addNewMeal = document.getElementById('add-newMeal');
const buttonAdd = document.getElementById('add-new-meal');

const diary = new Diary();
diary.loadMeals();
showMeals();


document.getElementById("add-new-meal").addEventListener("click", addMeal);
// document.getElementById("add-form-show").addEventListener("click", showForm);

// editMealBtn.addEventListener('click', () => {
//     lightbox.classList.add('show');
// })

// addEventListener('keyup', ({ key }) => {
//     console.log(key);
//     if (key === 'Escape') {
//         lightbox.classList.remove('show');
//     }

// });

// paspaudus ant mygtuko ADDMEAL issoka lightbox su forma
addNewMeal.addEventListener('click', () => {
    lightbox.classList.add('show');
    console.log('kvieciam forma!!!');
})


// padaro taip,kad paspaudus ant mygtuko jisai neperkrautu puslapio
buttonAdd.addEventListener('click', e => {
    e.preventDefault();
})