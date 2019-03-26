import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

//import "./style.css";

import bookcover from "./bookcovertwitch.png";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {

  render() {

    return (


      <div>
              <Container>
             <Row>
             <Col size="md-7" id="bookimg">
             <img src={bookcover} width="550" height="800" alt="bookcover" />
             </Col>
            
       
        <Col size="md-5" id="rules">
        <p style={{ marginTop: 0 }} > 
        <br></br>
1.	You will not upload, post, discuss, request, or link to anything that violates local or United States law. <br></br><br></br>
2.	You will immediately cease and not continue to access the site if you are under the age of 18. <br></br><br></br>
3.	You will not post any of the following:  racism, indecipherable text. <br></br><br></br>
4.	You will not post or request personal information ("dox") or calls to invasion ("raids").  <br></br><br></br>
5.	No spamming or flooding of any kind. <br></br><br></br>
6.	Advertising (all forms) is not welcome—this includes any type of referral linking, "offers", soliciting, begging, stream threads, etc. <br></br><br></br>
7.	The use of scrapers, bots, or other automated posting or downloading scripts is prohibited. Users may also not post from proxies, VPNs, or Tor exit nodes. 


 </p>

            </Col>
       
        </Row>
        <Row>
        <Col size="md-10" id="remember" class = "centeflex">
        <p style={{ marginTop: 0 }} >   
        Remember: The use of Jose García Lòpez’s website is a privilege, not a right. 
        The moderation team reserves the right to revoke access and remove content for any reason without notice.
        </p>
        </Col>
        </Row>
            </Container>
      </div>


        );
      }
    }
     
export default About;