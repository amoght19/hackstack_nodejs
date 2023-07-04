# Restaurant Website

This is a model restaurant website that provides features such as user authentication, user profiles, landing page, and a menu page where users can browse and purchase items from the menu.

## Features

- User Authentication: Users can create accounts, log in, and log out.
- User Profiles: Each user has a profile page where they can view and update their personal information.
- Landing Page: The landing page provides an introduction to the restaurant and highlights its features.
- Menu Page: The menu page displays the available items for purchase. Users can browse the menu and add items to their cart.
- Shopping Cart: Users can add items to their cart, view the cart contents, and proceed to checkout.
- Order Placement: Users can place orders for the items in their cart. However, please note that this model website does not include an actual payment system.

## Technologies Used

- Node.js: Backend JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- EJS: Embedded JavaScript templating language for generating dynamic HTML.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository: 
   ```bash
   git clone https://github.com/amoght19/hackstack_nodejs.gi
   ```

2. Navigate to the project directory: 
   ```bash
   cd hackstack_nodejs
   ```
3. Create a .env file 

4. Create two keys in the .env file and replace <Your Username> with your username and <Your Password> with your password . Optionally Port at which application is to be runned can be set replacing <PORT> with your desried port.
   ```bash
   MONGODB_USERNAME=<Your Username>
   MONGODB_USER_PASSWORD=<Your Password>
   PORT=<PORT>
   ```
5. Install the dependencies: 
   ```bash
   npm install
   ```
6. Start the development server: 
   ```bash
   npm start
   ```
7. Open your web browser and visit: `http://localhost:3000`.
Note 3000 is default port number and can be changed with procss mention in step4.  

## Usage

1. Create an account or log in to an existing account.
2. Explore the landing page to learn more about the restaurant.
3. Visit the menu page to browse the available items.
4. Add items to your cart and proceed to checkout.
5. Place an order for the items in your cart.

Please note that this model website does not include an actual payment system, so no actual payments will be processed.

## Demo

https://restaurant-b9hq.onrender.com


## Contributing

Contributions are always welcome!
If you find any bugs or have suggestions for improvements, please open an `issue` or submit a `pull request`.

