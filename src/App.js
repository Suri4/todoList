import React from 'react';
import './App.css';

const firsTodos = [
  {
    id: 1,
    description: "Apprendre React",
    done: false 
  },
  {
    id: 2,
    description: "Creer des Class Components (CC)",
    done: false 
  },
  {
    id: 3,
    description: "Creer des Stateless Functional Component (SFC)",
    done: false 
  },
  {
    id: 4,
    description: "Prise en main des hooks",
    done: false 
  }
]

function App() {
  return (
    <h1>Bonne vieille todoApp</h1>
  );
}

export default App;
