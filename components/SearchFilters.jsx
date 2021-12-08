import { useEffect, useState } from "react";
import {
  Flex, Select, Box, Text, Input, Spinner, Icon, Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const {query} = router;
    const path = router.pathname;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    })

    router.push({pathname: path, query: query});
  }

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            w="fit-content"
            p="2"
            placeholder={filter.placeholder}
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters;
