
/**
 * Todo 1: Handel User Input Fields;
 * Todo 2: Handel Operation
 * Todo 3: Handel a list of histories
 * Todo 4: Render history list
 * Todo 5:Restore the history
 */

import { useState } from "react"

function* generatorId() {
    let index = 0
    while (true) {
        yield index++
    }
}

const getId = generatorId()




const InitalInputState = {
    a:0,
    b:0
}

const JsonToJsxToJson = () => {  

    const [inputState, setInputState] = useState({ ...InitalInputState }) //mute --- immute
    const [result, setResult] = useState(0)
    const [histories, setHistories] = useState([])
    const [restoredHistory, setRestordHistory] = useState(null)
    
    const handelInputFields = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        })
        
    }

    const handelClearOperation = () => {
        setInputState({ ...InitalInputState })
        setResult(0)
    }

    const handelArithmeticOperation = (operation) => {

        if (!inputState.a ||! inputState.b) {
            return alert('Invalid Data')
        }

        const f = new Function(
            
          'operation',
            
             ` return ${inputState.a} ${operation} ${inputState.b} `
        )
        const updateResult = f(operation)
        setResult(updateResult)


        const historyItem = {
            id: getId.next().value,
            inputs: inputState,
            updateResult,
            operation,
            date:new Date()
        }
        setHistories([historyItem,...histories])
       
    }

    const handelRestoreBtn = (historyItem) => {
        setInputState({ ...historyItem.inputs })
        setResult(historyItem.updateResult)
        setRestordHistory(historyItem)
    }
    return (
        <div style={{width:'50%',margin:'0 auto'}}>
            <h1>Result: {result}</h1>
            
            <div>
                <p>Inputs</p>
                <input type="number" value={ inputState.a} onChange={handelInputFields} name="a" />
                <input type="number" value={ inputState.b} onChange={handelInputFields} name="b" />
            </div>
            <div>
                <p>Operations</p>
                <button onClick={() => handelArithmeticOperation('+')}>+</button>
                <button onClick={() => handelArithmeticOperation('-')}>-</button>
                <button onClick={() => handelArithmeticOperation('*')}>*</button>
                <button onClick={() => handelArithmeticOperation('/')}>/</button>
                <button onClick={() => handelArithmeticOperation('%')}>%</button>
                <button onClick={handelClearOperation}>Clear</button>
            </div>
            <div>
                <p>History</p>
                {histories.length === 0 ? (
                    <p>
                        <small>There is no history!</small>
                    </p>
                ) : (
                
                        <ul>
                            {histories.map((historyItem)=>(
                             <li key={historyItem.id}>
                                    <p>Operation:{historyItem.inputs.a} {historyItem.operation} {historyItem.inputs.b}, Result { historyItem.updateResult}</p>
                                    <small>{ historyItem.date.toLocaleDateString()}  { historyItem.date.toLocaleTimeString()}</small>
                             <br />
                                    <button onClick={() => handelRestoreBtn(historyItem)
                                    }
                                        disabled={restoredHistory != null && restoredHistory.id === historyItem.id}
                                    >Restore</button>
                         </li>
                            ))}
                       
                    </ul>
                )}
            </div>
        </div>
        
    )
}

export default JsonToJsxToJson