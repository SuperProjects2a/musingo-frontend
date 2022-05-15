import React, { useState, useEffect } from "react";
import { Container, Table, Button, Accordion } from "react-bootstrap";
import { reportedOffers } from "../../services/adminService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { offerBanUnban } from "../../services/adminService"

const OfferList = () => {
  interface IReportOffer {
    id: number;
    isBanned: boolean;
    title: string;
    reports: IReport[];
    owner: IUser;
    isVisible: boolean;
  }
  interface IReport {
    id: number;
    reason: string;
    text: string;
    reporter: IUser;
  }
  interface IUser {
    email: string;
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
            <th>Sprzedający</th>
            <th>Opcje</th>
          </tr>
        </thead>
        <tbody>
          {reportedOff?.map((off) => (
            <>
              <tr>
                <td>{off.id}</td>
                <td>{off.title}</td>
                <td>{off.owner.email}</td>
                <td>
                  {off.isBanned == true ? (
                    <>
                      <Button
                        variant="dark"
                        style={{ marginRight: "5px" }}
                        className="mb-1"
                        onClick={() => {
                          offerBanUnban(off.id)
                            .then(result =>{
                              if(result.status === 200)
                              {
                                setReportedOff(
                                  reportedOff.map((item) =>
                                    item.id === off.id
                                      ? { ...item, isBanned: !item.isBanned }
                                      : item
                                  )
                                );
                              }
                            });
                        }}
                      >
                        Odbanuj
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="dark"
                        style={{ marginRight: "5px" }}
                        className="mb-1"
                        onClick={() => {
                          offerBanUnban(off.id)
                            .then(result =>{
                              if(result.status === 200)
                              {
                                setReportedOff(
                                  reportedOff.map((item) =>
                                    item.id === off.id
                                      ? { ...item, isBanned: !item.isBanned }
                                      : item
                                  )
                                );
                              }
                            });
                        }}
                      >
                        Zbanuj
                      </Button>
                      <Button
                        variant="dark"
                        style={{ marginRight: "5px" }}
                        className="mb-1"
                      >
                        Zobacz ofertę
                      </Button>
                    </>
                  )}
                  <Button
                    variant="dark"
                    className="mb-1"
                    onClick={() => {
                      setReportedOff(
                        reportedOff.map((item) =>
                          item.id === off.id
                            ? { ...item, isVisible: !item.isVisible }
                            : item
                        )
                      );
                    }}
                  >
                    {off.isVisible == true ? "Zwiń":"Rozwiń"}
                    <FontAwesomeIcon
                      icon={off.isVisible == true ? faChevronUp:faChevronDown}
                      className="px-1"
                    ></FontAwesomeIcon>
                  </Button>
                </td>
              </tr>
              {off.isVisible && (
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
              )}
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OfferList;
