// Import events module
const EventEmitter = require("events");

// Create event object
const event = new EventEmitter();

// Listen for the event
event.on("order", (item, qty) => {
  console.log(`✅ Order received: ${qty} ${item}(s)`);
});

// Trigger (emit) the event
event.emit("order", "Pizza", 2);
