import React, {useState} from 'react'
import {Button, Modal} from "semantic-ui-react";
import AdminServiceGroup from "./AdminServiceGroup";

function DeleteService() {

    const [open, setOpen] = useState(false)
    return (
        <Modal onClose={() => setOpen(false)}
               open={open}
               onOpen={() => {
                   setOpen(true)
               }}
               trigger={
                   <Button primary>Let's Delete a Service!</Button>
               }>
            <Modal.Header>Admin Delete Service!</Modal.Header>
            <Modal.Content>
                <AdminServiceGroup/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    I change my mind!
                </Button>
            </Modal.Actions>
        </Modal>
    )
}


export default DeleteService
