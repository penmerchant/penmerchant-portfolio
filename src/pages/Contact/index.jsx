import { useRef, useState } from "react";
import tw from "twin.macro";
import Img from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [isError, setError] = useState(false);
    const [isSent, setSent] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            formRef.current,
            `${process.env.REACT_APP_PUBLIC_KEY}`).then((result)=>{
                setSent(true);
                setError(false);
            }, (error) => {
                setSent(false);
                setError(true);
                console.log(1);
            });
    }

    return <ContactContainer>
        <Heading>Contact me</Heading>
        <Wrapper>
            <form ref={formRef} onSubmit={sendEmail}>
            <Container>
                <Input placeholder="Your name" type="text"  name="user_name" required/>
                <Input placeholder="Your email" type="email" name="user_email" required/>
                <Textarea placeholder="Write a message"  name="message" required/>
                <Button type="submit" value="Send"/>

                {isError && <ErrorMessage>
                    <TextBold>
                         Unable to send message
                    </TextBold>
                     </ErrorMessage>}
                {isSent && <SuccesfulMessage>
                    <TextBold>
                         Succesfully sent your message
                    </TextBold> 
                    </SuccesfulMessage>}
            </Container>
            </form>
                <Image src={Img}></Image>
            <Container>
            </Container>
        </Wrapper>
    </ContactContainer>
};
const ContactContainer = tw.div`h-screen w-full`;
const Heading = tw.h2`leading-relaxed`;
const Wrapper = tw.div`h-full w-full grid grid-cols-2 max-[600px]:grid-cols-1`
const Container = tw.div`h-full w-full`;
const Image = tw.img`w-full h-[500px] rounded max-[600px]:h-full max-[600px]:w-full`;
const Input = tw.input`w-full h-[40px] ` ;
const Textarea = tw.textarea`w-full h-[90px]`;
const Button = tw.input`h-[50px] w-full bg-[#CC6840] text-lg text-white outline-0 border-0 hover:bg-[#a35333]`;
const ErrorMessage = tw.div` w-full border bg-white text-red-800 shadow-transparent`;
const SuccesfulMessage = tw.div` w-full border bg-white text-green-800 shadow-transparent`;
const TextBold = tw.b`leading-relaxed`;
export default Contact;