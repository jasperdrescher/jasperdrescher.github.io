filterSelection("all");

var activeButton;

function filterSelection(keyword, element) {
  var divs, i;
  if (element != null)
  {
    setActiveButton(element);
  }
  divs = document.getElementsByClassName("filterDiv");
  if (keyword == "all") {
    keyword = "";
  }
  for (i = 0; i < divs.length; i++) {
    removeClass(divs[i], "show");
    if (divs[i].className.indexOf(keyword) > -1) {
      addClass(divs[i], "show");
    }
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function setActiveButton(element) {
  activeButton = element;
  var activeButtons = document.getElementsByClassName("active");

  for (i = 0; i < activeButtons.length; i++) {
    removeClass(activeButtons[i], "active");
  }

  if(!activeButton.classList.contains("active")) {
    addClass(activeButton, "active");
  }
}