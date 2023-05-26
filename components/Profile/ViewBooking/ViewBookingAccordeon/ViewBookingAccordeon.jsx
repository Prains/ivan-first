"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import BookingItemDesktop from "@/components/Profile/ui/BookingItemDesktop/BookingItemDesktop";
import ViewBookingAccordeonItem
    from "@/components/Profile/ViewBooking/ViewBookingAccordeon/ViewBookingAccordeonItem/ViewBookingAccordeonItem";

const ViewBookingAccordion = ({titleAccordeon, data, isPending, isActive}) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple className='bg-transparent rounded-[6px]'>
            <AccordionItem className='border-0'>
                <h2>
                    <AccordionButton className='rounded-[6px] text-[32px] flex bg-transparent justify-between text-white font-medium'>
                        <h3>{titleAccordeon}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel className='text-black' pb={4}>
                    {
                        data.map(item => <ViewBookingAccordeonItem isActive={isActive} isPending={isPending} key={item.id} title={item.title} date={item.date} image={item.image}/>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ViewBookingAccordion;