# API Authentication 

This is a starting point for AJAX security and will be updated and expanded reasonably often to provide more detailed information about specific frameworks and technologies.

## Client Side (Javascript)


1. Use .innerText instead of .innerHtml
The use of .innerText will prevent most XSS problems as it will automatically encode the text.

2. Don't use eval
Eval is evil, never use it. Needing to use eval usually indicates a problem in your design.

3. Canonicalize data to consumer (read: encode before use)
When using data to build HTML, script, CSS, XML, JSON, etc. make sure you take into account how that data must be presented in a literal sense to keep it's logical meaning. Data should be properly encoded before used in this manner to prevent injection style issues, and to make sure the logical meaning is preserved.


4. Don't rely on client logic for security
Least ye have forgotten the user controls the client side logic. I can use a number of browser plugging to set breakpoints, skip code, change values, etc. Never rely on client logic.

5. Don't rely on client business logic
Just like the security one, make sure any interesting business rules/logic is duplicated on the server side less a user bypass needed logic and do something silly, or worse, costly.

6. Avoid writing serialization code
This is hard and even a small mistake can cause large security issues. There are already a lot of frameworks to provide this functionality. 

7. Avoid building XML or JSON dynamically
Just like building HTML or SQL you will cause XML injection bugs, so stay way from this or at least use an encoding library or safe JSON or XML library to make attributes and element data safe.

8. XSS (Cross Site Scripting) Prevention SQL Injection Prevention.
Never transmit secrets to the client. Anything the client knows the user will also know, so keep all that secret stuff on the server please.

9. Don't perform encryption in client side code
Use TLS/SSL and encrypt on the server!

10. Don't perform security impacting logic on client side


