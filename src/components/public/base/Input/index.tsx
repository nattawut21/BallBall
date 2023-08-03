import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const inputStyle = {
  border: '2px solid gray',
  borderRadius: '4px',
  padding: '4px 8px',
  margin: '0 1px',
};

export default function Input({ value, onChange }: InputProps): JSX.Element {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder="Please type input..."
      style={inputStyle}
    />
  );
}
