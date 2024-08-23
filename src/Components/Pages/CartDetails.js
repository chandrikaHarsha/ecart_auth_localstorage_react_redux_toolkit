import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decrementItem,
  emptyCart,
} from "../../Redux/Features/CartSlice";
const CartDetails = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnty, setTotalQnty] = useState(0);
  const totalqnty = () => {
    let totalQnty = 0;
    carts.map((items) => {
      totalQnty = items.qnty + totalQnty;
    });
    setTotalQnty(totalQnty);
  };
  const total = () => {
    let totalPrice = 0;
    carts.map((items) => {
      totalPrice = items.price * items.qnty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    total();
    totalqnty();
  }, [total, totalqnty]);
  const { carts } = useSelector((state) => state.Cart);
  // const arr = [0, 1];
  const dispatch = useDispatch();
  const increaseQnty = (e) => {
    dispatch(addToCart(e));
  };
  const removeItem = (e) => {
    dispatch(removeFromCart(e));
  };
  const decreaseItemByOne = (e) => {
    dispatch(decrementItem(e));
  };
  const EmptyCart = () => {
    dispatch(emptyCart());
  };
  return (
    <>
      <div className="container-fluid">
        <Container>
          <Row className="mt-3 d-flex justify-content-center">
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Header
                  style={{
                    backgroundColor: "#1f727e",
                    color: "#fff",
                    padding: "15px",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <h2>
                    Manage your orders...
                    {carts.length > 0 ? `currently ${carts.length} items` : " "}
                  </h2>
                  {carts.length > 0 ? (
                    <Button
                      className="bg-danger p-2"
                      style={{ border: "none" }}
                      onClick={() => EmptyCart()}
                    >
                      <RiDeleteBin5Line style={{ fontSize: "20px" }} />
                      &nbsp;
                      <span>Empty Cart</span>
                    </Button>
                  ) : (
                    ""
                  )}
                </Card.Header>
                <Card.Body className="m-0 p-0">
                  {carts.length === 0 ? (
                    <Col className="m-0 p-0">
                      <table className="table shadow-lg m-0 p-0">
                        <tbody className="d-flex justify-content-center align-items-center m-0 p-0 flex-column">
                          <tr
                            height={"100px"}
                            className=" d-flex justify-content-center align-items-center"
                          >
                            <td style={{ border: "none" }}>
                              <div
                                className=" d-flex justify-content-center align-items-center"
                                height={"100px"}
                                style={{ border: "none" }}
                              >
                                <FaShoppingCart
                                  style={{
                                    color: "lightgrey",
                                    fontSize: "50px",
                                    border: "none",
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "lightgrey",
                                fontWeight: "500",
                                fontSize: "20px",
                              }}
                            >
                              <span>Your Cart is Empty</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  ) : (
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Product</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th className="text-end">Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts.map((items, index) => (
                          <tr>
                            <td>
                              <Button
                                className="bg-danger"
                                style={{ border: "none" }}
                                onClick={() => removeItem(items.id)}
                              >
                                <RiDeleteBin5Line
                                  style={{ fontSize: "25px" }}
                                />
                              </Button>
                            </td>
                            <td>
                              <img
                                src={items.imgdata}
                                alt="product"
                                width={"150px"}
                                height={"150px"}
                              />
                            </td>
                            <td>
                              <p>{items.dish}</p>
                            </td>
                            <td>
                              <p>{items.price}</p>
                            </td>
                            <td>
                              <div className="d-flex justify-content-between align-items-center gap-1">
                                <Button
                                  style={{
                                    background: "lightgrey",
                                    border: "none",
                                  }}
                                  onClick={
                                    items.qnty <= 1
                                      ? () => removeItem(items.id)
                                      : () => decreaseItemByOne(items)
                                  }
                                >
                                  -
                                </Button>
                                <input
                                  type="text"
                                  size="5"
                                  value={items.qnty}
                                  disabled
                                  className="text-center"
                                />
                                <Button
                                  style={{
                                    background: "lightgrey",
                                    border: "none",
                                  }}
                                  onClick={() => increaseQnty(items)}
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <td className="text-end">
                              {items.price * items.qnty}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={4}>&nbsp;</th>
                          <th>
                            Items in cart :{" "}
                            <span className="text-danger">{totalQnty}</span>
                          </th>
                          <th>
                            Total price :{" "}
                            <span className="text-danger">{totalPrice}</span>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default CartDetails;
