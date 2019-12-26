/*document.addEventListener("DOMContentLoaded", function() {
  //var button = document.getElementById("MYBUTTON");
  // onClick's logic below:
  button.addEventListener("click", function() {
    //alert(document.getElementsByClassName("shortcut"[0]));
    array = document.getElementsByClassName("shortcut");
    for (i = 0; i < array.length; i++) {
      //console.log(array[i].title);
      array[i].classList.add(array[i].title);
    }

    console.log(document.getElementsByClassName("shortcut")[0].title);
  });
});*/

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
      // safe to execute your code here
    }
  }, 100);
});
/*console.log(document);
  console.log(document.getElementsByClassName("shortcut"));

  
  console.log("testing");
  console.log(document.getElementsByClassName("shortcut").length);
  
  console.log(array);
});*/
