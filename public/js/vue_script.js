/*
function MenuItem(name, ingredients, price, allergens, kcal, img) {
  this.name = name;
  this.img = img;
  this.ingredients = ingredients;
  this.price = price;
  this.allergens = allergens;
  this.kcal = kcal;
  this.getNameAndKcal = function() {
    return (this.name + " - " + this.kcal + " kCal");
  };
}
*/
var vm = new Vue({
  el: '#tablediv',
  data: {
    arbitraryVariableName: 'Välj en burgare - ' + new Date().toDateString(),
    food: food
  }
})

var vm2 = new Vue({

  el: "#orders",
  data:
  {
    placedorder: {"fn":"", "em":"", "st":"", "ho":"", "ge":"", "po":""}
  },
  methods: {
    order: function(){
      console.log("Button clicked!");
      this.placedorder = getFormValues();
    }
  }


})
