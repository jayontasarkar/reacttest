import { useState } from 'react';
import TodoList from './components/Todos/TodoList';
import "./App.scss";
import Button from './components/Button/Button';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo one',
      done: true
    },
    {
      id: 2,
      text: 'Todo two',
      done: false
    },
    {
      id: 3,
      text: 'Todo three',
      done: false
    },
    {
      id: 4,
      text: 'Todo four',
      done: true
    }
  ]);

  const handleClick = todo => {
    const mappedTodos = todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          done: true
        };
      }
      return item;
    });
    setTodos(mappedTodos);
  };

  return (
    <div className="App">
      <TodoList items={todos} onItemClick={handleClick} />
      <br />
      <br />
      <hr />
      <br />
      <h3>Button Shapes</h3>
      <p>Large Buttons</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Primary & Large" size="large" type="button" variant="primary" status="neutral" />
        <Button text="Close Shipment" size="large" type="button" variant="primary" status="clicked" />
        <Button text="Close Shipment" size="large" type="button" variant="primary" status="inactive" />
      </div>

      <p>Medium Buttons</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Close Shipment" size="medium" type="button" variant="primary" status="neutral" />
        <Button text="Close Shipment" size="medium" type="button" variant="primary" status="clicked" />
        <Button text="Close Shipment" size="medium" type="button" variant="primary" status="inactive" />
      </div>
      <p>Small Buttons</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Close Shipment" size="small" type="button" variant="primary" status="neutral" />
        <Button text="Close Shipment" size="small" type="button" variant="primary" status="clicked" />
        <Button text="Close Shipment" size="small" type="button" variant="primary" status="inactive" />
      </div>

      <h3>Button Variants</h3>
      <p>Different color buttons</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <Button text="Close Shipment" size="large" type="button" variant="primary" />
        <Button text="Close Shipment" size="large" type="button" variant="info" />
        <Button text="Close Shipment" size="large" type="button" variant="success" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Close Shipment" size="large" type="button" variant="warning" />
        <Button text="Close Shipment" size="large" type="button" variant="danger" />
        <Button text="Close Shipment" size="large" type="button" variant="default" />
      </div>
    </div>
  );
}

export default App;
