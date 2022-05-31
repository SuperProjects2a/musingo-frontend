import { Container, Form, Col, Row, InputGroup } from "react-bootstrap";
import React, { useState, useEffect, FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSearch: FunctionComponent<{ onFilterChange: any }> = ({
  onFilterChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState<number | null>();
  const [maxPrice, setMaxPrice] = useState<number | null>();
  const [category, setCategory] = useState<string | null>();
  const [sorting, setSorting] = useState<string | null>("Latest");
  const [validated, setValidated] = useState(false);

  const setFilters = () => {
    let categoryQuery = searchParams.get("Category");
    setCategory(categoryQuery)
    let cat = categoryQuery !== "null" && categoryQuery !== undefined && categoryQuery ? categoryQuery: ""
    console.log(cat);
    let priceFrom = !isNaN(minPrice as number) ? minPrice : null;
    let priceTo = !isNaN(maxPrice as number) ? maxPrice : null;
    onFilterChange({
      PriceFrom: priceFrom,
      PriceTo: priceTo,
      Category: cat,
      Sorting: sorting,
    });
  };

  useEffect(() => {
    setFilters();
    setValidated(false);
    if (minPrice !== null && maxPrice !== null) {
      if (maxPrice! < minPrice!) {
        setValidated(true);
      }
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setFilters();
  }, [sorting]);

  useEffect(() => {
    if (category !== "null" && category !== undefined && category) {
      let isNotFind = true;
      const arr = [...searchParams];
      for (let i: number = 0; i < arr.length; i++) {
        if (arr[i][0] === "Category") {
          arr[i][1] = category!;
          isNotFind = false;
        }
      }
      if (isNotFind) arr.push(["Category", category!]);
      setSearchParams(arr);
    }
    if (category == "null") {
      searchParams.delete("Category");
      setSearchParams(searchParams);
    }
  }, [category]);
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
              value={category!}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="null">Wybierz kategorię</option>
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
                  onChange={(e) => {
                    setMinPrice(parseInt(e.target.value));
                  }}
                />
                <Form.Control
                  className="mx-2"
                  type="number"
                  min="0"
                  placeholder="do"
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
              onChange={(e) => {
                setSorting(e.target.value);
              }}
            >
              <option value="Latest">Od najnowszych</option>
              <option value="Oldest">Od najstarszych</option>
              <option value="Ascending">Cena: od najtańszych</option>
              <option value="Descending">Cena: od najdroższych</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FilterSearch;
