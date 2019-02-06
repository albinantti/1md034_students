

function getBurgers(){
  output = "";
  for(burger in food)
  {
    if(document.getElementById(food[burger].name).checked)
    {
      output += " "+(food[burger].name);
    }
  }
  return output;
}

function getGender(){
  if(document.getElementById("male").checked)
  {
    return "Male";
  } else if(document.getElementById("female").checked)
  {
    return "Female";
  } else {
    return "Other";
  }
}

function getFormValues(){
  var fn = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  var street = document.getElementById("street").value;
  var house = document.getElementById("house").value;
  var gender = getGender();
  var bu = getBurgers();
  var po = document.getElementById("payment_options").value;
  if(fn.length == 0 || email.length == 0 || street.length == 0 || house.length == 0)
  {
    alert("Please fill out all forms!");
    return {"fn":"", "em":"", "st":"", "ho":"", "ge":"", "po":"","bu":{}};
  }
  if(bu.length == 0)
  {
    alert("Please select at least one burger!");
    return {"fn":"", "em":"", "st":"", "ho":"", "ge":"", "po":"","bu":{}};
  }
  return {"fn":fn, "em":email, "st":street, "ho":house, "ge":gender, "po":po, "bu":bu};
}



/*
function MenuItem(name, ingredients, price, allergens, kcal) {
  this.name = name;
  this.ingredients = ingredients;
  this.price = price;
  this.allergens = allergens;
  this.kcal = kcal;
  this.getNameAndKcal = function() {
    return (this.name + " - " + this.kcal + " kCal");
  };
}


var burgerBurger = new MenuItem("Burger Burger", "Bread, Vegetables, Beef", 5.99, "Gluten", 800);
var veggieBurger = new MenuItem("Veggie Burger", "Bread, Vegetables", 5.99, "Gluten & Lactose", 600);
var invisiBurger = new MenuItem("InvisiBurger", "I mean it's literally just bread", 8.99, "Gluten", 400);
var air = new MenuItem("Air", "Nothing but fresh", 1.99, "", 0);
var burgerBurgerBurger = new MenuItem("Burger^3", "Burger with extra beef. Cubed.", 12.99, "Gluten", 999);

var menu = [burgerBurger, veggieBurger, invisiBurger, air, burgerBurgerBurger];

var myElement = document.getElementById("burgerList");
for (burger in menu) {
  var listItem = document.createElement("li");
  var string = menu[burger].name;
  if (menu[burger].allergens.length > 0)
  	{
  		string += " - Contains "+menu[burger].allergens;
  	}
  var listValue = document.createTextNode(string);

  listItem.appendChild(listValue);
  myElement.appendChild(listItem);

}

var myElement = document.getElementById("tablediv");
for(burger in food)
{
  var div = document.createElement("div");
  div.setAttribute("id", "burgerColumn");
  tablediv.appendChild(div);

  var burgername = document.createElement('h3');
  burgername.appendChild(document.createTextNode(food[burger].name));
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", food[burger].name);
  burgername.appendChild(checkbox);

//  burgername.appendChild();
  div.appendChild(burgername);

  var image = document.createElement("img");
  image.setAttribute("src", food[burger].img);
  div.appendChild(image);

  var ingredients = document.createElement("li");
  ingredients.innerHTML = "Ingredients: "+food[burger].ingredients;
  div.appendChild(ingredients);
  var price = document.createElement("li");
  price.innerHTML = "Price: $"+food[burger].price +" USD";
  div.appendChild(price);
  var kcal = document.createElement("li");
  kcal.innerHTML = "kCal: "+food[burger].kcal;
  div.appendChild(kcal);
  if(food[burger].allergens.length > 0)
  {
      var allergens = document.createElement("li");
      allergens.innerHTML = "Allergens: "+food[burger].allergens;
      allergens.setAttribute("id", "bold");
      div.appendChild(allergens);
  }

}

myElement.appendChild(document.createElement("br"));

function printOrder(){
  var order = getFormValues();
  var element = document.getElementById("orders");

  if(order.fn.length > 0)
  {
    var div = document.createElement("div");
    div.setAttribute("id", "finishedOrder");
    element.appendChild(div);

    var customerName = document.createElement("li");
    customerName.innerHTML = "Name: "+order.fn;
    div.appendChild(customerName);
    var email = document.createElement("li");
    email.innerHTML = "E-mail: " + order.em;
    div.appendChild(email);
    var street = document.createElement("li");
    street.innerHTML = "Address: "+order.st+" "+ order.ho;
    div.appendChild(street);
    var gender = document.createElement("li");
    gender.innerHTML = "Gender: "+order.ge;
    div.appendChild(gender);
    var payop = document.createElement("li");
    payop.innerHTML = "Payment Option: "+order.po;
    div.appendChild(payop);
    var borgars = document.createElement("li");
    borgars.innerHTML = "Burgers selected: "+order.bu;
    div.appendChild(borgars);

  }

}

document.getElementById("bugtton").onclick=printOrder;


*/
