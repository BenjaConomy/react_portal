import React from 'react';

import '../App.css';
import NavbarComponent from '../components/navbar_component';
import ProductsListComponent from '../components/products_list_component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ProductsListComponent />
    </div>
  );
}

export default App;
