import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import appService from "../../Appservice/App.service";
import Header from "../../Partials/Header";


export const Events = () => {

    const [events, setEvents] = useState([])

    const getEvents = async () => {
        try {
            const response = await appService.getList("events");
            if (response.data) {
                setEvents(response.data.items)
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }

    };
    //Henter event når vi loader siden - køre kun en gang[]
    useEffect(() => {
        getEvents();
    }, []);


    return (
        <>
            <Header />
            <article>
                <ul>
                    {/* Tjekker ekstitere det og kan den mappes*/}
                    {events && events.map((event) => (
                        <li key={event.id}> <Link to={event.id}> {event.title} </Link></li>
                    ))}</ul>
                {/* Router - viser både router og subrouter */}
                <Outlet />
            </article>
        </>
    )
}

export default Events;
