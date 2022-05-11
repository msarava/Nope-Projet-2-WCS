import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

function Linkedinsharebutton({ recordid, title, description }) {
  // url ne peut fonctionner qu'avec un url valide donc un site déployé (localhost ne fonctionne pas)
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <LinkedinShareButton url={url} title={title} description={description}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
}

export default Linkedinsharebutton;
