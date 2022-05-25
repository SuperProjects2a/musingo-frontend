import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Form, Col, Row, Button } from "react-bootstrap";

export function UploadImageSingle(params:any) {
 

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    params.setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUploading
        value={params.images}
        onChange={onChangeImage}
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
              
            </div>
          )
        }
      </ImageUploading>
      <Form.Text>
        Możesz dodać zdjęcie w formacie:
        <strong>.png .jpg .jpeg .bpm</strong> o maksymalnym rozmiarze{" "}
        <strong>5 MB</strong>
      </Form.Text>
    </div>
  );
}

export default UploadImageSingle;
