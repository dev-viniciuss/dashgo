import { Stack, Box, Flex } from "@chakra-ui/react"

import { PaginationItem } from "./PaginationItem"

export function Pagination() {
  return(
    <Stack direction={["column", "row"]} spacing="6" mt="8" justifyContent="center" aling="center">
      <Box mt={["0", "1"]} mx="auto">
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack justify="center" direction="row" spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  )
}