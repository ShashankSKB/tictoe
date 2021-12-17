import "./box.css"

function Box({value,handlePlayer}){

    return(
        
            <div className="square" onClick={()=>handlePlayer()}>
              <h1> {value}</h1> 
            </div>
       
    )
}

export {Box}