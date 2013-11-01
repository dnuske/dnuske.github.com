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

//create the example post constructor
function WisePost() {

	this.dom = document.createElement('DIV');

	this.dom.wTitle = document.createElement('DIV');
	this.dom.appendChild(this.dom.wTitle);
	this.dom.wContent = document.createElement('DIV');
	this.dom.appendChild(this.dom.wContent);

	content.posts.appendChild(this.dom);

	this.setTitle = function(text){
		this.dom.wTitle.innerText = text;
	}

	this.setContent = function(text){
		this.dom.wContent.innerText = text;
	}

}



//footer setup



//get the data
var pageData = {
	posts: [
		{subject: "post 1 title",
		content:"post 1 content"},
		{subject: "post 2 title",
		content:"post 2 content"}
	]
}


//fill the site with data!
function init(){

	//grab all posts from the pageData
	for (var i = pageData.posts.length - 1; i >= 0; i--) {
		var newPost = new WisePost();
		newPost.setTitle(pageData.posts[i].subject);
		newPost.setContent(pageData.posts[i].content);
	};
}
init();

