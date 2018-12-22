#  HTML5 & CSS3

##### HTML5 Features, Tips, and Techniques

	1. New Doctype : <!DOCTYPE html>

	2. The Figure Element

		<figure>
		    <img src="path/to/image" alt="About image" />
		    <figcaption>
		        <p>This is an image of something interesting. </p>
		    </figcaption>
		</figure>
	
	3. No More Types for Scripts and Links

		<link rel="stylesheet" href="path/to/stylesheet.css" />
		<script src="path/to/script.js"></script>

	4. To Quote or Not to Quote.

		That is the question. Remember, HTML5 is not XHTML. You don't have to wrap 
		your attributes in quotation marks if you don't want to you. You don't have to 
		close your elements. With that said, there's nothing 
		wrong with doing so, if it makes you feel more comfortable. 
		I find that this is true for myself.


		<p class=myClass id=someId> 

	5.  Make your Content Editable


		The new browsers have a nifty new attribute that can be applied to elements,
		called contenteditable. 
		As the name implies, this allows the user to edit any of the text 
		contained within the element, 
		including its children. There are a variety of uses for something like this,
		 including an app as 
		simple as a to-do list, which also takes advantage of local storage.


		<!DOCTYPE html>
		 
		<html lang="en">
		<head>
		    <meta charset="utf-8">
		    <title>untitled</title>
		</head>
		<body>
		    <h2> To-Do List </h2>
		     <ul contenteditable="true">
		        <li> Break mechanical cab driver. </li>
		        <li> Drive to abandoned factory
		        <li> Watch video of self </li>
		     </ul>
		</body>
		</html>

		Or, as we learned in the previous tip, we could write it as:

		
		<ul contenteditable=true>

	6. Email Inputs

		If we apply a type of "email" to form inputs, we can instruct the browser to only allow 
		strings that conform to a valid email address structure. That's right; built-in form validation
		will soon be here! We can't 100% rely on this just yet, for obvious reasons. In older browsers 
		that do not understand this "email" type, they'll simply fall back to a regular textbox.


		<!DOCTYPE html>
		 
		<html lang="en">
		<head>
		    <meta charset="utf-8">
		    <title>untitled</title>
		</head>
		<body>
		    <form action="" method="get">
		        <label for="email">Email:</label>
		        <input id="email" name="email" type="email" />
		 
		        <button type="submit"> Submit Form </button>
		    </form>
		</body>
		</html>

	7. Placeholders

		Before, we had to utilize a bit of JavaScript to create placeholders for textboxes. 
		Sure, you can initially set the value attribute how you see fit, but, as soon as the user 
		deletes that text and clicks away, the input will be left blank again. 
		The placeholder attribute remedies this.


		<input name="email" type="email" placeholder="doug@givethesepeopleair.com" />

	8. Local Storage

		Thanks to local storage (not officially HTML5, but grouped in for convenience's sake), 
		we can make advanced browsers "remember" what we type, even after the
		browser is closed or is refreshed.

	9.The Semantic Header and Footer

		Gone are the days of:

		<div id="header">
		    ...
		</div>
		 
		<div id="footer">
		    ...
		</div>
		Divs, by nature, have no semantic structure -- even after an id is applied. Now, with HTML5, 
		we have access to the <header> and <footer> elements. The mark-up above can now be replaced with:


		<header>
		    ...
		</header>
		 
		<footer>
		    ...
		</footer>
		It's fully appropriate to have multiple headers and footers in your projects.

		Try not to confuse these elements with the "header" and "footer" of your website. 
		They simply refer to their container. As such, it makes sense to place, for example, 
		meta information at the bottom of a blog post within the footer element. 
		The same holds true for the header.

	10. Internet Explorer and HTML5

		Unfortunately, that dang Internet Explorer requires a bit of wrangling in order to 
		understand the new HTML5 elements.

		All elements, by default, have a display of inline.

		In order to ensure that the new HTML5 elements render correctly as block level elements, 
		it's necessary at this time to style them as such.


		header, footer, article, section, nav, menu { 
		   display: block;
		}
		Unfortunately, Internet Explorer will still ignore these stylings, because it has no clue what, 
		as an example, the header element even is. Luckily, there is an easy fix:


		document.createElement("article");
		document.createElement("footer");
		document.createElement("header");
		document.createElement("nav");
		document.createElement("menu");
		Strangely enough, this code seems to trigger Internet Explorer. To simply this process 
		for each new application, Remy Sharp created a script, commonly referred to as the HTML5 shiv. 
		This script also fixes some printing issues as well.


		<!--[if IE]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

	11. Required Attribute

		Forms allow for a new required attribute, which specifies, naturally, 
		whether a particular input is required. 
		Dependent upon your coding preference, you can declare this
		 attribute in one of two ways:


		<input type="text" name="someInput" required>
		Or, with a more structured approach.


		<input type="text" name="someInput" required="required">
		Either method will do. With this code, and within browsers that support 
		this attribute, a form cannot 
		be submitted if that "someInput" input is blank. Here's a quick example;
		we'll also add the placeholder attribute as well, as there's no reason not to.


		<form method="post" action="">
		    <label for="someInput"> Your Name: </label>
		    <input type="text" id="someInput" name="someInput" placeholder="Douglas Quaid" required>
		    <button type="submit">Go</button>
		</form>

	12. Autofocus Attribute

		Again, HTML5 removes the need for JavaScript solutions. 
		If a particular input should be "selected," 
		or focused, by default, we can now utilize the autofocus attribute.


		<input type="text" name="someInput" placeholder="Douglas Quaid" required autofocus>

		Interestingly enough, while I personally tend to prefer a more XHTML 
		approach (using quotation marks, etc.), writing "autofocus=autofocus" feels odd. 
		As such, we'll stick with the single keyword approach.

	13. Audio Support

		No longer do we have to rely upon third party plugins in order to render audio. 
		HTML5 now offers the <audio> element. Well, at least, ultimately, 
		we won't have to worry about these plugins. 
		For the time being, only the most recent of browsers offer support for HTML5 audio. 
		At this time, it's still a good practice to offer some form of backward compatibility.


		<audio autoplay="autoplay" controls="controls">
		    <source src="file.ogg" />
		    <source src="file.mp3" /> 
		    <a>Download this file.</a>
		</audio>
		Mozilla and Webkit don’t fully get along just yet, when it comes to the audio format. 
		Firefox will want to see an .ogg file, while Webkit browsers 
		will work just fine with the common .mp3 extension. This means that, 
		at least for now, you should create two versions of the audio.

		When Safari loads the page, it won’t recognize that .ogg format, 
		and will skip it and move on to the mp3 version, accordingly.
		 Please note that IE, per usual, doesn’t support this, 
		and Opera 10 and lower can only work with .wav files.


	14. Video Support

		Much like the <audio> element, we also, of course, have HTML5 video as well in the 
		new browsers! In fact, just recently, YouTube announced a new HTML5 video embed for their videos,
		 for browsers which support it. Unfortunately, again, because the HTML5 spec doesn't 
		 specify a specific codec for video, it's left to the browsers to decide. While Safari, 
		 and Internet Explorer 9 can be expected to support video in the H.264 format 
		 (which Flash players can play), Firefox and Opera are sticking with the open source
		  Theora and Vorbis formats. As such, when displaying HTML5 video, you must offer both formats.


		<video controls preload>
		    <source src="cohagenPhoneCall.ogv" type="video/ogg; codecs='vorbis, theora'" />
		    <source src="cohagenPhoneCall.mp4" type="video/mp4; 'codecs='avc1.42E01E, mp4a.40.2'" />
		    <p> Your browser is old. <a href="cohagenPhoneCall.mp4">Download this video instead.</a> </p>
		</video>
		Chrome can correctly display video that is encoded in both the "ogg" and "mp4" formats.

		There are a few things worth noting here.

		We aren't technically required to set the type attribute; however, if we don't, the browser
		 has to figure out the type itself. Save some bandwidth, and declare it yourself.
		Not all browsers understand HTML5 video. Below the source elements, we can either offer 
		a download link, or embed a Flash version of the video instead. It's up to you.
		The controls and preload attributes will be discussed in the next two tips.

	15. Preload Videos

		The preload attribute does exactly what you'd guess. Though, with that said, 
		you should first decide whether or not you want the browser to preload the video. 
		Is it necessary? 
		Perhaps, if the visitor accesses a page, which is specifically made to display a video,
		you should definitely preload the video, and save the visitor abit of 
		waiting time. Videos can be preloaded bysetting preload="preload", or by simply 
		adding preload. I prefer the latter solution; it's a bit less redundant.

	16.Display Controls

		If you're working along with each of these tips and techniques, you might have noticed that, 
		with the code above, the video above appears to be only an image, without any controls. 
		To render these play controls, we must specify the controls attribute within the video element.


		<video preload controls>


				<video preload>

	17. Regular Expressions

		How often have you found yourself writing some quickie regular expression
		 to verify a particular textbox.
		 Thanks to the new pattern attribute, we can insert a regular expression directly into our markup.


		<form action="" method="post">
		    <label for="username">Create a Username: </label>
		    <input type="text"
		       name="username"
		       id="username"
		       placeholder="4 <> 10"
		       pattern="[A-Za-z]{4,10}"
		       autofocus
		       required>
		    <button type="submit">Go </button>
		</form>

		If you're moderately familiar with regular expressions, you'll be 
		aware that this pattern: 
		[A-Za-z]{4,10} accepts only upper and lowercase letters. This string must also have a 
		minimum of four characters, and a maximum of ten.

	18. Detect Support for Attributes

		What good are these attributes if we have no way of determining whether 
		the browser recognizes them? Well,good point; but there are several ways to figure this out.
		We'll discuss two. The first option is to utilize the excellent Modernizr library. 
		Alternatively, we can create and dissect these elements to determine what the browsers 
		are capable of. For instance, in our previous example, if we want to determine if the browser
		 can implement the pattern attribute, we could add a bit of JavaScript to our page:


		alert( 'pattern' in document.createElement('input') ) // boolean;


		In fact, this is a popular method of determining browser compatibility. The jQuery library
		utilizes this trick. Above, we're creating a new input element, and determining whether 
		the pattern attribute is recognized within. If it is, the browser supports this functionality. 
		Otherwise, it of course does not.

		<script>
		if (!'pattern' in document.createElement('input') ) {
			// do client/server side validation
		}
		</script>

		Keep in mind that this relies on JavaScript!

	18. Mark Element

		Think of the <mark> element as a highlighter. A string wrapped within this tag should be 
		relevant to the current actions of the user. For example, if I searched for "Open your Mind" 
		on some blog, I could then utilize some JavaScript to wrap each occurrence 
		of this string within <mark> tags.


		<h3> Search Results </h3>
		<p> They were interrupted, just after Quato said, <mark>"Open your Mind"</mark>. </p>


	19. The Data Attribute

		We now officially have support for custom attributes within all HTML elements. While, before,
		 we could still get away with things like:


		<h1 id=someId customAttribute=value> Thank you, Tony. </h1>
		...the validators would kick up a fuss! But now, as long as we preface our custom 
		attribute with "data," we can officially use this method. 
		If you've ever found yourself attaching important data to something like a class attribute, 
		probably for JavaScript usage, this will come as a big help!

		HTML Snippet

		<div id="myDiv" data-custom-attr="My Value"> Bla Bla </div>
		Retrieve Value of the Custom Attribute
		var theDiv = document.getElementById('myDiv');
		var attr = theDiv.getAttribute('data-custom-attr'); 
		alert(attr); // My Val
		It can also even be used in your CSS, like for this silly and lame CSS text changing example.


		<!DOCTYPE html>
		 
		<html lang="en">
		<head>
		   <meta charset="utf-8">
		   <title>Sort of Lame CSS Text Changing</title>
		<style>
		 
		h1 { position: relative; }
		h1:hover { color: transparent; }
		 
		h1:hover:after {
		    content: attr(data-hover-response);
		    color: black;
		    position: absolute;
		    left: 0;
		 
		}
		</style>
		</head>
		<body>
		 
		<h1 data-hover-response="I Said Don't Touch Me!"> Don't Touch Me  </h1>
		 
		</body>
		</html>

	20. The Output Element

		As you probably have guessed, the output element is used to display some sort of calculation. 
		For example, if you'd like to display the coordinates of a mouse position, or the sum of a 
		series of numbers, this data should be inserted into the output element.

		As a simple example, let's insert the sum of two numbers into an empty output with JavaScript,
		 when a submit button is pressed.



		<form action="" method="get">
		    <p> 
		        10 + 5 = <output name="sum"></output> 
		    </p>
		    <button type="submit"> Calculate </button>
		</form>
		 
		<script>
		(function() {
		    var f = document.forms[0];
		     
		    if ( typeof f['sum'] !== 'undefined' ) {
		        f.addEventListener('submit', function(e) {
		            f['sum'].value = 15;
		            e.preventDefault();
		        }, false);
		    }
		    else { alert('Your browser is not ready yet.'); }
		})();
		</script>


	21. Create Sliders with the Range Input

		HTML5 introduces the new range type of input.


		<input type="range">
		Most notably, it can receive min, max, step, and value attributes, among others.
		 Though only Opera seems to support this type of input right now fully, 
		 it'll be fantastic when we can actually use this!

		For a quick demonstration, let's build a gauge that will allow users to decide how 
		awesome "Total Recall" is. We won't build a real-world polling solution, 
		but we'll review how it could be done quite easily.

		Step 1: Mark-up
		First, we create our mark-up.


		<form method="post">
		    <h1> Total Recall Awesomness Gauge </h1>
		    <input type="range" name="range" min="0" max="10" step="1" value="">
		    <output name="result">  </output>
		</form>

		Step 2: CSS

			Next, we'll style it just a bit. We'll also utilize :before and :after to inform the
			 user what our specified min and max values are. Thanks so much to Remy and 
			 Bruce for teaching me this trick, via "Introducing HTML5."


			body {
			    font-family: 'Myriad-Pro', 'myriad', helvetica, arial, sans-serif;
			    text-align: center;
			}
			input { font-size: 14px; font-weight: bold;  }
			 
			input[type=range]:before { content: attr(min); padding-right: 5px; }
			input[type=range]:after { content: attr(max); padding-left: 5px;}
			 
			output { 
			    display: block;
			    font-size: 5.5em;
			    font-weight: bold;
			}

			Above, we create content before and after the range input, and make their values 
			equal to the min and max values, respectively.

	22. Step 3: The JavaScript
	

		Determine if the current browser knows what the range input is. If not, 
		we alert the user that the demo won't work.
		Update the output element dynamically, as the user moves the slider.
		Listen for when the user mouses off the slider, grab the value, and save it to local storage.
		Then, the next time the user refreshes the page, the range and output will 
		automatically be set to what they last selected.

		(function() {
			var f = document.forms[0],
				range = f['range'],
				result = f['result'],
				cachedRangeValue = localStorage.rangeValue ? localStorage.rangeValue : 5; 
			
			// Determine if browser is one of the cool kids that 
			// recognizes the range input.
			var o = document.createElement('input');
			o.type = 'range';
			if ( o.type === 'text' ) alert('Sorry. Your browser is not cool enough yet.
			 Try the latest Opera.');

			// Set initial values of the input and ouput elements to
			// either what's stored locally, or the number 5.

			range.value = cachedRangeValue;
			result.value = cachedRangeValue;

			// When the user makes a selection, update local storage.
			range.addEventListener("mouseup", function() {
				alert("The selected value was " + range.value + ". I am using local storage 
				to remember the value.
				 Refresh and check on a modern browser.");
				localStorage ? (localStorage.rangeValue = range.value) : 
				alert("Save data to database or something instead.");
			}, false);
			
			// Display chosen value when sliding. 
			range.addEventListener("change", function() {
				result.value = range.value;
			}, false);
			
		})();



#### What is Not HTML5

	SVG: Not HTML5. 

	CSS3: Not HTML5. It's...CSS.

	Geolocation: Not HTML5.

	Client Storage: Not HTML5. It was at one point, but was removed from the spec, due to the fact that
	 many worried that it, as a whole, was becoming too complicated. It now has its own specification.

	Web Sockets: Not HTML5. Again, was exported to its own specification.

	

