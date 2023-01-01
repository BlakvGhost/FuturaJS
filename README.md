# FuturaJS
 A small JavaScript library for common tasks such as Carousel, Exception, Animation handler and more...

## Installation

Install FuturaJS with GitHub

```bash
  git clone https://github.com/BlakvGhost/FuturaJS.git
```
Add the script tag in your \<head><\/head>
```html
<script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
```
Replace the ***src*** "path-to-FuturaJS" by the true path.

## Usage/Examples

 Choose the moduls you want to use:

- Fixed Header

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
        <script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
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
- Intersection

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
Exemple with animation.js library class
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
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

- AutoWriteText

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
        <script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
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
- NumberAutoCount

Used for counting number in time interval when it visible on the user screen

```javascript
new fJs.NumberAutoCount();
```
Exemple
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
    </head>
    <body>
        <h1 data-fv-anim='countdown' data-fv-data='1000'></h1>
    </body>
    <script type="text/javascript">
        new fJs.AutoWriteText({
        separator: '|',
        timeout: 300
    });
    </script>
</html>
```

- FvCarousel

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
        <script src="path-to-FuturaJS/fjs.init.js" charset="utf-8" type="module"></script>
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