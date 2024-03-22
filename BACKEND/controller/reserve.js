import errorHandler from "../middlewares/error.js";
import { reservation } from "../models/reservationschema.js";

export const sendreservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;
    if (!firstname || !lastname || !email || !phone || !date || !time) {
        return next(new errorHandler("Please fill the form correctly", 400))
    }
    try {
        await reservation.create({ firstname, lastname, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!",
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new errorHandler(validationErrors.join(", "), 400));
        } else {
            return next(error);
        }
    }
};
