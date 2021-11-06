import { useState } from "react";
import React from "react";
import { randomWord } from "../randomAnswer";
import "./style.css"
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

export const Game = () => {
  const imgHolder = {
    maxWr: 6,
    img: [img1,img2,img3,img4,img5,img6,img7],
  };
  const [game, setGame] = useState({
    noOfWrong: 0,
    guessed: new Set(),
    answer: randomWord(),
  });
  const reset = () => {
    setGame( {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
   
  };

  const guessW = () => {
console.log("game answer",game);
    return game.answer.split("").map((letter) => (game.guessed.has(letter) ? letter : "-"));
  };

  const guessHandle = (e) => {

    let letter = e.target.value;
    console.log(letter);
    setGame((a) => ({
    ...game , guessed: a.guessed.add(letter),
    noOfWrong: a.noOfWrong + (a.answer.includes(letter) ? 0 : 1),
    
    }));
  };

  const keyBord = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((item) => (
      <button className="btnKeybad"
        key={item}
        value={item}
        onClick={guessHandle}
        disabled={game.guessed.has(item)}
      >
        {item}
      </button>
    ));
  };
  const gameOver = game.noOfWrong >= imgHolder.maxWr;
  const isWinner = guessW().join("") === game.answer;
  let gameState = keyBord();
  if (isWinner) gameState = "Congrats, You have won the Game 😍";
  if (gameOver) gameState = "Better Luck Next Time 😭";
  let restart = gameOver || isWinner;


  return (
      
    <div  className="gameDiv">
   
    <div className="boxGame">
    <img src={imgHolder.img[game.noOfWrong]} alt="HangMan" />
    <p id="par">
      Guessed Left:<span> {imgHolder.maxWr - game.noOfWrong} </span> /{" "}
      {imgHolder.maxWr}
    </p>
    <p id="guessP">Guess the Animals</p>
    <p className="answerP">
      {!gameOver ? guessW() : game.answer}
    </p>
    <p className="Hangman-p" >{gameState}</p>
    {restart && (
      <button id="reset" onClick={reset}>
       play Again?
      </button>
      
    )}</div>
  </div>
);
    
};
