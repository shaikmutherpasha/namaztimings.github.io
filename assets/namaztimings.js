$(document).ready(function() {
    $('.months').change(function() {
        var $month = $('.months').val();
        var d = new Date();
        var curr_year = d.getFullYear();
      //  $('.mshow').html('You Have Selected ' + $month);
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
                       
                    $('#myTable > tbody:last-child').append('<tr>\
                                                            <th>' + v.date.readable + '</th>\
                                                            <th>' + v.timings.Fajr.split(" " , 1)[0]  + '</th>\
                                                            <th>' + v.timings.Dhuhr.split(" " , 1)[0]  + '</th>\
                                                            <th>' + v.timings.Asr.split(" " , 1)[0]  + '</th>\
                                                            <th>' + v.timings.Maghrib.split(" " , 1)[0]  + '</th>\
                                                            <th>' + v.timings.Isha.split(" " , 1)[0]  + '</th>\
                                                            </tr>');

                })
            },
            error: function(data) {
                alert('Sorry');
            }
        });
    })

});
