// import { useState } from "react"

// export default function Batsman (){

//     let [runs, setRuns] = useState(0)

//     let [balls, setBalls] = useState(0);

//     const handleBalls = () => {
//         setBalls(prevBalls => prevBalls + 1);
//     };

//     const handleRuns = () => {
//         const updatedRuns = runs + 1;
//         setRuns(updatedRuns);
//     }

//     const handleDouble = () =>{
//         const updatedRuns = runs + 2;
//         setRuns(updatedRuns);
//     }

//     const handleThree = () =>{
//         const updatedRuns = runs + 3;
//         setRuns(updatedRuns);
//     }

//     const handleSix = () => {
//         const updatedRuns = runs + 6;
//         setRuns(updatedRuns);
//     }

//     const handleFour = () => {
//         const updatedRuns = runs + 4;
//         setRuns(updatedRuns)
//     }

//     return(
//         <div>
//             <h3>Player: AB de Villiers</h3>

//             {
//                 runs >= 50 && <p>You Scored Half century</p>
//             }

//             {
//                 runs >= 100 && <p>You Scored Century</p>
//             }

//             <h1>Score: {runs}</h1>
//             <h2>Ball: </h2>
//             <button onClick={handleRuns}>Single</button>
//             <button onClick={handleDouble}>Double</button>
//             <button onClick={handleThree}>Three</button>
//             <button onClick={handleRuns}>Wide</button>
//             <button onClick={handleRuns}>No Ball</button>
//             <button onClick={handleFour} >Four</button>
//             <button onClick={handleSix}>Six</button>
//         </div>
//     )
// }


import { useState } from "react";

export default function Batsman() {
    let [runs, setRuns] = useState(0);
    let [balls, setBalls] = useState(0);

    const handleBalls = () => {
        setBalls(prevBalls => prevBalls + 1);
    };

    const handleRuns = () => {
        setRuns(prevRuns => prevRuns + 1);
        handleBalls();  // Single run e ball count
    };

    const handleDouble = () => {
        setRuns(prevRuns => prevRuns + 2);
        handleBalls();  // Double run e ball count
    };

    const handleThree = () => {
        setRuns(prevRuns => prevRuns + 3);
        handleBalls();  // Three run e ball count
    };

    const handleFour = () => {
        setRuns(prevRuns => prevRuns + 4);
        handleBalls();  // Four run e ball count
    };

    const handleSix = () => {
        setRuns(prevRuns => prevRuns + 6);
        handleBalls();  // Six run e ball count
    };

    return (
        <div>
            <h3>Player: AB de Villiers</h3>

            {runs >= 50 && <p>You Scored Half century</p>}
            {runs >= 100 && <p>You Scored Century</p>}

            <h1>Score: {runs}</h1>
            <h2>Balls: {balls}</h2>

            <button onClick={handleRuns}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleThree}>Three</button>
            <button onClick={() => setRuns(prevRuns => prevRuns + 1)}>Wide</button>
            <button onClick={() => setRuns(prevRuns => prevRuns + 1)}>No Ball</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
}
