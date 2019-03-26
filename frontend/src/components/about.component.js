import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

//import "./style.css";
import me from "./me.png";
import bookcover from "./bookcovertwitch.png";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {

  render() {

    return (


      <div>
              <Container>
             <Row>
             <Col size="xl-7" id="bookimg">
             <img src={bookcover} width="550" height="800" alt="bookcover" />
             </Col>
            
       
        <Col size="xl-5" id="bio">
        <p style={{ marginTop: 0 }} > Hello Everyone! I'm glad you took the time to visit this page. I'm Jose García Lòpez, I was born in Mexico and I love eating tacos de picadillo and drinking matcha tea. I'm currently interested in challenging ideas of authorship
            within the literary realm, and tackling the question of: What it means to be a good writer. I hope this proyect can become part of the literary canon. </p>
            <img style={{ marginTop: 10 }} src={me} width="200" height="220" alt="me" />
            </Col>
       
        </Row>
      
            </Container>
      </div>


        );
      }
    }
     
export default About;