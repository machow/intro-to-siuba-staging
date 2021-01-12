(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1026:function(t,e,o){"use strict";o.r(e);var n=o(9),r=o(835),a=o(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},p=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===i(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:o[t]=function(){return s[t]}}))},u=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",c={excerpt:null,title:"Wrap up",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"wrangle"};var m=function(t){t.options[l]&&(t.options[l]=c),a.a.util.defineReactive(t.options,l,c),t.options.computed=u.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/intro-to-siuba",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",[o("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\nfrom music_top200 import music_top200, track_features\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),o("h3",{attrs:{id:"putting-it-together"}},[o("a",{attrs:{href:"#putting-it-together","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Putting it together")]),o("p",[t._v("This lesson shows what the beginning of an analysis might look like.\nGenerally, data analysis is done in "),o("strong",[t._v("notebooks")]),t._v(", like this one. In a notebook, you can alternate between blocks of code and narrative text.")]),o("p",[t._v("The first part of an analysis is often "),o("strong",[t._v("importing")]),t._v(" tools you will need for the analysis.\nFor example, verbs like "),o("code",{pre:!0},[t._v("filter")]),t._v(" and "),o("code",{pre:!0},[t._v("mutate")]),t._v(" are imported from siuba.")]),o("p",[t._v("The imports for this analysis are shown below.")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-python"}},[t._v("# here we import verbs like filter, arrange, and mutate from siuba.\n# the import * means to import all of siuba's verbs.\nfrom siuba import *\n\n# here we import everything for plotting from plotnine (like ggplot())\nfrom plotnine import *\n\n# here we import the data for the course\n# note that rather than using * to get everything, you can name\n# specific things to import (like track_features)\nfrom music_top200 import music_top200, track_features\n")])]),o("h3",{attrs:{id:"exercise-1"}},[o("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),o("p",[t._v("For the artist with the top track in Spain, what country has the most streams for one of their tracks?")]),o("p",[o("strong",[t._v("Note: you may need to write and run code multiple times.")])]),o("details",[o("summary",[t._v("hint")]),o("blockquote",[o("p",[t._v("First, find the artist in the top position in Spain. After, can you get only that artists tracks? Once you do that you should be close!")])])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("pre",[o("code",{pre:!0},[t._v("()\n")])])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v("# getting most streamed track for top artist in Spain\n(\n\n\n)\n")])])]),o("h3",{attrs:{id:"exercise-2"}},[o("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),o("p",[t._v("Subset to keep only tracks in Hong Kong, then calculate a new column called stream_seconds, that's equal to streams times their duration.")]),o("p",[t._v("Once you've done that, try deleting the comments ("),o("code",{pre:!0},[t._v("#")]),t._v(") in the code below to plot the data.")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[t._v("⚠️: "),o("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v('(music_top200\n  >> ___\n  >> ___\n  #>> ggplot(aes("stream_seconds", "position", color = "duration"))\n  # + geom_point()\n)\n')])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof m&&m(d);e.default=d.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);