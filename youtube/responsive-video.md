# Notes:
Here's how to make a youtube video mobile: You will need to wrap the responsive youtube embed code with a <div> and specify a 50% to 60% padding bottom. Then specify the child elements (iframe, object embed) 100% width, 100% height, with absolute position.

	Summary of steps:

1. Copy the YouTube Embed Code

2. Paste it in your HTML

3. Add div around it with class name “iframe-container”

4. Make it responsive with below CSS code




CSS code:

```
.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

```

	```

	<div class="iframe-container">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/9YffrCViTVk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>

	```

5. https://www.youtube.com/watch?v=9YffrCViTVk | https://www.classynemesis.com/projects/ytembed/
