# Food Delivery - MERN Stack Application

A complete food delivery web application built with MongoDB, Express.js, React.js, and Node.js.

## Features

- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **Meal Browsing**: Browse, search, and filter meals from TheMealDB
- **Shopping Cart**: Add/remove items, quantity management, guest and authenticated cart
- **Checkout**: Multiple delivery address support
- **Payment Integration**: Khalti, eSewa, IME Pay, and Cash on Delivery
- **Order Management**: Order tracking, history, and cancellation
- **Favorites**: Save favorite meals
- **User Dashboard**: Order history, statistics, profile management
- **Admin Dashboard**: User management, order management, meal management
- **Responsive Design**: Works on mobile, tablet, and desktop

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs
- Axios (for TheMealDB API)
- Helmet, CORS, Rate Limiting

### Frontend
- React 19
- Vite
- Tailwind CSS v4
- React Router v7
- Axios
- Lucide React Icons
- React Context API

## Project Structure

```
food-delivery/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── mealController.js
│   │   │   ├── cartController.js
│   │   │   ├── orderController.js
│   │   │   ├── paymentController.js
│   │   │   ├── userController.js
│   │   │   ├── favoriteController.js
│   │   │   └── adminController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Meal.js
│   │   │   ├── Cart.js
│   │   │   ├── Order.js
│   │   │   ├── Payment.js
│   │   │   └── Favorite.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── mealRoutes.js
│   │   │   ├── cartRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── favoriteRoutes.js
│   │   │   └── adminRoutes.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── adminMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── validationMiddleware.js
│   │   ├── services/
│   │   │   ├── mealService.js
│   │   │   └── payments/
│   │   │       ├── khaltiService.js
│   │   │       ├── esewaService.js
│   │   │       ├── imepayService.js
│   │   │       └── paymentService.js
│   │   ├── utils/
│   │   │   ├── generateToken.js
│   │   │   ├── calculateOrderTotal.js
│   │   │   └── apiError.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── auth/
│   │   │   └── meals/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── CategoryMeals.jsx
│   │   │   ├── MealDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── OrderDetails.jsx
│   │   │   ├── OrderTracking.jsx
│   │   │   ├── Favorites.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authApi.js
│   │   │   ├── mealApi.js
│   │   │   ├── cartApi.js
│   │   │   ├── orderApi.js
│   │   │   ├── paymentApi.js
│   │   │   ├── userApi.js
│   │   │   ├── favoriteApi.js
│   │   │   └── adminApi.js
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
└── .gitignore
```

## Installation

### Prerequisites

- Node.js (v18+)
- MongoDB (v6+)
- npm or yarn

### MongoDB Setup

1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Linux/Mac
   sudo systemctl start mongod
   
   # Or using brew
   brew services start mongodb-community
   ```

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Update environment variables in `.env`:
   ```
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://127.0.0.1:27017/food_delivery
   JWT_SECRET=your_jwt_secret_here_change_in_production
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:5173
   THEMEALDB_API_URL=https://www.themealdb.com/api/json/v1/1
   KHALTI_SECRET_KEY=
   KHALTI_PUBLIC_KEY=
   ESEWA_MERCHANT_ID=
   ESEWA_SECRET_KEY=
   IMEPAY_MERCHANT_CODE=
   IMEPAY_SECRET_KEY=
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Update environment variables in `.env`:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

5. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## Running the Application

### Start Backend
```bash
cd backend
npm run dev
```

### Start Frontend
```bash
cd frontend
npm run dev
```

### Access the Application
Open your browser and navigate to: `http://localhost:5173`

## API Documentation

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Meals
- `GET /api/meals` - Get all meals
- `GET /api/meals/search?q={query}` - Search meals
- `GET /api/meals/categories` - Get all categories
- `GET /api/meals/category/{category}` - Get meals by category
- `GET /api/meals/area/{area}` - Get meals by area
- `GET /api/meals/ingredient/{ingredient}` - Get meals by ingredient
- `GET /api/meals/{id}` - Get meal by ID
- `GET /api/meals/random` - Get random meals
- `POST /api/meals/sync` - Sync meal from TheMealDB (Admin)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/{mealId}` - Update cart item quantity
- `DELETE /api/cart/{mealId}` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Favorites
- `GET /api/favorites` - Get user's favorites
- `POST /api/favorites/{mealId}` - Add to favorites
- `DELETE /api/favorites/{mealId}` - Remove from favorites

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/{id}` - Get order by ID
- `PATCH /api/orders/{id}/cancel` - Cancel order
- `GET /api/orders/{id}/track` - Track order

