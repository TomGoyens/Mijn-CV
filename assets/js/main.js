var englishBtn = document.getElementById("english");
var nederlandsBtn = document.getElementById("nederlands");
const hobbiesTitle = document.querySelector(".hobbiesTitle");
const hobbiesList = document.querySelector(".hobbiesList");
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
  }
}

xhr2.open("GET", "./assets/languages/nl.json", true);
xhr2.send();

englishBtn.addEventListener("click", translateToEnglish);

function translateToEnglish(){

  hobbiesTitle.innerHTML = en.hobbies.title+":";
  hobbiesList.innerHTML = "";
  let temp;
  let temp2;
  let temp3;
  for(let i = 0; i < en.hobbies.list.length; i++){
    temp = document.createElement('li');
    temp.innerHTML = en.hobbies.list[i];
    hobbiesList.appendChild(temp);
  }

  eduTitle.innerHTML = en.education.title+":";
  eduList.innerHTML = "";
  for(let i = 0; i < en.education.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = en.education.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+en.education.list[i][1]+":</strong> </br> "+en.education.list[i][2];
    temp.appendChild(temp2);
    eduList.appendChild(temp);
  }

  expTitle.innerHTML = en.experience.title+":";
  expList.innerHTML = "";
  for(let i = 0; i < en.experience.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = en.experience.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+en.experience.list[i][1]+":</strong> </br> "+en.experience.list[i][2];
    temp.appendChild(temp2);
    expList.appendChild(temp);
  }

  skillsTitle.innerHTML = en.skills.title+":";
  skillsList.innerHTML = "";
  for(let i = 0; i < en.skills.list.length; i++){
    temp = document.createElement('li');
    if(en.skills.list[i].length == 1){
      temp.innerHTML = en.skills.list[i][0];
    } else {
      temp.innerHTML = en.skills.list[i][0]+":";
      temp2 = document.createElement('ul');
      for(let j = 0; j < en.skills.list[i][1].length; j++){
        temp3 = document.createElement('li');
        temp3.innerHTML = en.skills.list[i][1][j];
        temp2.appendChild(temp3);
      }
      temp.appendChild(temp2);
    }
    skillsList.appendChild(temp);
  }
}
nederlandsBtn.addEventListener("click", translateToNederlands);

function translateToNederlands(){

  hobbiesTitle.innerHTML = nl.hobbies.title+":";
  hobbiesList.innerHTML = "";
  let temp;
  let temp2;
  let temp3;
  for(let i = 0; i < nl.hobbies.list.length; i++){
    temp = document.createElement('li');
    temp.innerHTML = nl.hobbies.list[i];
    hobbiesList.appendChild(temp);
  }

  eduTitle.innerHTML = nl.education.title+":";
  eduList.innerHTML = "";
  for(let i = 0; i < nl.education.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = nl.education.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+nl.education.list[i][1]+":</strong> </br> "+nl.education.list[i][2];
    temp.appendChild(temp2);
    eduList.appendChild(temp);
  }

  expTitle.innerHTML = nl.experience.title+":";
  expList.innerHTML = "";
  for(let i = 0; i < nl.experience.list.length; i++){
    temp = document.createElement('div');
    temp.classList.add("container");
    temp2 = document.createElement('p');
    temp2.innerHTML = nl.experience.list[i][0];
    temp.appendChild(temp2);
    temp2 = document.createElement('p');
    temp2.classList.add("tabbed");
    temp2.innerHTML = "<strong>"+nl.experience.list[i][1]+":</strong> </br> "+nl.experience.list[i][2];
    temp.appendChild(temp2);
    expList.appendChild(temp);
  }

  skillsTitle.innerHTML = nl.skills.title+":";
  skillsList.innerHTML = "";
  for(let i = 0; i < nl.skills.list.length; i++){
    temp = document.createElement('li');
    if(nl.skills.list[i].length == 1){
      temp.innerHTML = nl.skills.list[i][0];
    } else {
      temp.innerHTML = nl.skills.list[i][0]+":";
      temp2 = document.createElement('ul');
      for(let j = 0; j < nl.skills.list[i][1].length; j++){
        temp3 = document.createElement('li');
        temp3.innerHTML = nl.skills.list[i][1][j];
        temp2.appendChild(temp3);
      }
      temp.appendChild(temp2);
    }
    skillsList.appendChild(temp);
  }
}
