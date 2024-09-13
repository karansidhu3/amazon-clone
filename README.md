# Amazon Clone

## Overview

The **Amazon Clone** is a front-end web application designed to mimic the functionality of Amazon’s e-commerce platform. This project demonstrates my skills in **HTML**, **CSS**, **JavaScript**, and **React**. The application focuses on dynamic product listings, a responsive shopping cart, and order history—all built using modern web technologies.

## Features

- **Product Listings**: Display a list of products dynamically fetched from a mock API.
- **Cart Management**: Add and remove items from the shopping cart, with real-time updates to the total price.
- **Responsive Design**: Ensures optimal viewing experience across a wide range of devices (mobile, tablet, desktop).
- **Order History**: Keep track of past purchases using local storage (or mock data).

## Tech Stack

### Frontend

- **HTML5** & **CSS3**: For structuring and styling the web pages.
- **JavaScript (ES6+)**: For interactive elements and data manipulation.
- **React**: Used to build reusable UI components, manage state with React Hooks, and handle page routing.

### Tools & Libraries

- **React Router**: For handling navigation and routing within the app.
- **CSS Flexbox & Grid**: For responsive layouts.
- **Axios/Fetch API**: For fetching product data from a mock API.
- **Local Storage**: To persist cart data and order history on the client-side.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/karansidhu3/amazon-clone.git
   cd amazon-clone
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm start
   ```
4. **View the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Project Breakdown

### 1. **React Components**

- **ProductList**: Displays a list of products fetched from a mock API.
- **Cart**: Manages adding/removing items, and updates total price dynamically.
- **OrderHistory**: Keeps track of the user’s orders using local storage.

### 2. **State Management**

- **useState & useEffect**: React Hooks were used to manage application state, including cart and product data. `useEffect` was used to fetch products and update the UI when data changed.
- **Local Storage**: Cart data and order history persist between page reloads using the browser's local storage.

### 3. **Responsive Design**

- The design was built using **CSS Flexbox** and **CSS Grid** to ensure that the website looks good on any screen size.
- Media queries were used to adjust the layout based on device size.


