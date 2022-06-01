import { Card, Row, Col, Form, Button } from "react-bootstrap";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  ContactDataChange,
  PasswordChange,
  EmailChange,
} from "./ProfileManagementInfoChange";
import { useEffect, useState } from "react";
import UploadImageSingle from "./UploadImageSingle";
import {
  getProfile,
  IProfile,
  putProfile,
} from "../../services/profileService";
import navigationService from "../../services/NavigationService";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { uploadFile } from "../../azure-storage-blob";
import { IUser } from "../../services/userService";

const ProfileManagement = () => {
  const [images, setImages] = useState<ImageListType>([]);
  const [profile, setProfile] = useState<IUser>();
  const [updateProfile, setUpdateProfile] = useState<IProfile>();
  const [error,setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    navigationService.navigation = navigate;
    const getP = async () => {
      const p = await getProfile() as IUser;
      setProfile(p);
      setUpdateProfile({
          email: p.email,
          name:p.name,
          surname:p.surname,
          oldPassword:"",
          newPassword:"",
          gender:p.gender,
          imageUrl: p.imageUrl,
          phoneNumber: p.phoneNumber,
          city: p.city,
          street: p.street,
          houseNumber: p.houseNumber,
          postCode: p.postCode,
          birth: p.birth});
    };
    if (
      typeof localStorage.getItem("token") === "string" &&
      localStorage.getItem("token") !== null
    ) {
      getP();
    }
  });
  const update = async () => {
    setError("");
    if (images.length === 1) {
      const url = await uploadFile(images[0].file!);
      updateProfile!.imageUrl= url;
    }
    await putProfile(updateProfile!).then((res: any) => {
      setProfile(res);
    }).catch((err) => {
      setError(err.data.detail)
    });
  };
  return (
    <div className="userProfileDiv p-4">
      <Row>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
        >
          <Card style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={
                  images.length === 1
                    ? images[0]?.dataURL
                    : profile?.imageUrl !== null
                    ? profile?.imageUrl
                    : avatar
                }
                style={{
                  height: " 150px",
                  width: "150px",
                  objectFit: "fill",
                  borderRadius: "100px",
                }}
                className="pt-2 announcementImg"
              />
              <Card.Title className="mt-3">Dodaj zdjęcie profilu</Card.Title>

              <Form>
                <Form.Group>
                  <Row className="mb-3">
                    <Col xs={12} sm={5}>
                      <UploadImageSingle
                        images={images}
                        setImages={setImages}
                      />
                    </Col>
                    <Col xs={5} sm={4} className="pt-2 pt-sm-0">
                      <Button onClick={update} variant="dark">
                        Wgraj zdjęcie
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mt-4" style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Zmień dane kontaktowe</Card.Title>
              <ContactDataChange updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} update={update} />
            </Card.Body>
          </Card>
          <Card className="mt-4" style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Zmień hasło</Card.Title>
              <PasswordChange updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} update={update} error={error} />
            </Card.Body>
          </Card>
          <Card className="mt-4" style={{ borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Zmień email</Card.Title>
              <EmailChange updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} update={update} error={error} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileManagement;
