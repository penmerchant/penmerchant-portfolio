import tw, {styled} from "twin.macro";
import {AiOutlineAlignLeft} from "react-icons/ai"

const Navbar = () => {
    return <Header>
        <DesktopWrapper>
            <ListElem>Home</ListElem>
            <ListElem>About</ListElem>
            <ListElem>Projects</ListElem>
            <ListElem>Contact</ListElem>
        </DesktopWrapper>
        <Mobile>
            <AiOutlineAlignLeft class="bg-white"/>
        </Mobile>
    </Header>
};

const Header = styled.div` ${tw`flex left-0 h-14 w-full bg-[#222e2e] top-0 place-content-end `}`;
const DesktopWrapper = tw.ul`flex gap-2 place-items-end pr-4 max-[570px]:hidden`; 
const ListElem = tw.li`list-none text-white hover:text-sky-500 cursor-pointer`;
const Mobile = tw.div`lg:hidden max-[1268px]:hidden max-[570px]:flex items-center`;
export default Navbar;