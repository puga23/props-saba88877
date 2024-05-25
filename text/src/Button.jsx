import React from 'react'
import "./button.css"

function Button({children, main}) {
  return (
    <div>Button
        <button className={main}>{children}</button>
    </div>
  )
}

export default Button