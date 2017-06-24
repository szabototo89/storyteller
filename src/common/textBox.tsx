import * as React from 'react';

type Properties = {
  onChange: (value: string) => void;
  value: string;
}

const TextBox = ({ onChange, value }: Properties) => {
  const handleChange = (ev: any) => onChange && onChange(ev.target.value);

  return <input type="text" 
                value={value} 
                onChange={handleChange} />;
};

export default TextBox;