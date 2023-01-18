const datalist = document.querySelector("#Ice-Cream-names");
const searchform = document.querySelector("#search-form");
const inputfield = document.querySelector("#icecream");
const ul = document.createElement("div");
ul.classList.add("card");
searchform.addEventListener("submit", submithandler);
import data from "./data.js";
datalist.onselect = (eventdata) => console.log(eventdata);
// const populateOptions = (arr=[]) => {
data.forEach(createOption);

//  }

// create option tag
//option tag. text conent = obj.name
//append to datalist
function createOption(obj) {
  const opt = document.createElement("option");
  opt.value = obj.name;
  datalist.appendChild(opt);
}
function submithandler(e) {
  e.preventDefault();
  cleanup();
  document.body.appendChild(ul);
  const dataObj = data.find((obj) => {
    return obj.name === inputfield.value;
  });
  //[key,name,descrption,...]
  Object.keys(dataObj).forEach((key) => {
    const li = document.createElement("div");
    const highlight = document.createElement("strong");
    highlight.textContent = key;
    const detail = document.createElement("div");
    detail.textContent = dataObj[key];
    li.appendChild(highlight);
    li.appendChild(detail);
    // li.textContent = `:${dataObj[key]}`;
    ul.appendChild(li);
  });
}
function cleanup() {
  console.log(document.body.contains(ul));
  if (document.body.contains(ul)) {
    //  ul.style.display = "none";
  }
}
