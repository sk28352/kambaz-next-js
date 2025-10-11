"use client"; 
import { Container, Row, Col, Table, Form, FormControl, FormLabel, FormCheck, FormSelect, InputGroup, Button } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <Container>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>

        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
          </Col>
          <Col className="bg-primary text-white">
            <h3>Right half</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={4} className="bg-warning">
            <h3>One third</h3>
          </Col>
          <Col xs={8} className="bg-success text-white">
            <h3>Two thirds</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={2} className="bg-black text-white">
            <h3>Sidebar</h3>
          </Col>
          <Col xs={8} className="bg-secondary text-white">
            <h3>Main content</h3>
          </Col>
          <Col xs={2} className="bg-info">
            <h3>Sidebar</h3>
          </Col>
        </Row>
      </div>

      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <Row>
          <Col xs={12} md={6} xl={3} className="bg-warning">
            <h3>Column A</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-primary text-white">
            <h3>Column B</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-danger text-white">
            <h3>Column C</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-success text-white">
            <h3>Column D</h3>
          </Col>
        </Row>
      </div>

      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <Row>
          {Array.from({ length: 12 }, (_, i) => {
            const colors = ["bg-warning", "bg-primary text-white", "bg-danger text-white", "bg-success text-white"];
            return (
              <Col
                key={i}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                xxl={1}
                className={colors[i % 4]}
              >
                <h4>{i + 1}</h4>
              </Col>
            );
          })}
        </Row>
      </div>

      <div id="wd-css-styling-tables">
        <h2>Tables</h2>
        <Table>
          <thead>
            <tr className="table-dark">
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-warning">
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr className="table-danger">
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr className="table-primary">
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="table-success">
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <div id="wd-css-responsive-tables">
        <h2>Responsive tables</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroupItem active>Aliens</ListGroupItem>
          <ListGroupItem>Terminator</ListGroupItem>
          <ListGroupItem>Blade Runner</ListGroupItem>
          <ListGroupItem>Lord of the Ring</ListGroupItem>
          <ListGroupItem disabled>Star Wars</ListGroupItem>
        </ListGroup>
      </div>

      <div id="wd-css-hyperlink-list" className="mt-4">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroupItem action active href="https://en.wikipedia.org/wiki/Dune_(novel)">
            Dune
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
            Lord of the Rings
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Forever_War">
            The Forever War
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
            2001 A Space Odyssey
          </ListGroupItem>
          <ListGroupItem action disabled href="https://en.wikipedia.org/wiki/Ender%27s_Game">
            Enders Game
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
          </ListGroupItem>
        </ListGroup>
      </div>

      <div id="wd-css-styling-forms">
        <h2>Forms</h2>

        <Form.Group controlId="email1" className="mb-3">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="textarea1" className="mb-3">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="switches1" className="mb-3">
          <h3>Switches</h3>
          <FormCheck type="switch" defaultChecked={false} label="Unchecked switch checkbox input" />
          <FormCheck type="switch" defaultChecked={true} label="Checked switch checkbox input" />
          <FormCheck type="switch" defaultChecked={false} label="Unchecked disabled switch checkbox input" disabled />
          <FormCheck type="switch" defaultChecked={true} label="Checked disabled switch checkbox input" disabled />
        </Form.Group>

        <Form.Group controlId="range1" className="mb-3">
          <h3>Range</h3>
          <FormLabel>Example range</FormLabel>
          <Form.Range min={0} max={5} step={0.5} />
        </Form.Group>
      </div>

      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <FormControl />
        </InputGroup>
        <InputGroup>
          <FormControl />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>

        <Form.Group controlId="email2" className="mb-3" as={Row}>
          <FormLabel column sm={2}>Email</FormLabel>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group controlId="password1" className="mb-3" as={Row}>
          <FormLabel column sm={2}>Password</FormLabel>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Form.Group>

        <Form.Group controlId="bio1" className="mb-3" as={Row}>
          <FormLabel column sm={2}>Bio</FormLabel>
          <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Col>
        </Form.Group>

        <Form.Group controlId="dropdown1" className="mb-3">
          <h3>Dropdowns</h3>
          <FormSelect>
            <option value="0" defaultChecked>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </Form.Group>

<div id="wd-css-responsive-forms-2">
        <h3>Responsive forms 2</h3>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <FormLabel column sm={2}>Email</FormLabel>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <FormLabel column sm={2}>Password</FormLabel>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <FormLabel as="legend" column sm={2}>Radios</FormLabel>
              <Col sm={10}>
                <FormCheck type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                <FormCheck type="radio" label="Second radio" name="formHorizontalRadios" />
                <FormCheck type="radio" label="Third radio" name="formHorizontalRadios" />
                <FormCheck type="radio" label="Remember me" name="formHorizontalRadios" />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      
      </div>
    </Container>
  );
}




