import React from 'react'

const Child = (all) => {
    let {thing}= all;
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <h4>{thing.name}</h4>
            </div>
            <div className="card-body">
                <h5>{thing.fee}</h5>
            <p>{thing.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Child