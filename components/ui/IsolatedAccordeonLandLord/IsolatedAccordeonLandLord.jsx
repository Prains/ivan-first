"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'
import BookingItem from "@/components/Profile/BookingItem/BookingItem";

const IsolatedAccordionLandLord = ({titleAccordeon, data, isPending, isActive, isAccept}) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple className='bg-[#EBF8FF] rounded-[6px]'>
            <AccordionItem className='border-0'>
                <h2>
                    <AccordionButton className='rounded-[6px] flex bg-[#EBF8FF] justify-between text-black font-medium'>
                        <h3>{titleAccordeon}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    <h3 className='text-[16px] text-black'>Завершенные брони</h3>
                </AccordionPanel>
                <AccordionPanel className='text-black' pb={4}>
                    {
                        data.map(item => <BookingItem isAccept={isAccept} isActive={isActive} isPending={isPending} key={item.id} title={item.title} date={item.date} image={item.image}/>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default IsolatedAccordionLandLord;