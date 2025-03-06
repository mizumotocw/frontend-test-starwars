import React, { useState } from 'react';
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainSection from './components/MainSection'
import './App.css'

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [sortCategory, setSortCategory] = useState<'characters' | 'planets' | null>(null);

  const handleSortRequest = (category: 'characters' | 'planets') => {
    setSortCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <Navigation onFilterChange={setFilter} onSortRequest={handleSortRequest} />
      <MainSection filter={filter} sortCategory={sortCategory} />
    </div>
  )
}

export default App
