/***************
EXECUTION
****************/
// const editMealBtn = document.querySelector('.edit');
// const lightbox = document.querySelector('.lightbox');
const diary = new Diary();
diary.loadMeals();
showMeals();


document.getElementById("add-new-meal").addEventListener("click", addMeal);

// editMealBtn.addEventListener('click', () => {
//     lightbox.classList.add('show');
// })