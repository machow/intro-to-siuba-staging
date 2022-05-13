(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1e3:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_6_0.37fc34f9.png"},1001:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_9_0.036a1dc2.png"},1002:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_12_0.f72fd29f.png"},1003:function(e,t,o){e.exports=o.p+"assets/img/plotnine-geom-doc.e1f66e8c.png"},1019:function(e,t,o){"use strict";o.r(t);var n=o(9),s=o(836),a=o.n(s),i=o(999),r=o.n(i),l=o(1e3),c=o.n(l),d=o(1001),p=o.n(d),u=o(1002),b=o.n(u),h=o(1003),g=o.n(h),m='<section class=""><section class=""> <h1 id=using-plotnine-geoms>Using plotnine Geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n  + geom_point()\n)</code></pre> <p><img src='+a()(r.a)+' alt=png></p> <aside class=notes> <p>In the previous lesson, you created this scatter plot comparing the energy of each song to its valence.</p> <p>This plot communicates some interesting information: we can see that higher income countries tend to have higher life expectancy.</p> <p>One problem with this plot, however, is that it&#39;s impossible to tell which song is which. Adding labels to the point will let us identify songs in the plot.</p> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_label>Using geom_label</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_label()\n)</code></pre> <p><img src='+a()(c.a)+' alt=png></p> <aside class=notes> <p>The first option for plotting text is using <code>geom_label()</code>. This plots the text with a filled in box around it.</p> <p>Unlike scanning a DataFrame of results, it&#39;s easy to see pick out songs across a range of valence and energy.</p> <p>For example, relative to other songs:</p> <ul> <li>&quot;i love you&quot; is low valence and low energy </li> <li>&quot;bad guy&quot; is high valence and high energy</li> <li>&quot;bellyache&quot; is extremely high energe and a moderate amount of valence</li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_text>Using geom_text</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text()\n)</code></pre> <p><img src='+a()(p.a)+' alt=png></p> <aside class=notes> <p>A second option for plotting text is with <code>geom_text()</code>. This plots text by itself, without a background box.</p> <p>Notice the words in front don&#39;t cover other words as much, but it can also be harder to read them.</p> </aside></section></section><section class=""><section class=""> <h1 id=combining-geoms>Combining geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text(nudge_y = .1)\n  + geom_point()\n)</code></pre> <p><img src='+a()(b.a)+' alt=png></p> <aside class=notes> <p>When you plot multiple geoms--like in this plot--ggplot goes line-by-line, from top to bottom.</p> <p>For example, in the code here, it first puts down the words from <code>geom_text()</code>, then the points from <code>geom_point()</code>.</p> <p>Notice also that <code>geom_text()</code> has an option passed to it, <code>nudge_y = ,1</code>.</p> </aside></section></section><section class=""><section class=""> <h1 id=more-on-geom-options>More on geom options</h1> <p><img src='+a()(g.a)+' alt=""></p> <aside class=notes> <p>In general, there are many arguments you can pass to geoms, and different geoms can take different arguments.</p> <p>The easiest way to understand what arguments geoms can take, and what they do, is to look at the plotnine documentation website.</p> <p>Here are two useful parts of the docs:</p> <ul> <li><a href=https://plotnine.readthedocs.io/en/stable/api.html>list of available geoms</a></li> <li><a href=https://plotnine.readthedocs.io/en/stable/generated/plotnine.geoms.geom_text.html#plotnine.geoms.geom_text>help document on geom_text</a></li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>In the exercises, you&#39;ll practice creating other scatter plots to compare variables across countries, and in the rest of this chapter you&#39;ll learn more ways to communicate information in a graph.</p> </aside></section></section>',f=o(857),v=o(835),y=o(7);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}y.a.config.optionMergeStrategies;var A={slides:m,CodeCellTemplater:f.a,VueRemarkRoot:v.a},w=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(A).forEach((function(e){"object"===x(A[e])&&"function"==typeof A[e].render?t[e]=A[e]:o[e]=function(){return A[e]}}))},_=y.a.config.optionMergeStrategies,C="__vueRemarkFrontMatter",B={excerpt:null,title:"Geoms",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize",exercise_pars:[{size:{label:"Size",options:[11,5,7,14]},ha:{label:"Horizontal align",options:["center","left","right"]},nudge:{label:"Nudge",options:["nudge_y = 0","nudge_y = .05","nudge_y = -.05","nudge_x = .05"]}}]};var E=function(e){e.options[C]&&(e.options[C]=B),y.a.util.defineReactive(e.options,C,B),e.options.computed=_.computed({$frontmatter:function(){return e.options[C]}},e.options.computed)},I=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/intro-to-siuba",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:t.debut,expression:"nb.debut"}]},[n("code-cell",{attrs:{status:t.status,onExecute:t.execute,onReady:t.updateSetupCode,language:"python"}},[n("pre",[n("code",{pre:!0},[e._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\nfrom music_top200 import music_top200, track_features\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),n("RevealSlides",{attrs:{slides:e.slides}}),n("h3",{attrs:{id:"exercise-1"}},[n("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 1:")]),n("p",[e._v("The options below let you change different arguments to "),n("code",{pre:!0},[e._v("geom_text()")]),e._v(". Try changing them and running the code, in order to get a readable plot. Then, answer the questions underneath the plot.")]),n("CodeCellTemplater",{attrs:{templateVars:e.$frontmatter.exercise_pars[0],status:t.status,onExecute:t.execute,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(997)}})],1)]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "Queen")\n  >> ggplot(aes("energy", "valence", label = "track_name"))\n   + geom_point()\n   + geom_text(size = ${this.size}, ha = "${this.ha}", ${this.nudge})\n)    \n')])])]),n("p",[e._v("Below are three songs at different corners of the graph. Can you tell whether they have high or low energy? Valence? Which do you think has low energy and low valence?")]),n("div",{staticStyle:{display:"flex",width:"100%","flex-grow":"1"}},[n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Hammer to Fall")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/JU5LMG3WFBw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Crazy Little Thing Called Love")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/zO6D_BAuYCI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Love of My Life")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/7hFeER3_ZRQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),n("h3",{attrs:{id:"exercise-2"}},[n("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 2:")]),n("p",[e._v("This exercise is a case study on selecting extreme differences between two features, such as energy and acousticness.")]),n("p",[e._v("At the end of the case study, you'll be prompted to add code!")]),n("p",[e._v("Generally tracks with higher energy tend to be less acoustic, as shown in the plot below.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(998),alt:"png"}})],1)]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.popularity > 33)\n  >> ggplot(aes("energy", "acousticness"))\n   + geom_point()\n)\n')])])]),n("p",[e._v("But notice that in the plot above, there's a point in the top right, that is high energy and high acousticness.")]),n("p",[e._v("In order to find high energy and acousticness songs like this, I used the following code.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("table",{staticClass:"dataframe",attrs:{border:"1"}},[n("thead",[n("tr",{staticStyle:{"text-align":"right"}},[n("th"),n("th",[e._v("artist")]),n("th",[e._v("album")]),n("th",[e._v("track_name")]),n("th",[e._v("energy")]),n("th",[e._v("valence")]),n("th",[e._v("danceability")]),n("th",[e._v("speechiness")]),n("th",[e._v("acousticness")]),n("th",[e._v("popularity")]),n("th",[e._v("duration")])])]),n("tbody",[n("tr",[n("th",[e._v("23989")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("0.971")]),n("td",[e._v("0.521")]),n("td",[e._v("0.872")]),n("td",[e._v("0.2810")]),n("td",[e._v("0.917000")]),n("td",[e._v("61")]),n("td",[e._v("161.600")])]),n("tr",[n("th",[e._v("5210")]),n("td",[e._v("ScHoolboy Q")]),n("td",[e._v("CrasH Talk")]),n("td",[e._v("Black Folk")]),n("td",[e._v("0.902")]),n("td",[e._v("0.400")]),n("td",[e._v("0.734")]),n("td",[e._v("0.3960")]),n("td",[e._v("0.831000")]),n("td",[e._v("51")]),n("td",[e._v("147.040")])]),n("tr",[n("th",[e._v("24928")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("0.957")]),n("td",[e._v("0.642")]),n("td",[e._v("0.832")]),n("td",[e._v("0.1050")]),n("td",[e._v("0.824000")]),n("td",[e._v("52")]),n("td",[e._v("123.220")])]),n("tr",[n("th",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")])]),n("tr",[n("th",[e._v("18950")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("There Is Nothing Left To Lose")]),n("td",[e._v("Learn to Fly")]),n("td",[e._v("0.919")]),n("td",[e._v("0.537")]),n("td",[e._v("0.465")]),n("td",[e._v("0.0408")]),n("td",[e._v("0.000018")]),n("td",[e._v("74")]),n("td",[e._v("235.293")])]),n("tr",[n("th",[e._v("20424")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("One By One (Expanded Edition)")]),n("td",[e._v("Times Like These")]),n("td",[e._v("0.908")]),n("td",[e._v("0.265")]),n("td",[e._v("0.377")]),n("td",[e._v("0.0899")]),n("td",[e._v("0.000014")]),n("td",[e._v("68")]),n("td",[e._v("265.560")])]),n("tr",[n("th",[e._v("21870")]),n("td",[e._v("Turmion Kätilöt")]),n("td",[e._v("Global Warning")]),n("td",[e._v("Jumalauta")]),n("td",[e._v("0.939")]),n("td",[e._v("0.549")]),n("td",[e._v("0.454")]),n("td",[e._v("0.0618")]),n("td",[e._v("0.000010")]),n("td",[e._v("42")]),n("td",[e._v("210.107")])])])]),n("p",[e._v("812 rows × 10 columns")])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v("(track_features\n  >> filter(_.energy > .9, _.popularity > 33)\n  >> arrange(-_.acousticness)\n)\n")])])]),n("p",[e._v("Can you plot songs by MC Kevin o Chris, with both points and text?")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[e._v("⚠️: "),n("b",[e._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "MC Kevin o Chris")\n  >> ___\n)\n')])])]),n("p",[e._v("Why do you think Vamos pra Gaiola is high energy and high acousticness?")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/0R6zBcV9JiY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("details",[n("summary",[e._v("answer")]),e._v("\nMy best guess is because the drums are done by a persons voice, there are few instruments, but it is still a pretty fast tempo. It would be interesting to look at their other tracks for a comparison.\n")]),n("p",[e._v("Can you modify each code block in the case study to be about high energy and low danceability songs?")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof w&&w(I),"function"==typeof E&&E(I);t.default=I.exports},835:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},836:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},843:function(e,t,o){},849:function(e,t,o){var n=o(10),s=o(850).entries;n({target:"Object",stat:!0},{entries:function(e){return s(e)}})},850:function(e,t,o){var n=o(30),s=o(187),a=o(47),i=o(186).f,r=function(e){return function(t){for(var o,r=a(t),l=s(r),c=l.length,d=0,p=[];c>d;)o=l[d++],n&&!i.call(r,o)||p.push(e?[o,r[o]]:r[o]);return p}};e.exports={entries:r(!0),values:r(!1)}},851:function(e,t,o){"use strict";var n=o(843);o.n(n).a},857:function(e,t,o){"use strict";o(849);var n=o(182),s=o(473),a={props:["template","templateVars","locked","status","onExecute","onReady"],data:function(){return{formData:{},code:""}},beforeMount:function(){for(var e={},t=0,o=Object.entries(this.templateVars);t<o.length;t++){var s=Object(n.a)(o[t],2),a=s[0],i=s[1];e[a]=this.getFormEntryDefaults(i)}this.formData=e,this.setCodeFromTemplate()},computed:{templateRaw:function(){return void 0===this.template?Object(s.getPreCodeText)(this.$slots.default):this.template}},methods:{getFormEntryDefaults:function(e){return e.options[0]},setField:function(e,t){this.formData[e]=t,this.setCodeFromTemplate()},setCodeFromTemplate:function(){var e,t;this.code=(e=this.templateRaw,t=this.formData,new Function("return `".concat(e,"`;")).call(t))}}},i=(o(851),o(9)),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ul",{staticClass:"code-cell-template__args"},e._l(e.templateVars,(function(t,n){return o("li",[o("label",[e._v(e._s(t.label))]),o("span",[e._v(": ")]),o("select",{on:{input:function(t){return e.setField(n,t.target.value)}}},e._l(t.options,(function(t){return o("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])})),0),o("CodeCell",e._b({scopedSlots:e._u([{key:"output",fn:function(){return[e._t("output")]},proxy:!0}],null,!0),model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},"CodeCell",e.$props,!1))],1)}),[],!1,null,null,null);t.a=r.exports},997:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-queen-plot.0e237b4.847ba3bd9f1d73076630cf6537045807.png",size:{width:563,height:432},sizes:"(max-width: 563px) 100vw, 563px",srcset:["/assets/static/02b-queen-plot.0e237b4.847ba3bd9f1d73076630cf6537045807.png 563w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 563 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-47b956cb09911c73a5e93164b2de3f24'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-47b956cb09911c73a5e93164b2de3f24)' width='563' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAKZklEQVRo3tXaZa8WVxcG4OdP8isICd9IIKHBpVAkuJcixd3dtUBxaNHiLe7W/ebayTqZzpl55HB4SyfZGdu69r3uJTONVDr%2b/vvvfP706VPXtXPx%2bvPnz7nE8%2bK9I%2b7jqLuv6qvqfbFecZw4F6%2bLz9o5GnUC%2bO2339KHDx%2b%2bqPPiokOob9686ahN3aGvL118UwFcvHgxvX//vhsC/vzzz7R58%2bb066%2b/5rJ8%2bfJ08uTJdPr06XT16tV05MiRtG/fvtx%2b586dadeuXbl4f%2b3atXy9f//%2bdO7cubR48eJ09OjRdOrUqdwH4WizZ8%2bedODAgfTLL7%2bkM2fOpL1796Zjx46lw4cP5/OJEydy/xs2bMj3Fy5c6BJsEU3tlEZ58bHQy5cvVwrg8ePHeYImZ%2bIHDx7Mk7DAP/74I509ezYLgHCOHz%2bei3uCuX//fq6jjXqrV6/Oi7OwK1eupNevX6dLly6lQ4cO5Wf611b/2lu4d4SnnmchJG3Lm9jsuhIBxYUaoCiAnkKseLx7967yOVULdXvx4sU/FuP4%2bPFjPsd8yipQVB/ty3ON9nHoH2K6IaDYsA4BZeIqk1P5WUz0r7/%2b6kLO2rVrsxrYYfcLFizIqgQZdtf7NWvWpB07duTiGZWYO3duhv2qVavS6NGju9RD/fPnz6eHDx%2bm%2bfPnp61bt6YtW7akTZs2pe3bt2ekuXdtHKiEKkKvRQCIlhHQ7ChbjDKz6%2bvmzZt5kiZr8Q8ePEi3b99Ot27dyu/u3r2bd8bzGzduZD23cGqHX37//fdcD5dQGXXcX79%2bPT158iSPoS/l3r17uQ4yV8cz/etH/67NsSMVaFcI/6WjVgU6FUCYL%2b22bduWSRFcMTSpY3vvIGvp0qV5Z3ACaII5RECGttpBRhlRzUqVT1JVp3xulOFbXEhPVODOnTuZremhxdA3kMXYGBwcZ82alQUE7vRefVwAsq53796d9b5o1uo4pmqxeKcZLzUVQCsrUCf5ovDaPb4FlWnUeVN2o8oK9MZBUByfgDxhIyWsDkFIjcpQDSaMxWApMD5kKTNnzsxnbTln%2blOgDdvrgxqxPtZBFaEQsvgj2nVZgVjcy5cvM/NqbDJlBJikSSgEpDP1mRQODufFIKHrYK4wQ%2b5jUNfz5s3Lixo1alSaMGFC9hCHDBmSpk2bln744Yf03XffpbFjx%2bY5LFu2LI0ZMyabOO2YvdmzZ%2bfrcePGZTUyp3Xr1mVOmThxYvZW3VNBXEOtCIynSfAcNSr4DwGQ9tOnT9OrV6%2byAMqxgN2xGwZZv3597hyZWZgdU%2byoxahjMAJatGhRJjYmzYL4GISmD3yAG8J11r%2bzuviiHTSVHZ0vUoE4vqYKFI/nz5%2b35IkyCRa5qBxhVnFTy1igXSvQjASbmac6Vi6Gv3V9F4VQLlVeaqelUdVJKzNY5fXVWYV23n1tlDVVgbrFlWOBr2nC2t2tr2E6axFQzgdULV5UhdEFJwiRM4NdMb%2bze8zNuVEPUzNHCA4JCnXFBkVPsgrO7UC9Xb0vr6cRgY9JFifSLBgqBjgExcRgeVbAwlgGi2THmTp9swxMk2u2WT1sj2xbZXYidO0NBJTbZwGw53zxogA6UQGmT5iJN1asWJEWLlyYd5tPYOEWTRgE48z2c1iYWTZdfe34EWz3kiVLsu1Xl9DYb3VjzHBuxP7my87zQ1gUdbwTHYZ55N%2b8ffu2MleQBRA7Vw5q2iFBB49LqCoEVeL60aNH2amycKGriXvG1ntPHSxcbM95oS6cJs7Qjz/%2bmGbMmJGmTJmShSQXMHXq1Kx24ny%2bRd%2b%2bfdP333%2bf67gePHhw7qNfv375OUFSQ31u3LixG8q7BADCdqyYaWkVDPUGJO2IWF/BBc7Gt6Ngz8XltnrHCRPHm7yddk99OFGES9BQpQ5Pz/zVefbsWUaDTQqfo5sZBD0ddRION0tjt5sx%2breObtEg1qavQTjtcEBvEFFVDF/F7s38iHCyyrm/qpxhLQmCnMbIAvuDE90pxwLfylH0WCVbfvrpp4xg5hhh4hb5R9Eh9R45cmRX2oy5ZqG8t8GNcto4Fk2PIovbExezlevaW/3hEaY4vlNAM95AxKybgAoBesYSIGRrwx82vVHnhpJsbxBd1aSbeZN1Y9UlW3vNEyxDiwpEXi7UxHtqEnWZJDsASnSOifOcZOuILmxx6CjECcGL5sm7%2bD6gBCqrvicYO4pxY57RT/BEHac06nSLnkSCQdwukclX4DBFjp31cE1YYOgZHWTnwe7nn39OkydPzjn%2b4BRJDO/Za3Z9%2bvTpOdkxaNCgfJbokO1h2%2bm2ZInn48ePz9BlrukvOLv3eS2%2bEDnzF/Rf3KiOssIhAJ1zXCI/z9NyH/Y3HBu22s4r6rDDCl2Ti0c%2bdFM7fcsqec7MEnLoLsGJDRBXeITGcLZghV4jOGe7rW/9uDdepLrMN6xZRwIo6paBviTT8q1Yi46%2bCxQFgEGL3/KqvueXY/oqNLX6bFa8LidOiufiu1Z5/7p/CDr6MMIKBFFVpa3KjoY8onoIDYEVIdiJKawLfb%2bWP9INAbEwTgUhsKuiN2SHzOipCE3464zsvENAnAxRoaCDXpdNVivz9bUX25EZRFBIxa4SBJIRbCAzi/MOSSE%2bz3lZQUruEWTZZMXBZIX3GaWobuX5fEkCpBnymmaFLbgIcxOcM2dOzsELLyGASeKCCk/lBDA4sySOh5ahQ4fm5%2bqFKbR4jC7cjZyB%2bsxhpM3LIWurnxx6SojdssIGt3OcD1ag6ArbJTvL5DgLluw%2bJCBM9xHWMnNssWRI5AJ8Z4hUe3zLlxNQN8Jd9%2bUfGyJlxu7HfNh49UNlI6QOpHkWP13oIzbS2LgpCLebCiAyk2Sr7WYxGKoziWWCLP7FUXXwF6TC7D5PkzpBBAFBCGHhH9fQ1L9///zFiGMkUSLRwcHyTibJMxw1YsSINHz48NSnT580cODA/HUpsknQh5wJ3th4KvIftSpQDocNKk1lt8Ea%2bRGWnaYCoi6oQYiuPVfPJKiJ7AwvUL/6GDBgQIa95xYhK2RxkyZNygsbNmxYlzfIS3S9cuXK7CThGYKP/4R4qAiYMAnSIpE3xEAOVNtxmyhBwkoFmpp%2bGIlKnoF%2b/Ahl5wwEnshPxGVR7hEmQWivcI%2bpgUniDzCP/uwIFSLI8PBCPdxDYvzdEX%2bS1B3qRV3qoRjXfBXzM7bNMF6kAJv6Af%2bVPz7sLpWJD6KBCrlExEq1CcDiPRPb2IymsYCgh%2bTC17crfHxnJZ5FiXcRCxTrlp/ps65N8Vm57xhX%2b2IMotBxUA9CVKBTifreg79rzwmuFgEGAylQChhFAVMBR9W78AtAtuqdQn0grFn7qufRp92OpGf5XXH8KOU6sl6uKwXQytZqiMjoV08O7QmPjvfkCD1nLXp6QFTLWKDqvxznSFmzEJ16Y/HRAjMrzb7517U3vj6Y6J6MH32Eqjd6w5vqaXswpg7QEHmByA59aQqtnTlU/inabiq7k8ClLiASWIXHyJfwHTFUo%2br/gJ6O32wOjX/DbFVN2IKxdHic/y8T/D9f120%2bogqPWgAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},998:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-geoms_7_0.a0857a9.bbcd3d88fba644b0c37db81f5c9e1d77.png",size:{width:569,height:432},sizes:"(max-width: 569px) 100vw, 569px",srcset:["/assets/static/02b-geoms_7_0.a0857a9.bbcd3d88fba644b0c37db81f5c9e1d77.png 569w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 569 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-38884b10511cbe0e1e4a338a273e6067'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-38884b10511cbe0e1e4a338a273e6067)' width='569' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAANOElEQVRo3sWaBbBVVRSGL0pLN0iXNEiqdEkN4UjX0NKNIClDCZLSDUOPNEN3d4N0d4soDdv51sy6s99559x3QR7umT2nY/97rX/9a53jM1Z7%2b/atf0l//fp1iG3amzdv/N15vtd%2b57bbM/%2bv5nPusF/owoULoQbnbIBkg6Xt1atXfsBYV2Dse9jbgUD6aADog58/f25u3bpljh8/HuqCO3fumLt37wo4//zzT4hjDx48MEePHjXPnj2T7ZcvX7qCq4DYICqQblbhtKKPAgCDPHbsmGwzqBUrVsj6%2bvXrzcKFC03BggVNtmzZTO/evU3VqlVNz549zbx588zXX39tvvvuO9O3b185/8SJE%2bbHH3/0g2mD%2bueff8q9tbm5j647AQoWEPs85/3DdIHTp0/L8q%2b//jI//PCDWbt2rcmRI4cpVKiQ%2beqrr0zy5MlNvHjxTMKECc0nn3xicubMaTJlymQSJEhgihUrZtasWWNmzJhh0qZNaxo2bGgWLVpkunbtaqZPn%2b63niVLlpjz58%2bbTZs2hbAIt3Xn%2bwUCxT4vEO/4vEyNmysAL168EBAuX75sVq1aJYPx%2bXz%2bnixZMpM0aVJZjxYtmgCSJEkS//H06dObmjVrmooVK5rcuXObyZMnm99%2b%2b83s379frKxHjx6mW7du8jx1m0uXLom70e7fvy/g42K069evS3cbkHPdJu99%2b/b57x%2bmBXABL6S%2bevbsWXPw4EGza9cukzJlSlO3bl1Tvnz5EEBgBSyjR49u4sSJI9usR4oUSUBq166dXFu/fn3TunVrkzp1alOvXj3Tp08fM3jwYAFo5cqV8g6AvW3bNvP48WN5Pi65dOlS8/DhQ/PHH3%2bYK1eumEOHDvmP24OFY%2bz97wUAJ%2bK/CsDy5cvFhDHZxo0bi49PnDhRTB2XKFq0qIkdO7bJkCGDyZo1q/nmm28EjIgRI5ooUaKIVcAZuAP706RJI1bz2WefycCbNGkivML1tWrVMoMGDZJnjBs3TlwJazl16pRZt26dvA/b3bt397sIS33XR48emWXLlr27C9gHuSEP1O179%2b7J8uLFi%2bbcuXPmyJEjwgP58%2bcX8wacfPnyCQl%2b/vnnAgYWoFZBjxUrloCh21988YW4DOtcCxDwStSoUeXcGjVqmCFDhpj27dubChUqmJ07dwoXEWVmzZplDhw4YK5du%2bZ/N21///23n2RtS3CLND63GKwn4wJehMJLTJs2TV5ozJgx4hLFixeXWYUEMf1PP/1UOgOKECGCuAKDZR/AsIwcObIQJ%2bd8%2b%2b23JlWqVDLwMmXKmGbNmkl0yZw5s1jVr7/%2bKha4detW6YcPHxYL2bhxo7l586ZM2Pbt2%2bUc3hMrwU1oWBGhW90hlAW4mYltAbbYYSYwUYiLl6xSpYpZvXq1%2bf7772WAiRMnlujAoAGEdR00Mw44ahG4CBajFvHll18KIESbFClSiKuwjeuwHDVqlHny5IkZPXq0gLVlyxbxbYBYsGCBhGhbiGl7%2bvRpKP8PZQFcxIkwPsszZ864hhZeQEXR4sWLTdmyZeUlIEUYv0SJEjJjzC4%2bzuDy5s0r/q3mzzGbQAGIc9ViWLI/UaJEsj9dunSmQIECQprDhg0zderUMSVLlpSJYGZ5X0AgShFmvXzeOdEhAGDgDBrGx9dVpLgJCBqDnzJligAxf/58M3v2bHk4bI87wANx48YVv2fW1ewVFDpWQmed87AI3R8jRgxxJ6wAN2Ab0UVEgVSJKF26dJEoQgOMn3/%2bWSII49ixY4crGbqSoE1%2btg5wanenNfTr10/iMwqP8zFBfBnSYoaKFCkirK4RQWfYnn3tuAfHGbxaSIMGDfwRBdciMkC0aJFevXqJi0GckyZNklC6Z88eIT/WUa0zZ870q0%2b3PMPnlrXprMMBKjy4qRuK5AzEZKwA84PJCY9NmzaV2W/btq2IH/xdB8pM29GBmdWBO0Fh5nErtQosonLlyqIzcAkGTyQqXLiwnPf7779LdKDxXuiKsWPHiphzdYFAykkBgPRQZm7ugKXAusohsC3I46eYfenSpYXcsmfPLh0rsM1eLcPmAl0CINYSP358cRvuh2XQ1Z3QH1gDhMk5CCxykg4dOpjatWv7dYNTUoewANgREnESIoorkMy0Gwij0pC4c%2bfOFUuAlH755RdRfMxOrly5hNS8zF9n2VaWWAcAQKq2htBzAQHrgnNIzFq0aCHagUmbMGGC5BhIaS8uEwCUMJxK8OTJkyEudNYFiLmIIhpJD6RIrEakIJIQSPAAPqwRgMFgxk4SVI1gD54BO4%2bxre7DvQBIhRSznjFjRiFhiBBtMHXqVCHngEqQgTIYt1zAjTkVABQYkYOGyaPX4QHQJyWGlTFRJT198ZgxY4bggEAdEJzg6L30HliPuhau0LlzZ4kWhEomA9GkYduZIwgAKCr81lnhUQB0wMy23kxFBcCppdDgDVCHeMgTsmTJIhofEPBd/Fp93GnS79MBB24AAFwN0oQkEUpwAIkXbkhew3vi1vYk%2bjTTQzY6mwohRQuNrSmp7oM78H/dxu9QZzdu3BBygpD69%2b8vIgmXQL3ZZAcoNgm6zbRbdLDvUa5cORFabMMViCVUIcCjC5hIwqRWqmyr9lsAZksliNABWoQ%2bnVmvfMCtGoOAqlatmjwca9m7d6%2b8JBlj9erVZdaJBuq7LBFMXgA4I4a9X9cpxMAxWAOymmjAPeEF%2bKdNmzbCT1S1yBTtMQkAu3fvltwbs7h9%2b7ZkWPiLLSACVV1wFwSQIoyVYAVEAYBgRpCyqDdmCj/1GphbdHDjANsFdF25hn3wDAqSFJz3UGt1TqJPqy%2b8sJcLeM22fUyFEhYEGIghVBs8MHLkSPFPzfb0RWHxQOYfbFcgSbpKlSolPMA2zxs%2bfLgkbHACVaURI0b4cxm/BVCTwwXskGeTYCAAbJIEYfiEjI2o0KhRI9OpUyfTsmVLGShSVkMg/qqDDzYiBOIJBo978QyEl4KC9kAlDhgwwB%2b57KzQT4Jo6GDDoN108LgMzI870VBg3JNaAaUsjmmhhNSWmqG%2bpJLZfwXB3gbcVq1ayfNwB57vZr0CAIVJLXvrgFCCXiTovAm1ANQWpsU%2bUmPVBrgXxyHADRs2iH4nPEGU%2buK84H8FwI00KarghqTrkKQSoP0xxmdXfZ1SOFgACHladQFpmJ%2bGNEaKkhEOHTpUEhNmhNAHD3wI//cCgUjAkkoVxRX2UzlyFksCJkPBuIBbJYlIwrVYAITUvHlzUWZEAbI4/NSWtB%2b6AyycQIgldYaUkeRoFGdO4POaYc0Gg40CdEWW6EGhhJycbBBJSjhEnCCPtSQWXp0wyOCxNKIPJPjTTz9JsYYoFUoJ2rPOIGBJlmGFQTcrIJogjylT4fNIbMyfwgaWAAeoxteiRzB64F0790d2ozlQiugBEjSV8ir5QwBAokBEQC8zAC2JBfpiq/sRTxpJaBAhqpAIAOMThghP%2bD7hkUoO2x8iAnhFBS29UZHiXVC8rvUAe5b5ZgebI4vfhQNgWB6i6wBCOooGIMLgBlSNyd1xB60VhgcBumWMmzdvDvG9M4QU9iKzYABwO0YK2rFjR3/hlESIkERc1pcjS6S4GZ5cYPMBChQS5H08XcDrw0gwANjn8RDCKv5PBogapN6PLCZbU/0OU4fn4NUadMlHHKrEStYhLMDr42iwLsBN9RM3boTJUZ%2bjZI35w8QUMEmGtCZANPiQIsitXKZJUp48eeS5tuALCIB%2bHA2WBLEYFU58N8T/iQiAgRIcP3681PGRw3bWFl5iyAkGAow%2bZ86c4AAI1gLcjvEJXX0NlQkA5AqEoEqVKvmzQCWo8AiDbnkCBVm%2bY7iSoNcPEm4AOBWj86MKEUB/sNLfanABUlI%2bmGCa%2bj3wY3StKqE7tPQXpgW8Sz3A%2bccXGSF5gP4Cw%2bcrvheqTMX07dr%2bx%2bhaZVY5rJPl%2bpMUZktJDA6wfy5yK40jLrQYQoMIEUQIIL7SgDifuAGBqpDzo%2bj/0fUjDyB4AoCosau9Xg0A9IcEGhkX/s5DKJCo8AAYLAM%2bABiW/CuEZqB6RBbJ7OAmECZFFWoJLLVTWaKiw8cXOtUetum6Tv7Btwnk98CBA6Ugy4cSOtVhjl%2b9ejW4HyWRs/gz6a5bx0owdbI/1tmHnKbqQl0QIFiyX//WoAMYnQhhdwCjs24f1/Pt7rzWeRw163Ud3y8YF%2b/mSoIKgp5IcZTB8CGUwWrnGAO397FNxoVl8HWGa%2biAQGhkHzOgAOoSvtFfXvQvMD2ONdnnsuQ88hZqDzxPj9nX6OTpft6Da%2biMh8nzBfMjgWr8YJr%2bW4TpA2AwDdVIXZK/0Jz/%2b3g1ZpJIw0C10hNMwzJszvKFJWs1RbatI6yu6bTqbbfu9t%2bxsx4R6Bn2P8iBnuPs9m%2b5rmEw2F9LghFEYe3DJxFHkCOzT/qNG%2bhfpMFWod7n/Tz/E/Sq9gSbEzgRD/SfHoRIzsBHGQZOTZFP685P9e/7nEDXeSZDH6u5vSxflgINPjzavybT2YM7slWFAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},999:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_3_0.8fcb5e0c.png"}}]);