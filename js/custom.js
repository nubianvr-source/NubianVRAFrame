// // $( window ).on( "load", function() {
// //    console.log( "ready!" );
// //    var boxEl = document.getElementById('inform');
// //    var cur = document.getElementById('cursor');
// //    var board = document.getElementById('board');

// //    console.log('here');



// // });

// // boxEl.addEventListener('click', function () {
// //     console.log('here2');
// //     board.setAttribute('visible', true);
// //     cur.setAttribute('wasd-controls', 'enabled', false);
// // });

// // board.addEventListener('click', function () {
// //     console.log('here2');
// //     board.setAttribute('visible', false);
// //     cur.setAttribute('wasd-controls', 'enabled', true);
// // });

// AFRAME.registerComponent('set-image', {
//     schema: {
//         on: {
//             type: 'string'
//         },
//         target: {
//             type: 'selector'
//         },
//         src: {
//             type: 'string'
//         },
//         name: {
//             type: 'string'
//         },
//         dur: {
//             type: 'number',
//             default: 300
//         }
//     },

//     init: function () {
//         var data = this.data;
//         var el = this.el;
//         var btitle = document.getElementById("boardTitle");

//         this.setupFadeAnimation();

//         el.addEventListener(data.on, function () {
//             // Fade out image.
//             data.target.emit('set-image-fade');
//             // Wait for fade to complete.
//             setTimeout(function () {
//                 // Set image.
//                 data.target.setAttribute('material', 'src', data.src);
//                 btitle.setAttribute('text', 'value', data.name); 
//                 console.log(data.name);
//             }, data.dur);
//         });
//     },

//     /**
//      * Setup fade-in + fade-out.
//      */
//      setupFadeAnimation: function () {
//         var data = this.data;
//         var targetEl = this.data.target;

//         // Only set up once.
//         if (targetEl.dataset.setImageFadeSetup) {
//             return;
//         }
//         targetEl.dataset.setImageFadeSetup = true;

//         // Create animation.
//         targetEl.setAttribute('animation__fade', {
//             property: 'material.color',
//             startEvents: 'set-image-fade',
//             dir: 'alternate',
//             dur: data.dur,
//             from: '#FFF',
//             to: '#000'
//         });
//     }
// });



// AFRAME.registerComponent('change-color-on-hover', {
//     schema: {
//         color: {
//             default: 'red'
//         }
//     },

//     init: function () {
//         var data = this.data;
//         var el = this.el;
//         var defaultColor = el.getAttribute('material').color;

//         el.addEventListener('mouseenter', function () {
//             el.setAttribute('color', data.color);
//         });

//         el.addEventListener('mouseleave', function () {
//             el.setAttribute('color', defaultColor);
//         });
//     }
// });


// AFRAME.registerComponent('click-to-link', {
//     schema: {
//         on: {
//             type: 'string'
//         },
//         page: {
//             type: 'string'
//         }
//     },

//     init: function () {
//         var data = this.data; // Component property values.
//         var el = this.el; // Reference to the component's entity.

//         this.el.addEventListener('click', function (evt) {
//             console.log("I am here now");
//             window.location.href= data.page;
//         });
//     }
// });

// AFRAME.registerComponent('pop-up', {
//     schema: {
//         on: {
//             type: 'string'
//         }
//     },

//     init: function () {

//         var el = this.el; // Reference to the component's entity.

//         var cur = document.getElementById('cursor');
//         var board = document.getElementById('board');

//         this.el.addEventListener('click', function (evt) {
//             board.setAttribute('visible', true);
//             cur.setAttribute('wasd-controls', 'enabled', false);
//         });
//     }
// });

// AFRAME.registerComponent('click-to-info', {
//     schema: {
//         on: {
//             type: 'string'
//         },
//         infor:{
//             type: 'string'
//         },
//         value:{
//             type: 'string'
//         },
//         page:{
//             type: 'string'
//         }
//     },

//     init: function () {
//         var data = this.data; // Component property values.
//         var el = this.el; // Reference to the component's entity.

//         this.el.addEventListener('click', function (evt) {
//             document.getElementById("heading").innerHTML = data.value;
//             document.getElementById("inf").innerHTML = data.infor;
//             document.getElementById("exp").href = data.page;
//             openInfo();
//         });
//     }
// });

