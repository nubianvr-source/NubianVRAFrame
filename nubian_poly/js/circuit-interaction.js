AFRAME.registerComponent('workspaceready', {
    schema: {},
    init: function (){
        console.log("Blue Print Workspace is Loaded! Begin"); //you can do some cool things here .. 
        



    }
});


AFRAME.registerComponent('electrical_component', {
    schema: {
        component_name: {type: 'string'},        
        objectActive: {type: 'boolean', default: false},
        positive_connected: {type: 'boolean', default: false},
        negative_connected: {type: 'boolean', default: false}
    },
    multiple: true,
    init: function () {

        console.log(this.data);
        this.setEventListeners();
       
    },
    update: function() {

    },
    tick: function(time, timeDelta){

        // this.el.childNodes
        if (!this.data.objectActive) {
            this.el.childNodes[1].object3D.rotation.x += (0.001 * timeDelta);
            this.el.childNodes[1].object3D.rotation.y += (0.001 * timeDelta);

            if (this.el.childNodes[1].object3D.rotation.x > 360){
                this.el.childNodes[1].object3D.rotation.x = 0;
            }

            if (this.el.childNodes[1].object3D.rotation.y > 360){
                this.el.childNodes[1].object3D.rotation.y = 0;
            }
        }


    },
    setEventListeners: function() {
        let textpanel = document.querySelector("#text-panel");
        let removeComponent = document.querySelector("#remove-component");
        let positive = document.querySelector("#positive");
        let negative = document.querySelector("#negative");

        textpanel.object3D.position.z += 2;
        textpanel.object3D.position.z -= 2;
        textpanel.object3D.position.x -= 1;
        
        positive.object3D.position.y += 1;
        negative.object3D.position.y += 0.5;
        negative.object3D.position.z += 0.8;
        let instance = this;

        let myText = document.createElement("a-text");
        myText.setAttribute("id", "tooltip");
        myText.setAttribute('value', "click to connect wire");
        myText.setAttribute('width', 7);
        myText.setAttribute('height', 7);
        myText.setAttribute('align', 'center');
        myText.object3D.position.y += 0.5;


        //======================================================


        this.el.addEventListener('mouseenter', function (e) {
            textpanel.setAttribute('visible', true);

            if (instance.data.objectActive){
                positive.setAttribute('visible', true);
                negative.setAttribute('visible', true);
            }

        });

        this.el.addEventListener('mouseleave', function (e) {
            textpanel.setAttribute('visible', false);
            
            if (!instance.data.positive_connected){
                positive.setAttribute('visible', false);
            }
            
            if (!instance.data.negative_connected){
                negative.setAttribute('visible', false);
            }
            

        });

        this.el.addEventListener('click', function (e) {            
            
            if (!instance.data.objectActive){
                //show send to board
                instance.sendObjectToBoard();
                instance.data.objectActive = true;
                
            }

            if (instance.data.objectActive){

                /*show options :
                    Flip terminals
                    add wire
                    remove
                */

                textpanel.setAttribute('geometry', {
                    width: 0.7,
                    height: 0.7
                });
                textpanel.setAttribute('value', 'X');
                
                
                textpanel.addEventListener('mouseenter', function(e){
                    textpanel.appendChild(myText);
                    myText.setAttribute('value', 'Remove Component');

                });

                textpanel.addEventListener('mouseleave', function(e){

                    //textpanel.removeChild(myText);

                });

            }

        });


        positive.addEventListener('mouseenter', function(e){
            if (instance.data.objectActive){

                myText.setAttribute('value', 'Click to connect to Wire');
                positive.appendChild(myText);

            }

        });

        positive.addEventListener('mouseleave', function(e){
            if (instance.data.objectActive){

                positive.removeChild(myText);

            }

        });

        negative.addEventListener('mouseenter', function(e){
            if (instance.data.objectActive){ 
                myText.setAttribute('value', 'Click to connect to wire');
                negative.appendChild(myText);
            }

        });

        negative.addEventListener('mouseleave', function(e){
            if (instance.data.objectActive){ 

                if (!instance.data.negative_connected)
                    negative.removeChild(myText);

            }
        });

        positive.addEventListener('click', function(e){

            console.log("positive clicked here");
            //extrude wire from here ...
            let wire = document.createElement('a-curve');
            wire.setAttribute('id', 'wire1');

            let clickedPosition = e.detail.intersection.object.position;
            
            let wire_point = document.createElement('a-curve-point');
            let wire_point2 = document.createElement('a-curve-point');

            wire_point.setAttribute('position', {
                x: clickedPosition.x - 2,
                y: clickedPosition.y,
                z: clickedPosition.z -1
            });

            wire_point2.object3D.position.x = wire_point.object3D.position.x + 1;
            wire_point2.object3D.position.z = wire_point.object3D.position.z + 0.5;

            let drawWire = document.createElement('a-draw-curve');
            drawWire.setAttribute('curveref', "#wire1");
            drawWire.setAttribute('material', {
                color: 'red',
                shader: 'line'
            });

            //get positive location an use for 

            positive.appendChild(wire);
            positive.appendChild(drawWire);

            wire.appendChild(wire_point);
            wire.appendChild(wire_point2);

            instance.data.positive_connected = true;

        });

        negative.addEventListener('click', function(e){
            console.log("negative clicked here");
            
            if (instance.data.positive_connected){

                //then join in to comlete circuit
                //get current wire ..
                let currentWire = document.querySelector("#wire1");
                let final




            }

            let wire = document.createElement('a-curve');
            wire.setAttribute('id', 'wire1');
            let clickedPosition = e.detail.intersection.point;
            
            let wire_point = document.createElement('a-curve-point');
            let wire_point2 = document.createElement('a-curve-point');

            wire_point.setAttribute('position', {
                x: clickedPosition.x + 1,
                y: clickedPosition.y,
                z: clickedPosition.z + 1
            });

            wire_point2.object3D.position.x = wire_point.object3D.position.x + 1;
            wire_point2.object3D.position.z = wire_point.object3D.position.z + 0.5;

            wire.appendChild(wire_point);
            wire.appendChild(wire_point2);

            let drawWire = document.createElement('a-draw-curve');
            drawWire.setAttribute('curveref', "#wire1");
            drawWire.setAttribute('material', {
                color: 'red',
                shader: 'line'
            });

            negative.appendChild(wire);;
            negative .appendChild(drawWire);

            instance.data.negative_connected = true;
        });

    },
    sendObjectToBoard: function(){
        
        /*
        1.764
        0.000
        6.137
        */
       this.el.setAttribute('position', {
            x: -10.091,
            y: 0,
            z: -14.138
       });

       this.el.childNodes[1].setAttribute('rotation', {
            x: 90,
            y: 180,
            z: 0
       });

    }
});

AFRAME.registerComponent('terminal', {
    schema: {
        component_terminal: {type: 'string'}
    },
    
    init: function(){

    }
});