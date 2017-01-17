import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div className="row">
          <BookList className="col-md-3" />
          <BookDetail className="col-md-9" />
      </div>
    );
  }
}
