import React from 'react';

const ProductCard = ({ product, onDeleteProduct }) => {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock < 5;

  let badgeText = 'In Stock';
  let badgeColor = '#28a745'; // Green

  if (isOutOfStock) {
    badgeText = 'Out of Stock';
    badgeColor = '#dc3545'; // Red
  } else if (isLowStock) {
    badgeText = 'Low Stock';
    badgeColor = '#ffc107'; // Yellow
  }

  return (
    <div style={{ borderBottom: '1px solid #ddd', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{product.title}</h4>
        <span style={{ fontSize: '13px', color: '#666' }}>Category: {product.category} | </span>
        <strong style={{ color: '#007bff' }}>${product.price}</strong>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ backgroundColor: badgeColor, color: badgeText === 'Low Stock' ? 'black' : 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
          {badgeText} ({product.stock})
        </span>
        <button onClick={() => onDeleteProduct(product.id, product.title)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '16px' }}>🗑️</button>
      </div>
    </div>
  );
};

export default ProductCard;
