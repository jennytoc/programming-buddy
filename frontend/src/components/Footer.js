import { Row, Col } from "react-bootstrap"
import './NavBarsStyle.css'

function Footer() {
  return (
    <footer>
      <Row className="footer-div">
        <Col xs={8} >
          <p className="footer-text">© Programming Buddy, 2021. All rights reserved.</p>
        </Col>
        <Col xs={4}>
          <img src={require('../images/facebook.png')} className="icon" alt="facebook"/>
          <img src={require('../images/instagram.png')} className="icon" alt="instagram"/>
          <img src={require('../images/twitter.png')} className="icon" alt="twitter"/>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;