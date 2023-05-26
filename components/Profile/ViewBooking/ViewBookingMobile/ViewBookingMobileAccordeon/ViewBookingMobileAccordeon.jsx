"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import ViewBooking from "@/components/Profile/ui/BookingItem/BookingItem";
import ViewBookingAccordeon from "@/components/Profile/ViewBooking/ViewBookingAccordeon/ViewBookingAccordeon";
import ViewBookingAccordeonItem
    from "@/components/Profile/ViewBooking/ViewBookingAccordeon/ViewBookingAccordeonItem/ViewBookingAccordeonItem";
import ViewBookingMobile from "@/components/Profile/ViewBooking/ViewBookingMobile/ViewBookingMobile";
import ViewBookingMobileAccordeonItem
    from "@/components/Profile/ViewBooking/ViewBookingMobile/ViewBookingMobileAccordeon/ViewBookingMobileAccordeonItem/ViewBookingMobileAccordeonItem";

const ViewBookingMobileAccordeon = ({titleAccordeon, data, landlord, isLandlord}) => {

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
                        data.map(item => <ViewBookingMobileAccordeonItem isLandlord={isLandlord} landlord={landlord} titleAccordeon={titleAccordeon}  key={item.id} {...item}/>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ViewBookingMobileAccordeon;