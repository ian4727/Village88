import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Confirmation = ({ order, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for your order!</p>
        <p>Name: {order.name}</p>
        <p>Address: {order.address}</p>
        <p>Contact Number: {order.number}</p>
        <p>Products:</p>
        <ul>
          {order.products.map((product) => (
            <li key={product.id}>
              {product.name} 300 each - X {product.quantity} pcs
            </li>
            
          ))}
        </ul>
        <p>TOTAL: {order.products.reduce((acc, curr) => acc + curr.total, 0)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;

