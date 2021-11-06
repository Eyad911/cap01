import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
export const Instruction = () => {
    return (<>
        <div className="homePage" id="insPage">
            <h1>Hang Man</h1>
            <h2>How to Play</h2>
            <p>One player thinks of a word or phrase; the others try to guess what it is one letter at a time. The player draws a number of dashes equivalent to the number of letters in the word. If a guessing player suggests a letter that occurs in the word, the other player fills in the blanks with that letter in the right places. If the word does not contain the suggested letter, the other player draws one element of a hangman’s gallows. As the game progresses, a segment of the gallows and of a victim is added for every suggested letter not in the word. The number of incorrect guesses before the game ends is up to the players, but completing a character in a noose provides a minimum of six wrong answers until the game ends. The first player to guess the correct answer thinks of the word for the next game.</p>
            <h2>Objective</h2>
            <p>Guess the word/phrase before your man gets hung!</p>
            <h2>Letter frequencies</h2>
            <p>A good acronym to commit to memory is: ETAOIN SHRDLU. It’s hard to pronounce, yes, but its order denotes the most commonly used letters (in order) in the English language.</p>
        </div>
      <Link id="start-btn" to="/Game" ><button id="start-btn" >Start Game</button></Link>
        </>
    )
}