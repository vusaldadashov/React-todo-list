import React from "react"
import ListItem from "./ListItem"
import classes from './List.module.css'


const List = (props) => {
    const deleteList = (itemId) => {
        props.onDelete(itemId)
    }
    return (
        <div className={classes.list}>
            <ul>
                {props.lists.map(list => (<ListItem key={list.id} itemId={list.id} value={list.value} deleteItem={deleteList}></ListItem>))}
            </ul>
        </div>
    )
}

export default List