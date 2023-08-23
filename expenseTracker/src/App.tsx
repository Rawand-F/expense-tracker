import React, { useState } from 'react';
import Table from './components/Table';
import "./App.css";

type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

const App: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filterCategory, setFilterCategory] = useState('all');

  const handleAddExpense = () => {
    const newExpense: Expense = {
      id: Math.random(),
      description,
      amount,
      category,
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount(0);
    setCategory('');
  };

  const handleDeleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter(expense =>
    filterCategory === 'all' ? true : expense.category === filterCategory
  );

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1>Expense Tracker</h1>
      <label htmlFor="">Description</label>
      <input
        className="form-control mb-3"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <label htmlFor="">Amount</label>
      <input
        className="form-control mb-3"
        type="number"
        value={amount}
        onChange={e => setAmount(parseFloat(e.target.value))}
      />
      <label htmlFor="">Category</label>
      <select
        className="form-select mb-3"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>

      </select>
      <button className='mb-3' onClick={handleAddExpense}>Submit</button>
      <div>
        <select
          className='form-select mb-3'
          value={filterCategory}
          onChange={e => { setFilterCategory(e.target.value); }}
        >
          <option value="all">All Category</option>
          {expenses.map((e) => (
            <option key={e.category} value={e.category}>
              {e.category}
            </option>
          ))}
        </select>
        <Table expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
  );
};

export default App;