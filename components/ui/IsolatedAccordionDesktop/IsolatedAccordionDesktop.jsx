"use client";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import BookingItemDesktop from "@/components/Profile/ui/BookingItemDesktop/BookingItemDesktop";

export const IsolatedAccordionDesktop = ({ status, books, username, userRole, place }) => {
    console.log(place)
    return (
        <Accordion
            defaultIndex={[0]}
            allowMultiple
            className="bg-transparent rounded-[6px]"
        >
            <AccordionItem className="border-0">
                <h2>
                    <AccordionButton className="rounded-[6px] text-[32px] flex bg-transparent justify-between text-white font-medium">
                        <h3>{place.title}</h3>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel className="text-black" pb={4}>
                    {userRole === "landlord" ?
                    (place.books.map((book) => {
                        return (
                            <BookingItemDesktop placeTitle={place.title} key={book.id} userRole={userRole} {...book} />
                        )
                    }))
                    :
                    (books.map((book) => {
                        return (
                            book.book.status === `${status}` && <BookingItemDesktop key={book.id} username={username} userRole={userRole} {...book} />
                        )

                        }))}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};


