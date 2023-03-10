import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

const ContactForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput  mb-3">
      <FloatingLabel controlId="floatingInput" label={label}>
        <Form.Control
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      </FloatingLabel>
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default ContactForm;
