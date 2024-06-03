import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function FeedbackModal({ show, handleClose, comment, setComment, userRole, handleSave }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Feedback</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="form-control"
                    readOnly={userRole !== 'inspector' && userRole !== 'assistant'}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                {(userRole === 'inspector' || userRole === 'assistant') && (
                    <Button variant="primary" onClick={handleSave}>
                        Enregistrer
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default FeedbackModal;
