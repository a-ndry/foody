import React, { useState } from "react";
const useContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setValidated(true);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // do something with the data
    }
  };

  return {
    validated,
    handleSubmit,
  };
};

export default useContactForm;
