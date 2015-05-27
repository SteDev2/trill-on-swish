<<<<<<< HEAD
JS=editorxml.js editorprolog.js navbar.js answer.js pane.js query.js runner.js trill_on_swish.js \
=======
JS=editor.js navbar.js answer.js pane.js query.js runner.js trill_on_swish.js \
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b
   config.js jswish.js
CM=$(shell find codemirror -name '*.js')
JQ=jquery.jsdoc
CONF=conf.json
MAIN=trill_on_swish.js

all:	min tos_require.js

doc::	$(CONF) $(JQ) $(JS)
	jsdoc -p -c $(CONF) $(JQ) $(JS)

min:	trill_on_swish-min.js

trill_on_swish-min.js:	build.js $(JS) $(CM)
	r.js -o build.js
	gzip -fk $@

build.js: $(MAIN) build.js.in
	swipl mkjsbuild.pl $(MAIN) build.js.in

require.js: ../bower_components/requirejs/require.js
	cp -p $< $@

clean:
	rm -f tos_require.js trill_on_swish-min.js trill_on_swish-min.js.gz
