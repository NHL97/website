import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Contact from './components/Contact';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/task" element={<Task/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
