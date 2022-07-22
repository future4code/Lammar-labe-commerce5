import React, { useEffect, useState } from 'react';
import { Filtro } from './Components/Filtro';
import { Home } from './Components/Home';
import products from './utils/products.json';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState({
    name: '',
    minValue: '',
    maxValue: '',
  });

  useEffect(() => {
    setFilteredProducts(products.filter(product => {
      const nameCondition = product.name.toLowerCase().includes(filter.name.toLowerCase());
      const minCondition = !filter.minValue || product.value >= +filter.minValue;
      const maxCondition = !filter.maxValue || product.value <= +filter.maxValue;

      return nameCondition && minCondition && maxCondition;
    }));
  }, [filter]);

  return (
    <main
      style={{
        display: 'flex',
        height: 'calc(100vh - 16px)',
      }}
    >
      <Filtro setFilter={setFilter} />
      <Home filter={filteredProducts} />
    </main>
  );
}

export default App;
