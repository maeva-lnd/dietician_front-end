import React, {Fragment} from "react";

const Review = (props) => {

    const twoDigit = (number) => {
        return (number < 10 ? '0' : '') + number
    }

    const formateDate = (date) => {
        const datetime = new Date(date)
        return twoDigit(datetime.getDate()) + '/' + twoDigit(datetime.getMonth() + 1) + '/' + twoDigit(datetime.getFullYear());
    }

    return (
        <Fragment>
            <div className="review">
                <div className="fl">
                    <p>{props.user}</p>
                    <p>Le {formateDate(props.date)}</p>
                </div>
                <p className="note"> Note : {props.note}</p>
                <p>Commentaire : {props.comment}</p>
            </div>
        </Fragment>
    )

};

export default Review;