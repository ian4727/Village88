import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import Modal from "react-bootstrap/Modal";
import Confirmation from "./Confirmation";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onAddOrder = (e) => {
    e.preventDefault();

    if (name === "" || address === "" || number === "") {
      return;
    }

    const newProducts = [];
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const inputs = document.querySelectorAll("input[type=number]");

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const name = checkbox.nextSibling.textContent.trim();
        const quantity = inputs[index].value;
        const total = quantity * 300;
        newProducts.push({ name, quantity, total });
      }
    });

    setProducts(newProducts);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="order">
      <h1>Order Form</h1>
      <form onSubmit={onAddOrder}>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="name"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Delivery address"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            aria-label="address"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Contact Number"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Contact Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            aria-label="number"
          />
        </FloatingLabel>

        <h2>Products</h2>
        <Form.Group className="d-flex align-items-center justify-content-between">
          <Form.Check className="desc" inline label="Limited Edition V88 T-Shirt" />
          <Form.Control className="qty" type="number" inline label="QTY" />
        </Form.Group>
        <Form.Group className="d-flex align-items-center justify-content-between">
          <Form.Check className="desc" inline label="Limited Edition V88 Cap" />
          <Form.Control className="qty" type="number" inline label="QTY" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Place Order
        </Button>
      </form>
      <Confirmation
        order={{ name, address, number, products }}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </div>

  )};

  export default OrderForm
