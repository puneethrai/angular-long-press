# angular-long-press
Long press support for both desktop and mobile when used in AngularJS framework

Thank you
[GitHub Gist](https://gist.github.com/BobNisco/9885852)
, [grrrian](https://github.com/grrrian) for [Prevent long press while scrolling](https://github.com/puneethrai/angular-long-press/issues/3)

[Demo and Project page](http://puneethrai.github.io/angular-long-press/)

### Dependencies

This repository contains **native AngularJS directives** . The **only required dependencies** are: 

*   [AngularJS](http://angularjs.org) (tested with 1.4.9 although it probably works with older versions)

### Installation

bower install angular-long-press --save

Alternatively files can be downloaded [downloaded from Github](https://github.com/puneethrai/angular-long-press).
and copy the files from `dist/`. Then add the sources to your code (adjust paths as needed) after 
adding the dependencies for Angular first:

```html
<script src="./bower_components/angular/angular.min.js"></script>
<script src="./bower_components/angular-long-press/dist/angular-long-press.js"></script>
```

Whichever method you choose the good news is that the overall size is very small: &lt; 2.5kb for all directives (~0.5kb with gzip compression!)


As soon as you've got all the files downloaded and included in your page you just need to declare a dependency on the `pr.longpress` [module](http://docs.angularjs.org/guide/module):   

```javascript
angular.module('myModule', ['pr.longpress']);
```

# Example

## Markup

```html
<button on-long-press="onLongPress()" on-touch-end="onTouchEnd()" prevent-click="true"></button>
```

### Options

There are several options that you can set as attributes on the directive element

1.  `on-long-press` : method to be called when long press event is triggered
2.  `on-touch-end` : method to be called when touch end or mouse up event is triggered
3.  `prevent-click` : default true, to prevent click event getting triggered after long press is triggered
4. `long-press-duration` : default 600, Integer value in MS to indicate after how long user touches will trigger long-press event
5. `prevent-onscrolling` : default true, Boolean value to prevent long press when user is scrolling.


# Issues
 
Please check if issue exists and otherwise open issue in [github](https://github.com/puneethrai/angular-long-press/issues?state=open)

**Please add a link to a plunker, jsbin, or equivalent.**



# License

angular-long-press.js is available under the [MIT license](http://opensource.org/licenses/MIT).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/puneethrai/angular-long-press/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

