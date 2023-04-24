interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input = ({ type, id, name, value, onChange }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{name}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
