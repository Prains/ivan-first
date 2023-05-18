import React from 'react';
import {Badge, Box, Flex} from "@chakra-ui/react";
import Image from "next/image";
import {StarIcon} from "@chakra-ui/icons"
import {imageCard} from "@/images/Main";
const CardBlock = ({property}) => {
    return (
        <Box background='#EBF8FF' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom='24px'>
            <Box position="relative" width='290px' height='140px' backgroundSize='cover' >
                <Box bgColor='rgba(0,0,0, 0.6)' padding='4px' borderRadius='10px' position='absolute' right='8px' bottom='6px' display='flex' mt='2' alignItems='center'>
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

            <Box position='relative' p='2'>
                <Box
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
                      mt='2'
                      color='#535353'
                      fontWeight='regular'
                      fontSize='12px'
                      lineHeight='tight'
                      noOfLines={1}
                  >
                      {property.address}
                  </Box>
                  <Box position='absolute' display='flex' fontSize='10px' gap='8px' right='9px' bottom='9px'>
                      <Box display='flex' flexDirection='column' alignItems='center'>
                          <Box>{property.startDay}</Box>
                          <Box>-</Box>
                          <Box>{property.endDay}</Box>
                      </Box>
                      <Box display='flex' flexDirection='column' alignItems='center'>
                          <Box>{property.startTime}</Box>
                          <Box>-</Box>
                          <Box>{property.endTime}</Box>
                      </Box>
                  </Box>
              </Box>
            </Box>
        </Box>
    );
};

export default CardBlock;