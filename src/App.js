import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Items */}
      <div className="app__itemsContainer">
      <Item
        title = "Lowest Cost Solar Panels in America"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {SolarPanels}
        leftBtnTxt = "Order Now"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
        first
      />

      <Item
        title = "Model S"
        desc = "$70,000"
        descLink = ""
        backgroundImg = {ModelS}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      <Item
        title = "Model 3"
        desc = "$80,000"
        descLink = ""
        backgroundImg = {Model3}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      <Item
        title = "Model X"
        desc = "$90,000"
        descLink = ""
        backgroundImg = {ModelX}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      <Item
        title = "Model Y"
        desc = "$75,000"
        descLink = ""
        backgroundImg = {ModelY}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      <Item
        title = "Solar for New Roofs"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {SolarRoof}
        leftBtnTxt = "Order Now"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      <Item
        title = "Accessories"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {Accessories}
        leftBtnTxt = "Shop Now"
        leftBtnLink = ""
        rightBtnTxt = "LEARN MORE"
        rightBtnLink = ""
        twoButtons = 'true'
      />
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
