import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../Appservice/App.service";

const Event = () => {
    const { id } = useParams();
    //({} )Objekt fordi vi henter én
    const [currentEvent, setCurrenEvent] = useState({});

    //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getEvent = async () => {
            // Henter get fra appservice og henter "events" og dens id
            try {
                const result = await appService.getDetails("events", id);
                if (result.data) {
                    setCurrenEvent(result.data.item)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getEvent()
    }, [id]);

    return (
        <>

            <div>{currentEvent && currentEvent.title}
                <figure>
                    <img src={currentEvent.image} alt={currentEvent.title} />
                </figure>
            </div>
        </>
    );
}

export default Event;
