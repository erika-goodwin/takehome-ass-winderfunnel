

console.log('action test from script file')
// Default set
document.getElementById("defaultOpen").click();

function changeTabs(evt, selectedTab) {
  let tabcontent = document.getElementsByClassName("tab-content-con-box");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.querySelector(`#${selectedTab}`).style.display = "flex";
  evt.currentTarget.className += " active";
}
