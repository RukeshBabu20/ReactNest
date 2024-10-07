import { calculatorButtons } from "../../functions/calculator/buttons";

export default function Calculator() {
  return (
    <>
      {calculatorButtons.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}
