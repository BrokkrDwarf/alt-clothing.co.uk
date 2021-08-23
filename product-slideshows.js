// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  showSlidesModal(currentSlide)  
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
*/
/*
function changeSlide(n, modal) {
  First of all, hide all the pictures 
  let temp = null
  let toShow = null
  if (modal) {
    for(let i=1; i<7;i++){
      temp = document.getElementById("small_slide"+String(i))
      temp.style.display = "none"
    }
    toShow = document.getElementById("small_slide"+String(currentSlide))
    toShow.style.display = "block"
  }
  else {
    for(let i=1; i<7;i++){
      temp = document.getElementById("modal_slide"+String(i))
      temp.style.display = "none"
    }
    console.log(typeof(temp))
    currentSlide+=n
    console.log(typeof(temp))
    console.log(temp)
  
    toShow = document.getElementById("modal_slide"+String(currentSlide))
    toShow.style.display = "block"
  }
}
*/
var currentSlide = 1

function changeSlide (n, modal) {
  
  if (currentSlide+n>6) {
    currentSlide=1
  }
  else {
    currentSlide += n
  }
  if (modal) {
    let slides = document.getElementsByClassName("mySlides2")
    slides.forEach(slide => {
      slide.style.display = "none"
    });
    slides[currentSlide-1].style.display = "block"
  }
  else {
    let slides = document.getElementsByClassName("mySlides1")
    slides.forEach(slide => {
      slide.style.display = "none"
    });
    slides[currentSlide-1].style.display = "block"
  }
}

function showSlidesModal(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
dots[slideIndex-1].className += " active";


function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


var x,l,ll,selElmnt,a,b,c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (let i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (let j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (let i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (let k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
