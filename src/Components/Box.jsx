import { useContext } from "react";
import {PlayerContext} from '../contexts/Player'

export const Box = ({setBox, box, setCounter, counter}) => {
    const {player, setPlayer} = useContext(PlayerContext);

 
    const handleOnClick= () => {
console.log(counter)
        if (box === 0){
            if ( player === 'Player 1'){
                setBox(1)
                setPlayer('Player 2')
                setCounter(counter+=1)
            }
            if ( player === 'Player 2'){
                setBox(-1)
                setPlayer('Player 1')
                setCounter(counter+=1)
            }
        }
    }
    return (
        <div className="box" onClick= {handleOnClick}>
            <p>{box === 1 ? 'X' : box === -1 ? 'O' : null }</p>
        </div>
    )
}