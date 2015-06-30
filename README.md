#adapt-component-animate


A basic component animation extension


Uses [velocityjs](http://julian.com/research/velocity/#fade)

```
"_componentAnimate": {
  "_startHeight": 60,   //percentage from top of the window at which to start the animation
  "_start": {       // velocity command for the componentView:preRender
      "position":"relative",
      "left": "-100%"
    },
  "_command": {   // velocity command for the componentView:postRender
      "left": 0
    },
  "_options": {   // velocity options for the componentView:postRender
    "duration": 1500
  }
},

"_componentAnimate": {
  "_startHeight": 60,   //percentage from top of the window at which to start the animation
  "_start": {       // velocity command for the componentView:preRender
      "position":"relative",
      "left": "-100%"
    },
  "_command": "fadeIn", //velocity named commands can also be used
  "_options": {   // velocity options for the componentView:postRender
    "duration": 1500
  }
},
```



