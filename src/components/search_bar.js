import React, { Component } from 'react';

//functional
// const SearchBar = () => {
//   return <input />
// };

//class based
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

//class based Es6 syntax
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value= {this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
