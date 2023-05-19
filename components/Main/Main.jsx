"use client"
import React from 'react';
import Header from "@/components/Header/Header";
import CardItems from "@/components/CardItems/CardItems";

const Main = () => {
    return (
        <section style={{maxWidth: '320px', margin:'0 auto',  background: '#0F1B29' }}>
            <Header />
            <CardItems />
        </section>
    );
};

export default Main;