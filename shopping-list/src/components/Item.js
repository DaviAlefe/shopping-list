import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from '../firebase/firebase';

function Item(props) {
    return (
        <List className='Item'>
            <ListItem>
                <ListItemText primary={props.description} />
            </ListItem>
            <DeleteIcon onClick={ (e) => db.collection('items').doc(props.id).delete() } />
        </List>
    )
}

export default Item
