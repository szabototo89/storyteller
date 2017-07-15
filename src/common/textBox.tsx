import * as React from "react";

type Properties = {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
};

export function TextBox({ onChange, value, className }: Properties) {
  const handleChange = (ev: any) => onChange && onChange(ev.target.value);
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
