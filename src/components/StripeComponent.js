export default function StripeComponent({props}) {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.color}</p>
    </div>
  );
}
