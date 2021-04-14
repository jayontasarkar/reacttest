import React from 'react';
import "./Button.scss";

const Button = ({ text, size, status, onClick, variant, type }) => {
  return (
    <button 
      type={type ? type : 'button'}
      className={
        'btn btn-' + (size ? size : 'medium') + 
        ' btn-' + (variant ? variant : 'default') + 
        ' ' + (status ? status : 'neutral')
      }
      onClick={e => onClick(e)}
    >
      {text || 'Button'}
    </button>
  );
}
 
export default Button;