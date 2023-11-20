import React from "react";
import PropTypes from "prop-types";

interface FormUseRef {
  name: string;
}

function FormUseRef(props: FormUseRef) {
  return (
    <div>
      <h1 className="&-title">Red</h1>

      <input className="" />
    </div>
  );
}

FormUseRef.propTypes = {};

export default FormUseRef;
