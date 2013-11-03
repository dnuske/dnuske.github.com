//helper functions
var helper = {};
helper.center = function(domElement){
	domElement.style.marginLeft = "auto";
	domElement.style.marginRight = "auto";
}

//main structure
var body = document.getElementsByTagName('BODY')[0];

var header = document.createElement('DIV'); body.appendChild(header);
var content = document.createElement('DIV'); body.appendChild(content);
var footer = document.createElement('DIV'); body.appendChild(footer);


//main styles
body.style.fontFamily = 'Helvetica, Arial, sans-serif'
body.style.padding = "0px";
body.style.margin = "0px";

//header setup
header.style.width = "100%";
header.headerTitle = document.createElement("DIV"); header.appendChild(header.headerTitle);
header.headerTitle.style.width = "1000px";
header.headerTitle.style.paddingTop = "12px";
header.headerTitle.style.paddingBottom = "16px";
helper.center(header.headerTitle)

header.headerTitle.image = document.createElement("IMG"); header.headerTitle.appendChild(header.headerTitle.image);
header.headerTitle.image.src = "img/devtech.png";

header.headerPresentation = document.createElement("DIV"); header.appendChild(header.headerPresentation);
header.headerPresentation.style.width = "100%";
header.headerPresentation.style.height = "300px";
header.headerPresentation.style.padding = "0px";
header.headerPresentation.style.background = "-webkit-linear-gradient(top, #4b90c3, #0d63a3)"
header.headerPresentation.innerText = "  ";


//content setup
content.style.width = "100%";
content.postsContainer = document.createElement('DIV'); content.appendChild(content.postsContainer);
content.postsContainer.style.width = "1000px";
helper.center(content.postsContainer)
content.postsContainer.posts = document.createElement('DIV'); content.postsContainer.appendChild(content.postsContainer.posts);

//create the example post constructor
function WisePost() {

	this.postWidget = document.createElement('DIV');
	this.postWidget.style.width = "280px";
	this.postWidget.style.height = "250px";
	this.postWidget.style.backgroundColor = "#FFFFDD";
	this.postWidget.style.float = "left";
	this.postWidget.style.marginTop = "50px";
	this.postWidget.style.marginBottom = "50px";
	this.postWidget.style.marginLeft = "25px";
	this.postWidget.style.marginRight = "25px";
	this.postWidget.style.borderRadius = "5px";
    this.postWidget.style.boxShadow = "0 0 5px rgba(0,0,0,.3)";

	this.postWidget.wTitle = document.createElement('DIV'); this.postWidget.appendChild(this.postWidget.wTitle);
	this.postWidget.wContent = document.createElement('DIV'); this.postWidget.appendChild(this.postWidget.wContent);

	content.postsContainer.posts.appendChild(this.postWidget);

	this.setTitle = function(text){
		this.postWidget.wTitle.innerText = text;
	}

	this.setContent = function(text){
		this.postWidget.wContent.innerText = text;
	}

}



//footer setup



//get the data
var pageData = {
	posts: [
		{subject: "post 1 title",
		date: "2013-10-24",
		permaSubject: "post-1-title",
		content:"post 1 content"},
		{subject: "post 2 title",
		content:"post 2 content"},
		{subject: "post 3 title",
		content:"post 3 content"}
	]
}


//fill the site with data!
function init(){

	//grab all posts from the pageData
	for (var i = 0; i <= pageData.posts.length - 1; i++) {
		var newPost = new WisePost();
		newPost.setTitle(pageData.posts[i].subject);
		newPost.setContent(pageData.posts[i].content);
	};
}
init();

