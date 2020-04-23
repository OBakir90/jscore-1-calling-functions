// 1. Write a
// function that returns the year someone is born given their age as input
// 2. Using the answer from step 1, write a
// function that takes someone 's name and age as input and returns a string that states the person'
// s name and year they were born in a sentence

const userAge = document.getElementById("input_age");
const userName = document.getElementById("input_name");
const results = document.getElementById("result");
const classContainer = document.getElementById("maincontainer");
const worldCup = document.getElementById("world_cup");





function getBirthYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - userAge.value;
}

function getWorldCupYears(year) {
    if ((year - 1930) % 4 === 0) {
        return year;
    }
}

function getNumberWC(year) {
    if ((year - 1930) % 4 === 0) {
        return (year - 1930) / 4;
    }
}

console.log(getWorldCupYears(getBirthYear()));

function getUserInfo() {
    results.innerHTML = "";
    classContainer.className = "container";
    if (getBirthYear() > 2020) {
        results.innerHTML = `Not yet born`;
    } else if (getBirthYear() < 1900) {
        results.innerHTML = `Still cant be alive`;
    } else {
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
        if (getBirthYear() === 1944 && getBirthYear() === 1948) {
            worldCup.innerHTML = "World Cup was not held because of the Second World War"
        } else if (getBirthYear() == getWorldCupYears(getBirthYear())) {
            worldCup.innerHTML = `${getNumberWC(getBirthYear())}. World Cup held`
        }
        userAge.value = "";
        userName.value = "";
    }
}