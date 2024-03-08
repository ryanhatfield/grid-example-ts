import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import UserView from "./components/UserView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.500">
        <VStack p={3} spacing={8} bg="gray.200">
          <UserView userGUID="1234" />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
