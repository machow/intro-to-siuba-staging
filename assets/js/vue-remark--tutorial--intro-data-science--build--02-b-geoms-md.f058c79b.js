(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1011:function(e,t,o){"use strict";o.r(t);var n=o(9),s=o(836),a=o.n(s),i=o(986),r=o.n(i),l=o(987),c=o.n(l),d=o(988),p=o.n(d),u=o(989),g=o.n(u),b=o(990),h=o.n(b),m='<section class=""><section class=""> <h1 id=using-plotnine-geoms>Using plotnine Geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n  + geom_point()\n)</code></pre> <p><img src='+a()(r.a)+' alt=png></p> <pre><code>&lt;ggplot: (8792810949841)&gt;</code></pre><aside class=notes> <p>In the previous lesson, you created this scatter plot comparing the energy of each song to its valence.</p> <p>This plot communicates some interesting information: we can see that higher income countries tend to have higher life expectancy.</p> <p>One problem with this plot, however, is that it&#39;s impossible to tell which song is which. Adding labels to the point will let us identify songs in the plot.</p> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_label>Using geom_label</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_label()\n)</code></pre> <p><img src='+a()(c.a)+' alt=png></p> <pre><code>&lt;ggplot: (8792749814645)&gt;</code></pre><aside class=notes> <p>The first option for plotting text is using <code>geom_label()</code>. This plots the text with a filled in box around it.</p> <p>Unlike scanning a DataFrame of results, it&#39;s easy to see pick out songs across a range of valence and energy.</p> <p>For example, relative to other songs:</p> <ul> <li>&quot;i love you&quot; is low valence and low energy </li> <li>&quot;bad guy&quot; is high valence and high energy</li> <li>&quot;bellyache&quot; is extremely high energe and a moderate amount of valence</li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_text>Using geom_text</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text()\n)</code></pre> <p><img src='+a()(p.a)+' alt=png></p> <pre><code>&lt;ggplot: (8792810954689)&gt;</code></pre><aside class=notes> <p>A second option for plotting text is with <code>geom_text()</code>. This plots text by itself, without a background box.</p> <p>Notice the words in front don&#39;t cover other words as much, but it can also be harder to read them.</p> </aside></section></section><section class=""><section class=""> <h1 id=combining-geoms>Combining geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text(nudge_y = .1)\n  + geom_point()\n)</code></pre> <p><img src='+a()(g.a)+' alt=png></p> <pre><code>&lt;ggplot: (8792749628569)&gt;</code></pre><aside class=notes> <p>When you plot multiple geoms--like in this plot--ggplot goes line-by-line, from top to bottom.</p> <p>For example, in the code here, it first puts down the words from <code>geom_text()</code>, then the points from <code>geom_point()</code>.</p> <p>Notice also that <code>geom_text()</code> has an option passed to it, <code>nudge_y = ,1</code>.</p> </aside></section></section><section class=""><section class=""> <h1 id=more-on-geom-options>More on geom options</h1> <p><img src='+a()(h.a)+' alt=""></p> <aside class=notes> <p>In general, there are many arguments you can pass to geoms, and different geoms can take different arguments.</p> <p>The easiest way to understand what arguments geoms can take, and what they do, is to look at the plotnine documentation website.</p> <p>Here are two useful parts of the docs:</p> <ul> <li><a href=https://plotnine.readthedocs.io/en/stable/api.html>list of available geoms</a></li> <li><a href=https://plotnine.readthedocs.io/en/stable/generated/plotnine.geoms.geom_text.html#plotnine.geoms.geom_text>help document on geom_text</a></li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>In the exercises, you&#39;ll practice creating other scatter plots to compare variables across countries, and in the rest of this chapter you&#39;ll learn more ways to communicate information in a graph.</p> </aside></section></section>',f=o(857),v=o(835),y=o(7);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}y.a.config.optionMergeStrategies;var A={slides:m,CodeCellTemplater:f.a,VueRemarkRoot:v.a},w=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(A).forEach((function(e){"object"===x(A[e])&&"function"==typeof A[e].render?t[e]=A[e]:o[e]=function(){return A[e]}}))},_=y.a.config.optionMergeStrategies,E="__vueRemarkFrontMatter",C={excerpt:null,title:"Geoms",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize",exercise_pars:[{size:{label:"Size",options:[11,5,7,14]},ha:{label:"Horizontal align",options:["center","left","right"]},nudge:{label:"Nudge",options:["nudge_y = 0","nudge_y = .05","nudge_y = -.05","nudge_x = .05"]}}]};var B=function(e){e.options[E]&&(e.options[E]=C),y.a.util.defineReactive(e.options,E,C),e.options.computed=_.computed({$frontmatter:function(){return e.options[E]}},e.options.computed)},k=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:t.debut,expression:"nb.debut"}]},[n("code-cell",{attrs:{status:t.status,onExecute:t.execute,onReady:t.updateSetupCode,language:"python"}},[n("pre",[n("code",{pre:!0},[e._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),n("RevealSlides",{attrs:{slides:e.slides}}),n("h3",{attrs:{id:"exercise-1"}},[n("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 1:")]),n("p",[e._v("The options below let you change different arguments to "),n("code",{pre:!0},[e._v("geom_text()")]),e._v(". Try changing them and running the code, in order to get a readable plot. Then, answer the questions underneath the plot.")]),n("CodeCellTemplater",{attrs:{templateVars:e.$frontmatter.exercise_pars[0],status:t.status,onExecute:t.execute,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(984)}})],1)]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "Queen")\n  >> ggplot(aes("energy", "valence", label = "track_name"))\n   + geom_point()\n   + geom_text(size = ${this.size}, ha = "${this.ha}", ${this.nudge})\n)    \n')])])]),n("p",[e._v("Below are three songs at different corners of the graph. Can you tell whether they have high or low energy? Valence? Which do you think has low energy and low valence?")]),n("div",{staticStyle:{display:"flex",width:"100%","flex-grow":"1"}},[n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Hammer to Fall")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/JU5LMG3WFBw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Crazy Little Thing Called Love")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/zO6D_BAuYCI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Love of My Life")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/7hFeER3_ZRQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),n("h3",{attrs:{id:"exercise-2"}},[n("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 2:")]),n("p",[e._v("This exercise is a case study on selecting extreme differences between two features, such as energy and acousticness.")]),n("p",[e._v("At the end of the case study, you'll be prompted to add code!")]),n("p",[e._v("Generally tracks with higher energy tend to be less acoustic, as shown in the plot below.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(985),alt:"png"}})],1),n("pre",[n("code",{pre:!0},[e._v("<ggplot: (-9223372036581161272)>\n")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.popularity > 33)\n  >> ggplot(aes("energy", "acousticness"))\n   + geom_point()\n)\n')])])]),n("p",[e._v("But notice that in the plot above, there's a point in the top right, that is high energy and high acousticness.")]),n("p",[e._v("In order to find high energy and acousticness songs like this, I used the following code.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("table",{staticClass:"dataframe",attrs:{border:"1"}},[n("thead",[n("tr",{staticStyle:{"text-align":"right"}},[n("th"),n("th",[e._v("artist")]),n("th",[e._v("album")]),n("th",[e._v("track_name")]),n("th",[e._v("energy")]),n("th",[e._v("valence")]),n("th",[e._v("danceability")]),n("th",[e._v("speechiness")]),n("th",[e._v("acousticness")]),n("th",[e._v("popularity")]),n("th",[e._v("duration")])])]),n("tbody",[n("tr",[n("th",[e._v("23990")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("0.971")]),n("td",[e._v("0.521")]),n("td",[e._v("0.872")]),n("td",[e._v("0.2810")]),n("td",[e._v("0.917000")]),n("td",[e._v("61")]),n("td",[e._v("161.600")])]),n("tr",[n("th",[e._v("5211")]),n("td",[e._v("ScHoolboy Q")]),n("td",[e._v("CrasH Talk")]),n("td",[e._v("Black Folk")]),n("td",[e._v("0.902")]),n("td",[e._v("0.400")]),n("td",[e._v("0.734")]),n("td",[e._v("0.3960")]),n("td",[e._v("0.831000")]),n("td",[e._v("51")]),n("td",[e._v("147.040")])]),n("tr",[n("th",[e._v("24929")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("0.957")]),n("td",[e._v("0.642")]),n("td",[e._v("0.832")]),n("td",[e._v("0.1050")]),n("td",[e._v("0.824000")]),n("td",[e._v("52")]),n("td",[e._v("123.220")])]),n("tr",[n("th",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")])]),n("tr",[n("th",[e._v("18951")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("There Is Nothing Left To Lose")]),n("td",[e._v("Learn to Fly")]),n("td",[e._v("0.919")]),n("td",[e._v("0.537")]),n("td",[e._v("0.465")]),n("td",[e._v("0.0408")]),n("td",[e._v("0.000018")]),n("td",[e._v("74")]),n("td",[e._v("235.293")])]),n("tr",[n("th",[e._v("20425")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("One By One (Expanded Edition)")]),n("td",[e._v("Times Like These")]),n("td",[e._v("0.908")]),n("td",[e._v("0.265")]),n("td",[e._v("0.377")]),n("td",[e._v("0.0899")]),n("td",[e._v("0.000014")]),n("td",[e._v("68")]),n("td",[e._v("265.560")])]),n("tr",[n("th",[e._v("21871")]),n("td",[e._v("Turmion Kätilöt")]),n("td",[e._v("Global Warning")]),n("td",[e._v("Jumalauta")]),n("td",[e._v("0.939")]),n("td",[e._v("0.549")]),n("td",[e._v("0.454")]),n("td",[e._v("0.0618")]),n("td",[e._v("0.000010")]),n("td",[e._v("42")]),n("td",[e._v("210.107")])])])]),n("p",[e._v("812 rows × 10 columns")])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v("(track_features\n  >> filter(_.energy > .9, _.popularity > 33)\n  >> arrange(-_.acousticness)\n)\n")])])]),n("p",[e._v("Can you plot songs by MC Kevin o Chris, with both points and text?")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[e._v("⚠️: "),n("b",[e._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "MC Kevin o Chris")\n  >> ___\n)\n')])])]),n("p",[e._v("Why do you think Vamos pra Gaiola is high energy and high acousticness?")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/0R6zBcV9JiY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("details",[n("summary",[e._v("answer")]),e._v("\nMy best guess is because the drums are done by a persons voice, there are few instruments, but it is still a pretty fast tempo. It would be interesting to look at their other tracks for a comparison.\n")]),n("p",[e._v("Can you modify each code block in the case study to be about high energy and low danceability songs?")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof w&&w(k),"function"==typeof B&&B(k);t.default=k.exports},835:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},836:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},843:function(e,t,o){},849:function(e,t,o){var n=o(10),s=o(850).entries;n({target:"Object",stat:!0},{entries:function(e){return s(e)}})},850:function(e,t,o){var n=o(30),s=o(187),a=o(47),i=o(186).f,r=function(e){return function(t){for(var o,r=a(t),l=s(r),c=l.length,d=0,p=[];c>d;)o=l[d++],n&&!i.call(r,o)||p.push(e?[o,r[o]]:r[o]);return p}};e.exports={entries:r(!0),values:r(!1)}},851:function(e,t,o){"use strict";var n=o(843);o.n(n).a},857:function(e,t,o){"use strict";o(849);var n=o(182),s=o(473),a={props:["template","templateVars","locked","status","onExecute","onReady"],data:function(){return{formData:{},code:""}},beforeMount:function(){for(var e={},t=0,o=Object.entries(this.templateVars);t<o.length;t++){var s=Object(n.a)(o[t],2),a=s[0],i=s[1];e[a]=this.getFormEntryDefaults(i)}this.formData=e,this.setCodeFromTemplate()},computed:{templateRaw:function(){return void 0===this.template?Object(s.getPreCodeText)(this.$slots.default):this.template}},methods:{getFormEntryDefaults:function(e){return e.options[0]},setField:function(e,t){this.formData[e]=t,this.setCodeFromTemplate()},setCodeFromTemplate:function(){var e,t;this.code=(e=this.templateRaw,t=this.formData,new Function("return `".concat(e,"`;")).call(t))}}},i=(o(851),o(9)),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ul",{staticClass:"code-cell-template__args"},e._l(e.templateVars,(function(t,n){return o("li",[o("label",[e._v(e._s(t.label))]),o("span",[e._v(": ")]),o("select",{on:{input:function(t){return e.setField(n,t.target.value)}}},e._l(t.options,(function(t){return o("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])})),0),o("CodeCell",e._b({scopedSlots:e._u([{key:"output",fn:function(){return[e._t("output")]},proxy:!0}],null,!0),model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},"CodeCell",e.$props,!1))],1)}),[],!1,null,null,null);t.a=r.exports},984:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-queen-plot.0e237b4.847ba3bd9f1d73076630cf6537045807.png",size:{width:563,height:432},sizes:"(max-width: 563px) 100vw, 563px",srcset:["/assets/static/02b-queen-plot.0e237b4.847ba3bd9f1d73076630cf6537045807.png 563w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 563 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-47b956cb09911c73a5e93164b2de3f24'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-47b956cb09911c73a5e93164b2de3f24)' width='563' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAKZklEQVRo3tXaZa8WVxcG4OdP8isICd9IIKHBpVAkuJcixd3dtUBxaNHiLe7W/ebayTqZzpl55HB4SyfZGdu69r3uJTONVDr%2b/vvvfP706VPXtXPx%2bvPnz7nE8%2bK9I%2b7jqLuv6qvqfbFecZw4F6%2bLz9o5GnUC%2bO2339KHDx%2b%2bqPPiokOob9686ahN3aGvL118UwFcvHgxvX//vhsC/vzzz7R58%2bb066%2b/5rJ8%2bfJ08uTJdPr06XT16tV05MiRtG/fvtx%2b586dadeuXbl4f%2b3atXy9f//%2bdO7cubR48eJ09OjRdOrUqdwH4WizZ8%2bedODAgfTLL7%2bkM2fOpL1796Zjx46lw4cP5/OJEydy/xs2bMj3Fy5c6BJsEU3tlEZ58bHQy5cvVwrg8ePHeYImZ%2bIHDx7Mk7DAP/74I509ezYLgHCOHz%2bei3uCuX//fq6jjXqrV6/Oi7OwK1eupNevX6dLly6lQ4cO5Wf611b/2lu4d4SnnmchJG3Lm9jsuhIBxYUaoCiAnkKseLx7967yOVULdXvx4sU/FuP4%2bPFjPsd8yipQVB/ty3ON9nHoH2K6IaDYsA4BZeIqk1P5WUz0r7/%2b6kLO2rVrsxrYYfcLFizIqgQZdtf7NWvWpB07duTiGZWYO3duhv2qVavS6NGju9RD/fPnz6eHDx%2bm%2bfPnp61bt6YtW7akTZs2pe3bt2ekuXdtHKiEKkKvRQCIlhHQ7ChbjDKz6%2bvmzZt5kiZr8Q8ePEi3b99Ot27dyu/u3r2bd8bzGzduZD23cGqHX37//fdcD5dQGXXcX79%2bPT158iSPoS/l3r17uQ4yV8cz/etH/67NsSMVaFcI/6WjVgU6FUCYL%2b22bduWSRFcMTSpY3vvIGvp0qV5Z3ACaII5RECGttpBRhlRzUqVT1JVp3xulOFbXEhPVODOnTuZremhxdA3kMXYGBwcZ82alQUE7vRefVwAsq53796d9b5o1uo4pmqxeKcZLzUVQCsrUCf5ovDaPb4FlWnUeVN2o8oK9MZBUByfgDxhIyWsDkFIjcpQDSaMxWApMD5kKTNnzsxnbTln%2blOgDdvrgxqxPtZBFaEQsvgj2nVZgVjcy5cvM/NqbDJlBJikSSgEpDP1mRQODufFIKHrYK4wQ%2b5jUNfz5s3Lixo1alSaMGFC9hCHDBmSpk2bln744Yf03XffpbFjx%2bY5LFu2LI0ZMyabOO2YvdmzZ%2bfrcePGZTUyp3Xr1mVOmThxYvZW3VNBXEOtCIynSfAcNSr4DwGQ9tOnT9OrV6%2byAMqxgN2xGwZZv3597hyZWZgdU%2byoxahjMAJatGhRJjYmzYL4GISmD3yAG8J11r%2bzuviiHTSVHZ0vUoE4vqYKFI/nz5%2b35IkyCRa5qBxhVnFTy1igXSvQjASbmac6Vi6Gv3V9F4VQLlVeaqelUdVJKzNY5fXVWYV23n1tlDVVgbrFlWOBr2nC2t2tr2E6axFQzgdULV5UhdEFJwiRM4NdMb%2bze8zNuVEPUzNHCA4JCnXFBkVPsgrO7UC9Xb0vr6cRgY9JFifSLBgqBjgExcRgeVbAwlgGi2THmTp9swxMk2u2WT1sj2xbZXYidO0NBJTbZwGw53zxogA6UQGmT5iJN1asWJEWLlyYd5tPYOEWTRgE48z2c1iYWTZdfe34EWz3kiVLsu1Xl9DYb3VjzHBuxP7my87zQ1gUdbwTHYZ55N%2b8ffu2MleQBRA7Vw5q2iFBB49LqCoEVeL60aNH2amycKGriXvG1ntPHSxcbM95oS6cJs7Qjz/%2bmGbMmJGmTJmShSQXMHXq1Kx24ny%2bRd%2b%2bfdP333%2bf67gePHhw7qNfv375OUFSQ31u3LixG8q7BADCdqyYaWkVDPUGJO2IWF/BBc7Gt6Ngz8XltnrHCRPHm7yddk99OFGES9BQpQ5Pz/zVefbsWUaDTQqfo5sZBD0ddRION0tjt5sx%2breObtEg1qavQTjtcEBvEFFVDF/F7s38iHCyyrm/qpxhLQmCnMbIAvuDE90pxwLfylH0WCVbfvrpp4xg5hhh4hb5R9Eh9R45cmRX2oy5ZqG8t8GNcto4Fk2PIovbExezlevaW/3hEaY4vlNAM95AxKybgAoBesYSIGRrwx82vVHnhpJsbxBd1aSbeZN1Y9UlW3vNEyxDiwpEXi7UxHtqEnWZJDsASnSOifOcZOuILmxx6CjECcGL5sm7%2bD6gBCqrvicYO4pxY57RT/BEHac06nSLnkSCQdwukclX4DBFjp31cE1YYOgZHWTnwe7nn39OkydPzjn%2b4BRJDO/Za3Z9%2bvTpOdkxaNCgfJbokO1h2%2bm2ZInn48ePz9BlrukvOLv3eS2%2bEDnzF/Rf3KiOssIhAJ1zXCI/z9NyH/Y3HBu22s4r6rDDCl2Ti0c%2bdFM7fcsqec7MEnLoLsGJDRBXeITGcLZghV4jOGe7rW/9uDdepLrMN6xZRwIo6paBviTT8q1Yi46%2bCxQFgEGL3/KqvueXY/oqNLX6bFa8LidOiufiu1Z5/7p/CDr6MMIKBFFVpa3KjoY8onoIDYEVIdiJKawLfb%2bWP9INAbEwTgUhsKuiN2SHzOipCE3464zsvENAnAxRoaCDXpdNVivz9bUX25EZRFBIxa4SBJIRbCAzi/MOSSE%2bz3lZQUruEWTZZMXBZIX3GaWobuX5fEkCpBnymmaFLbgIcxOcM2dOzsELLyGASeKCCk/lBDA4sySOh5ahQ4fm5%2bqFKbR4jC7cjZyB%2bsxhpM3LIWurnxx6SojdssIGt3OcD1ag6ArbJTvL5DgLluw%2bJCBM9xHWMnNssWRI5AJ8Z4hUe3zLlxNQN8Jd9%2bUfGyJlxu7HfNh49UNlI6QOpHkWP13oIzbS2LgpCLebCiAyk2Sr7WYxGKoziWWCLP7FUXXwF6TC7D5PkzpBBAFBCGHhH9fQ1L9///zFiGMkUSLRwcHyTibJMxw1YsSINHz48NSnT580cODA/HUpsknQh5wJ3th4KvIftSpQDocNKk1lt8Ea%2bRGWnaYCoi6oQYiuPVfPJKiJ7AwvUL/6GDBgQIa95xYhK2RxkyZNygsbNmxYlzfIS3S9cuXK7CThGYKP/4R4qAiYMAnSIpE3xEAOVNtxmyhBwkoFmpp%2bGIlKnoF%2b/Ahl5wwEnshPxGVR7hEmQWivcI%2bpgUniDzCP/uwIFSLI8PBCPdxDYvzdEX%2bS1B3qRV3qoRjXfBXzM7bNMF6kAJv6Af%2bVPz7sLpWJD6KBCrlExEq1CcDiPRPb2IymsYCgh%2bTC17crfHxnJZ5FiXcRCxTrlp/ps65N8Vm57xhX%2b2IMotBxUA9CVKBTifreg79rzwmuFgEGAylQChhFAVMBR9W78AtAtuqdQn0grFn7qufRp92OpGf5XXH8KOU6sl6uKwXQytZqiMjoV08O7QmPjvfkCD1nLXp6QFTLWKDqvxznSFmzEJ16Y/HRAjMrzb7517U3vj6Y6J6MH32Eqjd6w5vqaXswpg7QEHmByA59aQqtnTlU/inabiq7k8ClLiASWIXHyJfwHTFUo%2br/gJ6O32wOjX/DbFVN2IKxdHic/y8T/D9f120%2bogqPWgAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},985:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-geoms_7_0.a0857a9.bf2b3f2609f6768e41aaaf1ddff3d270.png",size:{width:569,height:432},sizes:"(max-width: 569px) 100vw, 569px",srcset:["/assets/static/02b-geoms_7_0.a0857a9.bf2b3f2609f6768e41aaaf1ddff3d270.png 569w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 569 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-10db1d5909d8a95145bccaca6a5927f4'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-10db1d5909d8a95145bccaca6a5927f4)' width='569' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAANP0lEQVRo3sWaBdBWVRCGP5GQEpEuaUlpEBQE6Rhq6By6QUAJaYZQujuUoYeGoVsalA6lpUO6RTnOszP7zfnvf%2b/HBfnhzJy5Hec9u%2b%2b%2bu/cGjNVevHgRXNL/%2beefMNu0f//9N9id53vtd267PfNdtYBzh/1CZ86cCTc4ZwMkGyxtz58/DwLGugJj38PeDgXSWwNAH/z06VNz9epVc%2bTIkXAXXL9%2b3dy4cUPAefToUZhjt27dMocOHTJPnjyR7b///tsVXAXEBlGBdLMKpxW9FQAY5OHDh2WbQa1YsULW169fbxYuXGi%2b/PJLkzVrVtOrVy9TtWpV06NHDzN37lxToEABU7lyZdO3b185/%2bjRo6Zz585BMG1Q7969K/fW5uY%2buu4EyC8g9nnO%2b7/UBX7//XdZ3r9/3zRv3tysXbvWZMuWzRQsWNDkz5/fJE%2be3Hz88ccmQYIEJlKkSCZ79uwmY8aMJn78%2bKZIkSJmzZo15ueffzZp0qQxDRs2NIsWLTJdunQxP/30U9B6lixZYk6fPm02bdoUxiLc1p3vFwoU%2b7xQvBPwMjVurgA8e/ZMQDh//rxZtWqVDCYQCAR70qRJTZIkSWQ9evToAkjixImDx9OlS2dq1qxpypcvb3LlymWmTJliRo8ebfbt2ydW1r17d9O1a1d5nrrNuXPnxN1of/31l4CPi9EuXbok3W1AznWbvPfu3Ru8/0stgAt4IfXVkydPmt9%2b%2b83s3LnTfPLJJ6Zu3bqmbNmyYYDACljGiBHDfPTRR7LNepQoUQSkb775Rq6tX7%2b%2badOmjUmVKpWpV6%2be6d27txk0aJAAtHLlSnkHwP7ll1/MvXv35Pm45NKlS83t27fN8ePHzZ9//mn2798fPG4PFo6x978WAJyI/yoAy5cvFxPGZBs3biw%2bPmnSJDF1XKJw4cImTpw4Jn369CZLlizmiy%2b%2bEDAiR45sokWLJlYBZ%2bAO7E%2bdOrVYTcyYMWXgTZo0EV7h%2blq1apkffvhBnjF%2b/HhxJazlxIkTZt26dfI%2bbHfr1i3oIiz1Xe/cuWOWLVv26i5gH%2bSGPFC3b968KcuzZ8%2baU6dOmYMHDwoP5MuXT8wbcPLmzSskmCxZMgEDC1CroH/44YcChm5nyJBBXIZ1rgUIeOWDDz6Qc2vUqGEGDx5s2rdvb8qVK2d27NghXESUmTlzpvn111/NxYsXg%2b%2bm7eHDh0GStS3BLdIE3GKwnowLeBEKLzF9%2bnR5obFjx4pLfP311zKrkCCm//7770tnQO%2b99564AoNlH8CwjBo1qhAn55QsWdKkTJlSBl6qVCnTrFkziS6ZMmUSqxoyZIhY4NatW6UfOHBALGTjxo3mypUrMmHbtm2Tc3hPrAQ3oWFFhG51h3AW4GYmtgXYYoeZwEQhLl6yUqVKZvXq1aZKlSoywESJEkl0YNAAwroOmhkHHLUIXASLUYvImTOnAEK0SZEihbgK27gOy1GjRpkHDx6YMWPGCFhbtmwR3waI%2bfPnS4i2hZi2x48fh/P/cBbARZwI47P8448/XEMLL6CiaPHixaZ06dLyEpAijF%2b0aFGZMWYXH2dwefLkEf9W8%2beYTaAAxLlqMSzZnzBhQtmfNm1a8/nnnwtpDhs2zNSpU8cUK1ZMJoKZ5X0BgShFmPXyeedEhwGAgTNoGB9fV5HiJiBoDH7q1KkCxLx588ysWbPk4bA97gAPxI0bV/yeWVezV1DoWAmddc7DInR/rFixxJ2wAtyAbUQXEQVSJaJ06tRJoggNMPr06SMRhHFs377dlQxdSdAmP1sHOLW70xr69esn8RmFx/mYIL4MaTFDX331lbC6RgSdYXv2teMeHGfwaiENGjQIRhRci8gA0aJFevbsKS4GcU6ePFlC6e7du4X8WEe1zpgxI6g%2b3fKMgFvWprMOB6jw4KZuKJIzEJOxAswPJic8Nm3aVGa/Xbt2In7wdx0oM21HB2ZWB%2b4EhZnHrdQqsIiKFSuKzsAlGDyRqFChQnLeggULJDrQeC90xbhx40TMubpAKOWkAEB6KDM3d8BSYF3lENgW5PFTzL5EiRJCbp999pl0rMA2e7UMmwt0CYBYS7x48cRtuB%2bWQVd3Qn9gDRAm5yCwyEk6dOhgateuHdQNTkkdxgJAR7W5TYgorlAy027cA5WGxJ0zZ45YAqT0448/iuJjdnLkyCGk5mX%2bOsu2ssQ6AABStTWEngsIWBecQ2LWsmVL0Q5M2sSJEyXHQEp7cZkAAGEQP51K8NixY2EudNYFuAZRRCPpgRSJ1YgURBICCR7AhzUCMBjM2EmCqhHswTNg5zG21X24FwCpkGLWP/30UyFhiBBtMG3aNCHnkEqQgaK73XIBN%2bZUAFBgRA4aJo9ehwdAn5QYVsZElfT0xWPHjh2GA0J1QHCCo/fSe2A96lq4wnfffSfRglDJZCCaNGw7cwQBAEWFmrJn21aCOmBmW2%2bmogIrUEuhwRugDvGQJ2TOnFk0PiDgu/i1%2brjTpF%2bnAw7cAAC4GqQJSSKU4AASL9yQvIb3xK3tSQxopodsdDYVQooWGltTUt2HAMH/dRu/Q51dvnxZyAlC6t%2b/v4gkXAL1ZpMdoNgk6DbTbtHBvkeZMmVEaLENVyCWUIUAjy5gIgmTWqmyrVoAQC8jGqgEETpAi9CnM%2buVD7hVYxBQ1apVk4djLXv27JGXJGOsXr26zDrRQH2XJYLJCwBnxLD36zqFGDgGa0BWEw24J7wA/7Rt21b4iaoWmaI9JgFg165dwgGYxbVr1yTDwl9sARGq6oK7IIAUYawEKyAKAAQzgpRFvTFT%2bKnXwNyigxsH2C6g68o17INnUJCk4LyHWqtzEgUAGFN9280FvGbbPqZCCQsCDMQQqg0eGDlypPinZnv6orB4KPP32xVIkq7ixYsLD7DN84YPHy4JG5xAVWnEiBHBXCZoAdTkYG4vEgwFgE2SIAyfkLERFRo1amS%2b/fZb06pVKxkoUlZDIP6qg/cbEULxBIPHvXgGwktBQXugEgcMGBCMXHZWGCRBNLTfMGg3HTwuA/PjTjQUGPekVkApi2NaKCG1pWaoL6lk9n9BsLcBt3Xr1vI83IHnu1mvAEBhUsveOiCUoBcJOm9CLQC1hWmxj9RYtQESmuMQ4IYNG0S/E54gSn1xXvD/AuBGmhRVcEPSdUhSCdD%2bGBOwq75OKewXAEKeVl1AGuanIY2RomSEQ4cOlcSEGSH0wQNvwv%2b9QCASsKRSRXGF/ap17GJJyGTIjwu4VZKIJFyLBUBILVq0EGVGFCCLw09tSfumO8DCCYRYUmdIGUmORnHmBAGvGdZs0G8UoCuyRA8KJeTkZINIUsIh4gR5rCWxiOqEQQaPpRF9IMHvv/9eijVEqXBK0J51BgFLsnxZGHSzAqIJ8pgyFT5Paoz5U9jAEuAA1fha9PCjB161c39kN5oDpYgeIEHTcK8V4jAAkCgQEdDLDEBLYqG%2b2Op%2bxJNGEhpEiCokAsD4hCHCE75PeKSSw/abiABeUUFLb1SkeBdyHtd6gD3L1AVgc2Txq3AADMtDdB1ASEfRAEQY3ICqMbk77qC1woggQLeMcfPmzWG%2bd4aRwl5k5gcAt2OkoB07dgwWTkmECEnEZX05skSKmxHJBTYfoEAhQd7H0wW8Poz4AcA%2bj4cQVvF/MkDUIPV%2bZDHZmup3mDoiB6/WoEs%2b4lAlVrIOYwFeH0f9ugA31U/cuBEmR32OkjXmDxNTwCQZ0poA0eBNiiC3cpkmSblz55bn2oIvJAD6cdQvCWIxKpz4boj/ExEAAyU4YcIEqeMjh%2b2sLaLEkBMMBBh99uzZ/gDwawFux/iErr6GygQAcgVCUIUKFYJZoBJURIRBtzyBgizfMVxJ0OsHCTcAnIrR%2bVGFCKA/WOlvNbgAKSkfTDBN/R74NrpWldAdvIsvC3iVeoDzjy8yQvIA/QWGz1d8L1SZiunbtf230bXKrHJYJ8v1JynMlpIYHGD/XORWGkdcaDGEBhEiiBBAfKUBcT5xAwJVIedH0XfR9SMPIHgCgKixq71eDQD0hwQaGRf%2bzkMokKjwABgsAz4AGJb8K4RmoHpEFsns4CYQJkUVagkstVNZoqLDxxc61R626bpO/sG3CeT3wIEDpSDLhxI61WGOX7hwwd%2bPkshZ/Jl0161jJZg62R/r7ENOU3WhLggQLNmvf2vQAYxOhLA7gNFZt4/r%2bXZ3Xus8jpr1uo7vF4yLd3MlQQVBT6Q4ymD4EMpgtXOMgdv72CbjwjKoNXINHRAIjexjBhRAXcI3%2bsuL/gWmx7Em%2b1yWnEfeQu2B5%2bkx%2bxqdPN3Pe3ANnfEweQE/PxKoxvfT9N8iTB8A/TRUI3VJ/kJz/u/j1ZhJIg0D1UqPn4Zl2JwVeJms1RTZto6XdU2nVW%2b7dbf/jp31iFDPsP9BDvUcZ7d/y3UNg35/LfEjiF62D59EHEGOzD7pN27g/FL9us/xM56An39s/fyb63Z%2bqJ%2bftf5AzsBHGQZOTZFP6/oBw08Vyu9/w14fdwLv6j99t5fly1KowUdE%2bw%2blPdmAAIbyzQAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},986:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_3_0.8fcb5e0c.png"},987:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_6_0.37fc34f9.png"},988:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_9_0.036a1dc2.png"},989:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_12_0.f72fd29f.png"},990:function(e,t,o){e.exports=o.p+"assets/img/plotnine-geom-doc.e1f66e8c.png"}}]);