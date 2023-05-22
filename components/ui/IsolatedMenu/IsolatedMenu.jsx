'use client'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

const IsolatedMenu = ({
                    className,
                    onClick,
                    variant,
                    children,
                }) => {
    return (
        <Menu
            className={className}
            onClick={onClick}
            variant={variant}
        >
            <MenuButton as='button' className='w-[62px] object-contain scale-125' >

            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default IsolatedMenu;