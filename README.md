# Install

    yarn add react-pure-component-optimized


**or**

    npm install -s react-pure-component-optimized



How it work?

This is an override of the "shouldComponentUpdate" function.
- **The first step** - check change the props count, if yes return true else goes on.
- **The second step** -  loop on properties and check the objects and arrays based on `JSON.stringify` while primitive types based on "===" operator.
- **The third step** - check function and update component only in case that:
	1. After some action, prop is removed.
	2. The function name are empty `this.props.someFunctio.name = ''` (example 1).
	3. The functions name are different after props update (example ).

This will help you when you change on the parent component but it is not influence on the children and they are not re rendered. For more information see the React.js  [documentation](https://reactjs.org/docs/react-component.html) 

# Example 1

```jsx
render () {
    <div> 
        <SomeComponent
            onClick={
             // Never do that, do the in the function
                this.state.isOpen ? 
                    () => { /* some logic */ }:
                    () => { /* some logic */ }
            }
        />
    <div>
}
// this.props.onClick.name = ''
// nextProps.onClick.name = ''
```   
# Example 2
```jsx
render () {
    <div> 
        <SomeComponent onClick={
         // Never do that, do the in the function
         this.state.isOpen ? 
          this.someFunction : 
          this.anotherFunction
         } 
        />
    <div>
}
// this.props.onClick.name = 'someFunction'
// nextProps.onClick.name = 'anotherFunction'
```

# Usage
```jsx
import React from 'react';
import PureComponent  from 'react-pure-component-optimized';

export default class ExampleComponent extends PureComponent {

    render() {
        return (
            <div> { /* Use some JSX here */ } </div>
        );
    }
}
```
