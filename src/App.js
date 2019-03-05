import React, { Component } from 'react';
import Remarkable from 'remarkable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '**Get started here**'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="editor grid">
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default App;
