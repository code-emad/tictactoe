import { createContext} from "react";
import { useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [player, setPlayer] = useState('Player-1')

    return (
        <PlayerContext.Provider value={{player, setPlayer}}>
            {children}
        </PlayerContext.Provider>
    )
}

