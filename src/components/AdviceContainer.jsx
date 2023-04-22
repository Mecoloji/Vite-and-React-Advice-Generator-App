import "./adviceContainer.css";
import diceIcon from "../images/icon-dice.svg"
import patternDivider from "../images/pattern-divider-desktop.svg"

const AdviceContainer = ({ slip, onClick }) => {
  return (
    <div className="container">
      <span className="number">ADVICE #{slip.id}</span>
      <span className="advice">“ {slip.advice} ”</span>
      <img
        className="divider"
        src={patternDivider}
        alt=""
      />
      <div className="dice-btn" onClick={onClick}>
        <img src={diceIcon} alt="" />
      </div>
    </div>
  );
};
export default AdviceContainer;
