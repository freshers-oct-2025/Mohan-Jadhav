const EventEmitter = require("events");

// Create an event emitter object
const event = new EventEmitter();

// Listen for the event
event.on("orderPizza", (size, topping) => {
  console.log(`🍕 Pizza ordered! Size: ${size}, Topping: ${topping}`);
});

// Emit (trigger) the event
event.emit("orderPizza", "Large", "Cheese");
