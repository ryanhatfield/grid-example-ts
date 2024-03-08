import {
  Table,
  Heading,
  TableContainer,
  Tbody,
  Td,
  Tr,
  VStack,
  Card,
  CardBody,
  Spinner,
} from "@chakra-ui/react";
import User from "../models/user";
import { useEffect, useState } from "react";
import { UserByGUID } from "../services/userService";
import { delay } from "msw";

export default function UserView({ userGUID }: { userGUID: string }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate a slow API to show the loading component
    delay(1500).then(() => {
      const userResponse = UserByGUID(userGUID);
      setUser(userResponse);
    });
  }, [userGUID]);

  return (
    <Card>
      <CardBody>
        <VStack bg="white">
          {user == null ? (
            <Spinner />
          ) : (
            <>
              <Heading>User</Heading>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>Others Name</Td>
                      <Td>{user.firstName}</Td>
                    </Tr>
                    <Tr>
                      <Td>Last Name</Td>
                      <Td>{user.lastName}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
}
