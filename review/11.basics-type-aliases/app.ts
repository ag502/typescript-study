type Combinable = number | string;
type CoversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CoversionDescriptor
) {}
