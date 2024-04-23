
var btnEn = document.getElementById("en");
var btnNl = document.getElementById("nl");
const hobbiesTitle = document.querySelector(".hobbiesTitle");
const hobbiesList = document.querySelector(".hobbiesList");
const profielTitle = document.querySelector(".profielTitle");
const profielText = document.querySelector(".profielText");
const eduTitle = document.querySelector(".eduTitle");
const eduList = document.querySelector(".eduList");
const expTitle = document.querySelector(".expTitle");
const expList = document.querySelector(".expList");
const skillsTitle = document.querySelector(".skillsTitle");
const skillsList = document.querySelector(".skillsList");
let en;
let nl;

/*
|--------------------------------------------------------------------------
| Initialise translation files
|--------------------------------------------------------------------------
*/

export default function initTranslations() {
    initTranslationNl();
    initTranslationEn();
}

function initTranslationNl() {
    initTranslation('assets/languages/nl.json', onTranslationNlLoaded);
}

function onTranslationNlLoaded(xhrRequest) {
    if (xhrRequest.status === 200) {
        nl = JSON.parse(xhrRequest.responseText);
        translateNl();
        btnNl.addEventListener("click", translateNl);
    }
}

function initTranslationEn() {
    initTranslation('assets/languages/en.json', onTranslationEnLoaded);
}

function onTranslationEnLoaded(xhrRequest) {
    if (xhrRequest.status === 200) {
        en = JSON.parse(xhrRequest.responseText);
        // translate(en);
        btnEn.addEventListener("click", translateEn);
    }
}

function initTranslation(path, onload) {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => onload(xhr);

    xhr.open("GET", path, true);
    xhr.send();
}

/*
|--------------------------------------------------------------------------
| change html texts tr given translations
|--------------------------------------------------------------------------
*/

function translateEn(){
    translate(en);
}

function translateNl(){
    translate(nl);
}


function translate(translations){
    populateTitle(translations.profiel);
    populateHobbies(translations.hobbies);
    populateEducation(translations.education);
    populateExperience(translations.experience);
    populateSkills(translations.skills);
}

function populateHobbies(translations){
    let listItem;

    hobbiesTitle.innerHTML = translations.title+":";
    hobbiesList.innerHTML = "";
    for(let i = 0; i < translations.list.length; i++){
        listItem = document.createElement('li');
        listItem.innerHTML = translations.list[i];
        hobbiesList.appendChild(listItem);
    }
}

function populateTitle(translations){
    profielTitle.innerHTML = translations.title+":";
    profielText.innerHTML = translations.profielText;
}

function populateEducation(translations){
    let container, item;

    eduTitle.innerHTML = translations.title+":";
    eduList.innerHTML = "";
    for(let i = 0; i < translations.list.length; i++){
        container = document.createElement('li');
        container.classList.add("time-list-item");
        item = document.createElement('p');
        item.innerHTML = translations.list[i][0];
        container.appendChild(item);
        item = document.createElement('p');
        item.classList.add("tabbed");
        item.innerHTML = "<strong>"+translations.list[i][1]+"</strong> </br> "+translations.list[i][2] + "<br>"+ translations.list[i][3];
        container.appendChild(item);
        eduList.appendChild(container);
    }
}

function populateExperience(translations){
    let container, item, items;

    expTitle.innerHTML = translations.title+":";
    expList.innerHTML = "";
    for(let i = 0; i < translations.list.length; i++){
        container = document.createElement('div');
        container.classList.add("time-list-item");

        // add timeline
        item = document.createElement('p');
        item.innerHTML = translations.list[i][0];
        container.appendChild(item);

        // add company and function
        items = document.createElement('div');
        items.classList.add("tabbed");
        item = document.createElement('p');
        item.innerHTML = "<strong>"+translations.list[i][1]+"</strong> </br> "+translations.list[i][2];
        items.appendChild(item);

        container.appendChild(items);
        expList.appendChild(container);

        // add experiences
        items = document.createElement('ul');

        if(translations.list[i][3] && typeof translations.list[i][3] === 'object') {
            for(let j = 0; j < translations.list[i][3].length; j++) {
                item = document.createElement('li');
                item.innerHTML = translations.list[i][3][j];
                items.appendChild(item);
            }
        }
        expList.appendChild(items);
    }
}

function populateSkills(translations){
    let container, item, subItem;

    skillsTitle.innerHTML = translations.title+":";
    skillsList.innerHTML = "";

    for(let i = 0; i < translations.list.length; i++){
        container = document.createElement('li');
        if(translations.list[i].length === 1){
            container.innerHTML = translations.list[i][0];
        } else {
            container.innerHTML = translations.list[i][0]+":";
            item = document.createElement('ul');
            item.classList.add("none");
            item.classList.add("col-2");
            for(let j = 0; j < translations.list[i][1].length; j++){
                subItem = document.createElement('li');
                subItem.innerHTML = translations.list[i][1][j];
                item.appendChild(subItem);
            }
            container.appendChild(item);
        }
        skillsList.appendChild(container);
    }
}
