import React, { Component } from 'react';

class Card extends Component {  
    render() {
        const { name, email, id } = this.props;
        return (
            <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <h1>RoboFriends</h1>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;