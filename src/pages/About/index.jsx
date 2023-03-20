import tw from "twin.macro";
import Image from "../../assets/jobless.jpg";
const AboutSection = () => {
    return <AboutContainer>
        <AboutGrid>
            <AboutInfo>
                <AboutHeading>About me</AboutHeading>
                <AboutParagraph>My love for coding started during my years studying diploma in computer science. And after graduating from my studies, i keep continuing to learn and do some projects by myself. Still yet to experience working in tech industry that involves software development. But I am really excited to learn new stuffs that out of my comfort zone. </AboutParagraph>
            </AboutInfo>
            <ImageInfo src={Image}></ImageInfo>
        </AboutGrid>
    </AboutContainer>
};
const AboutContainer = tw.div`h-screen`;
const AboutGrid = tw.div`grid grid-cols-2 gap-2 max-[800px]:grid-cols-1`;
const AboutInfo = tw.div`w-full h-full`;
const AboutHeading = tw.h2`leading-relaxed`; 
const AboutParagraph = tw.p`leading-relaxed`;
const ImageInfo = tw.img`w-full h-[550px] max-[800px]:h-full`; 
export default AboutSection;