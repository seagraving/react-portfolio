import Carousel from 'react-bootstrap/Carousel'

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/assets/co-1.png"
      alt="Woodwinds Section in Orchestra"
    />
    <Carousel.Caption>
      {/* <h3>University Performance with Orchestra. </h3> */}
      <p>Concert with the university orchestra- woodwinds section. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/assets/co-2.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/hshot.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

export default Carousel;