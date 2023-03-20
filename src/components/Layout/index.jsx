import tw, {styled} from "twin.macro";
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);
    const DropdownItems = [
        {
            'name' : 'Home',
            'route': '/'
        },
        {
            'name' : 'About',
            'route': '/'
        },
        {
            'name' : 'Projects',
            'route': '/'
        },
        {
            'name' : 'Contact',
            'route': '/'
        },
    ];

    const openMenu = () => {
        setToggle(true);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    const iconStyle = {color: '#fff', width: '30px', height: '30px'};
    return <>
    <Header>
        <DesktopWrapper>
            <ListElem>Home</ListElem>
            <ListElem>About</ListElem>
            <ListElem>Projects</ListElem>
            <ListElem>Contact</ListElem>
        </DesktopWrapper>
        <Mobile >{ 
            isToggle?
            <FaTimes style={iconStyle}
            onClick={closeMenu}
            /> :
            <FaBars style={iconStyle}
            onClick={openMenu}
            /> 
            }
        </Mobile>
    </Header>
    {isToggle && 
    <Dropdown >

            { DropdownItems.map((item)=>{
                return <DropdownItem>
                    <p>{item.name}</p>
                </DropdownItem> 
            })}
        </Dropdown>}
    </>
};

const Header = styled.div` ${tw`flex left-0 h-14 w-full bg-[#222e2e] top-0 place-content-end h-[80px]`}`;
const DesktopWrapper = tw.ul`flex gap-2 items-center place-items-end pr-4 max-[570px]:hidden`; 
const ListElem = tw.li`list-none text-white hover:text-sky-500 cursor-pointer`;
const Mobile = tw.div`lg:hidden max-[1268px]:hidden max-[570px]:flex items-center`;
const Dropdown = tw.div`grid place-items-center items-center w-full h-full bg-[#222e2e] `;
const DropdownItem = tw.div`flex place-content-center items-center text-white hover:bg-[#111717] cursor-pointer w-full`;
export default Navbar;