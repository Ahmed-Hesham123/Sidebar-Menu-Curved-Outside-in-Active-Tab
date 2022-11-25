let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", (eo) => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

// add active class in selected list item
let list = document.querySelectorAll(".list");
list.forEach((item) => {
  item.addEventListener("click", (eo) => {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// another method

/*
let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
*/

// another method

/*
let list = document.querySelectorAll(".list");
for(let i=0;i<list.length;i++){
    list[i].onclick = function(){
        let j=0;
        while(j<list.length){
            list[j++].className = "list";
        }
        list[i].className = "list active";
    }
}
*/
