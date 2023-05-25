"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import BookingItem from "@/components/Profile/BookingItem/BookingItem";

const IsolatedAccordionLandLord = ({titleAccordeon, data}) => {

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
                    <h2 className='text-[16px] text-black pb-[10px]'>Завершенная бронь</h2>
                    {
                        data.map(item => <BookingItem titleAccordeon={titleAccordeon}  key={item.id} {...item}/>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default IsolatedAccordionLandLord;