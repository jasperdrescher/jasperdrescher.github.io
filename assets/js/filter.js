filterSelection("all");

function filterSelection(keyword, element) {
  var divs, i;
  divs = document.getElementsByClassName("filterDiv");
  if (keyword == "all" || !setActiveButton(element)) {
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
  if (element.classList) {
    element.classList.add(name);
  } else {
    element.className += ' ' + name;
  }
}

function removeClass(element, name) {
  if (element.classList) {
    element.classList.remove(name);
  } else {
    element.className = el.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function setActiveButton(element) {
  var activeButtons = document.getElementsByClassName("active");
  if(activeButtons[0] == null) {
    addClass(element, "active");
    return true;
  }
  else {
  removeClass(activeButtons[0], "active");
  return false;
  }
}