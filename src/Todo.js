import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import { db } from './firebase';
import { Placeholder } from 'cloudinary-react';
function Todo(props) {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState()
    const handleUpdate = () => {
        db.collection('todos').doc(props.item.id).set({
            todo: input
        }, { merge: true })
        setOpen(false)
        setInput('')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className='Edit-todo'>
                    <div className='Edit-container'>
                        <p>Edit Text</p>
                        <div className='row-input'>
                            <TextField value={input} onChange={e => setInput(e.target.value)} id="standard-basic" placeholder={props.item.todo} />
                            <Button onClick={e => setOpen(false)}>❌</Button>
                            <Button onClick={handleUpdate}>✅</Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.item.todo} secondary="message" />
                    <Button onClick={e => setOpen(true)}>Edit</Button>
                    <Button onClick={event => db.collection('todos').doc(props.item.id).delete()}>❌ Delete </Button>
                </ListItem>
            </List>
        </>
    )
}

export default Todo
