import React from "react";

function BtnNext(props) {
  const { step, handleSubmitNext } = props;
  return (
    <button type="submit" className="BtnNext" onClick={handleSubmitNext}>
      {step === 0 ? "Trouver un pretexte" : "Suivant >"}
    </button>
  );
}

export default BtnNext;
