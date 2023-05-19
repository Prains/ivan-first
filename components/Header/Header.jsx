import {logoHeader} from "@/images/Main";
import Image from "next/image";
import {Button, Input, Flex, Menu, MenuButton, MenuList, MenuItem, Box} from '@chakra-ui/react'
import {MenuIcon} from "../../../ivan-first/images/icons/Main";


const Header = () => {
    return (
        <header style={{background: "#0E1726"}} >
           <Flex margin='0 auto' maxWidth="290px" justifyContent="space-between" alignItems="flex-end">
               <Image src={logoHeader} alt={'Логотип сайта Иван-1'} />
               <Button width='80px' height='32px' className='bg-white'
               >Войти
               </Button>
           </Flex>
            <Flex paddingBottom='12px' margin='12px auto' maxWidth="290px" justifyContent="space-between" alignItems="center">
                <Input width='222px' color='#D9D9D9' borderColor="#3182CE" placeholder="Placeholder" />
                <Menu>
                    <MenuButton>
                        <Box border='1px solid #3182CE' borderRadius='6px' padding='8px 10px'>
                            <Image width='24px' height='24px' border='1px solid #3182CE' src={MenuIcon} alt={"MenuIcon"}></Image>
                        </Box>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Ваня 1</MenuItem>
                        <MenuItem>Ваня 2</MenuItem>
                        <MenuItem>Ваня 3</MenuItem>
                        <MenuItem>Ваня 4</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </header>
    );
};

export default Header;