import { forwardRef } from "react";

const ForwardRefExample = forwardRef(({ classProps }, myRef) => {
  return (
    <div>
      <h2>Forward Ref</h2>
      <input type="text" className={classProps} ref={myRef} />
    </div>
  );
});

export default ForwardRefExample;
