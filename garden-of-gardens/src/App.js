import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactsPage from './pages/ContactsPage'; // Add this import statement
import NewsPage from './pages/NewsPage'; // Add this import statement
import HelpPage from './pages/HelpPage'; // Add this import statement
import CartPage from './pages/CartPage'; // Add this import statement
import BuyNowPage from './pages/BuyNowPage'; // Add this import statement

function App() {
  // Define your product data here or fetch it from an API
  const products = [
    // Sample product data
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage products={products} />
          </Route>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage /> {/* Use the imported component here */}
          </Route>
          <Route path="/news">
            <NewsPage /> {/* Use the imported component here */}
          </Route>
          <Route path="/help">
            <HelpPage /> {/* Use the imported component here */}
          </Route>
          <Route path="/cart">
            <CartPage /> {/* Use the imported component here */}
          </Route>
          <Route path="/buy-now">
            <BuyNowPage /> {/* Use the imported component here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
