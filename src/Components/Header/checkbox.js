import React from "react";
import { Checkbox } from "reakit/Checkbox";

function Example() {
  const [checked, setChecked] = React.useState(false);
  const toggle = () => setChecked(!checked);
  return (
    <label>
      <Checkbox checked={checked} onChange={toggle} />
      Checkbox
    </label>
  );
}
