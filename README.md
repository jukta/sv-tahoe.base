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
- **placeholder** - placeholder ( __optional__ )

### password

    <be:password iName="passwordName" class="customClass" placeholder="placeholder"/>
    
- **iName** - input name ( __required__ )
- **class** - custom css class ( __optional__ )
- **placeholder** - placeholder ( __optional__ )

### textarea

    <be:textarea class="customClass" placeholder="placeholder">
        some text here
    <be:textarea/>
    
- **class** - custom css class ( __optional__ )
- **placeholder** - placeholder ( __optional__ )

### checkbox

    <be:checkbox id="checkboxId" class="customClass" checked="true">
        label text here
    <be:checkbox/>

- **id** - element id ( __required__ )
- **class** - custom css class ( __optional__ )
- **checked** - checked ( __optional__ ) default: __false__

### select / option

    <be:select class="customClass">
        <be:option value="val1">Value 1</be:option>
        <be:option value="val2" selected="true">Value 2</be:option>
        <be:option value="val3">Value 3</be:option>
    <be:checkbox/>

- **class** - custom css class ( __optional__ )
- **value** - option value ( __optional__ )
- **selected** - selected ( __optional__ ) default: __false__

### radio

    <be:radio id="radioId1" group="group1" value="val1" class="customClass">label for val1</be:option>
    <be:radio id="radioId2" group="group1" value="val2" checked="true">label for val1</be:option>
    <be:radio id="radioId3" group="group1" value="val3">label for val1</be:option>

- **id** - element id ( __required__ )
- **group** - radio group name ( __required__ )
- **value** - radio value ( __required__ )
- **class** - custom css class ( __optional__ )
- **checked** - checked ( __optional__ ) default: __false__

### fieldset

    <be:fieldset class="customClass" legend="some legend text">
        set of fields
    <be:fieldset/>

- **class** - custom css class ( __optional__ )
- **legend** - legend text ( __optional__ )

### doctype

    <be:doctype/>
    
Translate to html5 doctype

### html

    <be:html class="htmlClass" bodyClass="bodyClass" manifest="manifestLink">
        <sv:def name="head">
            html head elements
        </sv:def>
        <sv:def name="body">
            html body elements
        </sv:def>
    <be:html/>

- **class** - custom css class for html tag ( __optional__ )
- **bodyClass** - custom css class for body tag ( __optional__ )
- **manifest** - html manifest link ( __optional__ )
