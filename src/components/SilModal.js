import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Modal } from 'semantic-ui-react'
import { BASE_URL } from '../api';

const SilModal = ({ yazi }) => {
    const navigate = useNavigate();
    console.log(yazi)
    const [open, setOpen] = useState(false);

    const show = () => setOpen(true)
    const close = () => setOpen(false)

    const deleteYazi = () => {
        axios.delete(`${BASE_URL}/posts/${yazi.id}`)
            .then(response => {
                console.log("Response: ", response)
                close()
                navigate(`/`)
            }).catch(error => {

            })
    }

    return (
        <React.Fragment>
            <Button color="red" onClick={show}>Sil</Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Yaziyi sil</Modal.Header>
                <Modal.Content>Yaziyi silmek isteğinizden emin misiniz</Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={close}>
                        Hayır
                    </Button>
                    <Button positive onClick={() => deleteYazi()}>
                        Evet
                    </Button>
                </Modal.Actions>
            </Modal>
        </React.Fragment>
    )
}

export default SilModal