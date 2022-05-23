import React from 'react'
import './CardDisplay.css'
import { Container, Divider, Message, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function CardDisplay() {
    return(
        <div>
            <Container textAlign='left'>Left Aligned</Container>
            <Container textAlign='center' >NFT Key</Container>
            <Container textAlign='right'>Right Aligned</Container>
            <Container textAlign='justified'>
                <b>Justified</b>
                <Divider />
                <p textalign='center' >Here is our website</p>
            </Container>
            <Button type="submit" className="btn">
            <Link to="/signup">Sign Up</Link>
            </Button>
            <Message>
            Already a User? <Link to="/login">Login</Link>
          </Message>
        </div>
    )
}

