"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'
import BookingItem from "@/components/Profile/Booking/BookingItem/BookingItem";

const IsolatedAccordion = ({titleAccordeon, data, isPending, isActive}) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple className='bg-[#EBF8FF] rounded-[6px]'>
            <AccordionItem className='border-0'>
                <h2>
                    <AccordionButton className='rounded-[6px] flex bg-[#EBF8FF] justify-between text-black font-medium'>
                        <h3>{titleAccordeon}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel className='text-black' pb={4}>
                    {
                        data.map(item => <BookingItem isActive={isActive} isPending={isPending} key={item.id} title={item.title} date={item.date} image={item.image}/>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default IsolatedAccordion;