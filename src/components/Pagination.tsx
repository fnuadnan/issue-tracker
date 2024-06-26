import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  //   onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage}: PaginationProps) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Return null if there is only one page
  if (totalPages <= 1) return null;

  return (
    <Flex align="center" gap="2">


      <Text size='2'> Page {currentPage} of {totalPages}</Text>

	  {/* First page button & Previous page button - disabled if already on the first page */}
      <Button
        color="gray"
        variant="soft"
        className="cursor-pointer"
        disabled={currentPage === 1}
      >
        <DoubleArrowLeftIcon /> 
      </Button>
	  <Button
        color="gray"
        variant="soft"
        className="cursor-pointer"
        disabled={currentPage === 1} // disable the button if the current page is the first page
      >
        <ChevronLeftIcon />
      </Button>

	  {/* Next page button &  Last page button - disabled if already on the last page */}
	  <Button
        color="gray"
        variant="soft"
        className="cursor-pointer"
        disabled={currentPage === totalPages} // disable the button if the current page is the last page
      >
        <ChevronRightIcon />
      </Button>
	  <Button
        color="gray"
        variant="soft"
        className="cursor-pointer"
        disabled={currentPage === totalPages}
      >
        <DoubleArrowRightIcon />
      </Button>


    </Flex>
  );
};

export default Pagination;
