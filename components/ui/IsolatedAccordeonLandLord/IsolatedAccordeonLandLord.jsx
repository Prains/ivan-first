"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import BookingItem from "@/components/Profile/ui/BookingItem/BookingItem";

const IsolatedAccordionLandLord = ({titleAccordeon, place, userRole}) => {

    return (
        <Accordion defaultIndex={[0]} allowMultiple className='bg-[#EBF8FF] rounded-[6px] mt-4'>
            <AccordionItem className='border-0'>
                <h2>
                    <AccordionButton className='rounded-[6px] flex bg-[#EBF8FF] justify-between text-black font-medium'>
                        <h3>{titleAccordeon}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>

                <AccordionPanel className='text-black' pb={4}>
                    {
                        place.books.map(book => {
                        return (
                            book.book.status === "resolved" && <BookingItem userRole={userRole} titleAccordeon={titleAccordeon}  key={book.id} {...book}/>
                        )})
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default IsolatedAccordionLandLord;