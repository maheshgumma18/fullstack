import React from "react";
import "../App.css"

function Button({name}){
    return(
        <div >
            <button>  {name}</button>
             <p>this is the new code i am adding</p>
             <p>this is the code present in feature branch button</p>
            <p>code updated in github </p>
        </div>
    )
}

export default Button
