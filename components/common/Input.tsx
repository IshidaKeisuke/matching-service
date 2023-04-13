import { TextField, TextFieldProps } from "@mui/material";

interface InputFieldProps extends Omit<TextFieldProps, "value" | "onChange"> {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = (props: InputFieldProps) => {
  const { label, value, onChange, ...rest } = props;

  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
