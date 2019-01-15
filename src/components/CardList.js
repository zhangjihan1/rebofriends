import React, { Component } from 'react';
import Card from './Card';
import uuidv1 from 'uuid/v1';

const CardList = (props) =>{ 
    const { robots } = props;
        const cardComponent = robots.map((user, i) => {
            return <Card
                key={uuidv1(i)}
                id={user.id}
                name={user.name}
                email={user.email} />
        });

        return (
            <div>
                {cardComponent}
            </div>
        )
}
export default CardList;