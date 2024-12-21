import React, { Children } from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({text, children}) => {
  return (
    <div> 
      <div data-tip={text}>{children}</div>
      <ReactTooltip
        place="bottom"
        type="light"
        effect="solid"
        backgroundColor="#cff7ee"
      />
    </div>
  );
};

export default Tooltip;
