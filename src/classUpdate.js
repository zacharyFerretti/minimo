/* Zachary Ferretti, December 25th, 2019 - 

    This script is launched when the page content is loaded. Every 100 millisec-
    onds the document checks if the length of the shortcuts array is != 0. When 
    it is not (which it will beafter the rest of the asynchronous JS has loaded) 
    we add a class to each of the shortcuts based on the title of the shortcut 
    (the name). This allows us to customize the color each shortcut has when 
    they are hovered over.

*/

document.addEventListener("DOMContentLoaded", () => {
  var i = setInterval(function() {
    if (document.getElementsByClassName("shortcut").length != 0) {
      clearInterval(i);
      array = document.getElementsByClassName("shortcut");
      for (i = 0; i < array.length; i++) {
        if (array[i].title == "r/all") {
          array[i].classList.add("reddit");
        } else if (array[i].title == "</>") {
          array[i].classList.add("devdocs");
        } else if (array[i].title == "►") {
          array[i].classList.add("youtube");
        } else {
          array[i].classList.add(array[i].title);
        }
      }
    }
  }, 100);
});
