import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name }) {
  console.log(icon.iconSet);
  const copyToClipboard = () => {
    copy(`import ${name} from '@meronex/icons/${icon.iconSet}/${name}'
    
    
    ;`);
    toast.success(`Copied '${name}' from '${icon.iconSet}'`, {
      position: "bottom-center"
    });
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Icon;
