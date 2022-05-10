import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Form, Col, Row, Button } from "react-bootstrap";

export function EditImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChangeImage}
        maxNumber={maxNumber}
        maxFileSize={5242880}
        acceptType={["jpg", "jpeg", "png", "bmp"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          onImageRemoveAll,
          isDragging,
          dragProps,
          errors,
        }) =>
          (
            <div className="upload__image-wrapper">
              <Form.Group>
                <h4>
                  <strong>Zdjęcia</strong>
                </h4>
                <Form.Label>Dodaj zdjęcia</Form.Label>
                <Row className="mb-3">
                  <Col xs={12} sm={8}>
                    <Button
                      variant="dark"
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Dodaj lub upuść zdjęcia
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
              {imageList.map((image, index) => (
                <div key={index} className="pb-3 image-item">
                  <img src={image.dataURL} alt="" width="200" />
                  <div className="image-item__btn-wrapper">
                    <Button
                      variant="outline-dark light"
                      onClick={() => onImageUpdate(index)}
                    >
                      Zmień
                    </Button>
                    <Button
                      variant="outline-dark light"
                      onClick={() => onImageRemove(index)}
                    >
                      Usuń
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </ImageUploading>
      <Form.Text>
        Możesz dodać maksymalnie <strong>5</strong> zdjęć w formacie:
        <strong>.png .jpg .jpeg .bpm</strong> o maksymalnym rozmiarze{" "}
        <strong>5 MB</strong>
      </Form.Text>
    </div>
  );
}

export default EditImage;
