"use client"
import React from 'react';
import Header from "@/components/Header/Header";
import CardItems from "@/components/Main/CardItems/CardItems";

const Main = () => {
    return (
        <section className='max-w-[320px] m-y-0 mx-auto bg-[#0f1b29]'>
            <Header />
            <CardItems />
        </section>
    );
};

export default Main;