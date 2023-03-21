import { useEffect, useState } from "react";
import tw from "twin.macro";
import data from "../../assets/github_repo.json"
import {AiFillGithub} from "react-icons/ai";
import {BsBrowserChrome} from "react-icons/bs";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        setProjects(data);
    },[]);

    return <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectGrid>
            {
                projects && projects.map((project)=>{
                    return <ProjectCard>
                        <ProjectHeading>{project.name}</ProjectHeading>
                        <ProjectBold>Description</ProjectBold>
                        <ProjectParagraph>{project.description}</ProjectParagraph>
                        <ProjectBold>Topics</ProjectBold>
                        <TopicsGrid>
                        {
                            project.repository_topics.map((topic)=>{
                                return <TopicsItem>{topic.topic_name}</TopicsItem>
                            })
                        }
                        </TopicsGrid>
                            <CardButton href={project.website}>
                                <ProjectBold > 
                                            Live demo
                                    </ProjectBold>
                                <AiFillGithub />
                            </CardButton>
                            <br></br>
                            <CardButton href={project.url}>
                                <ProjectBold>
                                            Source code
                                </ProjectBold>
                                <BsBrowserChrome />
                            </CardButton>
                    </ProjectCard>
                })
            }
        </ProjectGrid>
    </ProjectContainer>
};
const ProjectContainer = tw.div`h-screen bg-[#222e2e]`;
const ProjectGrid = tw.div`grid grid-cols-2 w-full gap-2 max-[600px]:grid-cols-1`;
const ProjectCard = tw.div`w-full h-auto my-10 bg-[#141b1b] rounded hover:cursor-pointer`; 
const ProjectHeading = tw.h2`text-white`;
const TopicsGrid = tw.div`grid grid-cols-4 gap-1`;
const TopicsItem = tw.div`flex place-content-center items-center text-[#CC6840] bg-[#f2f2f2] font-bold w-auto h-auto rounded hover:cursor-pointer`;
const ProjectTitle = tw.h1`text-white my-4`;
const ProjectBold = tw.b`text-white font-bold`;
const ProjectParagraph = tw.p`text-white`;
const CardButton = tw.a`flex place-content-center no-underline gap-4 items-center h-[50px] w-full bg-[#CC6840] text-lg text-white outline-0 border-0 hover:bg-[#a35333]`;

export default Projects;