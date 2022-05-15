import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { reportedOffers } from "../../services/adminService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";

const OfferList = () => {
  interface IReportOffer {
    cost: number;
    id: number;
    imageUrl: null;
    isBanned: boolean;
    itemCategory: string;
    offerStatus: string;
    title: string;
    reports: IReport[];
    owner: IUser;
  }
  interface IReport {
    id: number;
    reason: string;
    text: string;
    reporter: IUser;
  }
  interface IUser {
    avgRating: number;
    email: string;
    imageUrl: null;
    name: string;
    phoneNumber: string;
    role: string;
    surname: string;
  }
  const [reportedOff, setReportedOff] = useState<IReportOffer[]>();

  const getReportedOffers = () => {
    reportedOffers().then((result) => {
      setReportedOff(result);
    });
  };

  useEffect(() => {
    getReportedOffers();
  }, []);
  return (
    <Container className="py-2 px-2 px-lg-4" fluid>
      <Table striped responsive bordered hover style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Opcje</th>
            {/* <th>
              <Table striped responsive bordered hover>
                <thead>
                  <tr>Powód</tr>
                  <tr>Komentarz</tr>
                </thead>
              </Table>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {reportedOff?.map((off) => (
            <>
              <tr>
                <td>{off.id}</td>
                <td>{off.title}</td>
                <td>
                  {off.isBanned == true ? (
                    <>
                      <Button variant="dark">Odbanuj</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="dark">Zbanuj</Button>
                      <Button variant="dark" className="mx-1">
                        Zobacz ofertę
                      </Button>
                    </>
                  )}
                </td>
              </tr>
              {/* <tr>
                <th>aaa</th>
                <th>bbb</th>
                <tbody>
                  <td>ddd</td>
                  <td>ddd</td>
                </tbody>
              </tr> */}
              {/* <tr>
                <td colSpan={12}>
                  <Table striped responsive bordered hover>
                    <thead>
                      <tr>
                        <th>aaa</th>
                        <th>bbb</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td>ddd</td>
                      <td>ddd</td>
                    </tbody>
                  </Table>
                </td>
              </tr> */}

              <tr>
                <td colSpan={12}>
                  <Table striped responsive hover>
                    <thead>
                      <tr>
                        <th>Powód</th>
                        <th>Treść</th>
                        <th>Użytkownik</th>
                      </tr>
                    </thead>
                    <tbody>
                      {off.reports.map((report) => (
                        <tr>
                          <td>{report.reason}</td>
                          <td>{report.text}</td>
                          <td>{report.reporter.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OfferList;
