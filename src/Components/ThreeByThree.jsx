import {Box} from './Box'
import {useState} from 'react'

export const ThreeByThree = () => {

const [box1, setBox1] = useState('')
const [box2, setBox2] = useState('')
const [box3, setBox3] = useState('')
const [box4, setBox4] = useState('')
const [box5, setBox5] = useState('')
const [box6, setBox6] = useState('')
const [box7, setBox7] = useState('')
const [box8, setBox8] = useState('')
const [box9, setBox9] = useState('')

return (
    <div className="box-container">
        <Box setBox={setBox1} box={box1}/>
        <Box setBox={setBox2} box={box2}/>
        <Box setBox={setBox3} box={box3}/>
        <Box setBox={setBox4} box={box4}/>
        <Box setBox={setBox5} box={box5}/>
        <Box setBox={setBox6} box={box6}/>
        <Box setBox={setBox7} box={box7}/>
        <Box setBox={setBox8} box={box8}/>
        <Box setBox={setBox9} box={box9}/>

    </div>
    
)

}