// /* Open when someone clicks on the span element */
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// } 

// function openInfo() {
//     document.getElementById("myInfo").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeInfo() {
//     document.getElementById("myInfo").style.width = "0%";
// } 


// AFRAME.registerComponent('link-next-page', {
//     schema: {
//         on: {
//             type: 'string'
//         },
//         target: {
//             type: 'selector'
//         },
//         src: {
//             type: 'string'
//         },
//         dur: {
//             type: 'number',
//             default: 300
//         }
//     },

//     init: function () {
//         var data = this.data;
//         var el = this.el;

//         this.setupFadeAnimation();

//         el.addEventListener(data.on, function () {
//             // Fade out image.
//             data.target.emit('set-image-fade');
//             // Wait for fade to complete.
//             setTimeout(function () {
//                 // Set image.
//                 console.log(data.src);
//                 console.log(data.target);
//                 data.target.load(data.src);

//             }, data.dur);
//         });
//     },

//     /**
//      * Setup fade-in + fade-out.
//      */
//      setupFadeAnimation: function () {
//         var data = this.data;
//         var targetEl = this.data.target;

//         // Only set up once.
//         if (targetEl.dataset.setImageFadeSetup) {
//             return;
//         }
//         targetEl.dataset.setImageFadeSetup = true;

//         // Create animation.
//         targetEl.setAttribute('animation__fade', {
//             property: 'material.color',
//             startEvents: 'set-image-fade',
//             dir: 'alternate',
//             dur: data.dur,
//             from: '#FFF',
//             to: '#000'
//         });
//     }
// });


// AFRAME.registerComponent('set-video', {
//     schema: {
//         on: {
//             type: 'string'
//         },
//         target: {
//             type: 'selector'
//         },
//         src: {
//             type: 'string'
//         },
//         dur: {
//             type: 'number',
//             default: 300
//         }
//     },

//     init: function () {
//         var data = this.data;
//         var el = this.el;

//         this.setupFadeAnimation();

//         el.addEventListener(data.on, function () {
//             // Fade out image.
//             data.target.emit('set-image-fade');
//             // Wait for fade to complete.
//             setTimeout(function () {
//                 // Set image.
//                 data.target.setAttribute('src', data.src);
                
//             }, data.dur);

//         });
//     },

//     /**
//      * Setup fade-in + fade-out.
//      */
//      setupFadeAnimation: function () {
//         var data = this.data;
//         var targetEl = this.data.target;

//         // Only set up once.
//         if (targetEl.dataset.setImageFadeSetup) {
//             return;
//         }
//         targetEl.dataset.setImageFadeSetup = true;

//         // Create animation.
//         targetEl.setAttribute('animation__fade', {
//             property: 'material.color',
//             startEvents: 'set-image-fade',
//             dir: 'alternate',
//             dur: data.dur,
//             from: '#FFF',
//             to: '#000'
//         });
//     }
// });


// AFRAME.registerComponent('create-popup', {
//     init: function () {

//           // Solution for Creating Entities.
//           var sceneEl = document.querySelector('a-scene'); 
//           var el = this.el; // Reference to the component's entity.
          
//           this.el.addEventListener('click', function (evt) {
//           // for (var i = 0; i < 50; i++) {
//             var boxEl = document.createElement('a-plane');
//             boxEl.setAttribute('position', {x: 0, y: 0, z: -4});
//             boxEl.setAttribute('rotation', {x: 0, y: 0, z: 0});
//             boxEl.setAttribute('material', {color: '#000', transparent: 'false', opacity: '0.5', alphaTest: '0.5'});
//             boxEl.setAttribute('geometry', {height: '20', width: '2000'});
//             // boxEl.setAttribute('color', {'#000'});
//             // boxEl.setAttribute('transparent', {'true'});
//             // boxEl.setAttribute('opacity', {0.8});
//             sceneEl.appendChild(boxEl);
//         });
//         // }
//     }
// });



