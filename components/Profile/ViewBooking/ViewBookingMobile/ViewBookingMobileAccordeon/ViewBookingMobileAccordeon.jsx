"use client";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import ViewBookingMobileAccordeonItem from "@/components/Profile/ViewBooking/ViewBookingMobile/ViewBookingMobileAccordeon/ViewBookingMobileAccordeonItem/ViewBookingMobileAccordeonItem";

const ViewBookingMobileAccordeon = ({
    place,
    title,
    books,
    userRole,
    status
}) => {
    return (
        <Accordion
            defaultIndex={[0]}
            allowMultiple
            className="bg-[#EBF8FF] rounded-[6px]"
        >
            <AccordionItem className="border-0">
                <h2>
                    <AccordionButton className="rounded-[6px] flex bg-[#EBF8FF] justify-between text-black font-medium">
                        <h3>{title}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>

                <AccordionPanel className="text-black" pb={4}>
                    { userRole === "landlord" ?
                    (place.books.map((book) => {
                        return (
                            <ViewBookingMobileAccordeonItem
                            userRole={userRole}
                            title={title}
                            key={book.id}
                            {...book}
                        />
                        )})
                    )
                    :
                    (books.map((book) => {
                        return (
                            book.book.status === `${status}` && <ViewBookingMobileAccordeonItem
                            userRole={userRole}
                            title={title}
                            key={book.id}
                            {...book}
                        />
                        )})
                    

                    )}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ViewBookingMobileAccordeon;
