import { Flex,Image, Spacer,Box,Center,Text,Square } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Input
    

  } from '@chakra-ui/react'
  import {ChevronDownIcon,SearchIcon,AddIcon,ChatIcon,} from "@chakra-ui/icons"
  import { IconButton } from '@chakra-ui/react'
  import {BellIcon} from "@chakra-ui/icons"
  const Navbar=()=>{

    return (
        <Flex padding="5px 5px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" 
        align="center" justify="space-around" color='grey'>
          <Box marginLeft="50px" width="50px" padding="5px 5px">
          <Image src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png" alt='Dan Abramov' /> 
          </Box>
         <Spacer width="100px"/>
         <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton color="black" height="50px" width="300px" borderColor="black" borderWidth='2px' isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'India'}
      </MenuButton>
      <MenuList  borderColor="black"  >
        <MenuItem color="black" >Maharashtra</MenuItem>
        <MenuItem color="black" onClick={() => alert('Kagebunshin')}>Kerala</MenuItem>
        <MenuItem color="black" >Punjab</MenuItem>

        <MenuItem color="black" >TamilNadu</MenuItem>

      </MenuList>
      <Spacer/>
      <Input height="40px" borderRadius="0" placeholder="search" width="600px" borderColor="black" borderWidth='2px' borderplaceholder='Basic usage' />
      <IconButton height="40px" bg="#004d40" borderRadius="0" aria-label='Search database' icon={<SearchIcon />} /> 
      <Spacer/>
      <BellIcon/>
      <Spacer/>
      <ChatIcon/>
      <Spacer/>
      <Button height="45px" borderRadius="20px" border="2px" colorScheme='teal' variant='outline'>
      <AddIcon/>SELL</Button>   </>
  )}
</Menu>



        </Flex>
    )

}
export default Navbar;