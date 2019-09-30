import React from 'react';
import '../card/card.styles.css';
export const Card = props => (
    <div className="card-container">
        <img alt='mosnter' src= {`https://robohash.org/${props.monster.id}?set=set&size=180x180`}></img>
        <h2> {props.monster.name}</h2>
        <p> {props.monster.email}</p>
    </div>
)
