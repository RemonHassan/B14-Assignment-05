# Dev Stack

A simple and easy-to-use website where developers can browse tech tools and build their own custom technology stack.

---

## What is this project?

**Dev Stack** lets developers explore popular tools (like React, Tailwind, or Node.js), check out their details and star ratings, and click to save them into a personal list on the side.

---

## Technologies Used

- **React** (JavaScript library for building the interface)
- **TypeScript** (Adds types to code to prevent bugs)
- **Tailwind CSS & DaisyUI** (For styling and layout)
- **React Toastify** (For pop-up message alerts)

---

## 3 Main Features

1. **Add & Remove Tools:** Click "Add to Stack" to save a tool into your sidebar list. You can remove individual tools or clear them all at once.
2. **Smart Buttons & Pop-ups:** Buttons change to "Added to Stack" once clicked so you can't add duplicates, and a friendly pop-up message appears.
3. **Mobile Friendly:** Works great on mobile phones, tablets, and desktop computers.

---

## React Questions & Simple Answers

### 1. What is JSX, and why is it used in React?

**JSX** lets you write HTML code directly inside JavaScript.

- **Why we use it:** It makes writing React components much easier because you can see what your UI looks like right next to your logic.

### 2. What is the difference between props and state?

Think of **props** like receiving a package in the mail—you didn't create it, you can't edit what's inside, but you can use whatever was delivered to you. **State** is like your personal notebook—you created it, you write in it, and whenever you update a page, your screen immediately changes to reflect what you wrote.

- **Where it comes from:** Props are passed down to a component from its parent. State is born and managed right inside the component itself.
- **Can you change it?** Props are read-only (a child component can't edit them). State can be updated anytime using its setter function (like `setAddToStack`).
- **What it's used for:** Props pass data down the tree (like giving a card its title or icon). State tracks interactive things that change over time (like clicking a button or adding an item to a list).

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` gives a component a memory. When you update a value in `useState`, React automatically redraws the screen to show the new data.

- **Where I used it:** I used it to hold the list of selected technologies (`addToStack`) so the sidebar updates whenever a user clicks a button.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code automatically after the component shows up on the screen.

- **Why we need it:** Fetching data takes time. `useEffect` lets React load the page first, then grab the JSON data in the background without freezing the site.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` acts like an ID tag. It helps React keep track of which items in a list were added, deleted, or changed so it only updates those specific items on the screen.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things on the screen depending on the situation (like showing a "Log In" button if you're logged out).

### 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child (Direct Delivery): The parent passes data down directly using props. It’s like handing a child a toy with instructions on how to use it.
Child to Parent (Phone Call Back): A child cannot directly change the parent's data on its own. Instead, the parent hands the child a callback function (or state updater) as a prop. When an action happens in the child (like clicking an "Add to Stack" button), the child calls that function to send the new data back up.
