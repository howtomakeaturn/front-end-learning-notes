import React from 'react';
import ChildA from './ChildA.jsx';
import ChildB from './ChildB.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello App!</h1>
        <ChildA />
        <ChildB />
      </div>
    );
  }
}
