export const Box = ({setBox, box}) => {
    const handleOnClick= () => {
        setBox(-1)
    }

    return (
        <div className="box" onClick= {handleOnClick}>
        <p>{box}</p>
        </div>
    )
}