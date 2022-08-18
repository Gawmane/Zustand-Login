import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../Appservice/App.service";
//Denne køre på andet api og passer ikke med resten af siden. skal ændres i url

const CommentDetails = () => {
    const { id } = useParams();
    //({} )Objekt fordi vi henter én
    const [currentComment, setCurrenComment] = useState({});

    //Definer getEvent og render den hvis den ændre sig
    useEffect(() => {
        const getComment = async () => {
            // Henter get fra appservice og henter "events" og dens id
            try {
                const result = await appService.getList("comments", id);
                if (result.data) {
                    setCurrenComment(result.data.item)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getComment()
    }, [id]);

    return (
        <>

            <div>{currentComment && currentComment.title}
                <figure>
                    <img src={currentComment.image} alt={currentComment.title} />
                </figure>
            </div>
        </>
    );
}

export default CommentDetails;
