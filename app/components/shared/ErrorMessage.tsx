import { Alert, AlertIcon } from "@chakra-ui/react";

export default function ErrorMessage({
  message,
  ...props
}: {
  message: string;
  [key: string]: any;
}) {
  return (
    <Alert status="error" {...props} mt="1.5rem">
      <AlertIcon />
      {message || "Ocorreu um erro. Por favor, tente novamente mais tarde."}
    </Alert>
  );
}
