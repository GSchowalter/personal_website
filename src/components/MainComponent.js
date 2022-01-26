import { Container } from "reactstrap";
import TestComponent from "./TestComponent";

function Main() {
  return (
    <>
      <Container>
        <TestComponent test={"Eclipse not clutch"}></TestComponent>
      </Container>
    </>
  );
}

export default Main;
