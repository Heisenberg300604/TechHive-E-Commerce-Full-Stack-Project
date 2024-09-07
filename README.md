# TechHive: Full-Stack E-commerce Platform

TechHive is a feature-rich E-commerce platform built using React, Firebase, and TailwindCSS. This platform allows users to browse products, manage carts, and complete purchases with a smooth and secure payment process through Razorpay.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication, with password recovery and social logins (Google, Facebook).
- **Admin Dashboard**: Role-based access control for admins to manage products, orders, and users.
- **Product Catalog**: A searchable, sortable, and filterable product catalog for seamless browsing.
- **Shopping Cart & Checkout**: Add items to the cart, update quantities, and complete purchases with integrated Razorpay payment gateway.
- **State Management**: Redux and Context API for efficient state management.
- **Responsive Design**: Fully responsive interface using TailwindCSS for mobile, tablet, and desktop views.

## Demo

Check out the live demo: [TechHive Live](techhive-electronics-market.vercel.app)

## Installation

### Prerequisites

Before running the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [Firebase](https://firebase.google.com/) project setup for backend services
- [Razorpay](https://razorpay.com/) account for payment gateway integration

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/TechHive.git
   cd TechHive
2. **Install dependencies:**

    ```bash
   npm install
3. **Start the development server:**
   ```bash
   npm run dev

# Folder Structure
    
    TechHive/
    │
    ├── public/                   # Public assets like the index.html, favicon, manifest
    │   ├── index.html            # Main HTML file
    │   └── favicon.ico           # App Icon
    │
    ├── src/                      # Source code for the application
    │   ├── assets/               # Static assets (images, icons, etc.)
    │   ├── components/           # Reusable components (e.g., Navbar, Footer, ProductCard)
    │   ├── config/               # Configuration files (Firebase, Razorpay)
    │   ├── context/              # Context API setup for global state
    │   ├── pages/                # Page components (Home, ProductDetails, Cart, Admin, etc.)
    │   ├── redux/                # Redux slices and store for state management
    │   ├── routes/               # Route configuration (ProtectedRoute, AdminRoute)
    │   ├── App.jsx               # Main App component
    │   ├── index.css             # Global CSS styling
    │   ├── main.jsx              # Entry point of the application
    │
    ├── .eslintrc.cjs             # ESLint configuration
    ├── .gitignore                # Files to ignore in version control
    ├── package.json              # Project dependencies and scripts
    ├── package-lock.json         # Locked versions of dependencies
    ├── postcss.config.js         # PostCSS configuration for TailwindCSS
    ├── tailwind.config.js        # TailwindCSS configuration file
    ├── vite.config.js            # Vite configuration file
    └── README.md                 # Project documentation
      

    
    
## Firebase Setup

To set up Firebase for this project, follow these steps:

1. **Create a Firebase project**:
   - Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and follow the setup instructions.

2. **Firebase Authentication**:
   - Go to the Authentication section in your Firebase project.
   - Enable authentication methods like **Email/Password** and **Google** for social login.
   
3. **Firebase Firestore**:
   - Navigate to Firestore Database in Firebase.
   - Create collections for your **products**, **users**, and **orders** data.

4. **Firebase Configuration**:
   - After setting up Firebase, you will get a Firebase configuration object. Add it in your project under `src/config/firebase.js`:
     ```js
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };
     export default firebaseConfig;
     ```

## Razorpay Setup

To enable payment processing with Razorpay:

1. **Create a Razorpay Account**:
   - Go to [Razorpay](https://razorpay.com/) and sign up for a merchant account.

2. **Generate API Keys**:
   - Go to the Razorpay Dashboard and generate your **Key ID** and **Key Secret**.

3. **Integrate Razorpay**:
   - Create a file `src/config/razorpay.js` and add your Razorpay API keys:
     ```js
     export const razorpayConfig = {
       key_id: "YOUR_RAZORPAY_KEY_ID",
       key_secret: "YOUR_RAZORPAY_SECRET",
     };
     ```

4. **Payment Integration**:
   - Ensure your backend handles payment requests and responses securely to manage payment success/failure states.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Launches the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view the app in the browser. The page reloads automatically when you make changes.

- **`npm run build`**: Builds the app for production. It optimizes the build for the best performance.

- **`npm run lint`**: Runs code linting to check for style issues or potential bugs.

- **`npm run deploy`**: Deploys the app to Vercel or your preferred hosting platform.

## Technologies Used

- **Frontend**: 
  - **React**: JavaScript library for building user interfaces.
  - **Redux**: For global state management.
  - **Context API**: For lightweight state management in some parts of the app.
  - **TailwindCSS**: Utility-first CSS framework for styling.

- **Backend**:
  - **Firebase Authentication**: User authentication and session management.
  - **Firebase Firestore**: NoSQL cloud database for storing product, user, and order data.

- **Payment Gateway**:
  - **Razorpay**: Integrated for secure online payments and order handling.

- **Deployment**:
  - **Vercel**: For hosting and continuous deployment of the project.

## Contributing

We welcome contributions to TechHive! If you'd like to contribute, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone the repository** to your local machine.

   ```bash
   git clone https://github.com/yourusername/TechHive.git
