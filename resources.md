

# Solution Architecture


i. Complete Life Cycle Web Development --https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/life-cycle-architecture.md

ii. REACT Architecture to Web Development https://github.com/kukuu/AGILITY/tree/master/white-paper/architectural-solutions/react-architecture 

iii. Guide to building REACT/REDUX Application - https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/steps-to-build-react-redux-user-app.md 

iv. Test Coverrage - https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/test-pyramid-coverage%20(1).jpg

v. Snippets -  https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/snippets.md


# NodeJS - Building and Securing a Modern Backend API  


i. https://scotch.io/tutorials/building-and-securing-a-modern-backend-api?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more 

ii. JWT - https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens 


# Handling es6 Promises

1. http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/




# REACT / Redux 



1. React JS / Redux Tutorial  - https://www.youtube.com/watch?v=p1UmoELah8M  (BR)

2. Local dev - http://localhost:3003/ 

3. Boilerplate - https://github.com/buckyroberts/React-Redux-Boilerplate 

4. Architecture - https://camo.githubusercontent.com/13227c2a980b327c8efda916f1c47271238a017a/687474703a2f2f692e696d6775722e636f6d2f4455694c39796e2e706e67 

5. Build Real Web App with React (RZ - v1)

i. Applicaion https://www.youtube.com/watch?v=1IWzMuJKv6o 

ii. Commits - https://github.com/bearski/reddice/commits/13ada03eef803f316bf6740220e0dec29b154908

iii. Local dev - http://localhost:3000/

iv. Commits - https://github.com/Remchi/bookworm-react/commits/master (itemise)

iii. Master React and Build Awesome Web Applications (v2) - https://jsfullstacker.com/master-react 

6. Axios - http://localhost:3020/all

7. REACT AJAX - file:///Users/alexanderadu-sarkodie/Desktop/addentum-webServices/polyglonomy/generate-JSON-AJAX-datasets/REACT/app.html

8. REACT instant search - https://github.com/algolia/demo-react-instantsearch

9. PWA - https://hackernoon.com/a-guide-to-creating-web-applications-with-react-and-redux-2f6bc0775951




# PREACT


i. https://preactjs.com


Optimizing REACT

Using create-react-app for building  PWA is complete as you don't have to worry about writing a Service Worker, as it handled that for you.

 There is a slight problem though, which is always the final build’s size. Running npm run build will reveal how heavy our PWA is. 

Optimizing the size of a PWA might seem unnecessary. After all the code is cached by the service worker the first time, then it’s served from the cache. Technically, that is true, but what if our application updates on a regular basis? What if we have a ton of assets that require a lot of bandwidth themselves? After all, we have about 3 seconds (5 if we are being optimistic), before a user leaves our website.


A preferred option is to use Preact, which is a really lightweight implementation of React. To make things easier,  install preact-compat and preact-redux along with preact, so that you do not have to alter any code almost at all. 

Go ahead and install all of them. Then, find any references of react and react-dom and replace them with preact-compat. 

Finally, replace all references of react-redux with preact-redux and rebuild your project. This can potentially half the size of the application, and speed up loading times quite a lot.


Testing the PWA in Lighthouse may reveal that the images on the page take forever to load, so you may need to fix that. One idea is to use the  <picture> element to show a smaller, lower-definition image on mobile. Making this change, compiling and running again reveals that, while not perfect, the application’s performance can be a lot better. Possibly trimming off over 1 second of loading time.



# REACT Native 



i. Build a React Native chat app - https://www.youtube.com/watch?v=VTnFDc3IFag

ii. GitHub - https://github.com/FaridSafi/ChatApp 

iii. Learn React Native - https://www.youtube.com/watch?v=O2De6BBqKW4



# Redux Saga 


1. Beginner Tutorial - https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

2. Phoenix ReactJS: Redux Saga - https://www.youtube.com/watch?v=hfrnlxIZm3E
 


# Vue vs REACT


i. https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd?source=placement_card_footer_grid---------1-43

=== To do Apps ===

i. React ToDo: https://github.com/kukuu/worldlabs/tree/master/react-todo : http://localhost:3001/

ii. Vue ToDo: https://github.com/sunil-sandhu/vue-todo




# Unit Testing


1. https://github.com/kukuu/unittests/blob/master/principles.md

3. https://github.com/kukuu/unittests/tree/master/typescript/src/app

4. Unit Testing JavaScript Using Jasmine - http://bittersweetryan.github.io/jasmine-presentation/#slide-0

5. Using Karma:

  i. Setting up Karma - https://www.youtube.com/watch?v=A6qQGC_P4kg
  ii. Writing Tests - https://www.youtube.com/watch?v=ejHUJvukhOI

6. REACT with Enzyme - https://www.youtube.com/watch?v=u5XTnNBotqs

7. Unit Testing in React + Redux applications - https://www.youtube.com/watch?v=r5lhmEoaWBM

8. Angular 2-4

1. https://www.youtube.com/watch?v=yG4FH60fhUE 

