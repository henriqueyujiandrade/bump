export default function filterDate(array) {
    array.sort(function (a, b) {
        let dateA = a.expirationDate.split("-").reverse(),
            dateB = b.expirationDate.split("-").reverse();
        return dateB[0] - dateA[0];
    });
    array.sort(function (a, b) {
        let dateA = a.expirationDate.split("-").reverse(),
            dateB = b.expirationDate.split("-").reverse();
        if (dateA[0] === dateB[0]) return dateB[1] - dateA[1];
    });
    array.sort(function (a, b) {
        let dateA = a.expirationDate.split("-").reverse(),
            dateB = b.expirationDate.split("-").reverse();
        if (dateA[0] === dateB[0] && dateA[1] === dateB[1])
            return dateB[2] - dateA[2];
    });
}
