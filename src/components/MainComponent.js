import { Container } from "reactstrap";
import StripeComponent from "./StripeComponent";
import CounterButton from "./Counter/CounterButtonComponent";

function Main() {
  return (
    <>
      <Container>
        <CounterButton></CounterButton>
      </Container>
    </>
  );
}

export default Main;
