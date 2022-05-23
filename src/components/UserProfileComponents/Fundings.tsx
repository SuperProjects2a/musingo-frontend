import { Card, Form, Button, Table } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const fundings = [
  {
    price: 200,
    date: "21.03.2010",
    user: "Patryk Graca",
    item: "Gitara elektryczna",
    opinion: "Zobacz opinie",
  },
  {
    price: 200,
    date: "21.03.2010",
    user: "Patryk Graca",
    item: "Gitara elektryczna",
    opinion: "Zobacz opinie",
  },
  {
    price: 200,
    date: "21.03.2010",
    user: "Patryk Graca",
    item: "Gitara elektryczna",
    opinion: "Zobacz opinie",
  },
];

const Fundings = () => {
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
              {fundings.map((funding, index) => (
                <tr>
                  <td>{funding.price}</td>
                  <td>{funding.date}</td>
                  <td>{funding.user}</td>
                  <td>{funding.item}</td>
                  <td>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {funding.opinion}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Fundings;
