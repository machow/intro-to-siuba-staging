(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1003:function(t,e,a){t.exports=a.p+"assets/img/model-summarize.47910dbc.png"},1019:function(t,e,a){"use strict";a.r(e);var o=a(9),r=a(836),s=a.n(r),n=a(848),d=a.n(n),i=a(1003),_=a.n(i),v=s()(d.a),c=s()(_.a),l='<section class=""><section class=""> <h1 id=summarizing-data>Summarizing data</h1> <aside class=notes> <p>In this chapter, you&#39;ll return to the topic of data transformation with siuba to learn more ways to explore your data.</p> </aside></section></section><section class=""><section class=""> <h1 id=data-analysis>Data analysis</h1> <p><img src='+v+' alt=""></p> <aside class=notes> <p>Analyses will usually involve a cycle between these steps of data transformation and visualization, as well as additional components of the data science workflow, like modeling (that this course won&#39;t focus on).</p> </aside></section></section><section class=""><section class=""> <h1 id=extracting-data>Extracting data</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;Japan&quot;, _.position == 1)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>6400</th> <td>Japan</td> <td>1</td> <td>I LOVE...</td> <td>Official HIGE DANdism</td> <td>1591844</td> <td>282.027</td> <td>Asia</td> </tr> </tbody> </table> </div> <aside class=notes> <p>You&#39;ve learned to use the filter verb to pull out individual observations, such as the track in the first position for Japan.</p> <p>Notice that the track&#39;s duration is about 280 seconds. Is this is shorter or longer than the average track.</p> <p>You&#39;ll learn to answer this question by summarizing many observations into a single data point.</p> </aside></section></section><section class=""><section class=""> <h1 id=the-summarize-verb>The summarize verb</h1> <p><img src='+c+' alt=""></p> <pre><code class=language-python>(music_top200\n  &gt;&gt; summarize(avg_duration = _.duration.mean())\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>205.990073</td> </tr> </tbody> </table> </div> <aside class=notes> <p>You might want to know if the 280 seconds we saw is longer than the average track across all countries.</p> <p>You would do this with the summarize verb. Notice that summarize collapses the entire table down into one row.</p> <p>In the output, we see the answer to our question: mean (or average) duration was around 205 seconds.</p> <p><strong>(Click down for a breakdown of the code)</strong></p> </aside></section><section class=""> <h1 id=the-summarize-verb-1>The summarize verb</h1> <p><img src='+c+' alt=""></p> <pre><code class=language-python>(music_top200\n  >> summarize(<mark>avg_duration =</mark> _.duration.mean())\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>205.990073</td> </tr> </tbody> </table> </div> <aside class=notes> <p>Take your <code>music_top200</code> data, pipe it into summarize.</p> <p>Then, specify that you&#39;re creating a summary column called avg_duration.</p> <p>Notice that the highlighted code is similar to when created a new column with the mutate verb.</p> </aside></section><section class=""> <h1 id=the-summarize-verb-2>The summarize verb</h1> <p><img src='+c+' alt=""></p> <pre><code class=language-python>(music_top200\n  >> summarize(avg_duration = _.duration<mark>.mean()</mark>)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>205.990073</td> </tr> </tbody> </table> </div> <aside class=notes> <p>The &quot;duration dot mean, followed by open and close parentheses&quot; is worth examining.</p> <p>This is calling the <strong>method</strong> mean on the variable duration. The mean method calculates the average of a set of values.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-one-country>Summarizing one country</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;Japan&quot;)\n  &gt;&gt; summarize(avg_duration = _.duration.mean())\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>250.53499</td> </tr> </tbody> </table> </div> <aside class=notes> <p>If you think about it, it doesn&#39;t really make sense to summarize across all countries. It may make more sense to ask compare our track to averages in the same country: Japan.</p> <p>To answer this, you can combine the summarize verb with filter: filter your data for a particular country first, then summarize the result. This shows you that the average track duration in the Japan top 200 chart was about 250 seconds.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-into-multiple-columns>Summarizing into multiple columns</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;Japan&quot;)\n  &gt;&gt; summarize(\n      avg_duration = _.duration.mean(),\n      ttl_streams = _.streams.sum()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> <th>ttl_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>250.53499</td> <td>48942067</td> </tr> </tbody> </table> </div> <aside class=notes> <p>You can create multiple summaries at once with the summarize verb.</p> <p>For example, suppose that along with finding the average track duration in Japan, you want to find their chart&#39;s total streams.</p> <p>To do that, add a comma after the mean of the duration. Then, specify another column you&#39;re creating.</p> <p>You could give it a useful name like ttl_streams, and say that it&#39;s equal to the sum--that&#39;s another built-in function--of the pop variable.</p> </aside></section></section><section class=""><section class=""> <h1 id=methods-for-summarizing>Methods for summarizing</h1> <p>E.g. <code>_.some_column.mean()</code></p> <ul> <li><code>.mean()</code></li> <li><code>.sum()</code></li> <li><code>.median()</code></li> <li><code>.min()</code></li> <li><code>.max()</code></li> </ul> <aside class=notes> <p>The mean and sum are just two methods you could use to summarize a variable within a dataset.</p> <p>Another example is median: the median represents the point in a set of numbers where half the numbers are above that point and half of the numbers are below.</p> <p>Two others are min, for minimum, and max, for maximum.</p> <p>In the exercises, you&#39;ll use several of these functions to answer questions about the <code>music_top200</code> dataset.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> </aside></section></section>',h=a(835),u=a(7);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u.a.config.optionMergeStrategies;var p={slides:l,VueRemarkRoot:h.a},f=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===m(p[t])&&"function"==typeof p[t].render?e[t]=p[t]:a[t]=function(){return p[t]}}))},g=u.a.config.optionMergeStrategies,y="__vueRemarkFrontMatter",b={excerpt:null,title:"Summarize",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"summarize"};var x=function(t){t.options[y]&&(t.options[y]=b),u.a.util.defineReactive(t.options,y,b),t.options.computed=g.computed({$frontmatter:function(){return t.options[y]}},t.options.computed)},A=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[a("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[a("pre",[a("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),a("RevealSlides",{attrs:{slides:t.slides}}),a("h3",{attrs:{id:"exercise-1"}},[a("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),a("p",[t._v("The code below calculates the average duration.")]),a("ul",[a("li",[t._v("Uncomment the summarize verb.")]),a("li",[t._v("Change it to calculate median duration.")]),a("li",[t._v("Make sure to change the resulting column name to indicate its a median.")])]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("Argentina")]),a("td",[t._v("2")]),a("td",[t._v("Tattoo")]),a("td",[t._v("Rauw Alejandro")]),a("td",[t._v("1344382")]),a("td",[t._v("202.887")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("Argentina")]),a("td",[t._v("3")]),a("td",[t._v("Hola - Remix")]),a("td",[t._v("Dalex")]),a("td",[t._v("1330011")]),a("td",[t._v("249.520")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")])])])]),a("p",[t._v("12400 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("(music_top200\n  #>> summarize(avg_duration = _.duration.mean())\n)\n")])])]),a("p",[t._v("Q: what is the median duration?")]),a("details",[a("summary",[t._v("answer")]),t._v("201.084")]),a("p",[t._v("Q: Add a second argument to summarize, which calculates the sum of streams. How large is it?")]),a("details",[a("summary",[t._v("answer")]),t._v("301,822,525")]),a("h3",{attrs:{id:"exercise-2"}},[a("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),a("p",[t._v("Use verbs you learned in chapter 1 to do the following:")]),a("ul",[a("li",[t._v("find the track with the lowest duration")]),a("li",[t._v("subset the data to keep only the row for that track")])]),a("p",[t._v("(Note, you may need to run code multiple times)")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("Argentina")]),a("td",[t._v("2")]),a("td",[t._v("Tattoo")]),a("td",[t._v("Rauw Alejandro")]),a("td",[t._v("1344382")]),a("td",[t._v("202.887")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("Argentina")]),a("td",[t._v("3")]),a("td",[t._v("Hola - Remix")]),a("td",[t._v("Dalex")]),a("td",[t._v("1330011")]),a("td",[t._v("249.520")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")])])])]),a("p",[t._v("12400 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("(music_top200\n\n)\n")])])]),a("p",[t._v("Now, use summarize to calculate the min duration, and the max duration directly.")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("Argentina")]),a("td",[t._v("2")]),a("td",[t._v("Tattoo")]),a("td",[t._v("Rauw Alejandro")]),a("td",[t._v("1344382")]),a("td",[t._v("202.887")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("Argentina")]),a("td",[t._v("3")]),a("td",[t._v("Hola - Remix")]),a("td",[t._v("Dalex")]),a("td",[t._v("1330011")]),a("td",[t._v("249.520")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")])])])]),a("p",[t._v("12400 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("(music_top200\n\n)\n")])])]),a("prompt-expandable",{attrs:{header:"Why would you use summarize like this, rather than the arrange and filter approach?"}},[a("q-multiple-choice",[a("q-opt",{attrs:{text:"The min and max values might be in different observations (rows)."}},[a("span",[t._v("That's right. Filter keeps specific rows, but summarize can collect values from across rows.")])]),a("q-opt",{attrs:{text:"It keeps more of the original data."}},[a("span",[t._v("Try again. Filter keeps all the variables (columns), while summarize will remove most of them.")])]),a("q-opt",{attrs:{text:"The arrange and filter approach can do anything summarize can."}},[a("span",[t._v("Try again.")])])],1)],1),a("h3",{attrs:{id:"exercise-3"}},[a("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),a("p",[t._v("The examples below show what happens verbs like filter and mutate use methods like "),a("code",{pre:!0},[t._v(".mean()")]),t._v(".")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")]),a("th",[t._v("avg_streams")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")]),a("td",[t._v("243405.2625")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("Argentina")]),a("td",[t._v("2")]),a("td",[t._v("Tattoo")]),a("td",[t._v("Rauw Alejandro")]),a("td",[t._v("1344382")]),a("td",[t._v("202.887")]),a("td",[t._v("Americas")]),a("td",[t._v("243405.2625")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("Argentina")]),a("td",[t._v("3")]),a("td",[t._v("Hola - Remix")]),a("td",[t._v("Dalex")]),a("td",[t._v("1330011")]),a("td",[t._v("249.520")]),a("td",[t._v("Americas")]),a("td",[t._v("243405.2625")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")]),a("td",[t._v("243405.2625")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")]),a("td",[t._v("243405.2625")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")]),a("td",[t._v("243405.2625")])])])]),a("p",[t._v("12400 rows × 8 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("# create column for average streams\n(music_top200\n  >> mutate(avg_streams = _.streams.mean())\n)\n")])])]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("108")]),a("td",[t._v("Argentina")]),a("td",[t._v("109")]),a("td",[t._v("Me Gusta")]),a("td",[t._v("Ciro y los Persas")]),a("td",[t._v("243159")]),a("td",[t._v("289.093")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("109")]),a("td",[t._v("Argentina")]),a("td",[t._v("110")]),a("td",[t._v("Tal Vez")]),a("td",[t._v("Paulo Londra")]),a("td",[t._v("242870")]),a("td",[t._v("264.483")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("110")]),a("td",[t._v("Argentina")]),a("td",[t._v("111")]),a("td",[t._v("Physical")]),a("td",[t._v("Dua Lipa")]),a("td",[t._v("239225")]),a("td",[t._v("193.829")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")])])])]),a("p",[t._v("9341 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("# keep observations where streams are above average\n(music_top200\n  >> filter(_.streams < _.streams.mean())\n)\n")])])]),a("p",[t._v("Based on the examples above, can you use only the filter verb to get the most streamed song in all the data?")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("0")]),a("td",[t._v("Argentina")]),a("td",[t._v("1")]),a("td",[t._v("Tusa")]),a("td",[t._v("KAROL G")]),a("td",[t._v("1858666")]),a("td",[t._v("200.960")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("1")]),a("td",[t._v("Argentina")]),a("td",[t._v("2")]),a("td",[t._v("Tattoo")]),a("td",[t._v("Rauw Alejandro")]),a("td",[t._v("1344382")]),a("td",[t._v("202.887")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("2")]),a("td",[t._v("Argentina")]),a("td",[t._v("3")]),a("td",[t._v("Hola - Remix")]),a("td",[t._v("Dalex")]),a("td",[t._v("1330011")]),a("td",[t._v("249.520")]),a("td",[t._v("Americas")])]),a("tr",[a("th",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),a("tr",[a("th",[t._v("12397")]),a("td",[t._v("South Africa")]),a("td",[t._v("198")]),a("td",[t._v("Black And White")]),a("td",[t._v("Niall Horan")]),a("td",[t._v("11771")]),a("td",[t._v("193.090")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12398")]),a("td",[t._v("South Africa")]),a("td",[t._v("199")]),a("td",[t._v("When I See U")]),a("td",[t._v("Fantasia")]),a("td",[t._v("11752")]),a("td",[t._v("217.347")]),a("td",[t._v("Africa")])]),a("tr",[a("th",[t._v("12399")]),a("td",[t._v("South Africa")]),a("td",[t._v("200")]),a("td",[t._v("Psycho!")]),a("td",[t._v("MASN")]),a("td",[t._v("11743")]),a("td",[t._v("197.217")]),a("td",[t._v("Africa")])])])]),a("p",[t._v("12400 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("# modify the filter verb below\n\n(music_top200\n  >> filter()\n)\n")])])]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("table",{staticClass:"dataframe",attrs:{border:"1"}},[a("thead",[a("tr",{staticStyle:{"text-align":"right"}},[a("th"),a("th",[t._v("country")]),a("th",[t._v("position")]),a("th",[t._v("track_name")]),a("th",[t._v("artist")]),a("th",[t._v("streams")]),a("th",[t._v("duration")]),a("th",[t._v("continent")])])]),a("tbody",[a("tr",[a("th",[t._v("7800")]),a("td",[t._v("United States")]),a("td",[t._v("1")]),a("td",[t._v("The Box")]),a("td",[t._v("Roddy Ricch")]),a("td",[t._v("12987027")]),a("td",[t._v("196.653")]),a("td",[t._v("Americas")])])])]),a("p",[t._v("1 rows × 7 columns")])]},proxy:!0}],null,!0)},[a("pre",[a("code",{pre:!0},[t._v("(music_top200\n  >> filter(_.streams == _.streams.max())\n)\n")])])]),a("details",[a("summary",[t._v("What is the most streamed song?")]),t._v("The Box by Roddy Ricch")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof f&&f(A),"function"==typeof x&&x(A);e.default=A.exports},835:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},848:function(t,e,a){t.exports=a.p+"assets/img/model-workflow.b74b7608.png"}}]);