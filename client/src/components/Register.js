import React, { Component } from 'react'
import { MainContext } from '../MainStateProvider';
import { Redirect } from 'react-router-dom';
import auth from '../auth';
import { Wrapper, Card, Form, Input, Label, Button, Warning } from '../style';

export default class Register extends Component {
    static contextType = MainContext;
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleFormChange = input => e => {
        this.setState({
            ...this.state,
            [input]: e.target.value
        })
    }

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
                        <h3>Register</h3>
                        <Form onSubmit={this.context.onRegisterSubmit(this.state)}>
                            {context.state.errorHandling.hasError ? <Warning>{context.state.errorHandling.message}</Warning> : null}
                            <Label htmlFor="name">Name</Label><br />
                            <Input name="name" type="text" onChange={this.handleFormChange('name')} /><br />
                            <Label htmlFor="email">Email</Label><br />
                            <Input name="email" type="email" onChange={this.handleFormChange('email')} /><br />
                            <Label htmlFor="pass">Password</Label><br />
                            <Input name="pass" type="password" onChange={this.handleFormChange('password')} /><br />
                            <Button type="submit" value="Submit">Submit</Button>
                        </Form>
                    </Card>
                </Wrapper>
                )}
            </MainContext.Consumer>
        )
    }
}
