import { Container, Navbar } from "react-bootstrap"

export const Footer = () => {
    return (
        <>
        <Container>
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container style={{justifyContent:"center"}}>
          <h6 href="#">&copy; Developed by Mohd Ali Ansari</h6>
        </Container>
      </Navbar>
    </Container>
    </>
    )
}