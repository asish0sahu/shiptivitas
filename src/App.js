import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomeSection from "./components/HomeSection";
import Navigation from "./components/Navbar";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
    };
  }
  renderShippingRequests() {
    return <Board />;
  }

  renderNavigation() {
    return (
      <Navigation
        onClick={(tabName) => this.changeTab(tabName)}
        selectedTab={this.state.selectedTab}
      />
    );
  }

  renderTabContent() {
    switch (this.state.selectedTab) {
      case "home":
      default:
        return HomeSection();
      case "shipping-requests":
        return this.renderShippingRequests();
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderNavigation()}

        <div className="App-body">{this.renderTabContent()}</div>
      </div>
    );
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
}

export default App;
