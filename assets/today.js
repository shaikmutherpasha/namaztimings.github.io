$(document).ready(function() {
    var dateData = new Date();
    var date = dateData.getDate();
    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthName[dateData.getMonth()];
    var year = dateData.getFullYear();
    var fullDate = date + " " + month + " " + year;

    if ($("tr:nth-child(27) th:first").text() == fullDate) {
        $("tr:nth-child(27)").css("background-color": "#008d76", "color": "#fff");
    }
})
