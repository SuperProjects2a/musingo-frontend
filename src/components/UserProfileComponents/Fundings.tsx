import { Card, Form, Button, Table, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getTransactions,
  ITransaction,
} from "../../services/transactionService";
import { getUser, IUser } from "../../services/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

const Fundings = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([] as ITransaction[]);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const getT = async () => {
      const t = await getTransactions() as ITransaction[];
      setTransactions(t.filter(transaction => transaction?.offer?.offerStatus === "Sold"));
    };
    const getU = async () => {
      const u = await getUser();
      setUser(u);
    };
    getU();
    getT();
  }, []);

  return (
    <>{
      transactions.length > 0 ? (
    <div className="userProfileDiv py-4 px-3 px-md-5">
      <Card style={{ borderRadius: "20px" }}>
        <Card.Body>
          <Card.Title>Historia płatności</Card.Title>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Kwota</th>
                <th>Data</th>
                <th>Użytkownik</th>
                <th>Przedmiot</th>
                <th>Opinie</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction) => (
                <>
                  <tr>
                    <td style = {{color:transaction?.buyer?.email == user?.email ? "red" :"green"}}>
                      {transaction?.buyer?.email == user?.email
                        ? `- ${transaction?.offer?.cost}`
                        : `+ ${transaction?.offer?.cost}`}
                        
                    </td>
                    <td>{transaction?.lastUpdateTime}</td>
                    <td>
                      {transaction?.buyer?.email == user?.email
                        ? transaction?.seller?.email
                        : transaction?.buyer?.email}
                    </td>
                    <td>{transaction?.offer?.title}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {"jeszcze nwm co"}
                      </a>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>) : ( <Container className="d-flex justify-content-center">
              <div className="py-5 m-sm-4" style={{ textAlign: "center" }}>
                <FontAwesomeIcon
                  icon={faHeartCrack}
                  style={{ height: "100px" }}
                  className="py-3"
                />
                <h5>Nie masz jescze żadnej historii płatności.</h5>
              </div>
            </Container>)
}
    </>
  );
};

export default Fundings;
