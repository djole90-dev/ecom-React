import React from 'react'

import { CustomButtonContainer } from './sc-CustomButton'

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton