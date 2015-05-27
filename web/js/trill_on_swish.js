/**
 * @fileOverview
 * Load SWISH. Just provides the RequireJS config, requires jswish.js
 * and initialises this on the body.
 *
 * @version 0.2.0
 * @author Jan Wielemaker, J.Wielemaker@vu.nl
 * @requires jquery
 */

require.config({
  urlArgs: "ts="+new Date().getTime(),	/* prevent caching during development */
  waitSeconds: 60,			/* swish-min.js is big */
  paths:
  { jquery:      "../bower_components/jquery/dist/jquery.min",
    "jquery-ui": "../bower_components/jquery-ui/jquery-ui.min",
    laconic:     "../bower_components/laconic/laconic",
    bootstrap:   "../bower_components/bootstrap/dist/js/bootstrap.min",
    typeahead:   "../bower_components/typeahead.js/dist/typeahead.bundle.min",
    splitter:    "../bower_components/jquery.splitter/js/jquery.splitter-0.14.0",
    tagmanager:  "../bower_components/tagmanager/tagmanager",

<<<<<<< HEAD
=======
    //aggiunto
    //codemirror: "../bower_components/codemirror/lib/codemirror",
    //xml:        "../bower_components/codemirror/mode/xml/xml",

>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
    "tos_cm/lib/codemirror": "../bower_components/codemirror/lib/codemirror",
					/* CodeMirror standard extensions */
    "tos_cm/addon/edit/matchbrackets": "../bower_components/codemirror/addon/edit/matchbrackets",
    "tos_cm/addon/comment/continuecomment": "../bower_components/codemirror/addon/comment/continuecomment",
    "tos_cm/addon/comment/comment": "../bower_components/codemirror/addon/comment/comment",
    "tos_cm/addon/hint/show-hint": "../bower_components/codemirror/addon/hint/show-hint",
    "tos_cm/addon/hint/anyword-hint": "../bower_components/codemirror/addon/hint/anyword-hint",
    "tos_cm/addon/display/placeholder": "../bower_components/codemirror/addon/display/placeholder",
    "tos_cm/addon/runmode/runmode": "../bower_components/codemirror/addon/runmode/runmode",
<<<<<<< HEAD
					/* Our own xml mode */
    "tos_cm/mode/xml/xml": "../bower_components/codemirror/mode/xml/xml",
    "tos_cm/mode/erlang/erlang": "../bower_components/codemirror/mode/erlang/erlang",
    
    /*"tos_cm/mode/xml/xml": "codemirror/mode/xml/xml",
    "tos_cm/mode/xml/xml_keys": "codemirror/mode/xml/xml_keys",
    "tos_cm/mode/xml/xml_query": "codemirror/mode/xml/xml_query",
    "tos_cm/mode/xml/xml_server": "codemirror/mode/xml/xml_server",
    "tos_cm/addon/hover/text-hover": "codemirror/addon/hover/text-hover",
    "tos_cm/addon/hover/xml-hover": "codemirror/addon/hover/xml-hover",
    "tos_cm/addon/hint/templates-hint": "codemirror/addon/hint/templates-hint",
    "tos_cm/addon/hint/show-context-info": "codemirror/addon/hint/show-context-info",
    "tos_cm/mode/xml/xml-template-hint": "codemirror/mode/xml/xml-template-hint",*/
    
    
    				/* Our own prolog mode */
=======
					/* Our own Prolog mode */
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
    "tos_cm/mode/prolog/prolog": "codemirror/mode/prolog/prolog",
    "tos_cm/mode/prolog/prolog_keys": "codemirror/mode/prolog/prolog_keys",
    "tos_cm/mode/prolog/prolog_query": "codemirror/mode/prolog/prolog_query",
    "tos_cm/mode/prolog/prolog_server": "codemirror/mode/prolog/prolog_server",
<<<<<<< HEAD
      
    "tos_cm/addon/hint/templates-hint": "codemirror/addon/hint/templates-hint",
    "tos_cm/addon/hover/text-hover": "codemirror/addon/hover/text-hover",
    "tos_cm/addon/hover/prolog-hover": "codemirror/addon/hover/prolog-hover",
    "tos_cm/addon/hint/show-context-info": "codemirror/addon/hint/show-context-info",
    "tos_cm/mode/prolog/prolog-template-hint": "codemirror/mode/prolog/prolog-template-hint"
    
=======

    "tos_cm/addon/hover/text-hover": "codemirror/addon/hover/text-hover",
    "tos_cm/addon/hover/prolog-hover": "codemirror/addon/hover/prolog-hover",

    "tos_cm/addon/hint/templates-hint": "codemirror/addon/hint/templates-hint",
    "tos_cm/addon/hint/show-context-info": "codemirror/addon/hint/show-context-info",
    "tos_cm/mode/prolog/prolog-template-hint": "codemirror/mode/prolog/prolog-template-hint"
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
  },
  shim:
  { bootstrap:
    { deps:["jquery"]
    },
    typeahead:
    { deps:["jquery"]
    },
    splitter:
    { deps:["jquery"]
    },
    laconic:
    { deps:["jquery"]
    },
    tagmanager:
    { deps:["jquery"]
    }
<<<<<<< HEAD
=======

    ,
    // inserito 2-5-2015
    codemirror:
    { export: "codemirror" },
    /*xml:
    { deps: ["codemirror"] , export "xml"}*/
   
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
  }
}); //require.config

require(["jquery", "config", "jswish"],
	function($, config, trill_on_swish) {

<<<<<<< HEAD
$(function() {
  $("body").trill_on_swish(config.trill_on_swish||{});
}); //$();

}); // require

=======
	$(function() {
	  $("body").trill_on_swish(config.trill_on_swish||{});
	}); //$();

}); // require

require(["tos_cm/lib/codemirror", "tos_cm/mode/prolog/prolog"], 
	function(CodeMirror) {
	  CodeMirror.fromTextArea(document.getElementById("code"), {
	    lineNumbers: true,
	    mode: "prolog"
	  });
	});
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
