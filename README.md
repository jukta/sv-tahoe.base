# sv-tahoe.base

Base block package for sv-tahoe engine. Includes basic elements and layouts. 

Installation
------------

    npm install sv-tahoe.base

Update tahoe.json file placed in root of your project
 
     {
         "tahoe": {
            ...
             "dependencies": ["sv-tahoe.base", ... ],
            ...
         }
     }
    
Dependencies
------------

    <script src="/javascripts/jquery.min.js"></script>
    <script src="/javascripts/sv.js"></script>
    
Blocks
------------

## base/elements

    <sv:import file="base/elements" prefix="be"/>

### button

    <be:button id="myId" class="buttonClass">
        Button text
    </be:button>
    
- **id** - event id to be fired on button click to controller ( __required__ )
- **class** - custom css class ( __optional__ )

### input

    <be:input iName="inputName" class="inputClass" placeholder="placeholder"/>
    
- **iName** - input name ( __required__ )
- **class** - custom css class ( __optional__ )
- **placeholder** - placeholder holder ( __optional__ )

### password

    <be:password iName="inputName" class="inputClass" placeholder="placeholder"/>
    
- **iName** - input name ( __required__ )
- **class** - custom css class ( __optional__ )
- **placeholder** - placeholder holder ( __optional__ )

### textarea

    <be:textarea class="inputClass" placeholder="placeholder">
        some text here
    <be:textarea/>
    
- **class** - custom css class ( __optional__ )
- **placeholder** - placeholder holder ( __optional__ )