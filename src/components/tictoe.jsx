import { useEffect, useState } from "react"
import { Box } from "./box"
import "./tic.css"
function Tic()
{
    const [flag,setFlag]=useState(false);
    const [player,setPlayer]=useState("O")
    const [Winner,setWinner]=useState("")
    const [value,setValue]=useState("")

    const [board,setBoard]=useState(["","","","","","","","",""])

    console.log("board ",board[0])

    const [count,setCount]=useState(0);
    const outcomes=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    useEffect(()=>{
        
        checkWinner();
        

    },player)

    const checkWinner=()=>{

        console.log("checking")
        setCount((prev)=>prev+1)
        for(var i=0;i<outcomes.length;i++)
        {
            let curr=outcomes[i];
            console.log("curr",curr)
            console.log("element at 0",board[curr[0]])
          
                if(board[curr[0]] != "")
                {
                    if( board[curr[0]]==board[curr[1]] &&board[curr[1]] ==board[curr[2]] &&board[curr[0]]==board[curr[2]]  )
                    {
                        console.log("curr pattern",board[curr[0]],board[curr[1]],board[curr[2]])
                        

                        if(player=="O")
                        {
                            alert("Winner X")
                            setWinner("X")
                            setFlag(true);
                            setBoard(["","","","","","","",""])
                            setCount(1)
                        }
                        else
                        {
                            alert("Winner O")
                            
                            // setBoard(["","","","","","","",""])
                            setBoard(["","","","","","","",""])
                            setWinner("O")
                            setFlag(true);
                            setCount(1)
                        }
                        
                        return;
                        
                    }
                }

                if(count==9)
                {
                    alert("DRAW")
                    setCount(0)
                    return
                }

                
                
          
        }

    }

   

    const handlePlayer=(curr)=>{

        console.log("curr",curr)
       
        setBoard( board.map((val, indx) => {
            if (indx === curr && val === "") {
              return player;
            }
            return val;
          })
        );
    
        if(player=="O")
        {
            setPlayer("X")
            console.log("player",player)

        }
        else{
            setPlayer("O")
            console.log("player",player)
        }

       
    }

    const reset=()=>{
        setPlayer("O")
        setBoard(["","","","","","","",""])
        setCount(0);
        setWinner("O")
        setFlag(true);
    }

    return (
        <div className="parent">
            <h1>TIC TOE</h1>
            <div className="row">
            <Box value={board[0]} handlePlayer={()=>handlePlayer(0)}></Box>
            <Box value={board[1]}  handlePlayer={()=>handlePlayer(1)}></Box>
            <Box value={board[2]}  handlePlayer={()=>handlePlayer(2)}></Box>
            </div>

            <div className="row">
            <Box value={board[3]} handlePlayer={()=>handlePlayer(3)}></Box>
            <Box value={board[4]}  handlePlayer={()=>handlePlayer(4)}></Box>
            <Box value={board[5]}  handlePlayer={()=>handlePlayer(5)}></Box>
            </div>

            <div className="row">
            <Box value={board[6]} handlePlayer={()=>handlePlayer(6)}></Box>
            <Box value={board[7]}  handlePlayer={()=>handlePlayer(7)}></Box>
            <Box value={board[8]}  handlePlayer={()=>handlePlayer(8)}></Box>
            </div>

            <div>
                <h1>Player  :{player}</h1>
            </div>

            {/* <div>
                {flag&& <h1>Winner :{Winner}</h1>}
            </div> */}

            <div className="button"  onClick={reset}><h1>NEW GAME</h1></div>

            
        </div>
    )
}

export {Tic}