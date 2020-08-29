import React from 'react';
import './App.css';
import Routes from "./Routes";
import NavigationBlocks from "./Components/Blocks/NavigationBlocks/navigationBlocks";
import dashboardImage from "./Assets/icons/dashboard.png";
import buy from "./Assets/icons/buy.png";
import menu from "./Assets/icons/menu.png";
import shelf from "./Assets/icons/shelf.png";
import correct from "./Assets/icons/correct.png";
import automation from "./Assets/icons/automation.png";
import alert from "./Assets/icons/alert.png";
import dashboardImageBlue from "./Assets/icons/dashboard-blue.png";
import buyBlue from "./Assets/icons/buy-blue.png";
import menuBlue from "./Assets/icons/menu-blue.png";
import shelfBlue from "./Assets/icons/shelf-blue.png";
import correctBlue from "./Assets/icons/correct-blue.png";
import automationBlue from "./Assets/icons/automation-blue.png";
function App() {
  return (
    <div className="World">
      <div className="left-navigation">
        <div className="left-navigation-top">
          <h2>Logo</h2>
        </div>
        <div className="left-navigation-links">
          <NavigationBlocks link="/" src={dashboardImage} srcBlue={dashboardImageBlue} alt="Dashboard Icon" head="Dashboard" isDropdown={false}/>
          <NavigationBlocks link="/purchase" src={buy} alt="Dashboard Icon" srcBlue={buyBlue} head="Purchase Order" isDropdown={false}/>
          <NavigationBlocks link="/work" src={menu} alt="Dashboard Icon" head="Work Order" srcBlue={menuBlue} isDropdown={false}/>
          <NavigationBlocks link="/inventory" src={shelf} alt="Dashboard Icon" head="Inventory" srcBlue={shelfBlue} isDropdown={false}/>
          <NavigationBlocks link="/machine" src={automation} alt="Dashboard Icon" head="Machinery & Tools" srcBlue={automationBlue} isDropdown={false}/>
          <NavigationBlocks link="/dispatch" src={correct} alt="Dashboard Icon" head="Dispatch" srcBlue={correctBlue} isDropdown={false}/>
          <NavigationBlocks link="/alerts" src={alert} alt="Dashboard Icon" head="Alerts"  isDropdown={false}/>
        </div>
      </div>
      <div className="right-body">
        <Routes />
      </div>
    </div>

  );
}

export default App;
