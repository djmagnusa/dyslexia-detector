$('document').ready(function(){
var current = 0;
var score = 0;
var question = $('.question');
var dys = "";
question.hide();
$('#but').hide();
$('#Score').hide();
$("button[name='start']").click(function () {
  $('#First').hide();
  $(question[current]).show();
  $('#but').show();
});
$('#submit').hide();
$('#prev').attr('disabled',true);

$("#next").click(function(){
  $(question[current]).hide();
  current++;
  $(question[current]).show();
  if(current===3){
      $('#next').attr('disabled',true);
      $('#submit').show();}
  $('#prev').attr('disabled',false);
});
$("#prev").click(function(){
  $(question[current]).hide();
  current--;
  $(question[current]).show();
  if(current===0){
    $('#prev').attr('disabled',true);
  }
  $('#next').attr('disabled',false);
  $('#submit').hide();
});
$("#submit").click(function(){
  question.hide();
  for(var i=0;i<4;i++){
    if(parseInt($(question[i]).find('input[name="options"]:checked').val())===1)
      score++;

    if(parseInt($(question[i]).find('input[name="options"]:checked').val())===2)
      score+=2;

  }

  if(score >= 3 && score <= 4)
	dys = "You ward have no signs of learning disability";	
  else if(score == 5 || score == 6)
	dys = "Your ward have some signs of learning disorder.";
  else if(score == 7 || score == 8)
	dys = "It appears that your ward have probable signs of some learning disorder. You should pay special attention";
  //alert(dys);
  $('#score').text(dys);
  $("#Score").show();
  $('#but').hide();
});
$('#restart').click(function(){
  location.reload();
});

});