$(document).ready(function() {
    $('.months').change(function() {
        var $month = $('.months').val();
        var d = new Date();
        var curr_year = d.getFullYear();
      //  $('.mshow').html('You Have Selected ' + $month);
        $.ajax({
            method: 'GET',
            url: 'http://api.aladhan.com/calendarByCity?city=Hyderabad\
            &country=IN&month=' + $month + '&year=' + curr_year + '&method=2&school=1',
            success: function(data) {
                var rowCount = $('#myTable >tbody >tr').length;
                if (rowCount > 0) {
                    $("#myTable > tbody > tr").remove();
                }
                $.each(data.data, function(i, v) {

                    $('#myTable > tbody:last-child').append('<tr>\
                                                            <th>' + v.date.readable + '</th>\
                                                            <th>' + v.timings.Fajr + '</th>\
                                                            <th>' + v.timings.Dhuhr + '</th>\
                                                            <th>' + v.timings.Asr + '</th>\
                                                            <th>' + v.timings.Maghrib + '</th>\
                                                            <th>' + v.timings.Isha + '</th>\
                                                            </tr>');

                })
            },
            error: function(data) {
                alert('Sorry');
            }
        });
    })

});
