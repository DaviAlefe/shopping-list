import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Item(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.description} />
            </ListItem>
        </List>
    )
}

export default Item
