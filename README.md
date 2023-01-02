# FuturaJS
 A small JavaScript library for common tasks such as Carousel, Exception, Animation handler, Auto Write Text, Auto Count Number in interval, static header and more...

<div align="center">

[![npm version](https://img.shields.io/npm/v/@futuravision/futura.js.svg?style=flat-square)](https://www.npmjs.org/package/@futuravision/futura.js)
[![Build status](https://img.shields.io/github/workflow/status/BlakvGhost/FuturaJS?logo=github&style=flat-square)](https://github.com/BlakvGhost/FuturaJS/actions/workflows/ci.yml)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@futuravision/futura.js&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@futuravision/futura.js)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@futuravision/futura.js?style=flat-square)](https://bundlephobia.com/package/@futuravision/futura.js@latest)
[![npm downloads](https://img.shields.io/npm/dm/@futuravision/futura.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@futuravision/futura.js)
</div>

## Table of Contents

  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
    - [Package manager](#package-manager)
    - [CDN](#cdn)
    - [GitHub](#github)
  - [Usage/Examples](#examples)
    - [Fixed Header](#fixed-header)
    - [Intersection](#intersection)
    - [Auto Write Text](#autowritetext)
    - [Auto Count Number](#numberautocount)
    - [FvCarousel](#fvcarousel)
    - [Preloader](#preloader)
  - [Authors](#authors)
  - [License](#license)

## Features

- Make Carousel Easy to use
- Auto Write Text When it visible to the visitor screen
- Auto Count Number When it visible to the screen
- Make animation on elements when thery are visible to the visitor  screen
- Make your header static when you are scrolling down and default when up
- Make your page Preloader, which loads when the site is loading file and not ready

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


## Installation

### Package manager

Using npm:

```bash
$ npm install @futuravision/futura.js
```
Once the package is installed, you can import the library using `import` or `require` approach:

```js
import {FvCarousel, AutoWriteText} from 'futura.js';
```

### CDN

Using unpkg CDN (ES5 UMD browser module):

```html
<script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
```
### GitHub

Using GitHub

```bash
 $ git clone https://github.com/BlakvGhost/FuturaJS.git
```
Add the script tag in your \<head><\/head>
```html
<script src="futurajs/dist/futurajs.min.js" charset="utf-8"></script>
```

## Examples

 Choose the moduls you want to use:

### Fixed Header

Used for making header fixed when scrolling with animation

```javascript
new fJs.Sticky({
    elt: 'header-selector',
});
```

Exemple
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <header id="staticHeader">
            <ul>
                <li>BlakvGhost</li>
                <li>BlakvGhost 1</li>
                <li>BlakvGhost 2</li>
            </ul>
        </header>
    </body>
    <script type="text/javascript">
        new fJs.Sticky({
            elt: '#staticHeader',
        });
    </script>
</html>
```
#### Possible Properties
| params             | Value                                                                |
| ----------------- | ------------------------------------------------------------------ |
| elt: | header selector|
| callback: | A callback function when the header is static |
| fallback :| "A fallback function when the header become as default" |
----------------------------------------------------------------

 ### Intersection

Used for making animation type when an element is visible on the user screen

```javascript
new fJs.Intersection({
    elt: 'elements-selector',
    class: "list of your custom animation",
    root: null,
    ratio: 0.2,
    rootMargin: '0px',
    threshold: 0.7,
});
```

#### Possible Properties

all the following properties are in object notation

| params             | Value                                                                |
| ----------------- | ------------------------------------------------------------------ |
| elt: | elements class selector|
| class: | Custom Animation class when the element is visible in screen|
----------------------------------------------------------------


Exemple with animation.js library class
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <div class="revealElement">
            <h3>First - A small JavaScript library for common tasks such as Carousel, Exception, Animation handler and more...</h3>
        </div>
        <div class="revealElement">
            <h3>Second - A small JavaScript library for common tasks such as Carousel, Exception, Animation handler and more...</h3>
        </div>
        <div class="revealElement">
            <h3>Third - A small JavaScript library for common tasks such as Carousel, Exception, Animation handler and more...</h3>
        </div>
    </body>
    <script type="text/javascript">
        new fJs.Intersection({
            elt: '.revealElement',
            class: "animate__animated animate__fadeInDown opacity-100",
            root: null,
            ratio: 0.2,
            rootMargin: '0px',
            threshold: 0.7,
        });
    </script>
</html>
```

### AutoWriteText

Used for writing text when it visible on the user screen

```javascript
new fJs.AutoWriteText({
    separator: 'separator',
    timeout: 'the time out in milisecond'
});
</script>
```
Exemple
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <h1 data-fv-anim='autowrite' data-fv-data="Write Here Your Text"></h1>
    </body>
    <script type="text/javascript">
        new fJs.AutoWriteText({
        separator: '|',
        timeout: 300
    });
    </script>
</html>
```
### NumberAutoCount

Used for counting number in time interval when it visible on the user screen

```javascript
new fJs.NumberAutoCount({
    timeout: 300
});
```
Exemple
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <h1 data-fv-anim='countdown' data-fv-data='1000'></h1>
    </body>
    <script type="text/javascript">
        new fJs.NumberAutoCount({
            timeout: 300
        });
    </script>
</html>
```

### FvCarousel

Used for creating a simply carousel

```javascript
new FvCarousel('.fv-carousel',{
    items: "Number of element per screen",
    margin: 'Margin between every element',
    prev: 'prev-button-selector',
    next: 'next-button-selector',
    autoplay: "A boolean to indicat if autoplay enabled",
    autoplaySpeed: 'A string for speed time',
    autoplayHoverPause: "A boolean to indicat if autoplayHoverPause enabled",
    timeout: "a number for the timeout in milisecond",
    allowDrag: "A boolean to indicate if allowDrag enabled",
    keyDirection: "A boolean to indicate if KeyDirection enabled",
    direction: 'horizontal or vertical',
    dots: {
        el: 'dots-selector',
        direction: 'dots direction'
        }
    });
```
Exemple with bootstrap class
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <div class="fv-carousel-main position-relative w-100" style="height: 500px;">
        <div class="fv-dots position-absolute top-50" style="right: 2%"></div>
        <div class="fv-control">
            <a style="z-index: 5" href="javascript:void(0)" class="btn btn-dark position-absolute start-0 top-50 fv-carousel-control-prev"><i class="mdi mdi-arrow-left-thin"></i></a>
            <a style="z-index: 5" href="javascript:void(0)" class="btn btn-dark position-absolute end-0 top-50 fv-carousel-control-next"><i class="mdi mdi-arrow-right-thin"></i></a>
        </div>
        <div class="fv-carousel">
            <div class="fv-carousel-item">
                <div class="position-relative w-100 h-100">
                    <div class="position-absolute h-100 w-100 top-0 start-0">
                        <img src="/static/img/test-3.jpg" alt="" class="w-100 h-100">
                    </div>
                    <div class="position-absolute top-50 start-0 w-100">
                        <div class="w-50 m-auto p-2" style="z-index: 5;">
                            
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fv-carousel-item">
                <div class="position-relative w-100 h-100">
                    <div class="position-absolute h-100 w-100 top-0 start-0">
                        <img src="screenshot.png" alt="" class="w-100 h-100">
                    </div>
                    <div class="position-absolute top-50 start-0 w-100">
                        <div class="w-50 m-auto p-2" style="z-index: 5;">
                            
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fv-carousel-item">
                <div class="position-relative w-100 h-100">
                    <div class="position-absolute h-100 w-100 top-0 start-0">
                        <img src="screenshot.png" alt="" class="w-100 h-100">
                    </div>
                    <div class="position-absolute top-50 start-0 w-100">
                        <div class="w-50 m-auto p-2" style="z-index: 5;">
                            
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fv-carousel-item">
                <div class="position-relative w-100 h-100">
                    <div class="position-absolute h-100 w-100 top-0 start-0">
                        <img src="screenshot.png" alt="" class="w-100 h-100">
                    </div>
                    <div class="position-absolute top-50 start-0 w-100">
                        <div class="w-50 m-auto p-2" style="z-index: 5;">
                            
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fv-carousel-item">
                <div class="position-relative w-100 h-100">
                    <div class="position-absolute h-100 w-100 top-0 start-0">
                        <img src="screenshot.png" alt="" class="w-100 h-100">
                    </div>
                    <div class="position-absolute top-50 start-0 w-100">
                        <div class="w-50 m-auto p-2" style="z-index: 5;">
                            
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    <script type="text/javascript">
        new FvCarousel('.fv-carousel',{
            items: 2,
            margin: '2px',
            prev: '.fv-carousel-control-prev',
            next: '.fv-carousel-control-next',
            autoplay: true,
            autoplaySpeed: '5s',
            autoplayHoverPause: true,
            timeout: 6000,
            allowDrag: false,
            keyDirection: true,
            direction: 'horizontal',
            dots: {
                el: '.fv-dots',
                direction: 'vertical'
            }
        });
    </script>
</html>
```
### Preloader

Make your page Preloader, which loads when the site is loading file and not ready
```html
<!-- ADD THIS CUSTOM TAG JUST AFTER INSIDE BODY TAG  -->
<fv-preloader></fv-preloader>

```
Exemple
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <script src="https://unpkg.com/@futuravision/futura.js/dist/futurajs.min.js"></script>
    </head>
    <body>
        <fv-preloader></fv-preloader>
    </body>
</html>
```

## Tech Stack

**Client:** HTML5, CSS3, ES6

## Authors

- [@v1p3r75](https://github.com/v1p3r75)
- [@BlakvGhost](https://github.com/BlakvGhost)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Support

For support, email me on kabirou2001@gmail.com or join our Slack channel.