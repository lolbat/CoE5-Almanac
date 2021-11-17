## Conquest of Elysium 5 Almanac ##

### Introduction ###

This application is a Javascript web app that is used to load and render HTML and JSON files to allow gamers to view
 data for the [Conquest of Elysium 5][coe5] game from [Illwinter Game Design][illwinter]. All of the data is available in multiple 
 formats on the [CoE5 Data Repository][coedata] on Github.
 
 ### Structure ###
 
 The code for this app was developed on a Mac using a utility called [CodeKit][codekit]. It isn't strictly necessary to use this 
 app but the `.kit` files require it in order to build the `.html` files from the various component files I built. CodeKit
 also serves as a build tool and it is what I use to lint and minify code. Its actually a very useful tool and if you develop
 web apps on your Mac you should check it out.
 
 The app also uses [npm](https://www.npmjs.com) to load libraries like jQuery and Bootstrap. This isn't strictly necessary but 
 it was done to make it easier to distribute the application and also keep it up to date. 
 
 ### Running the app ###
 
 The application is already [online and ready for viewing](https://coe5alamanc.netlify.app). If you want to run the application
 locally you just need to copy the `build` directory or, if I can get it working, use the most recent release. Since the application 
 loads JSON, css and Javascript it needs to run via a web server. If you are using Node or npm then you can always 
 install [http-server](https://www.npmjs.com/package/http-server) which was actually used during all of the development.
 
 ### Issues ###
 
 The application has been tested in Safari, Chrome and Firefox. It doesn't do anything too extreme but this is the web so if
 you do run into issues please post them here and I will try to examine them. 
 
 ### Updates ###
 
 #### November 17, 2021 ####
 
 Rewrote the rendering system so that all the data is stored externally. It is now loaded, rendered and stored in memory and 
 then displayed. 
 
### To Do ###

- fix the css so that the display area has the correct background when the sidebar expands. 

 
 
 [illwinter]:http://www.illwinter.com
 [coe5]:http://www.illwinter.com/coe5/index.html
 [coedata]:https://github.com/lolbat/Conquest-of-Elysium-5-data 
 [codekit]:https://codekitapp.com
