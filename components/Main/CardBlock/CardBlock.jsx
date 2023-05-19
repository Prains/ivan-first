"use client"
import React from 'react';
import { Box } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import Link from "next/link";
const CardBlock = ({property}) => {
    return (
        <Link href='/'>
            <Box as='div' background='#EBF8FF' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom='24px'>
                <Box style={{ backgroundImage: `url(../../../images/Main/imageCard.png)`}} as='div' position="relative" width='290px' height='140px' backgroundSize='cover' >
                    <Box as='div' bgColor='rgba(0,0,0, 0.6)' padding='4px' borderRadius='10px' position='absolute' right='8px' bottom='6px' display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? '#F5FF7F;' : 'gray.300'}
                                />
                            ))}

                    </Box>
                </Box>

                <Box as='div' position='relative' p='2'>
                    <Box
                        as='div'
                        color='#000000'
                        mt='1'
                        fontWeight='semibold'
                        fontSize='16px'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {property.title}
                    </Box>
                    <Box
                        as='div'
                        color='#000000'
                        fontWeight='regular'
                        fontSize='14px'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {property.subtitle}
                    </Box>

                    <Box paddingBottom='14px'>
                        <Box
                            as='div'
                            mt='2'
                            color='#535353'
                            fontWeight='regular'
                            fontSize='12px'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {property.address}
                        </Box>
                        <Box as='div' position='absolute' display='flex' fontSize='10px' gap='8px' right='9px' bottom='9px'>
                            <Box as='div' display='flex' flexDirection='column' alignItems='center'>
                                <Box as='div'>{property.startDay}</Box>
                                <Box as='div'>-</Box>
                                <Box as='div'>{property.endDay}</Box>
                            </Box>
                            <Box as='div' display='flex' flexDirection='column' alignItems='center'>
                                <Box as='div'>{property.startTime}</Box>
                                <Box as='div'>-</Box>
                                <Box as='div'>{property.endTime}</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    );
};

export default CardBlock;