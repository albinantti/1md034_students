function MenuItem(name, price, ingredients, kcal) {
  this.name = name;
  this.price = price;
  this.ingredients = ingredients;
  this.kcal = kcal;
  this.getNameAndKcal = function() {
    return this.name + " - " + this.kcal + " kCal";
  }
}
