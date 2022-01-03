import React from 'react'
import styled, { css } from 'styled-components'

function Button() {
    const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 1.5px solid #B2F296;
  color: #B2F296;
  padding: 0.4em 1.1em;
  text-transform: uppercase;
  font-family:"Roboto";
  font-weight:600;

`;

const Container = styled.div`
  text-align: center;
`
    return (
        <>
            <Container>
                <Button>Register Now</Button>
            </Container>
        </>
    )
}
export default Button