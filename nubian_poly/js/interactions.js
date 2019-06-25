let objectsOnBoardArray = [];

AFRAME.registerComponent('workspaceready', {
    schema: {},
    init: function (){
        console.log("work space is ready for magic"); //you can do some cool things here .. 
        //createElectricalComponents();
    }
});

AFRAME.registerComponent('workspace', {
    schema: {

    },
    init: function() {

        //this is my workspace ...
        console.log("workspace is ready ");
        
    }
});


AFRAME.registerComponent('electrical_component', {
    schema: {
        component_name: {type: 'string'},
        scalar_value: {type: 'number'},
        objectFound: {type: 'boolean', default: false},
        currentObject: {},
        objectActive: {type: 'boolean', default: false}
    },
    multiple: true,
    init: function () {

        console.log(this.data);
        
        //build an event listener for the texpanel ...
        let textpanel = document.querySelector('#text-panel');
        textpanel.addEventListener('mouseenter', function(e) {

        });
        textpanel.addEventListener('mouseleave', function(e) {
            
        });
        
        textpanel.object3D.position.z += 2;

        this.el.appendChild(textpanel);

        this.el.addEventListener('mouseenter', function(e){
            
            textpanel.setAttribute('visible', true);
        });

        this.el.addEventListener('mouseleave', function(e){

            textpanel.setAttribute('visible', false);
        });
        
        var myCursor = document.querySelector('a-cursor');

        this.el.addEventListener('click', function (e){

            console.log(this.objectActive);
            //if you are child of workspace then don't move ...
            if (!this.objectActive){
                //show send to board
                this.objectActive = true;
                
            }
        });


    },
    update: function(){

    },
    
    tick: function (time, timeDelta) {
        //console.log("whaaa");
        //copyEntity.object3D.position = 
        //the copied item's position is supposed to be updating every frame ...

        //get cursor position for each frame ...
        if (this.objectFound){
            //console.log(this.myCursor.parentNode.object3D.rotation);
        }
        

    }
});

function inActiveItemClicked(){

}

function activeItemClicked(){

}

function onActiveObjectHovered(){

}

function onInactiveObjectHovered(){

}

function createElectricalComponents(){

    //drop the batteries and stuff ... 
    //create functions to create the different components with a common base ..

    //battery ...  
    let myBattery = createBattery();
    showComponentOnWorkspace(myBattery);
    //createBattery();
    //let myScene = document.querySelector('a-scene');
    //myScene.appendChild(myBattery);
    
}

function createBattery() {
    let battery_transform = {
        battery_position: {
            x: -0.05,
            y: -0.16,
            z: 0.5
        },
        rotation_obj : {
            x: 0,
            y: 0,
            z: 0
        }
    };

    let gltfModel = "res/power/Battery.gltf";

    let _batteryTerminals = {
        positive: {
            position: {
                x: -0.515,
                y:  2.561,
                z: -0.921 
            }
        },
        negative: {
            position: {
                x: -0.309,
                y: 0.927,
                z: -0.773
            }
        }
    }

   let mycomponent = electricalComponent('battery', 
                        battery_transform.battery_position,
                        battery_transform.rotation_obj,
                        gltfModel,
                        _batteryTerminals
                       );


    return mycomponent;
}

function electricalComponent(electrical_component, position_obj, rotation_obj, model, terminals){
    let mycomponent = document.createElement('a-entity');

    mycomponent.setAttribute('electrical_component',{
        component_name: electrical_component
    });
    
    mycomponent.setAttribute('position', position_obj);
    let childComponent = document.createElement('a-entity');
    
    childComponent.setAttribute('gltf-model', model);
    
    childComponent.setAttribute('rotation', rotation_obj);
    childComponent.setAttribute('scale', {
        x: 3,
        y: 5,
        z: 5
    });

    let terminal_positive = document.createElement('a-entity');
    let terminal_negative = document.createElement('a-entity');

    terminal_positive.setAttribute('terminal', {
        value: 'positive'
    });
    //terminal_positive.setAttribute('position', terminals.positive.position);

    terminal_negative.setAttribute('terminal', {
        value: 'negative'
    });
    //terminal_negative.setAttribute('terminal', terminals.negative.position);

    mycomponent.appendChild(childComponent);
    mycomponent.appendChild(terminal_positive);
    mycomponent.appendChild(terminal_negative);

    //let workspace = document.querySelector('#blueprint-workspace');
    //console.log(workspace);
    //workspace.appendChild(mycomponent);

    return mycomponent;
}

