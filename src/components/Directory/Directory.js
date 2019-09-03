import React from 'react'
import {connect} from 'react-redux'
import MenuItem from '../MenuItem/MenuItem'
import { createStructuredSelector } from 'reselect'
import { selectCurrentDirectory } from '../../redux/selectors'
import './directory.scss'

const Directory = ({sections}) => (

    <div className="directory-menu">
        {sections.map(({ id, ...otherProps}) => (
        <MenuItem 
          key={id} {...otherProps} />
        ))}
    </div>

)

const mapStateToProps = createStructuredSelector({
  sections:selectCurrentDirectory
})
    
        

export default connect(mapStateToProps)(Directory)