import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { getUser, IUser } from "../../services/userService";
import navigationService from "../../services/NavigationService";

const NavbarComp = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigationService.navigation = navigate;
    const getU = async () => {
      const u = await getUser();
      setUser(u);
    };

    if (
      typeof localStorage.getItem("token") === "string" &&
      localStorage.getItem("token") !== null
    ) {
      getU();
    }
  }, []);

  return (
    <>
      {console.log(user)}
      <div className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="px-4"
          sticky="top"
        >
          <Navbar.Brand
            as={Link}
            to={"/"}
            style={{ fontFamily: "Nova Mono", fontSize: 28 }}
          >
            musingo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                title="Kategorie"
                id="collasible-nav-dropdown"
                className="mb-auto mt-auto"
              >
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Gitary
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Dęte
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Klawiszowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Perkusyjne
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Smyczkowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Mikrofony
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Słuchawki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Nuty, książki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Akcesoria
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Inne
                </NavDropdown.Item>
              </NavDropdown>
              {user?.role.includes("Admin") && (
                <Nav.Link
                  as={Link}
                  to={"/AdminPanel"}
                  className="mb-auto mt-auto"
                >
                  Admin panel
                </Nav.Link>
              )}
              {user == null && (
                <Nav.Link
                  as={Link}
                  to={"/SignInUp"}
                  className="mb-auto mt-auto"
                >
                  Zaloguj się
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link
                  as={Link}
                  to={"/AddOffer"}
                  className="mb-auto mt-auto"
                >
                  Dodaj ogłoszenie
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link as={Link} to={"/Watch"} className="mb-auto mt-auto">
                  Obserwowane
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link
                  as={Link}
                  to={"/UserProfile/Messages"}
                  className="mb-auto mt-auto"
                >
                  Wiadomości
                </Nav.Link>
              )}
              {user == null || (
                // <Nav.Link
                //   as={Link}
                //   to={"/UserProfile"}
                //   className="mb-auto mt-auto"
                // >
                //   Moje konto
                // </Nav.Link>
                <NavDropdown
                  title="Moje Konto"
                  id="collasible-nav-dropdown"
                  className="mb-auto mt-auto"
                >
                  <NavDropdown.Item
                    as={Link}
                    to={"/UserProfile/ProfileManagement"}
                  >
                    Ustawienia konta
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/UserProfile/Fundings"}>
                    Konto
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/UserProfile/Offers"}>
                    Ogłoszenia
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={"/UserProfile/AcuiredRatings"}
                  >
                    Otrzymane oceny
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/UserProfile/Messages"}>
                    Wiadomości
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      localStorage.removeItem("token");
                      setUser(null);
                    }}
                    as={Link}
                    to={"/"}
                  >
                    Wyloguj się
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {/* {user == null || (
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                  }}
                  as={Link}
                  to={"/"}
                  className="mb-auto mt-auto"
                >
                  Wyloguj się
                </Nav.Link>
              )} */}
              {user == null || (
                <div
                  className="text-white mb-auto mt-auto noSelect p-2"
                  style={{ fontWeight: "bold" }}
                >
                  {user.walletBalance} zł
                </div>
              )}
              {user == null || (
                <Nav.Link as={Link} to={"/FundAdd"}>
                  <Button className="btn btn-success">Doładuj konto</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComp;
