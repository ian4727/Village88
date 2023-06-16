import Carousel from 'react-bootstrap/Carousel';
import Rachel from '../assets/images/rachel.jpg';
import Chandler from '../assets/images/chandler.jpg';
import Monica from '../assets/images/monica.jpg';
import Joey from '../assets/images/joey.jpg';
import Ross from '../assets/images/ross.jpg';
import Phoebe from '../assets/images/phoebe.jpg';

function CarouselFade() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Chandler}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chandler Bing</h3>
            <p>"Can I interest you with a sarcasm?"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Rachel}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Rachel Green</h3>
            <p>"I got off the plane."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monica}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Monica Geller</h3>
            <p>"I know!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Phoebe}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Phoebe Buffay</h3>
            <p>"Smelly Cat, Smelly Cat, what are they feeding you?"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ross}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Ross Geller</h3>
            <p>"We we're on a break!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Joey}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Joey Tribbiani</h3>
            <p>"How you doin'?"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
