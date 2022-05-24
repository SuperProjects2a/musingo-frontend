import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { IAnnouncement } from "../../services/offerService";

const informationsOffer = [
  {
    date: "21.03.2010",
    price: "230",
    item: "Banan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id:"1",
  },
];


const OfferInfo: FunctionComponent<{offer: IAnnouncement | undefined}> = (props) => {
  let date = props.offer ? 
    new Date(props.offer?.createTime as string).toLocaleDateString() 
    + ' ' 
    + new Date(props.offer?.createTime as string).toLocaleTimeString() : '';
  return (
    <div>
      {informationsOffer.map((informationOffer, index) => (
        <Card style={{ textAlign: "left" }} className="p-2">
          <Card.Body>
            <Card.Subtitle className="py-1">
              <small className="text-muted">
                Dodane {date}
              </small>
            </Card.Subtitle>
            <Card.Title className="pt-1">{props.offer?.title}</Card.Title>
            <Card.Subtitle>
              <Card.Text className="pb-4">
                <strong>{props.offer?.cost} zł</strong>
              </Card.Text>
            </Card.Subtitle>
            <strong>Opis</strong>
            <Card.Text>{props.offer?.description}</Card.Text>
            <Link to={`/ReportOffer`} style={{float: 'right', color:"red"}} ><FontAwesomeIcon className="px-2" icon={faFontAwesome}/>Zgłoś</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default OfferInfo;