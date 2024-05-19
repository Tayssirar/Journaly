import React from 'react'

function Cards(props) {
  return (
    <div className="media ai-icon">
        <span className={`me-3 bell icon-bell-effect text-${props.color} bgl-${props.color}}`}>
            {props.icon}
        </span>
        <div className="media-body">
            <p className="mb-1">{props.title}</p>
            <h4 className="mb-0">{props.number}</h4>{" "}
            <span className={`badge badge-${props.color}`}>{props.percent}</span>
        </div>
    </div>
  )
}

export default Cards
