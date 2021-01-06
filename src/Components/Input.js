import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = (props) => {
    return (
            <form  onSubmit={props.submit}
            
              style={{
                margin:'2rem 0'
            }}>
                <TextField 
                onChange = {props.change} 
                fullWidth label="Search for anything" />
                
            </form>
    )
}

export  default Input;
