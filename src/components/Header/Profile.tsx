import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAling="right">
        <Text>Marcus Vinicius</Text>
        <Text color="gray.300" fontSize="small">
          dev.mvsc@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Marcus Vinicius" src="https://github.com/dev-viniciuss.png"/>
    </Flex>
  )
}