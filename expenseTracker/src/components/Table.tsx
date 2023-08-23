import React from 'react';

type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

type TableProps = {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
};


const Table: React.FC<TableProps> = ({ expenses, onDeleteExpense }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.description}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;