AFRAME.registerComponent('laser-control-use', {
    schema: {type: 'string'},
  
    init: function () {
        let el = this.el;
        let sceneEl = document.querySelector('a-scene');
        let connectedheadset = AFRAME.utils.device.checkHeadsetConnected ();
        let cameraEl = sceneEl.querySelector('#main-camera');

        el.setAttribute('visible', connectedheadset);
        cameraEl.setAttribute('visible', !connectedheadset);

        initializePage();
        
    }
  });

  let mediaContentArray;
  function initializePage(){
        console.log("page loaded!!!");
        let world = document.querySelector('#mysky');
    
        
        let splashImage = "start_up";

        //create a layout ...
        let imagetextures = ["space_photo",
                            "beginning_of_everything",
                            "place_in_universe",
                            "universe_scale",
                            "universe_tour",
                            "universe_tour2",
                            "inside_iss",
                            "mars"];

        let onboardingAud = "onboarding_aud";
        mediaContentArray = ["journey-to-mars",
                                "video-src2",
                                "video-src3",
                                "video-src1", 
                                "spaceVRvid",
                                "solarVRvid",
                                "360board", 
                                "360board1"
                                ];
        // let backplane = document.createElement('a-plane');
        // backplane.setAttribute("position",{

        // });
        //hide the panels until scene is finished loading ...
        let mylinks = document.querySelector('#links');
        mylinks.setAttribute('visible', 'true');

        mylinks.setAttribute("marginColumn", 0.5);

        imagetextures.forEach(function(val, i){
            createMainMenuItem(val, mediaContentArray[i], i);
        });
        
        addBackButton();
        addPrevNextArrows();
        addVideoPlayBackButtons();
  }

  function createPopUpPlane(sceneEl){
    let popUpPlane = document.createElement('a-entity');
    let popUpPlaneBtnEnter = document.createElement('a-entity');
    let popUpPlaneBtnExit = document.createElement('a-entity');

    popUpPlane.setAttribute('geometry', {
        primitive: 'plane',
        height: 1.5,
        width: 2
    });

    popUpPlaneBtnEnter.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.3
    });

    popUpPlaneBtnExit.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.3
    });

    popUpPlane.setAttribute('id', 'popup_id');
    popUpPlaneBtnEnter.setAttribute('id', 'popUp_Enter_id');
    popUpPlaneBtnExit.setAttribute('id', 'popUpExit_id');

    popUpPlane.object3D.position.y += 1.5;
    popUpPlane.object3D.position.z -= 2;

    let planeText = document.createElement("a-text");
    let enterBtnText = document.createElement("a-text");
    let exitBtnText = document.createElement("a-text");

    planeText.setAttribute('value', 'This is sample info\nText to be changed!');
    planeText.setAttribute('align', 'center');

    enterBtnText.setAttribute('value', 'Enter');
    enterBtnText.setAttribute('align', 'center');

    exitBtnText.setAttribute('value', 'Exit');
    exitBtnText.setAttribute('align', 'center');
    
    let buttonEnter = document.createElement('a-plane');
    let buttonExit = document.createElement('a-plane');
    buttonEnter.setAttribute('scale', {
        x: 0.6,
        y: 0.3,
        z: 1
    });

    buttonEnter.appendChild(enterBtnText);

    buttonExit.setAttribute('scale', {
        x: 0.6,
        y: 0.3,
        z: 1
    });

    buttonExit.appendChild(exitBtnText);

    buttonEnter.object3D.position.z += 0.1;
    buttonEnter.object3D.position.y -= 0.5;
    buttonEnter.object3D.position.x -= 0.5;
    buttonEnter.setAttribute('color', 'blue');

    buttonExit.object3D.position.z += 0.1;
    buttonExit.object3D.position.y -= 0.5;
    buttonExit.object3D.position.x += 0.5;
    buttonExit.setAttribute('color', 'red');
    
    popUpPlane.appendChild(planeText);
    popUpPlane.appendChild(buttonEnter);
    popUpPlane.appendChild(buttonExit);
    sceneEl.appendChild(popUpPlane);


    //set events for pop up plane here in a function ... 
    setMouseEvents(buttonEnter);
    setMouseEvents(buttonExit);

  }

  function addVideoPlayBackButtons(){

    let myScene = document.querySelector('a-scene');

    //pause, play, seek back, volume mute, volume normal, 
    let playPause = document.createElement('a-plane');
    let seekBack = document.createElement('a-plane');
    let volumeNormalMute = document.createElement('a-plane');

    let videoControls = [playPause, seekBack, volumeNormalMute];
    playPause.addEventListener('click', function(evt){

        //if video is playing show pause icon ...
        if (playPause.getAttribute('material').src.id == 'pause'){
            playPause.setAttribute('material',{
                src: "#play",
                color: 'red'
            });
            //find the exact video playing and stop it ...
            if (currentVideo != null){
                currentVideo.pause();
            }

        }else{
            playPause.setAttribute('material',{
                src: "#pause"
            });
            if (currentVideo != null){
                currentVideo.play();
            }
            
        }
    });
    
    seekBack.addEventListener('click', function(evt){
        console.log("seek button has been clicked");
    });

    volumeNormalMute.addEventListener('click', function(evt){
        if (volumeNormalMute.getAttribute('material').src.id == 'volume-mute'){
            volumeNormalMute.setAttribute('material',{src: "#volume-normal"});
            //currentVideo.mute();
        }else{
            volumeNormalMute.setAttribute('material',{src: "#volume-mute"});
        }
        console.log("Volume button has been clicked");
    });
       
    for(var i = 0; i < 3; i++){
        videoControls[i].setAttribute('id', 'vid'+i);
        videoControls[i].setAttribute('class', 'videoplaybackbtns');
        videoControls[i].setAttribute('position', {
            x: -0.25 + (i/2.5),
            y: 0.3,
            z: -1.0
        });
        
        videoControls[i].setAttribute('scale',{
            x:0.3,
            y:0.3,
            z:0.3
        });

        videoControls[i].setAttribute('material',{ 
            color: 'red',
            alphaTest: 1
        });
        
        videoControls[i].setAttribute('visible', false);
        myScene.appendChild(videoControls[i]);


    }
  }

  function createMainMenuItem(img, resource, index){
    let mylinks = document.querySelector('#links');
    let menuItem = document.createElement('a-plane');
    
    //menuItem.setAttribute('position', 'y', 0.4);
    menuItem.setAttribute('scale',{
        x: 1.3, y: 1, z: 1
    });

    menuItem.setAttribute('material', {
        //shader: 'gif',
        src: "#"+img
    });

    menuItem.setAttribute('class', 'link');

    menuItem.setAttribute('main-menu-item', {
        //id: img+"_id"
    });

    mylinks.appendChild(menuItem);
    
    setMouseEvents(menuItem);

    menuItem.addEventListener('click', function(evt){

        clearMenuItemsOnScreen();
        showContentBoard(resource, index);

    });

  }

  function clearMenuItemsOnScreen(){
        
        let boards = document.querySelectorAll('.link'); //get all boards ... and remove them ...
        for(let i = 0;i < boards.length;i++){
            boards[i].setAttribute('visible', false);
        }
        // let parentBoard = document.querySelector("#links");
        // parentBoard.parentNode.removeChild(parentBoard);
  }

  function showContentBoard(resource, index){

    let contentBoard = document.querySelector("#media-content-board");
    contentBoard.setAttribute('visible', true);
    
    //now what do you show on the content board ...
    setResourceTexture(resource, index);
    getBackBtn();

    getPrevNextBtn();

  }

  function getBackBtn(){
      let backbtn = document.querySelector("#backbtn");
      backbtn.setAttribute("visible", true);
  }

  function getPrevNextBtn(){
      let prev = document.querySelector("#prev_plane");
      let next = document.querySelector("#next_plane");
      
      prev.setAttribute('visible', true);
      next.setAttribute('visible', true);

  }

  function addPrevNextArrows(){

        let prev = document.createElement('a-plane');
        let next = document.createElement('a-plane');

        prev.setAttribute('id', 'prev_plane');
        next.setAttribute('id', 'next_plane');
        prev.setAttribute('position', {  
            x: -2.3,
            y: 1.6,
            z: -2.45
        });

        prev.setAttribute('scale', {
            x: 0.6,
            y: 0.6,
            z: 0
        });

        prev.setAttribute('material',{
            src: "#prev"
        });

        next.setAttribute('position', {
            x: 2.53,
            y: 1.6,
            z: -2.45
        });

        next.setAttribute('scale', {
            x: 0.6,
            y: 0.6,
            z: 0
        });

        next.setAttribute('material',{
            src: "#next"
        });
        

        let scene = document.querySelector('a-scene');
        scene.appendChild(prev);
        scene.appendChild(next);

       
        prev.setAttribute('visible', false);
        next.setAttribute('visible', false);



  }

  let currentVideo = null;
  function setResourceTexture(videoTexture, index){
     if (index < 4){
         console.log("value of index "+index);

        let contentBoard = getContentBoard();
        contentBoard.setAttribute("material", {
            src: "#"+videoTexture
        });

        if (isVideo(index)) {

            //show video playback buttons ... 
            getVideoPlaybackButtons();
            
            let myVideo = document.querySelector("#"+videoTexture);
            myVideo.currentTime = 0;
            myVideo.play();
            currentVideo = myVideo;
           
        }
        
     }else{
         //these are 360 content ...
        let contentBoard = document.querySelector("#media-content-board");
        let backgrndBoard = document.querySelector('#background-board');

        backgrndBoard.setAttribute('visible', false);
        contentBoard.setAttribute('visible', false);

        let myWorld = getSky();
        myWorld.setAttribute("material", {
            src: "#"+videoTexture
        });

        //remove plane ...
        let floorPlane = document.querySelector("#floor-plane");
        floorPlane.setAttribute('visible', false);
        
        if (isVideo(index)){
            let myVideo = document.querySelector("#"+videoTexture);
            myVideo.currentTime = 0;
            myVideo.play();
        }
     }
  }

  function isVideo(index){
        
    if ((index > 0) && (index < 5)) {
        return true;
    }
    return false;
  }

  function getVideoPlaybackButtons(){
        let play = document.querySelector("#vid0");
        let seek = document.querySelector("#vid1");
        let volume = document.querySelector("#vid2");
        console.log(play);
        play.setAttribute("visible", true);
        play.setAttribute("material", {
            src: "#pause"
        });

        seek.setAttribute('material', {
            src: "#seek-back"
        });

        volume.setAttribute('material', {
            src: "#volume-mute"
        });
        
        
        

        seek.setAttribute("visible", true);
        volume.setAttribute("visible", true);

  }

  function addBackButton(){
    let backBtn = document.createElement("a-plane");
    backBtn.setAttribute("id", "backbtn");
    backBtn.setAttribute("visible", false);

    backBtn.setAttribute("scale",{
        x: 0.5,
        y: 0.3,
        z: 0
    });

    backBtn.setAttribute("position", {
        x: 0,
        y: 0.3,
        z: -2.2
    });

    backBtn.setAttribute("color", "red");

    let sceneEl = document.querySelector('a-scene');
    sceneEl.appendChild(backBtn);

    backBtn.addEventListener("click", function(evt){

        //make board invisible and make make tiles visible .. 
        let contentBoard = document.querySelector("#media-content-board");
        let backgrndBoard = document.querySelector('#background-board');
        
        backgrndBoard.setAttribute('visible', true);
        contentBoard.setAttribute('visible', false);
        let floorPlane = document.querySelector("#floor-plane");
        floorPlane.setAttribute('visible', true);
        
        //stop every video ...
        for (let i = 1;i < 6;i++){
            let vid = document.querySelector("#"+mediaContentArray[i]);
            vid.pause();
        }


        let boards = document.querySelectorAll('.link'); //get all boards ... and remove them ...
        for(let i = 0;i < boards.length;i++){
            boards[i].setAttribute('visible', true);
        }

        //lose the arrows ...
        let prev = document.querySelector('#prev_plane');
        let next = document.querySelector('#next_plane');

        prev.setAttribute('visible', false);
        next.setAttribute('visible', false);

        let mediaControls = document.querySelectorAll('.videoplaybackbtns');
        for(var i = 0; i < mediaControls.length; i++){
            mediaControls[i].setAttribute('visible', false);
        }
        

    });

    return backBtn;

  }

  



  function getContentBoard(){
    let contentBoard = document.querySelector("#media-content-board");
    return contentBoard;
  }

  function getSky(){

    let mySky = document.querySelector("#mysky");
    return mySky;

  }

  function popUpInfo(){
    //remove existing popUp plane and create new one ...
    let popUpPlane = document.querySelector("#popup_id");
    if (popUpPlane != null) popUpPlane.parentNode.removeChild(popUpPlane);
    let sceneEl = document.querySelector('a-scene');
    createPopUpPlane(sceneEl);

  }

  function showDisplayBoard(){

    let parentBoardHolder = document.createElement('a-entity');
    parentBoardHolder.setAttribute('id', 'links');
    parentBoardHolder.setAttribute('position', "-1.8 1.0 -2.5");

    let entityEl = document.createElement('a-entity');
    let previousEl = document.createElement('a-entity');
    let nextEl = document.createElement('a-entity');
        
    entityEl.setAttribute('class', 'link');
    entityEl.setAttribute('id', 'mainBoard');
    previousEl.setAttribute('class', 'link');
    nextEl.setAttribute('class', 'link');

    entityEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 2,
        width: 3
    }); 

    previousEl.setAttribute('position',{
        x: -1.8,
        y: -0,
        z: -0
    });

    previousEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.5,
        width: 0.5
    });

    nextEl.setAttribute('position', {
        x: 1.8,
        y: -0,
        z: -0
    });
    
    nextEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.5,
        width: 0.5
    });

  }

    AFRAME.registerComponent('main-menu-item', {
      schema: {
        item_name: {type: 'string'},
        item_id: {type: 'int'}
      },
      init: function (){
            console.log("created now")
        }
    });



  AFRAME.registerComponent('board-option', {
    schema: {
        board_name: {type: 'string'},
        board_id: {type: 'int'}
    },

    init: function () {
        console.log(this.data);
    }

});

  AFRAME.registerComponent('panels-control', {
    schema: {type: 'string'},
    
    init: function () {
        //let universe_btn = document.querySelector('#universe_btn');
        console.log("are you there");
        // universe_btn.addEventListener('click', function(evt){
        //     clearScreen();
        //     showBoards(4);
        // });
    }
  });

    let _globalMediaIndex_position =0;
    let _globalMediaArray;
    function clearScreen(){
        var boards = document.querySelectorAll('.link'); //get all boards ... and remove them ...
        for(var i = 0;i < boards.length;i++){
            boards[i].parentNode.removeChild(boards[i]);
        }
        let parentBoard = document.querySelector("#links");
        parentBoard.parentNode.removeChild(parentBoard);
    }

    function showBoards(numberOfBoards){
        let parentBoardHolder = document.createElement('a-entity');
        parentBoardHolder.setAttribute('id', 'links');
        parentBoardHolder.setAttribute('layout', {
            type: 'line',
            margin: 0.55
            //align: 'start'
        });
        parentBoardHolder.setAttribute('position', "-1.10 1.6 -1.5");

        initializeUniversePage();
        //var parentBoardHolder = document.querySelector('#links');
        let iconsUniversePage = ['#photoboard', '#photboard','#vidboard', '#videogif'];
        let universeBoards = [{  
                                id: 1,
                                name: 'photos'
                             },
                            {
                                id: 2,
                                name: 'photo360'
                            },
                            {
                                id: 3,
                                name: 'videos'
                            },
                            {
                                id: 4,
                                name: 'video360'
                            }
                            ];
        for(var i = 0;i < numberOfBoards;i++){
            let entityEl = document.createElement('a-entity');
            
            entityEl.setAttribute('class', 'link');

            entityEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 0.5,
                width: 0.5
            }); 
            
            entityEl.setAttribute('material', {
                shader: 'gif', 
                src: iconsUniversePage[i]
            });
            
            entityEl.setAttribute('event-set__1', {
                _event: 'mousedown',
                scale: '1 1 1'
            });

            entityEl.setAttribute('event-set__2',{
                _event: 'mouseup',
                scale: '1.2 1.2 1'
            });

            entityEl.setAttribute('event-set__3', {
                _event: 'mouseenter', 
                scale: '1.2 1.2 1'
            });
            
            entityEl.setAttribute('event-set__4', {
                _event: 'mouseleave',
                scale: '1 1 1'
            });
            
            parentBoardHolder.appendChild(entityEl);
            entityEl.setAttribute('board-option', {
                board_id: universeBoards[i].id,
                board_name: universeBoards[i].name
            });

            entityEl.addEventListener('click', function(evt){
                universeOptionBtnClick(evt);
            });

        }

        let sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(parentBoardHolder);
    }

    function initializeUniversePage(){
        //this function is created to remind me to refactor my code and avoid long functions
    }

    function universeOptionBtnClick(evt){
        console.log(evt.target.getAttribute('board-option'));    
        let boardOption = evt.target.getAttribute('board-option');

        clearScreen();
        switch(boardOption.board_id){
            case 1://photogallery
            let photos = ['#city', '#wolf', '#sechelt'];
                showPhotoGallery(photos);
            break;
            case 2:
                showPhoto360();
            break;
            case 3:
                showVideo360();
            break;
            case 4:
                showVideoGallery();
            break;
        }
    }

    function showPhotoGallery(imagesArray, shader = ''){
        //create big Board
        let parentBoardHolder = document.createElement('a-entity');
        parentBoardHolder.setAttribute('id', 'links');
        parentBoardHolder.setAttribute('position', "-0.04 1.2 -3");

        let entityEl = document.createElement('a-entity');
        let previousEl = document.createElement('a-entity');
        let nextEl = document.createElement('a-entity');
            
        entityEl.setAttribute('class', 'link');
        entityEl.setAttribute('id', 'mainBoard');
        previousEl.setAttribute('class', 'link');
        nextEl.setAttribute('class', 'link');

        entityEl.setAttribute('geometry', {
            primitive: 'plane',
            height: 2,
            width: 3
        }); 

        previousEl.setAttribute('position',{
            x: -1.8,
            y: -0,
            z: -0
        });

        previousEl.setAttribute('geometry', {
            primitive: 'plane',
            height: 0.5,
            width: 0.5
        });

        nextEl.setAttribute('position', {
            x: 1.8,
            y: -0,
            z: -0
        });
        
        nextEl.setAttribute('geometry', {
            primitive: 'plane',
            height: 0.5,
            width: 0.5
        });

        
        let currentImagePosition = 0;
        //put the picture here and 2 buttons at the side
        entityEl.setAttribute('material',{
            src: imagesArray[0],
            shader: shader
        });

        //set next and previous here ...
        //previousEl.setAttribute('color', '#000000');
        previousEl.setAttribute('material', {
            src: '#prev',
            color: '#ffffff',
            opacity: 1,
            width: 0.7, 
            height: 0.7
        });

        nextEl.setAttribute('material', {
            src: '#next',
            color: '#ffffff',
            opacity: 1,
            width: 0.7,
            height: 0.7
        });

        setMouseEvents(previousEl);
        setMouseEvents(nextEl);

        previousEl.addEventListener('click', function(){
            //change picture here ..
            entityEl.setAttribute('material', {
                src: imagesArray[Math.abs(--currentImagePosition % imagesArray.length)]
            });

            _globalMediaIndex_position = Math.abs(currentImagePosition % imagesArray.length);
            //also set what should happen when experience is clicked on ...
            
            
        });

        nextEl.addEventListener('click', function(){
            entityEl.setAttribute('material', {
                src: imagesArray[Math.abs(++currentImagePosition % imagesArray.length)]
            });

            _globalMediaIndex_position = Math.abs(currentImagePosition % imagesArray.length);
            
        });

        _globalMediaArray = imagesArray;
        

        parentBoardHolder.appendChild(previousEl);
        parentBoardHolder.appendChild(entityEl);
        parentBoardHolder.appendChild(nextEl);

        let sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(parentBoardHolder);

    }

    function setMouseEvents(entityEl){
        
        entityEl.setAttribute('event-set__1', {
            _event: 'mousedown',
            scale: '1.3 1 1',
        });

        entityEl.setAttribute('event-set__2',{
            _event: 'mouseup',
            scale: '1.2 1.2 1'
        });

        entityEl.setAttribute('event-set__3', {
            _event: 'mouseenter', 
            scale: '1.2 1.2 1'
            
        });
        
        entityEl.setAttribute('event-set__4', {
            _event: 'mouseleave',
            scale: '1.3 1 1'
        });

    }

    function showPhoto360(){
        
        
        //clearScreen();
        let photo360s = ['#360board', '#360board1'];
        showPhotoGallery(photo360s);
        //add an experience button
        addExperenceButton(photo360s, 'img');

    }

    function showVideo360(){

        let video360sPreview = ['#preview_solar','#preview_space'];
        let videos360 = ['#solarVRvid', '#spaceVRvid'];
        showPhotoGallery(video360sPreview, 'gif');
        //add an experience button
        addExperenceButton(videos360, 'vid');

    }

    function showVideoGallery(){

        let videos = ["#video-src2", "#video-src2", "#video-src3"];
        showPhotoGallery(videos, '');
        
        let myvideo = document.querySelector(videos[_globalMediaIndex_position]);
        addMediaControls(myvideo);
        myvideo.currentTime = 0;
        myvideo.play();

    }

    function addMediaControls(myvideo){
        //add a controls holder ...
        let videoControlsHolderEl = document.createElement('a-entity');
        videoControlsHolderEl.setAttribute('position', {
            x: 0,
            y: -1.25,
            z: 0
        });
        videoControlsHolderEl.setAttribute('align', 'center');
        let parentBoardHolder = document.querySelector('#links');
        
        let playButton = document.createElement('a-image');
        let volumeButton = document.createElement('a-image');

        volumeButton.setAttribute('id', 'control-play');
        volumeButton.setAttribute('src', '#volume');
        volumeButton.setAttribute('scale', {
            x: 0.3,
            y: 0.3,
            z: 0
        });

        playButton.setAttribute('id', 'control-play');
        playButton.setAttribute('src', "#play");
        playButton.setAttribute('scale', {
            x: 0.3,
            y: 0.3,
            z: 0
        });
        
        videoControlsHolderEl.appendChild(playButton);
        videoControlsHolderEl.appendChild(volumeButton);
        parentBoardHolder.appendChild(videoControlsHolderEl);
        
        //let scene = document.querySelector('a-scene');
        
    }

    function addExperenceButton(mediaArray, mode){
        let entityText = document.createElement('a-text');
        entityText.setAttribute('position', {
            x: 0,
            y: -1.25,
            z: 0
        });

        entityText.setAttribute('align', 'center');

        entityText.setAttribute('geometry',{
            primitive: 'plane',
            width: 1.5,
            height: 0.5
        });
        
        entityText.setAttribute('material',{
            color: '#333'
        });

        entityText.setAttribute('value', 'Experience');
        setMouseEvents(entityText);

        let parentBoardHolder = document.querySelector('#links');

        parentBoardHolder.appendChild(entityText);

        entityText.addEventListener('click', function(){
            enterVR(mediaArray, mode);
        });

    }

    function removeExperienceButton(){

    }

    function enterVR(mediaArray, mode){
        let mainBoard = document.querySelector('#mainBoard');
        //let whatToView = mainBoard.getAttribute('whatToShowVR');
        //clear screen ...
        clearScreen();
        //change sky ...

        //if its a video, its a different story ...
        if (mode == 'img'){
            let world = document.querySelector('#mysky');
            world.setAttribute('material', {
                'src':mediaArray[_globalMediaIndex_position]
            });
        }
        if (mode == 'vid'){
            let world = document.querySelector('#mysky');
            world.setAttribute('material', {
                'src':mediaArray[_globalMediaIndex_position]
            });
            // let myVideoSphere = document.createElement('a-videosphere');
            // myVideoSphere.setAttribute('material',{
            //     'src':mediaArray[_globalMediaIndex_position]
            // }); 

            // myVideoSphere.setAttribute('position', {
            //     x: 0,
            //     y: 0,
            //     z: 0
            // });
            // myVideoSphere.setAttribute('rotation', {
            //     x: 0,
            //     y: 180,
            //     z: 0
            // });

            let myvideo = document.querySelector(mediaArray[_globalMediaIndex_position]);
            myvideo.currentTime = 0;
            myvideo.play();
        }
    }

    // AFRAME.registerComponent('playmy360', {
    //     init:function(){
    //         console.log("what");
    //     },
    //     play: function(){
    //         let video = this.el.components.material.material.map.image;
    //         video.play();

    //     }
    // });




