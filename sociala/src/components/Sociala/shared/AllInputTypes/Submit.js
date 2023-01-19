import React from 'react'

const Submit = ({ value }) => {
  return (
    <div>
         <input
                        type="submit"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                        value={value} />
    </div>
  )
}

export default Submit