import React from "react";
import { FunctionComponent } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import { IOwner } from "../../services/offerService";
import avatar from "../../images/avatar.png";
import { useNavigate, useParams } from "react-router-dom";

const PersonalInfo: FunctionComponent<{
  user: IOwner | undefined;
  city: string | undefined;
}> = (props) => {
  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <Card className="py-3 px-4">
        <Row>
          <Card.Img
            variant="top"
            src={props.user?.imageUrl !== null ? props.user?.imageUrl : avatar}
            style={{
              height: "calc(11vh + 4vw)",
              width: "calc(11vh + 4vw)",
              maxHeight: "88px",
              maxWidth: "88px",
              objectFit: "cover",
              borderRadius: "90px",
            }}
            className="pt-2 px-2 pb-2"
          />
          <Col className="personalInfoDisplayOffer">
            <strong>
              {props.user?.name} {props.user?.surname}
            </strong>
            <Col className="py-1">
              <FontAwesomeIcon icon={faStar} className="iconsDisplayOffer" />
              {props.user?.avgRating === 0  ? "brak opinii" :
              (<>
                {props.user?.avgRating?.toFixed(2)}
                <small className="text-muted">/5</small>
                </>)
              }
            </Col>
            <Col className="pb-3">
              <FontAwesomeIcon icon={faCompass} className="iconsDisplayOffer" />
              {props.city}
            </Col>
          </Col>
        </Row>
        <Button className="" variant="outline-dark light">
          <strong>Zadzwoń</strong>
        </Button>
        <Button onClick = {()=>{navigate(`/AskForItem/${id}`)}} className="mt-2" variant="outline-dark light">
          <strong>Zapytaj o przedmiot</strong>
        </Button>
      </Card>
    </div>
  );
};

export default PersonalInfo;

