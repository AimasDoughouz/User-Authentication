import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MainContext } from '../MainStateProvider';
import { Wrapper, Card, Form, Input, Label, Button, Warning } from '../style';
import auth from '../auth';

export default class Login extends Component {
    static contextType = MainContext;
    
 
    render() {
        if (auth.isAuthenticated() === true) {
            return <Redirect to={{
                pathname: '/profile',
            }} />
          } 
        return (
            <MainContext.Consumer>
             {context => (  
                <Wrapper>     
                    <Card>
                        <h3>Login</h3>
                        <Form onSubmit={ this.context.onSubmit(context.state.user)}>
                            <Label htmlFor="name">User Name</Label><br />
                            <Input name="name" type="text" onChange={this.context.handleFormChange('name')} /><br />
                            <Label htmlFor="pass">Password</Label><br />
                            <Input name="pass" type="password" onChange={this.context.handleFormChange('password')} /><br />
                            {auth.isAuthenticated() === false ? <Warning>{context.state.errorHandling.message}</Warning> : null}
                            <Button type="submit" value="Submit">Login</Button>
                        </Form>
                    </Card>
                </Wrapper>
             )}
            </MainContext.Consumer>
        )
    }
}
