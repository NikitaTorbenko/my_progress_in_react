import { useState } from "react";

const InputComponent = ({ type, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className="">
      <h1>{value}</h1>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
