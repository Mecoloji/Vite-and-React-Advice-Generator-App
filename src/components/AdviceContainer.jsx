import "./adviceContainer.css";

const AdviceContainer = ({ slip, onClick }) => {
  return (
    <div className="container">
      <span className="number">ADVICE #{slip.id}</span>
      <span className="advice">“ {slip.advice} ”</span>
      <img
        className="divider"
        src="/src/images/pattern-divider-desktop.svg"
        alt=""
      />
      <div className="dice-btn" onClick={onClick}>
        <img src="/src/images/icon-dice.svg" alt="" />
      </div>
    </div>
  );
};
export default AdviceContainer;
