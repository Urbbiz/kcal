/***************
EXECUTION
****************/
// const editMealBtn = document.querySelector('.edit');
const lightbox = document.querySelector('.lightbox');
const form = lightbox.querySelector('form');
const addNewMeal = document.getElementById('add-newMeal');
const buttonAdd = document.getElementById('add-new-meal');
const buttonCancel = document.getElementById('add-new-meal-cancel');


const diary = new Diary();
diary.loadMeals();
showMeals();


document.getElementById("add-new-meal").addEventListener("click", addMeal);

// *********************

const editForm = new EditForm({
    selector: 'form.edit'
});
editForm.init();

//**********************


// paspaudus ESCAPE mygtuka paslepia visas formas
addEventListener('keyup', ({ key }) => {
    // console.log(key);
    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }

});

// paspaudus ant mygtuko ADDMEAL issoka lightbox su forma
addNewMeal.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightbox.dataset.form = 'add';
    console.log('kvieciam forma!!!');
})

// ADD FORM//
// padaro taip,kad paspaudus ant mygtuko jisai neperkrautu puslapio
buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    console.log(' suveike ADD mygtukas addmeal formoje?');
    lightbox.classList.remove('show'); // sitas nuima show css ir todel dingsta add meal forma
})

buttonCancel.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
})