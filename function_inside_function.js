// 1. Write a
// function that returns the year someone is born given their age as input
// 2. Using the answer from step 1, write a
// function that takes someone 's name and age as input and returns a string that states the person'
// s name and year they were born in a sentence



function getBirthYear() {
    const userAge = document.getElementById("input_age").value;
    const date = new Date();
    const currentYear = date.getFullYear();
    return (currentYear - userAge);
}

function userData() {
    const name = document.getElementById("input_name").value;

    if (getBirthYear() > 2010) {
        document.querySelector(".container").className = "kid";
        document.getElementById("result").innerHTML = `Hi ${name}, you were born in ${getBirthYear()}`;
    } else if (getBirthYear() > 2002) {
        document.querySelector(".container").className = "teenager";
        document.getElementById("result").innerHTML = `Hi ${name}, you were born in ${getBirthYear()}`;
    } else {
        document.querySelector(".container").className = "adult";
        document.getElementById("result").innerHTML = `Hi ${name}, you were born in ${getBirthYear()}`;
    }
}