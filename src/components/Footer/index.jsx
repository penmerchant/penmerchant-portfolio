import tw from "twin.macro";

const Footer = () => {
    return <FooterSection>
        <FooterFont>Made by penmerchant</FooterFont>
        <Quotes>“Any sufficiently advanced technology is indistinguishable from magic.”
― Arthur C. Clarke</Quotes>
    </FooterSection>
};

const FooterSection = tw.div`h-[150px] w-full grid text-center place-content-center items-center bg-[#40222d]`;
const FooterFont = tw.b`text-white leading-relaxed`; 
const Quotes = tw.i`text-white leading-relaxed`; 
export default Footer;