function showComponentOnWorkspace(mycomponent){
    //get scene ...
    //get workspace ...
    let workspace = document.querySelector('#blueprint-workspace');
    workspace.appendChild(mycomponent);

    console.log("done yeat.?");

}



function createSwitch() {

}

/*
            <a-entity electrical_component="component_name: battery" position="-13.254 -1.084 -7">
                
                <a-entity gltf-model="#battery" rotation="0 0 0">
                    <!-- <a-entity line="start: 0, 0, 0; end: 2 0 -5; color: red" line__2="start: 0 0 0; end: 0 4 -3; color: green"></a-entity> -->
                </a-entity>
                <a-entity terminal="value: 'positive'" position="-0.515 2.561 -0.921">
                </a-entity>
                <a-entity terminal="value: 'negative'" position="-0.309 0.927  -0.773">
                </a-entity>

                <!-- <a-curve id="track1">
                    <a-curve-point position="-0.515 2.561 -0.921"></a-curve-point>
                    <a-curve-point position="1 1 -3"></a-curve-point>
                    <a-curve-point position="1 0.5 -3"></a-curve-point>
                    <a-curve-point position="-0.309 0.927  -0.773"></a-curve-point>
                </a-curve>

                <a-draw-curve curveref="#track1" material="shader: line; color: red;"></a-draw-curve> -->


            </a-entity>


            <a-entity electrical_component="component_name: switch" position="-11.649 -1.024 -8.934" visible="false">
                <a-entity switch gltf-model="#switch" rotation="-89.541 -180 -179.501" scale="10.534 10.534 10.534" ></a-entity>

                <a-entity terminal="value: 'positive'">
                </a-entity>
                <a-entity terminal="value: 'negative'">
                </a-entity>

            </a-entity>


*/






AFRAME.registerComponent('battery', {
    schema: {
        event: {type: 'string', default: ''},
        message: {type: 'string', default: 'Hello, World!'}
    },
  
    init: function () {
        console.log("Battery is available here");

        this.el.setAttribute("event-set__mouseenter",{
            scale: {
                x: this.el.object3D.scale.x + 0.1,
                y: this.el.object3D.scale.y + 0.1,
                z: this.el.object3D.scale.z + 0.1
            }
         }
        );
        
        this.el.setAttribute("event-set__mouseleave",{
            scale: {
                x: this.el.object3D.scale.x - 0.1,
                y: this.el.object3D.scale.y - 0.1,
                z: this.el.object3D.scale.z - 0.1
            }
         }
        )
    },
  
    update: function () {
        console.log("something has been updated!!");
      
      
        // Do something when component's data is updated.
        var data = this.data;  // Component property values.
        var el = this.el;  // Reference to the component's entity.
        console.log(data.event);
        if (data.event) {
            // This will log the `message` when the entity emits the `event`.
            el.addEventListener(data.event, function () {
                console.log(data.message);
        });
        } else {
            // `event` not specified, just log the message.
            console.log(data.message);
        }
    },
  
    remove: function () {
      // Do something the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });


  AFRAME.registerComponent('terminal', {
    schema: {
        value: {type: 'string'}
    },
    init: function() {
        //determine what terminals are these ...
        //start a wire from one bb

        console.log("terminal "+this.data.value);
        console.log(this.el.parentNode.getAttribute('electrical_component'));

        this.el.addEventListener('mouseenter', function(evt){

            console.log("entered into terminal which one?");
            console.log("fe");

        }); 

        this.el.addEventListener('click', function(evt) {

            //check which terminal  was clicked on ...
            console.log(e.detail.intersection.object.el);

        });




    }
  });