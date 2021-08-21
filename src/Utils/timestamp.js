export const timestamp = (rawDate) => {
    const currentDate = new Date(rawDate);
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    const fullDate = month + "/" + day + "/" + year;
    return fullDate; 
}