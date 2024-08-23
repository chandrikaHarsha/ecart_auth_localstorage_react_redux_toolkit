import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { CardData } from "./CardData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Features/CartSlice";
const Home = () => {
  const [cardData, setCardData] = useState(CardData);
  const dispatch = useDispatch();
  const addedToCart = (e) => {
    console.log(e);
    dispatch(addToCart(e));
  };
  return (
    <>
      <div className="container-fluid">
        <Container
          className="mt-4"
          style={{ boxShadow: "0 1px 50px 1px rgba(0,0,0,0.2)" }}
        >
          <Row>
            <h2 className="ms-3 mt-3 fs-1">Book your favorite food now...</h2>
          </Row>
          <Row className="d-flex justify-content-around align-items-center gap-3 mt-4 py-3">
            {cardData.map((items, index) => (
              <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0 1px 50px 1px rgba(0,0,0,0.2)",
                }}
                className="mt-3 m-0 p-0"
              >
                <Card.Img
                  src={items.imgdata}
                  alt="food"
                  className="m-0 p-0"
                  width={"100%"}
                  height={"200px"}
                />
                <Card.Body style={{ backgroundColor: "#f4f2f1" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{items.dish}</span>
                    <span
                      className="rounded text-light p-1"
                      style={{ backgroundColor: "#1f727e" }}
                    >
                      {items.rating}&nbsp;★
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{items.address}</span>
                    <span>{items.price}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="image-fluid">
                      <img src={items.arrimg} alt="food" width={"30px"} />
                    </span>
                    <Button
                      style={{
                        backgroundColor: "#1f727e",
                        border: "none",
                        padding: "10px",
                      }}
                      onClick={() => addedToCart(items)}
                    >
                      Add to cart
                    </Button>
                    <span className="image-fluid">
                      <img src={items.delimg} alt="food" width={"80px"} />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
