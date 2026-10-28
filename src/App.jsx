import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/functional/Header';
import ProductForm from './components/functional/ProductForm';
import ProductList from './components/functional/ProductList';
import AuditLogger from './components/class/AuditLogger';
import CardWrapper from './components/functional/CardWrapper';

const App = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [];
  });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    document.title = `Inventory Counts: ${products.length}`;
  }, [products]);

  const addProduct = useCallback((newProduct) => {
    setProducts(prev => [...prev, newProduct]);
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Form Added: ${newProduct.title}`]);
  }, []);

  const deleteProduct = useCallback((id, title) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Action Removed: ${title}`]);
  }, []);

  // Task 5: Inventory metrics calculated using useMemo
  const metrics = useMemo(() => {
    const totalItems = products.reduce((sum, p) => sum + p.stock, 0);
    const uniqueCount = products.length;
    return { totalItems, uniqueCount };
  }, [products]);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Header />
      
      {/* Inventory Metrics Row */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <div style={{ flex: 1, padding: '12px', background: '#e3f2fd', borderRadius: '6px', color: '#0d47a1' }}>
          <strong>Active SKUs:</strong> {metrics.uniqueCount}
        </div>
        <div style={{ flex: 1, padding: '12px', background: '#e8f5e9', borderRadius: '6px', color: '#1b5e20' }}>
          <strong>Total Volume Units:</strong> {metrics.totalItems}
        </div>
      </div>

      {/* Two Column Layout Grid */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <CardWrapper>
            <h3 style={{ margin: '0 0 15px 0' }}>Add New Product</h3>
            <ProductForm onAddProduct={addProduct} />
          </CardWrapper>
          <AuditLogger logs={logs} />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <CardWrapper>
            <h3 style={{ margin: '0 0 15px 0' }}>Inventory Stock Registry</h3>
            <ProductList products={products} onDeleteProduct={deleteProduct} />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default App;
