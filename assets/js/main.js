var englishBtn = document.getElementById("en");
var nederlandsBtn = document.getElementById("nl");
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
var en;
var nl;

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (this.status == 200) {
      en = JSON.parse(this.responseText);
      translateToEnglish();
  }
}

xhr.open("GET", "./assets/languages/en.json", true);
xhr.send();

var xhr2 = new XMLHttpRequest();

xhr2.onload = function() {
  if (this.status == 200) {
      nl = JSON.parse(this.responseText);
      // translateToNederlands();
  }
}

xhr2.open("GET", "./assets/languages/nl.json", true);
xhr2.send();

englishBtn.addEventListener("click", translateToEnglish);

function translateToEnglish(){
 translate(en);
}
nederlandsBtn.addEventListener("click", translateToNederlands);

function translateToNederlands(){
 translate(nl);
}


function translate(lang){
  let temp;
  let temp2;
  let temp3;

  hobbiesTitle.innerHTML = lang.hobbies.title+":";
  hobbiesList.innerHTML = "";
  for(let i = 0; i < lang.hobbies.list.length; i++){
    temp = document.createElement('li');
    temp.innerHTML = lang.hobbies.list[i];
    hobbiesList.appendChild(temp);
  }

  profielTitle.innerHTML = lang.profiel.title+":";
  profielText.innerHTML = lang.profiel.profielText;

  eduTitle.innerHTML = lang.education.title+":";
  eduList.innerHTML = "";
  for(let i = 0; i < lang.education.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = lang.education.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+lang.education.list[i][1]+"</strong> </br> "+lang.education.list[i][2] + "<br>"+ lang.education.list[i][3];
    temp.appendChild(temp2);
    eduList.appendChild(temp);
  }

  expTitle.innerHTML = lang.experience.title+":";
  expList.innerHTML = "";
  for(let i = 0; i < lang.experience.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = lang.experience.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+lang.experience.list[i][1]+"</strong> </br> "+lang.experience.list[i][2] + "<br>"+ lang.education.list[i][3];
    temp.appendChild(temp2);
    expList.appendChild(temp);
  }

  skillsTitle.innerHTML = lang.skills.title+":";
  skillsList.innerHTML = "";
  for(let i = 0; i < lang.skills.list.length; i++){
    temp = document.createElement('li');
    if(en.skills.list[i].length == 1){
      temp.innerHTML = lang.skills.list[i][0];
    } else {
      temp.innerHTML = lang.skills.list[i][0]+":";
      temp2 = document.createElement('ul');
      temp2.classList.add("listStyle1");
      for(let j = 0; j < lang.skills.list[i][1].length; j++){
        temp3 = document.createElement('li');
        temp3.innerHTML = lang.skills.list[i][1][j];
        temp2.appendChild(temp3);
      }
      temp.appendChild(temp2);
    }
    skillsList.appendChild(temp);
  }
}
