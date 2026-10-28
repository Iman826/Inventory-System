import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDeleteProduct }) => {
  const [filter, setFilter] = useState('All');

  const filtered = products.filter(p => filter === 'All' ? true : p.category === filter);

  return (
    <div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Filter Bracket:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{ padding: '5px', borderRadius: '4px' }}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Books">Books</option>
        </select>
      </div>

      {filtered.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No stock found in this category.</p>
      )}

      {filtered.map(p => (
        <ProductCard key={p.id} product={p} onDeleteProduct={onDeleteProduct} />
      ))}
    </div>
  );
};

export default ProductList;
