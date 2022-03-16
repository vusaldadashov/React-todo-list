import classes from './Form.module.css'
import React, {useRef} from 'react'

const Form = (props) => {
    const listInput = useRef()
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.getInput(listInput.current.value)
        listInput.current.value = ''
    }
    return (
        <div className={classes.form}>
            <form onSubmit={onSubmitHandler}>
                <h1>Todo List</h1>
                <input type="text" ref={listInput} />
                <button type='submit'>Add to List</button>
            </form>
        </div>
    )
}

export default Form