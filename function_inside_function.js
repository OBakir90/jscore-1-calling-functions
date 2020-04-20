// 1. Write a
// function that returns the year someone is born given their age as input
// 2. Using the answer from step 1, write a
// function that takes someone 's name and age as input and returns a string that states the person'
// s name and year they were born in a sentence

const userAge = document.getElementById("input_age");
const userName = document.getElementById("input_name");
const results = document.getElementById("result");
const classContainer = document.querySelector("#maincontainer");

function getBirthYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - userAge.value;
}

function getUserInfo() {
    results.innerHTML = "";
    classContainer.className = "container";
    if (getBirthYear() > 2010) {
        classContainer.className = "kid";
        results.innerHTML = `Hi ${
        userName.value
    }, you were born in ${getBirthYear()}`;
    } else if (getBirthYear() > 2002) {
        classContainer.className = "teenager";
        results.innerHTML = `Hi ${
        userName.value
    }, you were born in ${getBirthYear()}`;
    } else {
        classContainer.className = "adult";
        results.innerHTML = `Hi ${
        userName.value
    }, you were born in ${getBirthYear()}`;
    }
    userAge.value = "";
    userName.value = "";
}