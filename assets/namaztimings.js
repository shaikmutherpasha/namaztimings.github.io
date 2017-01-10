$(document).ready(function(){
  $('.months').change(function(){
	var $month = $('.months').val();
	 var d = new Date(); 
      var curr_year = d.getFullYear(); 
	$('.mshow').html('You Have Selected ' + $month);


        $.ajax({
            method: 'GET',
            url: 'http://api.aladhan.com/calendar?latitude=17.3850&longitude=78.4867&timezonestring=Asia%2Kolkata&method=2&month=' + $month + '&year='+curr_year+,
            success: function(data) {
            
                console.log(data);
            },
            error: function(data) {
                alert('Enter Correct API');
            }
        });
  })
});
