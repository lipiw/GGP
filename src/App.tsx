import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className="min-h-screen bg-blue-950">
      <Header />
      <Hero />
    </div>
  );
}

export default App;