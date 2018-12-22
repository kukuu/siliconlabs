
# Progressive Web App

Blog - https://github.com/kukuu/AGILITY/blob/master/ProgressiveWebApp.md 

## Comments

The work here  is a pre-cursor, and tutorial to the fully blown application here - https://github.com/kukuu/worldlabs/tree/master/progressive-web-app/news . 

The comments in the JS files here serve to provide explanation for the script in some of its behaviour. There are cleaner versions labelled with the prefix light.

The whole application here is written in vanilla JavaScript. The templating is also done without any templating engines, but rather using HTML. 

The service worker for this application has been built from scratch!

### Using Workbox by Google

The second half of the aplication uses Workbox by Google to improve performance and management. You realise the increase in volume of the dynamic assets as they cache. 

Also, there is no lazy loading in the first half of the application. You expect files which only change in the file system to be updated and not all files as it currently is.

sw.js optimised with  Workbox - comming soon!

### What next?

Ensure your application provides progressive enhancement and  gracefully degradation.

Have a look at Isomorphic JavaScript (rendering server side JavaScript) with REACT and nodeJS - Enabling Progressive enhancement - https://github.com/kukuu/worldlabs/tree/master/isomorphic-react
