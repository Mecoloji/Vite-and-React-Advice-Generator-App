import React, { useState, useEffect } from "react";
import axios from "axios";
import AdviceContainer from "./components/AdviceContainer";
import "./index.css";

const App = () => {
  const [slip, setSlip] = useState({});

  const getRandomAdvice = async () => {
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setSlip(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRandomAdvice();
  }, []);

  const handleClick = () => {
    getRandomAdvice();
  };

  return (
    <>
      <AdviceContainer slip={slip} onClick={handleClick} />
    </>
  );
};

export default App;
