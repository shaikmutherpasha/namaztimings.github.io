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
	
	
    var dateData = new Date();
    var date = dateData.getDate()
    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthName[dateData.getMonth()];
    var year = dateData.getFullYear();
    var fullDate = date + " " + month + " " + year;

    if ($("tr:nth-child(27) th:first").text() == fullDate) {
        $("tr:nth-child(27)").css("background-color": "#008d76", "color": "#fff");
    }
	
	
	
	
});
