export const translateDayToSpanish = (day) => {
    const translations = {
        Monday: "Lunes",
        Tuesday: "Martes",
        Wednesday: "Miércoles",
        Thursday: "Jueves",
        Friday: "Viernes",
        Saturday: "Sábado",
        Sunday: "Domingo",
    };

    return translations[day] || day;
};
export const translateMonthToSpanish = (month) => {
    const translations = {
        January: "Enero",
        February: "Febrero",
        March: "Marzo",
        April: "Abril",
        May: "Mayo",
        June: "Junio",
        July: "Julio",
        August: "Agosto",
        September: "Septiembre",
        October: "Octubre",
        November: "Noviembre",
        December: "Diciembre",
    };

    return translations[month] || month;
};
