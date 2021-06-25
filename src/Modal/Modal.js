import React from 'react';
import './Modal.css';

export default class Model extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Open Modal</button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h2>Modal title</h2>
              <p>I am Modal!</p>
              <button onClick={() => this.setState({ isOpen: false })}>Close Modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
