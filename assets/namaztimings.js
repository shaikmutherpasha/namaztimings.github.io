$(document).ready(function(){
  $('.months').change(function(){
	var $month = $('.months').val();
	 var d = new Date(); 
      var curr_year = d.getFullYear(); 
	$('.mshow').html('You Have Selected ' + $month);


        $.ajax({
            method: 'GET',
            url: 'http://api.aladhan.com/calendarByCity?city=Hyderabad&country=IN&month='+ $month +'&year='+ curr_year+'&method=2',
            success: function(data) {
             $.each(data.data, function(i, v){
                  console.log (v)
                   })
           },
            error: function(data) {
                alert('Enter Correct API');
            }
        });
  })
});
