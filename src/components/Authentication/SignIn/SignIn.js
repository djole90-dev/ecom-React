import React from 'react'

import FormInput from '../../FormInput/FormInput'
import CustomButton from '../../CustomButton/CustomButton'

import { signInWithGoogle, auth } from '../../../firebase/firebase.utils'

import './signin.scss'


class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (err) {
            console.log(err)
        }
        
    }

    handleChange = e => {

        this.setState({[e.target.name]: e.target.value})
    }


    render() {

        const {email, password} = this.state

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    handleChange={this.handleChange}
                    value={email}
                    label="Email"
                    required
                    />
                    

                    <FormInput 
                    type="password" 
                    name="password" 
                    handleChange={this.handleChange}
                    value={password}
                    label="Password" 
                    required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>

                        <CustomButton 
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn