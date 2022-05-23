import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

export default function CardDisplay() {
    return(
        <div>
            <Container textAlign='left'>Left Aligned</Container>
            <Container textAlign='center' >NFT Key</Container>
            <Container textAlign='right'>Right Aligned</Container>
            <Container textAlign='justified'>
                <b>Justified</b>
                <Divider />
            </Container>
        </div>
    )
}

