function changeState(name) {
    var images = document.getElementsByClassName(name);
    var targetState;

    for(var i = 0; i < images[0].classList.length; i++) {
        switch(images[0].classList[i]) {
        case "Title":
            targetState = "Main";
            images[0].classList.remove("Title");
            images[0].classList.add("Main");
            break;
        case "Main":
            targetState = "Title";
            images[0].classList.remove("Main");
            images[0].classList.add("Title");
            break;
        }
    }

    images[0].src="../assets/images/projects/" + name + "/" + targetState + ".png";
}