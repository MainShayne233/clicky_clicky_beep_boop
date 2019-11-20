# Assignment 1

Your first assignment is to have it so when you click the "Mine Bitcoin" button, the "Total bitcoins mined: " count increases by 1.

## Hints:

- If you break this problem down, it could look like this:
  - User clicks the button
    - First, determine what the current amount of bitcoins are
    - Add 1 to that amount
    - Update the message to reflect the new count
- When you click the button now, it simply logs to the JavaScript console. If you haven't done it before, look up how to view the JavaScript console in whatever browser you're using.
- The code that will run after you click the button will go where that console.log is.
- In order to get the current bitcoin count, you're gonna have to access the innerHTML of the <p> element. You can google "how to access innerHTML".
- Once you got the bitcoin count and added 1 to it, you're gonna have to update the innerHTML of the <p> element. You can google "how to modify innerHTML".
