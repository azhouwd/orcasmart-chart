import "./App.css";
import React from "react";
import axios from "axios";

import TotalPrice from "./components/TotalSoldPrice/TotalPrice";
import InfoOverview from "./components/InfoOverview/InfoOverview";
import HotSale from "./components/HotSale/HotSale";
import HotView from "./components/HotView/HotView";
import TotalCartPrice from "./components/TotalCartPrice/TotalCartPrice";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: "",
      registeredUser: "",
      startDate: "",
      cartPrice: "",
      topViewed: [],
      topSales: []
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      fetch(
        "https://orcasmartmeback.azurewebsites.net/company/171/shop/topProducts"
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ topViewed: Object.values(data) });
        });
      fetch(
        "https://orcasmartmeback.azurewebsites.net/company/171/shop/topSoldProducts"
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ topSales: Object.values(data) });
        });
    }, 1000);

    setInterval(() => {
      axios
        .get(
          "https://orcasmartmeback.azurewebsites.net/company/171/shop/report"
        )
        .then(data => {
          this.setState({
            totalPrice: data.data.totalSalesInDollar,
            cartPrice: data.data.totalInCart
          });
        });
      axios
        .get("https://orcasmartmeback.azurewebsites.net/shop/report/user")
        .then(data => {
          this.setState({
            registeredUser: data.data.totalUser,
            startDate: data.data.startDate
          });
        });
    }, 5000);
  };

  render() {
    const {
      totalPrice,
      registeredUser,
      startDate,
      cartPrice,
      topViewed,
      topSales
    } = this.state;
    return (
      <div>
        <h1 className="main-title">OrcaSmart</h1>
        <div className="main-container">
          <InfoOverview registeredUser={registeredUser} startDate={startDate} />
          <div className="hot-shit">
            <HotView topViewed={topViewed} />
            <HotSale topSold={topSales} />
          </div>
          <div className="price-condition">
            <TotalCartPrice cartPrice={cartPrice} />
            <TotalPrice totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
