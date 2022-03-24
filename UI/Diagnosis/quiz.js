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
    if(parseInt($(question[i]).find('input[name="options"]:checked').val())===2)
      score++;

    if(parseInt($(question[i]).find('input[name="options"]:checked').val())===1)
      score+=2;

  }

  if(score >= 3 && score < 4)
	dys = "Thanks for your patience, no need to worry. Your ward is not Dyslexic";	
  else if(score == 5 || score == 6)
	dys = "This is not an official diagnosis, however, it appears that you have signs consistent with medium level Dyslexia";
  else if(score == 7 || score == 8)
	dys = "This is not an official diagnosis, however, it appears that you have signs consistent of severe Dyslexia";
  //alert(dys);
  $('#score').text(dys);
  $("#Score").show();
  $('#but').hide();
});
$('#restart').click(function(){
  location.reload();
});

});