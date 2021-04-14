import React from 'react';
import "./TodoList.scss";

const TOdoList = ({ items, onItemClick }) => {
  const handleClick = (e, todo) => {
    e.preventDefault();
    if (!todo.done) {
      onItemClick(todo);
    }
  };

  return ( 
    <div className="todo--list">
      <h3>My Todos</h3>
      {items.length > 0 ? items.map((todo) => (
        <p className={ 'todo--item' + (!todo.done ? ' cursor' : ' done') } onClick={e => handleClick(e, todo)} key={todo.id}>
          <span className="todo--text">{ todo.text }</span>
          <span className={'todo--' + (!todo.done ? 'done' : 'pending')}>{ todo.done ? 'Done' : 'Todo' }</span>
        </p>
      )) : <p className="todo--not-found">No todo found</p>}
    </div>
   );
}
 
export default TOdoList;