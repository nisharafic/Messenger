
var users;

$(function () {

    var message = $("#message");
	var chatList = $("#chartList");
    var flickPost = (function () {
        var init = function () {
			message.keyup(function(ev) {
			   // 13 is ENTER
			   if (ev.which === 13 && message!=null && message.val()!="") {
					sendMsg(message.val());
					_clearMsg();
					receiveMsg('I am good and you?');
					
					chatList.listview('refresh');
			   }
			}); 
			
			$('#chartList li').remove();
		},
		_clearMsg =function(){
			message.val("");
		},
		sendMsg = function(msg){
			
			chatList.append('<li class="by-me"><div class="avatar pull-left"><img class="msgPic" src="pics/amy_jones.jpg" alt=""></div>'+
						'<div class="chat-content"><div class="chat-meta">Nishar <span class="pull-right">3 hours ago</span></div>' + msg +
					  	'<div class="clearfix"></div></div></li> ');
			
			
		},
		receiveMsg = function(msg){
			chatList.append('<li class="by-other"><div class="avatar pull-right"><img class="msgPic" src="pics/james_king.jpg" alt=""></div>'+
	  					    '<div class="chat-content"><div class="chat-meta">3 hours ago <span class="pull-right">Rafic</span></div>'+msg+
					  		'<div class="clearfix"></div></div></li> ');
			
		};
		
		return  {
			init: init
			};
	})();
	flickPost.init();
});