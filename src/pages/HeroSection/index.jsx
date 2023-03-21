import tw from "twin.macro";
import Image from "../../assets/coder.gif";

const HeroSection = () => {
    const style= {backgroundImage: `url(${Image})`};
    const routeToContact = () => {
        // console.log('clicked');
    };

    return <HeroContainer style={style}>
        <InfoWrapper>
            <HeadingName>AFFIFUDDIN BIN KHASNIN</HeadingName>
            <ParagraphInfo>A very enthusiastic software developer</ParagraphInfo>
            <Button onClick={routeToContact}> Contact me </Button>
        </InfoWrapper>
    </HeroContainer>
};
const HeroContainer = tw.div`h-screen w-full bg-[#40222d] grid place-content-center items-center bg-no-repeat bg-cover
    max-[600px]:grid-cols-1
    max-[600px]:bg-auto`;
const InfoWrapper = tw.div`h-auto w-auto text-white opacity-80 bg-[#40222d] font-['Stay pixel']`;
const HeadingName = tw.h2`leading-relaxed p-4 text-6xl`;
const ParagraphInfo = tw.p`leading-relaxed p-4 text-lg`;
const Button = tw.button`h-[50px] w-full bg-[#CC6840] text-lg text-white outline-0 border-0 hover:bg-[#a35333] font-['Stay pixel']`;
export default HeroSection;