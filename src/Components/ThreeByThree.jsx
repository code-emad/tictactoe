import {Box} from './Box'
import {useState} from 'react'
import {checkWinOrDraw} from '../utils/utils.js'
import { PlayerContext } from "../contexts/Player";
import { useContext } from "react";

export const ThreeByThree = () => {
const {player, setPlayer} = useContext(PlayerContext);

const [box1, setBox1] = useState(0)
const [box2, setBox2] = useState(0)
const [box3, setBox3] = useState(0)
const [box4, setBox4] = useState(0)
const [box5, setBox5] = useState(0)
const [box6, setBox6] = useState(0)
const [box7, setBox7] = useState(0)
const [box8, setBox8] = useState(0)
const [box9, setBox9] = useState(0)

const [counter, setCounter] = useState(0)

const grid = [
    box1, box2, box3,
    box4, box5, box6, 
    box7, box8, box9
]

const handleReset = () => {
    setBox1(0)
    setBox2(0)
    setBox3(0)
    setBox4(0)
    setBox5(0)
    setBox6(0)
    setBox7(0)
    setBox8(0)
    setBox9(0)
    setCounter(0)
    setPlayer("Player-1")
}

return (
    <div className='threebythreecontainer'>
        <p className='checkwhowins'>{checkWinOrDraw(grid) !== undefined ? checkWinOrDraw(grid) : counter === 9 ? 'Draw' : null}</p>
        <button className="reset" onClick={handleReset}>Reset</button>
    <div className="box-container">
        <Box setBox={setBox1} box={box1} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox2} box={box2} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox3} box={box3} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox4} box={box4} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox5} box={box5} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox6} box={box6} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox7} box={box7} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox8} box={box8} counter={counter} setCounter={setCounter}/>
        <Box setBox={setBox9} box={box9} counter={counter} setCounter={setCounter}/>

    </div>
    </div>
)
}