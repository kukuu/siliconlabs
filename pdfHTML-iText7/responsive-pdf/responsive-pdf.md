
# Responsive PDF

1. 

```

<html>
<head>
<style type="text/css">
#wrapper{ width:100%; float:left; height:auto; border:1px solid #5694cf;}
</style>
</head>
<div id="wrapper">
<object data="http://partners.adobe.com/public/developer/en/acrobat/PDFOpenParameters.pdf" width="100%" height="100%">
<p>Your web browser doesn't have a PDF Plugin. Instead you can <a href="http://partners.adobe.com/public/developer/en/acrobat/PDFOpenParameters.pdf"> Click
here to download the PDF</a></p>
</object>
</div>
</html>

```

2. 

```
<object data="resume.pdf" type="application/pdf" width="100%" height="800px"> 
  <p>It appears you don't have a PDF plugin for this browser.
   No biggie... you can <a href="resume.pdf">click here to
  download the PDF file.</a></p>  
</object>
</div>

```


3. 


```


If you're using Bootstrap 3, you can use the embed-responsive class and set the padding bottom as the height divided by the width plus a little extra for toolbars. For example, to display an 8.5 by 11 PDF, use 130% (11/8.5) plus a little extra (20%).

<div class='embed-responsive' style='padding-bottom:150%'>
    <object data='URL.pdf' type='application/pdf' width='100%' height='100%'></object>
</div>
Here's the Bootstrap CSS:

.embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
}

```



4.

```


<object data="resume.pdf" type="application/pdf" width="100%" height="800px"> 
   <p>It appears you don't have a PDF plugin for this browser.
       No biggie... you can <a href="resume.pdf">click here to
       download the PDF file.</a>
  </p>  
</object>

```