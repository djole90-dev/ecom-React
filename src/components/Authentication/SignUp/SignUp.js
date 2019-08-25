import React from 'react'

import FormInput from '../../FormInput/FormInput'
import CustomButton from '../../CustomButton/CustomButton'

import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'

import './signup.scss'

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        console.log(email, password)


        if (password !== confirmPassword) {
           alert('Passwords dont match')
           return 
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.clearState()
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    clearState = () => {
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                     type="text"
                     name="displayName"
                     value={displayName}
                     onChange={this.handleChange}
                     label="Display Name"
                     required
                    />
                    <FormInput
                     type="email"
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                     label="Email"
                     required
                    />
                    <FormInput
                     type="password"
                     name="password"
                     value={password}
                     onChange={this.handleChange}
                     label="Password"
                     required
                    />
                    <FormInput
                     type="password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={this.handleChange}
                     label="Confirm Password"
                     required
                    />

                    <CustomButton type="submit">
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp