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
