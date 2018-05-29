# EOS Brazil Team Website

## Table of contents

* [Install](#install)
    * [dev](#dev)
    * [prod](#prod)
* [Dependencies](#dependencies)
* [Todo](#todo)

## Install

Clone or download the repo
```
git clone https://github.com/rbmarliere/eosbrazil-web.git
cd eosbrazil-web
npm install
```


## dev 

**start development env**

`npm run start` this will run the development environment 

## prod

**start production env**

`npm run build` this will build the project and creates an production ready `build` folder

```
cd build
python -m http.server
```

will start a server and run the `index.html` in the build folder This will also create the service worker.

For now to update the service worker you will need to do a hard refresh.
See [TODO](#todo) for what still needs to be done


## Dependencies

* [bootstrap](https://getbootstrap.com/docs/4.0/)
* [dsteem](https://jnordberg.github.io/dsteem/)
* [react](https://reactjs.org/docs/hello-world.html)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-scripts](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started)
* [reactstrap](https://www.npmjs.com/package/reactstrap)

## TODO

* create a notification for the user that a newer version is ready and the service worker needs to be updated
* Optimize SEO including index.html head tag meta information.
* Improve ARIA 
* Improve manifest.json for installation on home screen
* Finish road map page when info is complete
* Add more info to team members Page
