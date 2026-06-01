# Trexo - Stock Trading Platform 📈

Trexo is a full-stack stock trading platform inspired by modern brokerage applications. It enables users to monitor stock holdings, manage watchlists, analyze portfolio performance, visualize market data, and perform trading-related operations through an interactive dashboard.

Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), Trexo provides a responsive user experience with real-time portfolio management capabilities and data visualization.

---

## 🚀 Features

### Landing Website
- Modern and responsive UI
- Home page with product showcase
- About section
- Pricing section
- Support section
- Navigation and footer
- React Router based navigation

### User Dashboard
- Holdings management
- Positions tracking
- Watchlist management
- Dashboard menu and navigation
- Interactive stock data display

### Authentication
- User Registration (Sign Up)
- User Login (Sign In)
- Password Hashing with bcrypt.js
- JWT Token Generation
- HTTP-Only Cookie Storage
- Cookie Parser Middleware
- Protected Routes
- User Logout
- Session Validation

### Data Visualization
- Stock analytics charts
- Chart.js integration
- Interactive visual reports

### Testing
- Unit testing with Jest
- Component testing


### Deployment
- Frontend deployment on Render
- Backend deployment on Render
- Environment variable configuration
- Production-ready build setup

---

## 🏗️ Project Architecture

```
Trexo
|
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.js
│   │   │   ├── BuyActionWindow.css
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DoughnutChart.js
│   │   │   ├── Funds.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Holdings.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   └── WatchList.js
│   │   │── data/
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── signup/
│   │   │   ├── support/
│   │   │   └── test/
│   │   │       └── Hero.test.js
│   │   │  ├── Footer.js
│   │   │  ├── Navbar.js
│   │   │  ├── NotFound.js
│   │   │  └── OpenAccount.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS3
- JavaScript 

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Data Visualization
- Chart.js

### Testing
- Jest

### Deployment
- Render

---

## 🚀 Future Improvements
- Integrate real-time stock market data using WebSockets and live trading APIs.
- Implement Multi-Factor Authentication (MFA) for enhanced account security.
- Add AI-powered stock recommendations and portfolio insights.
- Introduce paper trading and advanced portfolio analytics features.