### Payments
- `POST /api/payments/initiate` - Initiate payment
- `POST /api/payments/khalti/verify` - Verify Khalti payment
- `POST /api/payments/esewa/verify` - Verify eSewa payment
- `POST /api/payments/imepay/verify` - Verify IME Pay payment

### Users
- `GET /api/users/profile` - Get user profile
- `PATCH /api/users/profile` - Update user profile
- `POST /api/users/addresses` - Add address
- `PUT /api/users/addresses/{id}` - Update address
- `DELETE /api/users/addresses/{id}` - Delete address

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/users` - Get all users
- `PATCH /api/admin/users/{id}` - Update user
- `GET /api/admin/orders` - Get all orders
- `PATCH /api/admin/orders/{id}/status` - Update order status
- `GET /api/admin/meals` - Get all meals
- `PATCH /api/admin/meals/{mealId}` - Update meal

## Authentication

The application uses JWT (JSON Web Tokens) for authentication.

1. Register a new user at `/register`
2. Login at `/login`
3. JWT token is stored in localStorage
4. All protected routes require valid JWT token in Authorization header

## Admin Setup

To create an admin user:

1. Register a new user normally
2. Update the user's role in MongoDB:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   )
   ```

## Payment Integration

### Khalti
1. Sign up at https://khalti.com/
2. Get your SECRET_KEY and PUBLIC_KEY from the dashboard
3. Add to backend `.env`:
   ```
   KHALTI_SECRET_KEY=your_secret_key
   KHALTI_PUBLIC_KEY=your_public_key
   ```

### eSewa
1. Sign up at https://esewa.com.np/
2. Get your MERCHANT_ID and SECRET_KEY
3. Add to backend `.env`:
   ```
   ESEWA_MERCHANT_ID=your_merchant_id
   ESEWA_SECRET_KEY=your_secret_key
   ```

### IME Pay
1. Sign up at https://imepay.com.np/
2. Get your MERCHANT_CODE and SECRET_KEY
3. Add to backend `.env`:
   ```
   IMEPAY_MERCHANT_CODE=your_merchant_code
   IMEPAY_SECRET_KEY=your_secret_key
   ```

**Note**: If payment provider credentials are not configured, the application will still run in development mode using Cash on Delivery only.

## Order Payment Flow

1. Customer adds items to cart
2. Proceeds to checkout
3. Fills delivery address
4. Selects payment method
5. Backend validates cart and calculates total
6. Creates pending order
7. If online payment selected, redirects to payment provider
8. Payment provider redirects back to application
9. Backend verifies payment with provider
10. Updates order and payment status
11. Shows success/failure page

## TheMealDB Integration

The application uses TheMealDB API (https://www.themealdb.com/) for meal data:
- Meal discovery and browsing
- Category and area filtering
- Ingredient-based search
- Meal details and instructions

Application-specific data (prices, availability, ratings) is stored in MongoDB.

## Security Features

- bcrypt password hashing
- JWT authentication
- Protected routes
- Admin authorization
- Input validation
- MongoDB sanitization
- CORS configuration
- Helmet security headers
- Rate limiting on auth endpoints
- Payment signature verification
- Server-side payment verification
- Order total validation on backend

## Responsive Design

The application is fully responsive and works on:
- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Large screens

## Development Commands

### Backend
```bash
npm install      # Install dependencies
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in `.env`
2. Use a production MongoDB database (MongoDB Atlas recommended)
3. Set strong `JWT_SECRET`
4. Configure payment provider credentials
5. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name food-delivery-api
   ```

### Frontend
1. Run `npm run build`
2. Deploy the `dist` folder to a static hosting service (Vercel, Netlify, etc.)
3. Update `VITE_API_URL` to point to production backend

## License

MIT
