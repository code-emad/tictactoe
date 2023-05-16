import {Box} from './Box'
import {useState} from 'react'
import {checkWinOrDraw} from '../utils/utils.js'

export const ThreeByThree = () => {

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

return (
    <div>
        <p>counter:{counter}</p>
        <p>{checkWinOrDraw(grid) !== undefined ? checkWinOrDraw(grid) : counter === 9 ? 'Draw' : null}</p>
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