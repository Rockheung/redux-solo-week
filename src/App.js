import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Redux, { createStore } from 'redux';


const counter = (state = 0, action) => {
  if (action.type === 'UPPER') {
    return state + 1;
  } else if (action.type === 'LOWER') {
    return state - 1;
  } else {
    return state;
  }
}


const store = createStore(counter)

store.subscribe(counter)

console.log(store.dispatch({type: 'UPPER'}));

const App = () => {
  let p = React.createRef();
  const click = () => {
    store.dispatch({type: 'UPPER'})
    p.current = store.getState();
  }
  return (
    <div>
      <p onClick={click}>Hello React!</p>
      <p ref={p}>{p.current}</p>
    </div>
  );
}


// class App extends React.Component {
//   super()
  
//   render() {
//     return (
//       <div>
//         <p>Hello React!</p>
//       </div>
//     )
//   }

// } 

export default App;