2. https://www.youtube.com/watch?v=sU2lF3gDKHI

3. https://github.com/theintern/example-angular




# Angular


1. Super Mean Stack 

i. ToDo Application -  https://www.youtube.com/watch?v=6Sbau-oE37w&feature=youtu.be 

ii. Local Dev - http://localhost:4000/ 


 === Angular 2/4 ===

i. https://medium.com/developing-an-angular-4-web-app/setting-up-our-angular-4-project-from-scratch-bdbc616f92f2 

ii. https://github.com/theintern/example-angular
 


# TypeScript 



1. https://www.youtube.com/watch?v=xqYD8QXJX9U


2. https://www.typescriptlang.org/docs/tutorial.html



# GraphQL 


i. Getting started with Redux and GraphQL - https://medium.com/@childsmaidment/getting-started-with-redux-and-graphql-8384b3b25c56  

ii. GitHub - https://github.com/thisbejim/getting-started-with-redux-and-graphql

iii. Local dev - http://localhost:3099/

iv. Zero to GraphQL in 30 Minutes  - https://www.youtube.com/watch?v=UBGzsb2UkeY 

v. Implementing and Using GraphQL at GitHub - https://www.youtube.com/watch?v=wPPFhcqGcvk 
 


# Working with JSON & AJAX



1. Polyglonomy - http://www.filltext.com/ 

2. JSON / AJAX- https://www.youtube.com/watch?v=rJesac0_Ftw



# Progressive Web App & Isomorphic JavaScript


1. Serverside Isomorphic Javascript Rendering with ReactJS & Node 
   
   i. https://github.com/kukuu/AGILITY/blob/master/ProgressiveWebApp.md
   
   ii. https://github.com/kukuu/worldlabs/tree/master/isomorphic-react
   
   iii.  https://www.youtube.com/watch?v=8wfY4TGtMUo 
   
   iv. https://github.com/DavidWells/isomorphic-react-example
   
   v. http://yanns.github.io/blog/2014/03/15/server-side-rendering-for-javascript-reactjs-framework/

2. News API - https://www.youtube.com/watch?v=gcx-3qi7t7c 

3. Capacitor - https://www.youtube.com/watch?v=x2jRs7Qqai8&pbjreload=10

4. REACT/REDUX/JS SEARCH - https://hackernoon.com/a-guide-to-creating-web-applications-with-react-and-redux-2f6bc0775951 

5.Short intro - https://www.youtube.com/watch?v=1pqwxt9_XoI

6. PWAs vs Native - https://www.youtube.com/watch?v=vhg01Ml-8pI



# Git / GitHub


i. Git Cheat Sheet - https://www.git-tower.com/blog/git-cheat-sheet

ii. Comprehensive Basics -  https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository 

iii. Handbook - http://try.github.io



# Kubernetes
 

i. A Technical Overview - https://www.youtube.com/watch?v=WwBdNXt6wO4

ii. Kubernetes in 5 minutes - https://www.youtube.com/watch?v=N6r-9ZzFgzw



# Docker


i. Comprehensive introduction - https://www.youtube.com/watch?v=YFl2mCHdv24

ii. Docker Compose - https://www.youtube.com/watch?v=Qw9zlE3t8Ko 

iii. Deploy Docker Containers with Docker Cloud - https://www.youtube.com/watch?v=F82K07NmRpk



# jQuery


i. https://www.youtube.com/watch?v=rDtirLUlJ4o 



# AWS 

i. Architecting for High Availability & Multi-Availability Zones  - https://www.youtube.com/watch?v=6uE2XULbT3o



# Team City


i. Architecture -  https://touren.github.io/2018/01/13/Deployment_Architecture

=== CI, Continuous Deployment with AWS ===

i. Integral Architecture with cloud - https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/continuous-integration-with-team-city.png

ii. Pipeline - https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/CI-CDL-CDPL-pipeline.jpg

iii. Continuous Integration with TeamCity - https://www.youtube.com/watch?v=sIKR7P_ChFg



# JIRA 

i. Burn down charts - https://www.youtube.com/watch?v=PRuV5rASIF4 

ii. JIRA Tasks and Sub-tasks Issue Tracking - https://www.youtube.com/watch?v=iFQthiBFaGM 

iiii. JIRA Burndown Report Introduction - https://www.youtube.com/watch?v=IyhaZ5gNZ_M 




# Expo 


 Dashboard - https://expo.io/@alexander/my-app 



# JavaScript 


 i. Tutorials - https://www.homeandlearn.co.uk/javascript/javascript.html

 ii. JS SEARCH - https://github.com/bvaughn/js-search


## Linked Resources

i. https://github.com/kukuu/AGILITY/tree/master/white-paper/architectural-solutions

ii. https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/life-cycle-architecture.md 

iii. https://github.com/kukuu/AGILITY/tree/master/white-paper/architectural-solutions/react-architecture 

iv. https://github.com/kukuu/worldlabs/tree/master/API-authentication-security/client-server 
