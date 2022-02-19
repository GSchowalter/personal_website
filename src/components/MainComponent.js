import { Container } from "reactstrap";
import TestComponent from "./TestComponent";

function Main() {
  return (
    <>
      <Container>
        <TestComponent test={"Hello World"}></TestComponent>
      </Container>
    </>
  );
}

export default Main;
