import {months} from "@/macros/months";

export const getDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedDate = day + ". " + months[month] + " " + year;
    return formattedDate;
}
