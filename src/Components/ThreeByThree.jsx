import {Box} from './Box'
import {useState} from 'react'

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

return (
    <div className="box-container">
        <Box number={setBox1}/>
        <Box number={setBox2}/>
        <Box number={setBox3}/>
        <Box number={setBox4}/>
        <Box number={setBox5}/>
        <Box number={setBox6}/>
        <Box number={setBox7}/>
        <Box number={setBox8}/>
        <Box number={setBox9}/>

    </div>
    
)

}