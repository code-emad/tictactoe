import { useContext } from "react";
import {PlayerContext} from '../contexts/Player'
export const Box = ({setBox, box}) => {
    const {player, setPlayer} = useContext(PlayerContext);


    const handleOnClick= () => {
        if ( player === 'Player 1'){
            setBox(1)
            setPlayer('Player 2')
        }
        if ( player === 'Player 2'){
            setBox(-1)
            setPlayer('Player 1')
        }
    }
    return (
        <div className="box" onClick= {handleOnClick}>
        <p>{box === 1 ? 'X' : box === -1 ? 'O' : box }</p>
        </div>
    )
}