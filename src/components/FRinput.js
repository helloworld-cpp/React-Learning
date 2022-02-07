import React from 'react';

// function FRinput() {
//   return (
//       <input type="text"></input>
//   )
// }

const FRinput  = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default FRinput;
