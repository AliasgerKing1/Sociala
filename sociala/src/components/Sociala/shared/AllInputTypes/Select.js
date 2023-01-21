import React from 'react'

const Select = ({placeholder , name, change, blur, classes}) => {
  return (
    <>
                              <select
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      onChange={change}
                      onBlur={blur}> 
                      <option value="">Select</option>
                      <option value=""></option>
                      
                      </select>
    </>
  )
}

export default Select