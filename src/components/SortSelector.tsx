import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuList>Relevance</MenuList>
                <MenuList>Date Added</MenuList>
                <MenuList>Name</MenuList>
                <MenuList>Release Date</MenuList>
                <MenuList>Popularity</MenuList>
                <MenuList>Average rating</MenuList>
            </MenuList>
        </Menu>
      )
}

export default SortSelector