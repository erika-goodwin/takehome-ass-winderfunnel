// inserting HTML <section>
let addingSection = document.querySelector(".careers-page-hero");
addingSection.insertAdjacentHTML(
  "afterend",
  '<section class="section-tab"><div class="tab"> <button id="defaultOpen" class="tablinks"　onclick="changeTabs(event,"tab1")"> Tab1 </button><button class="tablinks" onclick="changeTabs(event,"tab2")"> Tab2 </button></div><div class="tab-content"> <div class="tab-content-con"> <div id="tab1" class="tab-content-con-box box-1">   <div class="box-left"><div class="header-div"><ion-icon name="hammer-outline"></ion-icon><h2>Header</h2></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaslabore harum minima sit. Doloribus, quos. Fugit voluptatumquaerat numquam, quos non officia animi, reprehenderit maximesaepe eum voluptates illum inventore!</p><a href="#">Check with us<ion-icon name="arrow-forward-outline"></ion-icon></a></div><div class="box-right"><img src="http://127.0.0.1:5500/ass3/imgs/placeholder-image.png" alt="image" /></div></div><div id="tab2" class="tab-content-con-box box-2"><div class="box-botton-left"><ion-icon name="heart-circle-outline"></ion-icon><h2>Header</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaslabore harum minima sit. Doloribus, quos. Fugit voluptatumquaerat numquam, quos non officia animi, reprehenderit maximesaepe eum voluptates illum inventore!</p></div><div class="box-botton"><button class="btn">Try for free <ion-icon name="arrow-forward-outline"></ion-icon></button></div></div></div></div></section>'
);

//Inserting CSS
(function (root) {
  root.getStyle = function (url) {
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = url;
    document.head.appendChild(style);
  };
})(window);
getStyle('http://127.0.0.1:5500/ass3/style.css') 

//Inserting  Javascript
(function (root) {
  root.getScript = function (type, url) {
    var script = document.createElement("script");
    script.type = type;
    script.src = url;
    document.head.appendChild(script);
  };
})(window);

getScript('text/javascript', 'http://127.0.0.1:5500/ass3/script.js') 

getScript('module', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js') 






let addingScript = document.querySelector("body")
addingScript.insertAdjacentHTML(
    "beforeend",
    '<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>'
)
// addingScript.insertAdjacentHTML(
//     "beforeend",
//     '<script type="text/javascript" src="http://127.0.0.1:5500/ass3/script.js"></script>'
// )


