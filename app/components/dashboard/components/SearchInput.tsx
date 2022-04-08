import { Box, FormLabel, Input } from "@chakra-ui/react";

export default function SearchInput({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  return (
    <Box w="100%">
      <FormLabel htmlFor="search-name">Nome do convidado</FormLabel>
      <Input
        name="search-name"
        placeholder="Buscar"
        size="md"
        borderRadius="10px"
        bg={"white"}
        border="none"
        boxShadow={`sm`}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Box>
  );
}
