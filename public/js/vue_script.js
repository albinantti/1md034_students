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

'use strict';
var socket = io();

var vm = new Vue({
  el: '#tablediv',
  data: {
    arbitraryVariableName: 'Välj en burgare - ' + new Date().toDateString(),
    food: food
  }
});

var vm2 = new Vue({

  el: "#orders2",
  data:
  {
    placedorder: {"fn":"", "em":"",/* "st":"", "ho":"",*/ "ge":"", "po":""},
    orders: {},
    position: {},
    draw: false
  },/*
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },*/
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    order: function(){
      console.log("Button clicked!");
      this.placedorder = getFormValues();
      if(this.placedorder.fn.length > 0) {
        this.addOrder();
      };
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.position.x,
                                           y: this.position.y },
                                orderItems: this.placedorder.bu,
                                personal: this.placedorder
                              });
    },
    displayOrder: function () {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.position = { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y };
      this.draw = true;

    }
  }
});
