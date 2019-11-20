// This is how you write comments in JavaScript!

// This might look a little crazy, but let's break it down:
//
// document.getElementById is a special function that will give you access to the
// HTML element that has the id that you passed it.
//
// If you look back in the HTML, you'll see that our <button> element has id="mine-bitcoin-button" set on it
//
// So here we're simply saying: "Find the button with the id 'mine-bitcoin-button' and assign it to a variable called
// 'mineBitcoinButton'.
//
// This variable now lets us refer to it in the rest of our program.
var mineBitcoinButton = document.getElementById("mine-bitcoin-button");

// Let's break down what's going on here:
//
// - We take our mineBitcoinButton, which refers to our <button> element, and we're adding an event listener to it.
// - An event listener is just something that says: "I want to run some code whenever something specific happens to this element".
// - In this case, we're saying: "Whenever the button gets clicked, I want you to print to a message to the console"
mineBitcoinButton.addEventListener("click", function() {
  console.log("You clicked me, but I do not do anything yet");
  // If you ever wanted something else to happen when you click the button, you'd add that code here.
})
