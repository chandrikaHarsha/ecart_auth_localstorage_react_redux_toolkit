import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { carts } = useSelector((state) => state.Cart);
  // console.log(carts);
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#1f727e", height: "100px" }}
        className="nav"
      >
        <Container className="position-relative p-2">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand
              href="#home"
              style={{ color: "#fff", fontSize: "30px", fontWeight: "400" }}
            >
              E-commerce
            </Navbar.Brand>
          </NavLink>

          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            <FaShoppingCart
              style={{
                color: "#fff",
                fontSize: "30px",
                position: "absolute",
                right: "69px",
                bottom: "20px",
              }}
              className="navIcon"
            />
            <span data-count={carts.length} className="cartBadge"></span>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
