import React from 'react'

import SignIn from '../../components/Authentication/SignIn/SignIn'
import SignUp from '../../components/Authentication/SignUp/SignUp'

import './authentication.scss'

const AuthenticationPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)


export default AuthenticationPage