import React from 'react';
import { data } from "../data/data.js";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button
} from '@chakra-ui/react';

const Work = () => {
    // projects file
    const project = data;

    return (
        <div name='work' className='w-full mt-48 text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#e1ba6d]'>
                        Projects
                    </p>
                    <p className='py-6 '>Welcome to my corner of the web! Feel free to wander through the various projects and experiences I've curated here.</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div key={index}>
                            <Card maxW='sm' className='bg-[#0a192f]' >
                                <CardBody className='bg-[#0a192f] shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                                    <Image
                                        src={item.image}
                                        alt='website img'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3' className='text-gray-300'>
                                        <Heading className='text-gray-100' size='lg'>{item.name}</Heading>
                                        <Text className='text-[#ccd6f6]'>
                                            {item.description}
                                        </Text>
                                        <Text className='text-[#8892b0]' fontSize='md'>
                                            {item.tags}
                                        </Text>
                                    </Stack>
                                    <Divider />
                                    <ButtonGroup className='flex justify-between items-center py-4'>
                                        <a target="_blank" rel="noopener noreferrer" href={item.live}>
                                            <Button colorScheme='whiteAlpha' className='mx-1' >
                                                 Live Demo
                                            </Button>
                                        </a>
                                      
                                    <a target="_blank" rel="noopener noreferrer" href={item.github}>
                                        <Button colorScheme='blackAlpha'>
                                            GitHub Code
                                        </Button>
                                    </a>
                                    
                                </ButtonGroup>
                            </CardBody>


                        </Card>
                        </div>
                    ))}
            </div>
        </div>
        </div >
    );
};

export default Work;
