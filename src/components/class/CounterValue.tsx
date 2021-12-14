import React, { Component } from 'react'

// type CounterProps={
//     message:string
// }

type CounterState={
    count: number
}

export class CounterValue extends Component<{} , CounterState> {
    state ={
        count :0
    }

    handleClick=()=>{
        this.setState((prevState)=>({count : prevState.count +1}))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Increment</button>
                 {this.state.count}
            </div>
        )
    }
}


