import { Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SuccessMessage({
  message = "Operação realizada com sucesso!",
  delayHide = 3000,
  children,
  ...props
}: {
  message?: string;
  delayHide?: number;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timeout = setTimeout(() => {
      setShow(false);
    }, delayHide);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show && (
        <Alert status="success" {...props} mt="1rem">
          <AlertIcon />
          {message}
          {children}
        </Alert>
      )}
    </>
  );
}
