$(document).ready(function() {
    $('.months').change(function() {
        var $month = $('.months').val();
        var d = new Date();
        var curr_year = d.getFullYear();
      //  $('.mshow').html('You Have Selected ' + $month);
        function splitTime(time){
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
                                                            <th>' + splitTime(timing.Fajr)  + '</th>\
                                                            <th>' + splitTime(timing.Dhuhr) + '</th>\
                                                            <th>' + splitTime(timing.Asr)  + '</th>\
                                                            <th>' + splitTime(timing.Maghrib) + '</th>\
                                                            <th>' + splitTime(timing.Isha)  + '</th>\
                                                            </tr>');

                })
            },
            error: function(data) {
                alert('Sorry');
            }
        });
    })

});
