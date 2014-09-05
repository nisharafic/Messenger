
var users;

$('#chatListPage').bind('pageinit', function(event) {
	getUsersList();
});

function getUsersList() {
		
		users = [{id:'1',firstName:'Mohamad',lastName:'Nishar',picture:'james_king.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'2',firstName:'Mohamad',lastName:'Nishar',picture:'amy_jones.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'3',firstName:'Mohamad',lastName:'Nishar',picture:'james_king.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'4',firstName:'Mohamad',lastName:'Nishar',picture:'amy_jones.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 						 {id:'5',firstName:'Mohamad',lastName:'Nishar',picture:'james_king.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'6',firstName:'Mohamad',lastName:'Nishar',picture:'amy_jones.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'7',firstName:'Mohamad',lastName:'Nishar',picture:'james_king.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'8',firstName:'Mohamad',lastName:'Nishar',picture:'amy_jones.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'9',firstName:'Mohamad',lastName:'Nishar',picture:'james_king.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						 {id:'10',firstName:'Mohamad',lastName:'Nishar',picture:'amy_jones.jpg',title:'Kuala Lumpur, Malaysia',reportCount:'0'},
						];
	    $('#chartList li').remove();
		//employees = data.items;
		$.each(users, function(index, user) {
			$('#chartList').append('<li class="chatList"><a rel="external" href="chat.html?id=' + user.id + '">' +
					'<img class="chatPic" src="pics/' + user.picture + '"/>' +
					'<h4>' + user.firstName + ' ' + user.lastName + '</h4>' +
					'<p>' + user.title + '</p>' +
					'<span class="ui-li-count">6:30 PM</span></a></li>');
		});
		$('#chartList').listview('refresh');
}