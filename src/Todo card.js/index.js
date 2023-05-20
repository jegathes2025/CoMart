import card from 'react-bootstrap/card';
import { Button } from '@material-ui/core';
import React from 'react';

class TodoListCard extends React.Component {
    state = {
        pendingList:[{title:Gym},{title:Cleaning},{title:Laundry},],
        completed:[{title:Washing},{title:Cooking}]
    };
    render() {
        return(<Container>
            <Pendingbox>
                <h4>My ToDo List</h4>
                <PendingList></PendingList>
            </Pendingbox>
        </Container>)
    }
    
}

export default TodoListCard;