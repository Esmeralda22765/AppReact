import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createContact } from "actions/contacts";

const AddContact = ({ onClose }) => {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ name: "", phone: "" });

    const updateFormValue = ({ target: { name, value } }) =>
        setInputs(inputObj => ({ ...inputObj, [name]: value }));

    const addContact = () => {
        console.log(inputs);
        dispatch(createContact({ ...inputs }));
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inputs.name}
                            name="name"
                            onChange={e => updateFormValue(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inputs.phone}
                            name="phone"
                            onChange={e => updateFormValue(e)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={addContact}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddContact;
