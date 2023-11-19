import React from "react";
import PropTypes from "prop-types";

interface FormUseRef {
  name: string;
}

function FormUseRef(props: FormUseRef) {
  return (
    <div>
      <input />
    </div>
  );
}

FormUseRef.propTypes = {};

export default FormUseRef;
