import React from "react";
import { Card, Button } from "./components";
import cards from "./assets/cards";
import LogoDT from "./assets/LogoDT.png";
import FlameIcon from "./assets/FlameIcon.png";
import LuckIcon from "./assets/LuckIcon.png";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      showLogoAndSlogan: true,
      colors: [
        "#16B4F2",
        "#F29F05",
        "#24BF4B",
        "#DCA8FF",
        "#F23D4C",
        "#F4BDD3",
      ],
      icons: {
        "Tipsy Dare": FlameIcon,
        "Lucky Ticket": LuckIcon,
      },
    };
  }

  elegirCarta = (type) => {
    let filteredCard;
    if (type === "Tipsy Dare") {
      filteredCard = cards.filter((card) => card.type === "Tipsy Dare");
    } else if (type === "Lucky Ticket") {
      filteredCard = cards.filter((card) => card.type === "Lucky Ticket");
    }
    const cartaAleatoria =
      filteredCard[Math.floor(Math.random() * filteredCard.length)];
    const colorAleatorio =
      this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    this.setState({
      selectedCard: { ...cartaAleatoria, color: colorAleatorio },
      showLogoAndSlogan: false,
    });
  };

  mostrarBotones = () => {
    this.setState({
      selectedCard: null,
      showLogoAndSlogan: true,
    });
  };

  render() {
    const { selectedCard, icons, showLogoAndSlogan } = this.state;
    return (
      <>
        <div className="App">
          {showLogoAndSlogan && (
            <>
              <img className="LogoDT" src={LogoDT} alt="Logo DrunkTopia" />
              <div className="Slogan">
                <h3>Be careful with the drinks...</h3>
                <h4>And with your friends</h4>
              </div>
            </>
          )}
          {!selectedCard && (
            <div className="btns2">
              <Button
                type="Tipsy Dare"
                onClick={() => this.elegirCarta("Tipsy Dare")}
                className="TipsyDare"
              />
              <Button
                type="Lucky Ticket"
                onClick={() => this.elegirCarta("Lucky Ticket")}
                className="LuckyTicket"
              />
            </div>
          )}
          {selectedCard && (
            <div className="CardContent">
              <Card
                className={selectedCard.type.replace(/\s+/g, "-")}
                type={selectedCard.type}
                content={selectedCard.content}
                color={selectedCard.color}
                icon={icons[selectedCard.type]}
              />
              <Button
                type="Go back"
                onClick={this.mostrarBotones}
                className="GoBack"
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
