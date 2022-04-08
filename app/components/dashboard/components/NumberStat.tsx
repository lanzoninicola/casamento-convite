import StatBox from "./StatBox";
import StatHelpText from "./StatHelpText";
import StatLabel from "./StatLabel";
import StatNumber from "./StatNumber";

export default function NumberStat({
  label,
  number,
  helpText,
  ...props
}: {
  label: string;
  number: number;
  helpText?: string;
  [key: string]: any;
}) {
  return (
    <StatBox {...props}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      <StatHelpText>{helpText}</StatHelpText>
    </StatBox>
  );
}
