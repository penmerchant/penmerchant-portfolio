import tw from "twin.macro";
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa";
import { Link} from "react-scroll";
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
            'route': 'about'
        },
        {
            'name' : 'Projects',
            'route': 'projects'
        },
        {
            'name' : 'Contact',
            'route': 'contact'
        },
    ];

   
    const openMenu = () => {
        setToggle(true);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    const iconStyle = {color: '#fff', width: '30px', height: '30px'};
    return <div>
    <Header>
        <DesktopWrapper>
            <ListElem> <Link activeClass="active" to="/" spy={true} smooth={true} offset={0} duration={500}>
                Home
            </Link>
            </ListElem>
            <ListElem>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                About
            </Link>
            </ListElem>
            <ListElem>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
                Projects
            </Link>
            </ListElem>
            <ListElem>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
            </Link>
            </ListElem>
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
                    <Link activeClass="active" to={item.route} spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                        {item.name}
                    </Link>
                </DropdownItem> 
            })}
        </Dropdown>}
    </div>
};

const Header = tw.div`flex left-0 h-14 w-full bg-[#222e2e]  place-content-end h-[80px] z-[100] opacity-95 fixed`;
const DesktopWrapper = tw.ul`flex gap-2 items-center place-items-end pr-4 max-[570px]:hidden`; 
const ListElem = tw.li`list-none text-white hover:text-[#CC6840] cursor-pointer`;
const Mobile = tw.div`lg:hidden max-[1268px]:hidden max-[570px]:flex items-center`;
const Dropdown = tw.div`grid top-20 place-items-center items-center w-full h-full bg-[#222e2e] z-[100] fixed`;
const DropdownItem = tw.div`flex place-content-center items-center text-white hover:bg-[#111717] cursor-pointer w-full`;
export default Navbar;