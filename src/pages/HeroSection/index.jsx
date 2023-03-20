import tw from "twin.macro";

const HeroSection = () => {
    const routeToContact = () => {
        // console.log('clicked');
    };

    return <HeroContainer>
        <InfoWrapper>
            <HeadingName>AFFIFUDDIN BIN KHASNIN</HeadingName>
            <ParagraphInfo>A very enthusiastic software developer</ParagraphInfo>
            <Button onClick={routeToContact}> Contact me </Button>
        </InfoWrapper>
    </HeroContainer>
};
const HeroContainer = tw.div`h-screen flex place-content-center items-center`;
const InfoWrapper = tw.div`h-auto w-auto`;
const HeadingName = tw.h2`leading-3 p-4`;
const ParagraphInfo = tw.p`leading-3 p-4`;
const Button = tw.button`h-[50px] w-full bg-[#CC6840] text-white outline-0 border-0 hover:bg-[#a35333]`;
export default HeroSection;