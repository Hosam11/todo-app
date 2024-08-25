import { useState } from "react";
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return {
    value,
    reset,
    handleChange,
  };
};

export default useInput;
