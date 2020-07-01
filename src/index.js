import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import logo from "./images/logo.png";
import data from "./data copy.json";
import Contacts from "./Components/contact"

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    actual: "nadie",
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  onClick = name =>{
    this.setState({actual:name})
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      //const response = await fetch(
        //`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      //);
      //const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />
          <div className="row">
            <Contacts data={this.state.data} onClick={this.onClick}/>
            <div className="Chat">{this.state.actual}</div>
          </div>
          {this.state.loading && <p className="text-center">Loading...</p>}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
