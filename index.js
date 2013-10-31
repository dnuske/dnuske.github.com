//main structure
var body = document.getElementsByTagName('BODY')[0];

var header = document.createElement('DIV');
var content = document.createElement('DIV');
var footer = document.createElement('DIV');

body.appendChild(header);
body.appendChild(content);
body.appendChild(footer);

//main styles
body.style.fontFamily = 'Helvetica, Arial, sans-serif'

//header setup
header.headerTitle = document.createTextNode("Daniel Nuske's tech blog");
header.appendChild(header.headerTitle);


//content setup
content.posts = document.createElement('DIV');
content.appendChild(content.posts);

//create the example post
var post1 = document.createElement('DIV');
post1.wTitle = document.createElement('DIV');
post1.appendChild(post1.wTitle);
post1.wContent = document.createElement('DIV');
post1.appendChild(post1.wContent);

post1.wTitle.innerText = 'wTitle example text';
post1.wContent.innerText = 'wContent example text';




content.posts.appendChild(post1);




//footer setup
var pageData = {
	posts: [
		{subject: "post 1 title",
		content:"post 1 content"}
	]
}


function init(){
	//fill the site with data!

	//grab all posts from the pageData
	for (var i = pageData.posts.length - 1; i >= 0; i--) {
		var newPost = content.posts.firstChild.cloneNode(true);
		newPost.childNodes.item(0).innerText = pageData.posts[i].subject;
		newPost.childNodes.item(1).innerText = pageData.posts[i].content;
	};
}

