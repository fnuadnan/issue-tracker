import { Issue, Status } from "@prisma/client";
import { Flex, Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}
const statuses: Record<Status, {label: string, color: 'red' | 'green' | 'violet'}> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Flex gap="2">
      <Badge color={statuses[status].color}>{statuses[status].label}</Badge>
    </Flex>
  );
};

export default IssueStatusBadge;
