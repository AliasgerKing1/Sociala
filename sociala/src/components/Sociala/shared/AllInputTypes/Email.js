import React from 'react'

const Email = ({placeholder , name, change, blur, classes}) => {
  return (
    <div>
                            <input
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      type="email"
                      onChange={change}
                      onBlur={blur}
                    />
    </div>
  )
}

export default Email