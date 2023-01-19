import React from 'react'

const Text = ({placeholder, name, change, blur,classes}) => {
  return (
    <div>
                            <input
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      type="text"
                      onChange={change}
                      onBlur={blur}
                    />
    </div>
  )
}

export default Text