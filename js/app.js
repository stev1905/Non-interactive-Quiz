	
	var Questionentries = {
		question: "Which NFL Team has won the most Superbowl titles?",
		answer: ['Pittsburgh Steelers','New England Patriots','New York Giants','Oakland Raiders'],
		correct: 'Pittsburgh Steelers',
		
		displayquestion: function(){
			var ques = this.question;
			var ans = this.answer;
			$('.question').append(ques);
			$('.answer').append('<input id="radio1" type=radio name="radio"><label for="radio1">'+ans[0]+'</label><br>');
			$('.answer').append('<input id="radio2" type=radio name="radio"><label for="radio2">'+ans[1]+'</label><br>');
			$('.answer').append('<input id="radio3" type=radio name="radio"><label for="radio3">'+ans[2]+'</label><br>');
			$('.answer').append('<input id="radio4" type=radio name="radio"><label for="radio4">'+ans[3]+'</label><br>');
		}
}
	  var Question2 = Object.create(Questionentries);
			Question2.question ='Who is NFL\'s Alltime rushing leader in league history?';
			Question2.answer = ['Barry Sauders','Walter Payton','Jim Brown','Emmitt Smith'];
			Question2.correct ='Emmitt Smith';
	  var Question3 = Object.create(Questionentries);
			Question3.question ='How many consecutive Superbowls did the Buffalo Bills go to in the early 1990\'s?';
			Question3.answer =['Three','Two','Four','Five'];
			Question3.correct ='Four';
     var Question4 = Object.create(Questionentries);
			Question4.question ='In which Superbowl did Broadway Joe Nameth guarantee a Superbowl victory and who were their opponents?';
			Question4.answer = ['Superbowl II v.s GreenBay','Superbowl III v.s Colts','Superbowl IV v.s Chiefs','Superbowl V v.s Steelers'];
			Question4.correct ='Superbowl III v.s Colts';
	var Question5 = Object.create(Questionentries);
			Question5.question ='Which of the following infamous games never occurred?';
			Question5.answer =['"Miracle in the Meadowlands - Eagles v. Giants"','Music City Miracle - Bills v. Titans','The Fog Bowl - Bears v. Eagles','Battle of the Cats - Lions v. Panthers'];
			Question5.correct = 'Battle of the Cats - Lions v. Panthers';
			
		    var myArray =  [Question2, Question3, Question4, Question5];
		    var AnswerArray = [Questionentries.correct, Question2.correct, Question3.correct, Question4.correct, Question5.correct];
var i = 0;		   
$(document).ready(function(){
	 
var Score = [];
	$('.next').hide();
	$('.question').append('Welcome to the NFL Quiz');
	$('.answer').append('Press the <b>Start</b> button to begin answering the following questions and test your football knowledge. Goodluck!!');
	$('.button').click(function(){
		$('.button').val("Start");
		Score = [];
		$('.next').show();
		$('.question').empty();
		$('.answer').empty();
		$('.football1').remove();
		i = 0;
 		Questionentries.displayquestion();
		$('.football').append('<img src="images/football.png" alt="football" class="football1">');	
 
		$('.next').click(function(){
		$("input[type='radio']:checked").each(function() {
		var correctanswer = AnswerArray[i];
	    var label_val = $(this).attr("id");
	    var input_value = $("label[for='"+label_val+"']").text();
	        $('.question').empty();
			$('.answer').empty();
			if(correctanswer===input_value){
			Score.push(1);
            }
 			else{
   			Score.push(0);
   		    }
			if(i<=3){
				myArray[i].displayquestion();
				$('.football').append('<img src="images/football.png" alt="football" class="football1">');
				 	
			}
			else{
				var Sum1 = Score.reduce(function(a, b){
   				return a + b;
 				}, 0);	
				$('.question').append('Congratulations on finishing the NFL Quiz!!!');
				$('.answer').append('You Got '+Sum1+' Out of 5 Questions Correct!!!');
				$('.answer').append('<img src="images/footballcartoon.gif" alt="footballcartoon" class="footballcartoon">');
				$('.next').hide();
				$('.button').val("Restart");
			}
				i++;
			});	
		});		 
	});			
});
		
	