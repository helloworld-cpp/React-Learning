import React from "react";

// function Greet() {
//     return <h1> Hello Farru  </h1>
// }

// export const Greet = () => <h1> Hello this Farru </h1> //es6 way of doing the things //
const Greet = (props) => {
    // console.log(props)
    const {name} = props // extracting properties from the prop
    return (
        <div>
            <h1> Hello this is {name} </h1>
            {/* {props.children} */}
        </div>
        
    )
}

export default Greet;