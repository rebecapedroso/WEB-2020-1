import React from 'react'

export default (props)=>
<div>
  {/* arena: {props.arena}*/}
    {
        React.children.map(
            props.children,
            (arena4)=>{
                return React.cloneElement(arena4,{...props})
            }
        )
    }
</div>

