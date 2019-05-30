import React, { Component } from 'react'
import { MainContext } from '../MainStateProvider';
import { Wrapper } from '../style';

export default class Profile extends Component {
    static contextType = MainContext;
    render() {
        return (
            <MainContext.Consumer>
                {context => (
                    <Wrapper>
                        <h1>Welcome {this.context.state.user.name}</h1>
                        <button onClick={this.context.logout}>logout</button>
                    </Wrapper>
                )}
            </MainContext.Consumer>
        )
    }
}
