import React, { useState, useRef, useEffect } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [stock, setStock] = useState('');

  const titleInputRef = useRef(null);

  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !stock) return alert('Please fill all fields!');

    const newProduct = {
      id: Date.now().toString(),
      title,
      price: Number(price),
      category,
      stock: Number(stock)
    };

    onAddProduct(newProduct);
    setTitle(''); setPrice(''); setStock('');
    titleInputRef.current.focus();
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '8px 0 15px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  const btnStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Title</label>
      <input ref={titleInputRef} style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
      
      <label>Price ($)</label>
      <input type="number" style={inputStyle} value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter price" />
      
      <label>Category</label>
      <select style={inputStyle} value={category} onChange={e => setCategory(e.target.value)}>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Books">Books</option>
      </select>
      
      <label>Stock Quantity</label>
      <input type="number" style={inputStyle} value={stock} onChange={e => setStock(e.target.value)} placeholder="Enter stock level" />
      
      <button type="submit" style={btnStyle}>Add Inventory Item</button>
    </form>
  );
};

export default ProductForm;
