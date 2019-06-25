// $( window ).on( "load", function() {
//    console.log( "ready!" );
//    var boxEl = document.getElementById('inform');
//    var cur = document.getElementById('cursor');
//    var board = document.getElementById('board');

//    console.log('here');



// });

// boxEl.addEventListener('click', function () {
//     console.log('here2');
//     board.setAttribute('visible', true);
//     cur.setAttribute('wasd-controls', 'enabled', false);
// });

// board.addEventListener('click', function () {
//     console.log('here2');
//     board.setAttribute('visible', false);
//     cur.setAttribute('wasd-controls', 'enabled', true);
// });

AFRAME.registerComponent('set-image', {
    schema: {
        on: {
            type: 'string'
        },
        target: {
            type: 'selector'
        },
        src: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        dur: {
            type: 'number',
            default: 300
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        var btitle = document.getElementById("boardTitle");

        this.setupFadeAnimation();

        el.addEventListener(data.on, function () {
            // Fade out image.
            data.target.emit('set-image-fade');
            // Wait for fade to complete.
            setTimeout(function () {
                // Set image.
                data.target.setAttribute('material', 'src', data.src);
                btitle.setAttribute('text', 'value', data.name); 
                console.log(data.name);
            }, data.dur);
        });
    },

    /**
     * Setup fade-in + fade-out.
     */
     setupFadeAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;

        // Only set up once.
        if (targetEl.dataset.setImageFadeSetup) {
            return;
        }
        targetEl.dataset.setImageFadeSetup = true;

        // Create animation.
        targetEl.setAttribute('animation__fade', {
            property: 'material.color',
            startEvents: 'set-image-fade',
            dir: 'alternate',
            dur: data.dur,
            from: '#FFF',
            to: '#000'
        });
    }
});



AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: {
            default: 'red'
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});


AFRAME.registerComponent('click-to-link', {
    schema: {
        on: {
            type: 'string'
        },
        page: {
            type: 'string'
        }
    },

    init: function () {
        var data = this.data; // Component property values.
        var el = this.el; // Reference to the component's entity.

        this.el.addEventListener('click', function (evt) {
            console.log("I am here now");
            window.location.href= data.page;
        });
    }
});

AFRAME.registerComponent('pop-up', {
    schema: {
        on: {
            type: 'string'
        }
    },

    init: function () {

        var el = this.el; // Reference to the component's entity.

        var cur = document.getElementById('cursor');
        var board = document.getElementById('board');

        this.el.addEventListener('click', function (evt) {
            board.setAttribute('visible', true);
            cur.setAttribute('wasd-controls', 'enabled', false);
        });
    }
});

AFRAME.registerComponent('click-to-info', {
    schema: {
        on: {
            type: 'string'
        },
        infor:{
            type: 'string'
        },
        value:{
            type: 'string'
        },
        page:{
            type: 'string'
        }
    },

    init: function () {
        var data = this.data; // Component property values.
        var el = this.el; // Reference to the component's entity.

        this.el.addEventListener('click', function (evt) {
            document.getElementById("heading").innerHTML = data.value;
            document.getElementById("inf").innerHTML = data.infor;
            document.getElementById("exp").href = data.page;
            openInfo();
        });
    }
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 

function openInfo() {
    document.getElementById("myInfo").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeInfo() {
    document.getElementById("myInfo").style.width = "0%";
} 


AFRAME.registerComponent('link-next-page', {
    schema: {
        on: {
            type: 'string'
        },
        target: {
            type: 'selector'
        },
        src: {
            type: 'string'
        },
        dur: {
            type: 'number',
            default: 300
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.setupFadeAnimation();

        el.addEventListener(data.on, function () {
            // Fade out image.
            data.target.emit('set-image-fade');
            // Wait for fade to complete.
            setTimeout(function () {
                // Set image.
                console.log(data.src);
                console.log(data.target);
                data.target.load(data.src);

            }, data.dur);
        });
    },

    /**
     * Setup fade-in + fade-out.
     */
     setupFadeAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;

        // Only set up once.
        if (targetEl.dataset.setImageFadeSetup) {
            return;
        }
        targetEl.dataset.setImageFadeSetup = true;

        // Create animation.
        targetEl.setAttribute('animation__fade', {
            property: 'material.color',
            startEvents: 'set-image-fade',
            dir: 'alternate',
            dur: data.dur,
            from: '#FFF',
            to: '#000'
        });
    }
});


AFRAME.registerComponent('set-video', {
    schema: {
        on: {
            type: 'string'
        },
        target: {
            type: 'selector'
        },
        src: {
            type: 'string'
        },
        dur: {
            type: 'number',
            default: 300
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.setupFadeAnimation();

        el.addEventListener(data.on, function () {
            // Fade out image.
            data.target.emit('set-image-fade');
            // Wait for fade to complete.
            setTimeout(function () {
                // Set image.
                data.target.setAttribute('src', data.src);
                
            }, data.dur);

        });
    },

    /**
     * Setup fade-in + fade-out.
     */
     setupFadeAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;

        // Only set up once.
        if (targetEl.dataset.setImageFadeSetup) {
            return;
        }
        targetEl.dataset.setImageFadeSetup = true;

        // Create animation.
        targetEl.setAttribute('animation__fade', {
            property: 'material.color',
            startEvents: 'set-image-fade',
            dir: 'alternate',
            dur: data.dur,
            from: '#FFF',
            to: '#000'
        });
    }
});


AFRAME.registerComponent('create-popup', {
    init: function () {

          // Solution for Creating Entities.
          var sceneEl = document.querySelector('a-scene'); 
          var el = this.el; // Reference to the component's entity.
          
          this.el.addEventListener('click', function (evt) {
          // for (var i = 0; i < 50; i++) {
            var boxEl = document.createElement('a-plane');
            boxEl.setAttribute('position', {x: 0, y: 0, z: -4});
            boxEl.setAttribute('rotation', {x: 0, y: 0, z: 0});
            boxEl.setAttribute('material', {color: '#000', transparent: 'false', opacity: '0.5', alphaTest: '0.5'});
            boxEl.setAttribute('geometry', {height: '20', width: '2000'});
            // boxEl.setAttribute('color', {'#000'});
            // boxEl.setAttribute('transparent', {'true'});
            // boxEl.setAttribute('opacity', {0.8});
            sceneEl.appendChild(boxEl);
        });
        // }
    }
});




