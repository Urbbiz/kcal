/***************
EXECUTION
****************/

const diary = new Diary();
diary.loadMeals();
showMeals();


document.getElementById("add-new-meal").addEventListener("click", addMeal);