import { useRef } from "react";

import { Button, Input } from "@chakra-ui/react";

const LoadButton = ({ accept, onChange }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <Input ref={inputRef} type="file" accept={accept} display="none" onChange={onChange} />
      <Button onClick={() => inputRef.current?.click()}>Load</Button>
    </div>
  );
};

export default LoadButton;
