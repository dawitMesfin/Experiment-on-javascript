import react, { useState } from "react"

const convert2Dto1DArray = arr => {
    const newArray = []
    for (let i = 0; i< arr.length; i++){
        newArray.push(...arr[i])
    }

    return newArray
}

const SpreadExp = ()=> {
    var  OriginalArray = [[5,7,8,9,8],[6],[2],[8]]
    const[newArray,setnewArray] = useState([])

    

    return (
        <div>
            <h1>{JSON.stringify(OriginalArray)}</h1>

            <h1> <button onClick ={() => setnewArray(() => convert2Dto1DArray(OriginalArray))}> Change to 1D</button></h1>
            <h1>{JSON.stringify(newArray)}</h1>
            
        </div>
    )
    
}

export default SpreadExp