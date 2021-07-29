import React from 'react'



 const BaseButton = ({children, onClick}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default BaseButton