import React from 'react';
// import { ReactDOM } from 'react-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import {ExampleCarouselImage} from '../assets/images';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to Our Photography Studio</h1>
      </div>
      <div>
        <p>Hello! Please select from one of the choices above.</p>
      </div>
      <div>
        <div className="home-header">
          <h1 className="home-title">Capturing Life's Moments</h1>
          <span></span>
        </div>
      </div>
      <div>
        <div className="home-description">
          <p>
            <span>Professional photography for weddings, families, and events</span>
          </p>
        </div>
      </div>


      {/* <div>
      <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div> */}



      {/* <div>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1000x10000:format=jpg/path/sc6d2404ff8bcd49b/image/i157ef2ec4144621a/version/1515190448/image.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </div> */}

      <div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" className="serviceimage" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1000x10000:format=jpg/path/sc6d2404ff8bcd49b/image/i157ef2ec4144621a/version/1515190448/image.jpg" />
        <Card.Body>
          <Card.Title>Private Parties</Card.Title>
          <Card.Text>
            Let our photogrophers capture the unforgettable memories of your private party!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="serviceimage" src="https://www.seanleblancphotography.com/wp-content/uploads/2019/01/Sean-LeBlanc-Photography-Best-Wedding-Photographs-of-2018-19.jpg" />
        <Card.Body>
          <Card.Title>Weddings</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="serviceimage" src="https://www.corporateheadshotportraits.com/wp-content/uploads/2018/02/business-corporation-large-group-photo.jpg" />
        <Card.Body>
          <Card.Title>Corporate Functions</Card.Title>
          <Card.Text>
      Let us bring professional photos of your corporate teams, locations, offices, and so much more.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </div>
    </div>
  );
}
