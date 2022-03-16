import React from "react"
import classes from './ListItem.module.css'

const ListItem = (props) => {
    const deleteHandler = () => {
        props.deleteItem(props.itemId)
    }
    return (
        <div className={classes.listitem}>
            <li>{props.value}</li>
            <input type="button" onClick={deleteHandler} value="Delete"/>
            </div>
    )
}

export default ListItem