// ModalContent.js
import React from "react";
import { Modal } from "react-bootstrap";

const ModalContent = ({ title, body, closeModal }) => {
    return (
        <Modal.Body>
            <Modal.Title>{title}</Modal.Title>
            <p>{body}</p>
        </Modal.Body>
    );
};

export default ModalContent;
