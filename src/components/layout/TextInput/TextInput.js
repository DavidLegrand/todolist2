import React from "react";

const TextInput = ({name, value, onChange, placeholder, type}) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
};

export default TextInput;
