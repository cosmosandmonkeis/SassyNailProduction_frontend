import React, {useState} from 'react'
import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
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
            <ModalHeader>Admin Delete Service!</ModalHeader>
            <ModalContent>
                <AdminServiceGroup/>
            </ModalContent>
            <ModalActions>
                <Button color='black' onClick={() => setOpen(false)}>
                    I change my mind!
                </Button>
            </ModalActions>
        </Modal>
    )
}


export default DeleteService
