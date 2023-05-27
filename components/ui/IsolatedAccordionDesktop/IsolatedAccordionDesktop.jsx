"use client";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import BookingItemDesktop from "@/components/Profile/ui/BookingItemDesktop/BookingItemDesktop";

export const IsolatedAccordionDesktop = ({ status, title, books, username, userRole }) => {
    return (
        <Accordion
            defaultIndex={[0]}
            allowMultiple
            className="bg-transparent rounded-[6px]"
        >
            <AccordionItem className="border-0">
                <h2>
                    <AccordionButton className="rounded-[6px] text-[32px] flex bg-transparent justify-between text-white font-medium">
                        <h3>{title}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel className="text-black" pb={4}>
                    {books.map((book) => {
                        return (
                            book.book.status === `${status}` && <BookingItemDesktop key={book.id} username={username} userRole={userRole} {...book} />
                        )

                        })}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
