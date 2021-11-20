import React from 'react';
import Card from "./Card"
import data from "./data"

export default function Main() {
    const cards = data.map(item => {
        return <Card
            img={item.img}
            icon={item.icon}
            country={item.country}
            link={item.link}
            title={item.title}
            date={item.date}
            description={item.description}
        />
    })
    return (
        <main>
            {cards}
        </main>
    );
}