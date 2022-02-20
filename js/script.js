// Search & close button

const searchBtn = document.querySelector(".search");
const closeBtn = document.querySelector(".cross");

searchBtn.addEventListener("click", (e) => {
  document.querySelector(".full-search").classList.toggle("show");
});

closeBtn.addEventListener("click", (e) => {
  document.querySelector(".full-search").classList.toggle("show");
});

// dropdown menu

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("factive");
  }

  document.querySelectorAll("[data-dropdown].factive").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("factive");
  });
});

// angle up-down arrow

function myFunc(x) {
  x.children[0].classList.toggle("fa-angle-up");
};

// toggling active classes for size div

const sizeDiv = document.querySelectorAll(".size-div");

let currentDiv;

sizeDiv.forEach((div) => {
  div.addEventListener("click", (e) => {
    currentDiv = e.target.closest(".size-div");
    if(div === currentDiv) {div.classList.toggle("mactive")}

    removeAllMactive();
    
    
    
  });
});

function removeAllMactive(){
  sizeDiv.forEach((div)=>{
    if(div!==currentDiv){
      div.classList.remove("mactive");
    }
  })
}


//Product slider
("use strict");

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -450 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

//products link

const productsBtn = document.querySelector(".products-link");
productsBtn.addEventListener("click", (e) => {
  document
    .querySelector(".products-dropdown-menu")
    .classList.toggle("active-menu");
});
