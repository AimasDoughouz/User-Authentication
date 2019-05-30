import React, { Component } from 'react';
import auth from './auth';
import { withRouter } from 'react-router-dom';

export const MainContext = React.createContext();

class MainStateProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                password: ''
            },
            errorHandling: {
                hasError: null,
                message: ''
            }
        }
    }

    handleFormChange = input => e => {
        this.setState({       
            user: {...this.state.user, [input]: e.target.value },
            errorHandling: {
                hasError: null,
                message: ''
            }
        })
        
    }

    onSubmit = state => async e => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            state,
            })
        })
        .then(data => data.json())
        .then(res => {
            if(res.error === false) {
               this.setState({
                    user: {
                    name: this.state.user.name
                    },
                    errorHandling: {
                    hasError: false,
                    message: res.message
                }
                })
                auth.login(()=> {
                    
                    this.props.history.push('/profile')
                })
            } else {
                return this.setState({
                user: {
                    name: '',
                    password: ''
                },
                    errorHandling: {
                    hasError: false,
                    message: res.message
                }
                })
            }
        })    
    }

    logout = () => {
        this.setState({
            user: {
                name: '',
                password: ''
            },
            errorHandling: {
                hasError: null,
                message: ''
            }
        })
        auth.logout(() => {
            this.props.history.push('/login')
        })
    }

    onRegisterSubmit = state => e => {
        e.preventDefault();
        if(state.name && state.password && state.email) {
            fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                state,
                })
            })
            this.setState({
                user: {
                    name: state.name,
                }
            })
            auth.login(() => {
                this.props.history.push('/profile')
            })
        } else {
            this.setState({
                ...this.state,
                errorHandling: {
                    hasError: true,
                    message: 'All fields are required'
                }
            })
        }  
   }

    render() {
        return (
            <MainContext.Provider value = {{
                state: this.state,
                handleFormChange: this.handleFormChange,
                onSubmit: this.onSubmit,
                logout: this.logout,
                onRegisterSubmit: this.onRegisterSubmit,
              }}>
                  {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default withRouter(MainStateProvider);