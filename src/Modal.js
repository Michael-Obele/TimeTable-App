import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Row, Col } from 'react-bootstrap';

export function Question() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('');
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create Time Table
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Your TimeTable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              required
              as={Row}
              className='mb-3'
              controlId='formHorizontalEmail'
            >
              <Col sm={10}>
                <Form.Control
                  type='number'
                  value={time}
                  onChange={handleChange}
                  placeholder='Start Time'
                  required
                />
              </Col>
            </Form.Group>
            <div className='mb-3'>
              {time ? `Your class starts at ${time} AM` : ``}
            </div>
            <Form.Group as={Row} className='mb-3'>
              <Col sm={10}>
                <Form.Control
                  type='number'
                  placeholder='Hours on the TimeTable'
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Button type='submit'>Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
