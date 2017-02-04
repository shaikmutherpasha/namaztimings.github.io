$(document).ready(function() {
    $('.months').change(function() {
        var $month = $('.months').val();
        var d = new Date();
        var curr_year = d.getFullYear();
        //  $('.mshow').html('You Have Selected ' + $month);
        function splitTime(time) {
            return time.split(" ", 1);
        }
        $.ajax({
            method: 'GET',
            url: 'https://api.aladhan.com/calendarByCity?city=Hyderabad\
            &country=IN&month=' + $month + '&year=' + curr_year + '&method=2&school=1',
            success: function(data) {
                var rowCount = $('#myTable >tbody >tr').length;
                if (rowCount > 0) {
                    $("#myTable > tbody > tr").remove();
                }
                $.each(data.data, function(i, v) {
                    var timing = v.timings;
                    $('#myTable > tbody:last-child').append('<tr>\
                                                            <th>' + v.date.readable + '</th>\
                                                            <th>' + splitTime(timing.Fajr) + '</th>\
                                                            <th>' + splitTime(timing.Sunrise) + '</th>\
                                                            <th>' + splitTime(timing.Dhuhr) + '</th>\
                                                            <th>' + splitTime(timing.Asr) + '</th>\
                                                            <th>' + splitTime(timing.Maghrib) + '</th>\
                                                            <th>' + splitTime(timing.Isha) + '</th>\
                                                            </tr>');

                })
            },
            error: function(data) {
                alert('There is no response from server side');
            }
        });
    })

    $.ajax({
        method: 'GET',
        url: 'https://api.aladhan.com/timingsByCity?city=Hyderabad&country=IN&method=2&school=1',
        success: function(data) {
            console.log(data);
            var timings = data.data.timings;
            $('#todayTimings > tbody:last-child').append('<tr>\
                                                            <th>' + 'Fajr' + '</th>\
                                                            <th>' + timings.Fajr + '</th></tr>\
                                                            <th>' + 'Sunrise' + '</th>\
                                                            <th>' + timings.Sunrise + '</th></tr>\
                                                            <tr><th>' + 'Zuhr' + '</th>\
                                                            <th>' + timings.Dhuhr + '</th></tr>\
                                                            <tr><th>' + 'Asr' + '</th>\
                                                            <th>' + timings.Asr + '</th></tr>\
                                                            <tr><th>' + 'Maghrib' + '</th>\
                                                            <th>' + timings.Maghrib + '</th></tr>\
                                                            <tr><th>' + 'Isha' + '</th>\
                                                            <th>' + timings.Isha + '</th>\
                                                            </tr>');
        },
        error: function(data) {
            alert('There is no response from server side');
        }
    })
});
