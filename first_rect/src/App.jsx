import React, { useState } from 'react'

// Simple Header component
function Header() {
  return (
    <header style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
      <h1 style={{ margin:0 }}>Header</h1>
    </header>
  )
}

// Search component: controlled input with callback
function Search({ value, onChange }) {
  return (
    <div style={{ padding: '0.75rem' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
      />
    </div>
  )
}

// Products component: show list of product names
function Products({ items }) {
  if (!items || items.length === 0) return <p style={{ padding: '0 0.75rem' }}>No products found</p>

  return (
    <ul style={{ listStyle: 'none', padding: '0 0.75rem' }}>
      {items.map((p, idx) => (
        <li key={idx} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
          {p}
        </li>
      ))}
    </ul>
  )
}

// Footer component
function Footer() {
  return (
    <footer style={{ padding: '0.75rem', textAlign: 'center', color: '#666' }}>
      Footer
    </footer>
  )
}

function App() {
  const allProducts = ['Product A', 'Product B', 'Product C', 'Sample Item', 'Another Product']
  const [query, setQuery] = useState('')

  const filtered = allProducts.filter(p => p.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '1.5rem auto', border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden' }}>
      <Header />
      <Search value={query} onChange={setQuery} />
      <Products items={filtered} />
      <Footer />
    </div>
  )
}

export default App