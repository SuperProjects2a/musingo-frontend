import { Card, Form, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getTransactions,
  ITransaction,
} from "../../services/transactionService";
import { getUser, IUser } from "../../services/userService";

const Fundings = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
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
    <div className="userProfileDiv p-4 px-5">
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
    </div>
  );
};

export default Fundings;
