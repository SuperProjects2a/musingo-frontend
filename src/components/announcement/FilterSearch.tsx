import { Container, Form, Col, Row, InputGroup } from "react-bootstrap";
import React, { useState, useEffect, FunctionComponent } from "react";

const FilterSearch: FunctionComponent<{onFilterChange: any}> = ({onFilterChange}) => {
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [category, setCategory] = useState<string | null>();
  const [sorting, setSorting] = useState<string | null>('Latest');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(false);
    if (minPrice != undefined && maxPrice != undefined) {
      if (maxPrice < minPrice) {
        setValidated(true);
      }
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onFilterChange({MinPrice: minPrice, MaxPrice: maxPrice, Category: category, Sorting: sorting})
  }, [minPrice, maxPrice, category, sorting])

  return (
    <Container fluid style={{ textAlign: "left" }}>
      <h4>
        <b>Filtry</b>
      </h4>
      <Form>
        <Row>
          <Col
            xs={{ span: 6, order: 1 }}
            sm={{ span: 4, order: 1 }}
            lg={3}
            xl={2}
          >
            <Form.Label>Kategoria</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="selectColor"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>Wybierz kategorię</option>
              <option value="Guitars">Gitary</option>
              <option value="WindInstruments">Dęte</option>
              <option value="Keyboards">Klawiszowe</option>
              <option value="Percussion">Perkusyjne</option>
              <option value="String">Smyczkowe</option>
              <option value="Microphones">Mikrofony</option>
              <option value="Headphones">Słuchawki</option>
              <option value="Accessories">Akcesoria</option>
              <option value="NotesBooks">Nuty, książki</option>
              <option value="Other">Inne</option>
            </Form.Select>
          </Col>
          <Col
            xs={{ span: 10, order: 3 }}
            sm={{ span: 4, order: 2 }}
            lg={4}
            xl={3}
            className="pt-1 pt-sm-0"
          >
            <Form.Label>Cena</Form.Label>
            <Col xs={9} sm={12} lg={10}>
              <InputGroup>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="od"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(parseInt(e.target.value));
                  }}
                />
                <Form.Control
                  className="mx-2"
                  type="number"
                  min="0"
                  placeholder="do"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                />
              </InputGroup>
            </Col>
            {validated == true && (
              <Row>
                <Form.Text className="text-danger">
                  <small>Wartość "od" nie może być większa niż "do".</small>
                </Form.Text>
              </Row>
            )}
          </Col>
          <Col
            xs={{ span: 6, order: 2 }}
            sm={{ span: 4, order: 3 }}
            lg={{ span: 3, offset: 2 }}
            xl={{ span: 2, offset: 5 }}
          >
            <Form.Label>Sortowanie</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="selectColor"
            >
              <option value="1">Od najnowszych</option>
              <option value="2">Od najstarszych</option>
              <option value="3">Cena: od najtańszych</option>
              <option value="4">Cena: od najdroższych</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FilterSearch;
