import { Card, Form, Button, Table } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const chanrgeAccountSchema = Yup.object().shape({
  chargeValue: Yup.number()
    .typeError("Wprowadź prawidłową kwotę")
    .positive("Podana kwota nie może być liczbą ujemną"),
});

const Fundings = () => {
  return (
    <div className="userProfileDiv p-4">
      <Card>
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
              <tr>
                <td>24</td>
                <td>21.03.2022</td>
                <td>Maksymilian Średniawa</td>
                <td>Zaliczenie</td>
                <td>Zobacz opinie</td>
              </tr>
              <tr>
                <td>420</td>
                <td>26.03.2022</td>
                <td>Rafał Kulka</td>
                <td>Gitara z motywem Animu</td>
                <td>Zobacz opinie</td>
              </tr>
              <tr>
                <td>-400</td>
                <td>29.03.2022</td>
                <td>Patryk Graca</td>
                <td>Wzmacniasz</td>
                <td>Zobacz opinie</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Fundings;
