//=========Sidebar=========
function createSection(name) {
  let sectionSide = document.createElement("section");
  sectionSide.setAttribute("class", `section-${name}`);

  let sectionText = document.createElement("h3");
  let h3Text = document.createTextNode(`${name} Section`);
  sectionText.appendChild(h3Text);

  sectionSide.appendChild(sectionText);
}

let insertPointDiv = document.querySelector("#content");
let sectionSideClass = document.querySelector(".section-sidebar");
let primaryDiv = document.querySelector("#primary");

//Adding side bar div
insertPointDiv.appendChild(createSection(sidebar));

//Styling for sidebar
sectionSideClass.style.width = "25%";
sectionSideClass.style.height = "85vh";
sectionSideClass.style.position = "fixed";
sectionSideClass.style.right = "0px";
sectionSideClass.style.display = "block";
sectionSideClass.style.background = "red";

//Styling for parent and sibling div
insertPointDiv.style.position = "relative";
primaryDiv.style.width = "70%";
insertPointDiv.style.display = "flex";

function isInViewport(e, margin) {
  const rect = e.getBoundingClientRect();
  if (!margin) margin = 0;
  return (
    rect.bottom >= -margin &&
    rect.right >= -margin &&
    rect.top <= window.innerHeight + margin &&
    rect.left <= window.innerWidth + margin
  );
}

document.addEventListener("scroll", function (e) {
  let footerDiv = document.querySelector("#colophon");
  let booCheck = isInViewport(footerDiv);

  if (!booCheck) {
    sectionSideClass.style.display = "block";
  } else {
    sectionSideClass.style.display = "none";
  }
});

if (window.innerWidth < 1008) {
  sectionSideClass.style.display = "none";
}

//=========Modal=========
function createButton(element) {
  let btn = document.createElement("button");
  btn.innerHTML = "Open Modal";
  btn.type = "button";
  btn.name = "modalbtn";
  btn.onclick = function () {
    modalOn();
    alert("modal Button is clicked");
  };

  element.appendChild(btn)
}
createButton(sectionSideClass);




function modalOn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}

function modalOff() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

function createModal(element){
    let overlayDiv = document.createElement("div");
    overlayDiv.setAttribute("id", `overlay`);
    let modalDiv = document.createElement("div");
    modalDiv.setAttribute("id", `modal`);

    let modalbtn = document.createElement("button");
    modalbtn.innerHTML = "X";
    modalbtn.onclick = function () {
      modalOff();
      alert("close Button is clicked");

    };

    let modalHeadline = document.createElement("h1");
    let h1Text = document.createTextNode('Modal headline is here');
    modalHeadline.appendChild(h1Text)
    modalHeadline.setAttribute("class", 'modal-h');

    let modalPara = document.createElement("p");
    let pText = document.createTextNode('Modal text is here');
    modalPara.appendChild(pText)
    modalPara.setAttribute("class", 'modal-p');


    modalDiv.style.background = 'gray'
    modalDiv.style.width = '500px'
    modalDiv.style.height = '250px'
    modalDiv.style.color = 'white'
    modalDiv.style.display = 'none'
    modalDiv.style.position = 'fixed'
    modalDiv.style.top = '40%'
    modalDiv.style.left = '40%'
    modalDiv.style.zIndex = '10'


    overlayDiv.style.position = 'fixed'
    overlayDiv.style.display = 'none'
    overlayDiv.style.width = '100%'
    overlayDiv.style.height = '100%'
    overlayDiv.style.top = '0'
    overlayDiv.style.right = '0'
    overlayDiv.style.bottom = '0'
    overlayDiv.style.left = '0'
    overlayDiv.style.backgroundColor = 'rgba(0,0,0,0.5)'
    overlayDiv.style.zIndex = '5'

    modalDiv.appendChild(modalbtn)
    modalDiv.appendChild(modalHeadline)
    modalDiv.appendChild(modalPara)

if(window.screen.width > 1200){

}else(window.screen.width < 768){

}



    overlayDiv.appendChild(modalDiv)

    
    element.appendChild(overlayDiv)
}

let insertModalPoint =  document.querySelector("#page");
createModal(insertModalPoint)


window.addEventListener('resize', function(){
  const widthOutput = document.querySelector('#overlay');

  if()

})