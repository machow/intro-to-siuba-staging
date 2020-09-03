(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1013:function(t,e,o){"use strict";o.r(e);var s=o(9),a=o(836),n=o.n(a),i=o(986),d=o.n(i),r='<section class=hide-cell><section class=hide-cell> <h1 id=the-filter-verb>The filter verb</h1> <aside class=notes> <p>Now that you&#39;ve seen some code in action on the music data, we&#39;ll focus on writing your own code.</p> <p>In this chapter, you&#39;ll learn about the &quot;verbs&quot; in the siuba package. The first verb you&#39;ll use is filter.</p> </aside></section></section><section class=""><section class=""> <h1 id=the-filter-verb-1>The filter verb</h1> <p><img src='+n()(d.a)+' alt=""></p> <aside class=notes> <p>You use filter when you want to keep only a subset of your observations, based on a particular condition.</p> <p>Filtering data is a common first step in an analysis.</p> </aside></section></section><section data-transition="slide-in none-out" class=""><section data-transition="slide-in none-out" class=""> <h2 id=filter-for-top-songs>Filter for top songs</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.position == 1)\n)</code></pre> <aside class=notes> <p>Every time you apply a verb, you&#39;ll use a pipe. A pipe is a block of commands, surrounded by parentheses.</p> <p>For example, let&#39;s say we want to keep only songs in the first position on the music charts. This is done by using the pipe shown on the slide.</p> <p><strong>Click the down arrow</strong> on the slideshow to see broken into 3 steps:</p> <ol> <li>start the block</li> <li>write the pipe operator and verb name</li> <li>write the operation</li> </ol> </aside></section><section data-transition="none-in none-out" class=""> <h2 id=filter-step-1-start-the-block>Filter step 1: start the block</h2> <pre><code class=language-python>(music_top200\n\n)</code></pre> <aside class=notes> <p>A block is written with opening and closing parentheses, and the name of your data in the middle.</p> <p>Press enter twice after the name of your data, to make an empty line.</p> </aside></section><section data-transition="none-in none-out" class=""> <h2 id=filter-step-2-pipe-operator-and-verb-name>Filter step 2: pipe operator and verb name</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter()\n)</code></pre> <aside class=notes> <p>Next, write a pipe operator using two greater than signs. It says &quot;take whatever is before the pipe operator, and feed it into the next step.&quot;</p> <p>In this case, the next step will be filter.</p> </aside></section><section data-transition="none-in none-out" class=""> <h2 id=filter-step-3-write-the-operation>Filter step 3: write the operation</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.position == 1)\n)</code></pre> <aside class=notes> <p>Finally, we can complete our first verb.</p> <p>We have all 200 hit songs on the charts, but just want to get the first.</p> <p>The &quot;position equals equals 1&quot; is the condition we are using to filter observations. The &quot;equals equals&quot; may be surprising: it&#39;s what we call a &quot;logical equals&quot;- an operation to compare two values: each position, and the number 1.</p> <p>A single equals here would mean something different in python, which you&#39;ll see later.</p> <p>Let&#39;s see what this code outputs.</p> </aside></section></section><section data-transition="none-in slide-out" class=""><section data-transition="none-in slide-out" class=""> <h2 id=filter-for-top-songs-1>Filter for top songs</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.position == 1)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>1858666</td> <td>200.960</td> <td>Americas</td> </tr> <tr> <th>200</th> <td>Austria</td> <td>1</td> <td>Blinding Lights</td> <td>The Weeknd</td> <td>229576</td> <td>201.573</td> <td>Europe</td> </tr> <tr> <th>400</th> <td>Australia</td> <td>1</td> <td>Blinding Lights</td> <td>The Weeknd</td> <td>1757343</td> <td>201.573</td> <td>Oceania</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>11800</th> <td>Uruguay</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>120175</td> <td>200.960</td> <td>Americas</td> </tr> <tr> <th>12000</th> <td>Viet Nam</td> <td>1</td> <td>Sweet Night</td> <td>V</td> <td>189261</td> <td>214.259</td> <td>Asia</td> </tr> <tr> <th>12200</th> <td>South Africa</td> <td>1</td> <td>The Box</td> <td>Roddy Ricch</td> <td>94422</td> <td>196.653</td> <td>Africa</td> </tr> </tbody> </table> <p>62 rows × 7 columns</p> </div> <aside class=notes> <p>Notice that now, we have only 62 rows: that&#39;s how many countries are in the dataset.</p> <p>It&#39;s important to note that you&#39;re not removing any rows from the original <code>music</code> data. You can still use the <code>music</code> object for other analyses, and it won&#39;t be any different than it was before.</p> <p>Instead, filter is returning a new dataset, one with fewer rows, that then gets printed to the screen.</p> </aside></section></section><section class=""><section class=""> <h2 id=filter-for-country>Filter for country</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;United States&quot;)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7800</th> <td>United States</td> <td>1</td> <td>The Box</td> <td>Roddy Ricch</td> <td>12987027</td> <td>196.653</td> <td>Americas</td> </tr> <tr> <th>7801</th> <td>United States</td> <td>2</td> <td>Myron</td> <td>Lil Uzi Vert</td> <td>9163134</td> <td>224.955</td> <td>Americas</td> </tr> <tr> <th>7802</th> <td>United States</td> <td>3</td> <td>Blueberry Faygo</td> <td>Lil Mosey</td> <td>8043475</td> <td>162.547</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>7997</th> <td>United States</td> <td>198</td> <td>Lights Up</td> <td>Harry Styles</td> <td>1606234</td> <td>172.227</td> <td>Americas</td> </tr> <tr> <th>7998</th> <td>United States</td> <td>199</td> <td>Without Me</td> <td>Halsey</td> <td>1606153</td> <td>201.661</td> <td>Americas</td> </tr> <tr> <th>7999</th> <td>United States</td> <td>200</td> <td>Enemies (feat. DaBaby)</td> <td>Post Malone</td> <td>1597824</td> <td>196.760</td> <td>Americas</td> </tr> </tbody> </table> <p>200 rows × 7 columns</p> </div> <aside class=notes> <p>You could choose another condition to filter on, besides the position. For example, suppose we wanted to get only the observations from the United States.</p> <p>We would write this as &quot;filter country equals equals quote United States endquote&quot;, resulting in only the 200 observations from that country.</p> <p>The quotes around United States are important: otherwise Python won&#39;t understand that the words &quot;Hong&quot; and &quot;Kong&quot; are the content of a text variable, as opposed to variable names. You didn&#39;t need quotes around a number like 1, but you do around text.</p> </aside></section></section><section class=""><section class=""> <h2 id=filter-with-two-variables>Filter with two variables</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.position == 1, _.country == &quot;United States&quot;)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7800</th> <td>United States</td> <td>1</td> <td>The Box</td> <td>Roddy Ricch</td> <td>12987027</td> <td>196.653</td> <td>Americas</td> </tr> </tbody> </table> </div> <aside class=notes> <p>We can specify multiple conditions in the filter.</p> <p>Each of the conditions is separated by a comma: here we are saying we want only the one observation for position 1, comma, where the country is the United States.</p> <p>Each of these equals equals expressions is called an argument. This kind of double filter is useful for extracting a single observation you&#39;re interested in.</p> <p>You&#39;ll be able to practice this in the exercises.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>Scroll down to investigate the music data with filter.</p> </aside></section></section>',l=o(835),c=o(7);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c.a.config.optionMergeStrategies;var p={slides:r,VueRemarkRoot:l.a},u=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===h(p[t])&&"function"==typeof p[t].render?e[t]=p[t]:o[t]=function(){return p[t]}}))},m=c.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",_={excerpt:null,title:"Filter",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"wrangle"};var y=function(t){t.options[f]&&(t.options[f]=_),c.a.util.defineReactive(t.options,f,_),t.options.computed=m.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},v=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",[o("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),o("RevealSlides",{attrs:{slides:t.slides}}),o("h3",{attrs:{id:"exercise-1"}},[o("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),o("p",[t._v("The code below is filtering to keep only hits where "),o("code",{pre:!0},[t._v("country")]),t._v(" is United States.\nChange the filter to get hits from Canada.")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("table",{staticClass:"dataframe",attrs:{border:"1"}},[o("thead",[o("tr",{staticStyle:{"text-align":"right"}},[o("th"),o("th",[t._v("country")]),o("th",[t._v("position")]),o("th",[t._v("track_name")]),o("th",[t._v("artist")]),o("th",[t._v("streams")]),o("th",[t._v("duration")]),o("th",[t._v("continent")])])]),o("tbody",[o("tr",[o("th",[t._v("7800")]),o("td",[t._v("United States")]),o("td",[t._v("1")]),o("td",[t._v("The Box")]),o("td",[t._v("Roddy Ricch")]),o("td",[t._v("12987027")]),o("td",[t._v("196.653")]),o("td",[t._v("Americas")])]),o("tr",[o("th",[t._v("7801")]),o("td",[t._v("United States")]),o("td",[t._v("2")]),o("td",[t._v("Myron")]),o("td",[t._v("Lil Uzi Vert")]),o("td",[t._v("9163134")]),o("td",[t._v("224.955")]),o("td",[t._v("Americas")])]),o("tr",[o("th",[t._v("7802")]),o("td",[t._v("United States")]),o("td",[t._v("3")]),o("td",[t._v("Blueberry Faygo")]),o("td",[t._v("Lil Mosey")]),o("td",[t._v("8043475")]),o("td",[t._v("162.547")]),o("td",[t._v("Americas")])]),o("tr",[o("th",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")])]),o("tr",[o("th",[t._v("7997")]),o("td",[t._v("United States")]),o("td",[t._v("198")]),o("td",[t._v("Lights Up")]),o("td",[t._v("Harry Styles")]),o("td",[t._v("1606234")]),o("td",[t._v("172.227")]),o("td",[t._v("Americas")])]),o("tr",[o("th",[t._v("7998")]),o("td",[t._v("United States")]),o("td",[t._v("199")]),o("td",[t._v("Without Me")]),o("td",[t._v("Halsey")]),o("td",[t._v("1606153")]),o("td",[t._v("201.661")]),o("td",[t._v("Americas")])]),o("tr",[o("th",[t._v("7999")]),o("td",[t._v("United States")]),o("td",[t._v("200")]),o("td",[t._v("Enemies (feat. DaBaby)")]),o("td",[t._v("Post Malone")]),o("td",[t._v("1597824")]),o("td",[t._v("196.760")]),o("td",[t._v("Americas")])])])]),o("p",[t._v("200 rows × 7 columns")])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v('(music_top200\n  >> filter(_.country == "United States")\n)\n')])])]),o("prompt-expandable",{attrs:{header:"Comparing results, which artist is in the top 3 in both (the) United States and Canada?"}},[o("q-multiple-choice",[o("q-opt",{attrs:{text:"Roddy Ricch"}},[o("span",[t._v("Nailed it!")])]),o("q-opt",{attrs:{text:"The Weeknd"}},[o("span",[t._v("That artist is only top 3 in the United States")])]),o("q-opt",{attrs:{text:"Tones And I"}},[o("span",[t._v("That artist is only top 3 in the Canada")])])],1)],1),o("h3",{attrs:{id:"exercise-2"}},[o("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),o("ul",[o("li",[t._v("Filter to keep tracks where position equals 5.")])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[t._v("⚠️: "),o("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v("(music_top200\n  >> filter(___)\n)\n")])])]),o("prompt-expandable",{attrs:{header:"Which artist is in position 5 in South Africa?"}},[o("q-multiple-choice",[o("q-opt",{attrs:{text:"Bad Bunny"}},[o("span")]),o("q-opt",{attrs:{text:"Eminem"}},[o("span",[t._v("That's right!")])]),o("q-opt",{attrs:{text:"BTS"}},[o("span")]),o("q-opt",{attrs:{text:"Selena Gomes"}},[o("span")])],1)],1),o("h3",{attrs:{id:"exercise-3"}},[o("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),o("p",[t._v("Find the top 5 songs in Hong Kong.")]),o("p",[t._v("In the slides we discussed the "),o("code",{pre:!0},[t._v("==")]),t._v(" operator. Here is a longer list of some options!")]),o("table",[o("thead",[o("tr",[o("th",[t._v("operator")]),o("th",[t._v("meaning")])])]),o("tbody",[o("tr",[o("td",[o("code",{pre:!0},[t._v("==")])]),o("td",[t._v("is equal to")])]),o("tr",[o("td",[o("code",{pre:!0},[t._v("<")])]),o("td",[t._v("is less than")])]),o("tr",[o("td",[o("code",{pre:!0},[t._v(">")])]),o("td",[t._v("is greater than")])])])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[t._v("⚠️: "),o("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v("(music_top200\n  >> filter(___, ___)\n)\n")])])]),o("h3",{attrs:{id:"exercise-4-looking-at-the-weeknds-streams"}},[o("a",{attrs:{href:"#exercise-4-looking-at-the-weeknds-streams","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 4: looking at The Weeknd's streams")]),o("p",[t._v("How many times has The Weeknd had over 1,000,000 streams?")]),o("details",[o("summary",[t._v("Hint:")]),t._v("\n    Do in steps. Run first to get all rows where the artist is The Weeknd, and then modify your code to get where he has over 1,000,000 streams.\n")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("pre",[o("code",{pre:!0},[t._v("()\n")])])]},proxy:!0}],null,!0)},[o("pre",[o("code",{pre:!0},[t._v("(\n\n)\n")])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(v),"function"==typeof y&&y(v);e.default=v.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},986:function(t,e,o){t.exports=o.p+"assets/img/model-filter.84c9d727.png"}}]);