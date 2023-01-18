function display() {
  var iceCream = document.getElementById("textbox1").value; //storing textbox container value in a variable
  var textbox2 = document.getElementById("textbox2"); // storing textbox control as a container in a variable
  textbox2.value = "Your order is:" + iceCream;
  document.getElementById("orderDisplay").textContent = iceCream;
}

//document.getElementById("Button").addEventListener("click", display);
/*const target = document.getElementsByClassName("module2");
const btn = document.getElementById("button1");
btn.addEventListener("click", () => {
  if (target.style.display === "none") {
    //this shows the form
    target.style.display = "block";
  } else {
    // this hides the form
    target.style.display = "none";
  }
});*/

/*function appear() {
  const target = document.getElementsByClassName("module2");
  const btn = document.getElementById("button1");
  if (target.style.display === "none") {
    //this shows the form
    target.style.display = "block";
  } else {
    // this hides the form
    target.style.display = "none";
  }
}*/
/*
const api_url = "./data.json";

async function getApi(api_url) {
  const response = await fetch(api_url);
  var data1 = await response.json();
  console.log(data1);
}*/

var ul = document.createElement("ul");
ul.setAttribute("id", "mylist");
document.body.appendChild(ul);
/*
function display() {
  let text = document.getElementById("icecream").value;
  let s1 = "vanilla";
  if (text == s1) {
    var li = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    var listItem = document.createTextNode("rating: 4.7");
    var listItem2 = document.createTextNode("rating_count: 10");
    var listItem3 = document.createTextNode(" subhead:Vanilla Ice Cream");
    var listItem4 = document.createTextNode(
      "description:When you dig into this pint, youâll find a rich, creamy Vanilla thatâs more vanilla-tasting than any Vanilla youâve ever tasted"
    );
    var listItem5 = document.createTextNode(
      "ingredients:CREAM, SKIM MILK, LIQUID SUGAR (SUGAR, WATER), WATER, EGG YOLKS, SUGAR, GUAR GUM, VANILLA EXTRACT, VANILLA BEANS, CARRAGEENAN"
    );
    li.appendChild(listItem);
    li2.appendChild(listItem2);
    li3.appendChild(listItem3);
    li4.appendChild(listItem4);
    li5.appendChild(listItem5);

    document.getElementById("mylist").appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  }
}*/

/*var button = document.getElementById("btn");
button.addEventListener("click", display);*/
//["vanilla",]
function display() {
  var text1 = document.getElementById("icecream").value;
  var s1 = "Vanilla";
  var s2 = "Chocolate";
  var s3 = "Strawberry";
  var s4 = "ButterScotch";
  let data;
  if (text1 == s1) {
    data = [
      "name: Vanilla",
      "subhead:Vanilla Ice Cream",
      "description:When you dig into this pint, youâll find a rich, creamy Vanilla thatâs more vanilla-tasting than any Vanilla youâve ever tasted",
      "ingredients:CREAM, SKIM MILK, LIQUID SUGAR (SUGAR, WATER), WATER, EGG YOLKS, SUGAR, GUAR GUM, VANILLA EXTRACT, VANILLA BEANS, CARRAGEENAN",
      "rating: 4.7",
      "rating_count: 10",
    ];
  }
  if (text1 == s2) {
    data = [
      "name: Chocolate TherapyÂ®",
      "subhead: Chocolate Ice Cream with Chocolate Cookies & Swirls of Chocolate Pudding Ice Cream",
      "description: You know how sometimes you just want to scream? You could just scream, or you could grab a spoon, get a grip, and treat yourself to some primal s'cream therapy of the sublimest chocolate kind. (Euphoria may occur upon tasting.)",
      "rating: 4.8",
      "rating_count: 72",
      "ingredients: CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, COCOA (PROCESSED WITH ALKALI), WHEAT FLOUR, SUGAR, SOYBEAN OIL, BROWN SUGAR, EGG YOLKS, CHOCOLATE LIQUOR, COCOA, HONEY, GUAR GUM, COCOA BUTTER, VANILLA EXTRACT, SALT, BAKING SODA, NATURAL FLAVORS, SOY LECITHIN, CARRAGEENAN",
    ];
  }
  if (text1 == s3) {
    data = [
      "name: Strawberry Cheesecake",
      "subhead: Strawberry Cheesecake Ice Cream with Strawberries & a Thick Graham Cracker Swirl",
      "description: For strawberry cheesecake lovers whoâve always wanted to have their cheesecake & scoop it, too, weâve created a flavor jam-packed with strawberry cheesecake-greatness & a fantastic graham-cracker swirl.",
      "rating: 4.7",
      "rating_count: 231",
      "ingredients: CREAM, SKIM MILK, WATER, LIQUID SUGAR (SUGAR, WATER), SUGAR, STRAWBERRIES, SOYBEAN OIL, STRAWBERRY PUREE, EGG YOLKS, CORN STARCH, CREAM CHEESE (CULTURED PASTEURIZED MILK AND CREAM, SALT, ENZYMES), WHEAT FLOUR, GRAHAM FLOUR, SALT, BUTTEROIL, CANOLA OIL, GUAR GUM, NATURAL FLAVORS, TAPIOCA STARCH, MOLASSES, HONEY, LACTIC ACID, SOY LECITHIN, SODIUM BICARBONATE, LEMON JUICE CONCENTRATE, PECTIN, CARRAGEENAN",
    ];
  }
  if (text1 == s4) {
    data = [
      "name: Peanut Butter Fudge Core",
      "subhead: Chocolate & Peanut Butter Ice Creams with Mini Peanut Butter Cups & a Peanut Butter Fudge Core",
      "description: Find your way to the ultimate ice cream experience with our Cores. Whether your primal urges lead you to the center of peanut butter fudge or directly to the peanut butter cups, youâll be in total control of your own ice cream destiny.",
      "rating: 4.7",
      "rating_count: 19",
      "ingredients: CREAM, SKIM MILK, LIQUID SUGAR (SUGAR, WATER), WATER, PEANUTS, SUGAR, COCONUT OIL, COCOA PROCESSED WITH ALKALI, CORN SYRUP, DRIED CANE SYRUP, EGG YOLKS, COCOA, PEANUT OIL, MILK, SALT, GUAR GUM, SOY LECITHIN, CARRAGEENAN, NATURAL FLAVOR, VANILLA EXTRACT",
    ];
  }
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    document.getElementById("mylist").appendChild(li);
  });
}
