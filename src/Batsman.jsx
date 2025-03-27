import { useState } from "react"

export default function Batsman (){

    let [runs, setRuns] = useState(0)

    const handleRuns = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleDouble = () =>{
        const updatedRuns = runs + 2;
        setRuns(updatedRuns);
    }

    const handleThree = () =>{
        const updatedRuns = runs + 3;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>

            {
                runs >= 50 && <p>You Scored Half century</p>
            }

            {
                runs >= 100 && <p>You Scored Century</p>
            }

            <h1>Score: {runs}</h1>
            <h2>Over: </h2>
            <button onClick={handleRuns}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleThree}>Three</button>
            <button onClick={handleRuns}>Wide</button>
            <button onClick={handleRuns}>No Ball</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}