# TodoList & Buttons

A simple todo list to make a todo done from todo list.

## Buttons

different types of button components. Just import the Button component anywhere in the project & 
start using the component.

```
  <Button text="Close Shipment" size="sm" type="button" variant="primary" status="neutral" onClick={handleClick} />
```
Here...
[text] property is the text of the button
[size] property defines the size of the button. Value can be large, medium and small.
[type] property defines the type of the button. Value can be button, submit.
[variant] property defines the variation of button. Value can be primary, info, success, warning, danger, default. Default value will be applied as default.
[status] property defines the status of the button. Value cane be neutral, clicked, inactive
[onClick] property takes a method as props and defines what will happen when the button is clicked.
