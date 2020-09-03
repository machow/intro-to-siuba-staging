(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1024:function(t,e,a){"use strict";a.r(e);var s=a(9),o=a(838),i=a(835),n=a(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var d={slides:o.a,VueRemarkRoot:i.a},c=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(d).forEach((function(t){"object"===r(d[t])&&"function"==typeof d[t].render?e[t]=d[t]:a[t]=function(){return d[t]}}))},p=n.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",l={excerpt:null,title:"Visualizing summaries",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"summarize"};var m=function(t){t.options[h]&&(t.options[h]=l),n.a.util.defineReactive(t.options,h,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},u=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[a("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[a("pre",[a("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),a("RevealSlides",{attrs:{slides:t.slides}}),a("h3",{attrs:{id:"exercise-1"}},[a("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1")]),a("h3",{attrs:{id:"exercise-2"}},[a("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2")]),a("h3",{attrs:{id:"exercise-3"}},[a("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof m&&m(u);e.default=u.exports},835:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},838:function(t,e,a){"use strict";var s=a(836),o=a.n(s),i=a(839),n=a.n(i),r=a(840),d=a.n(r),c=a(841),p=a.n(c),h=a(842),l=a.n(h),m='<section class=""><section class=""> <h1 id=visualizing-summarized-data>Visualizing summarized data</h1> <aside class=notes> <p>In this chapter you learned to use the group by and summarize verbs to summarize the music_top200 data by year, by continent, or by both.</p> <p>Now you&#39;ll learn how to turn those summaries into informative visualizations, by returning to the plotnine package from Chapter 2.</p> </aside></section></section><section class=""><section class=""> <h1 id=when-visualizing-raw-data-doesnt-work>When visualizing raw data doesn&#39;t work</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;streams&quot;, color = &quot;country&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+o()(n.a)+' alt=png></p> <pre><code>&lt;ggplot: (8766221640681)&gt;</code></pre><aside class=notes> <p>Suppose we want to look at how many streams countries have. We could make a scatterplot showing each track in each country, like in the plot on the slide.</p> <p>However, there are so many countries that it is hard to read, and half the plot is the legend that shows what color each country is.</p> </aside></section></section><section class=""><section class=""> <h1 id=calculating-min-and-max-streams>Calculating min and max streams</h1> <pre><code class=language-python>by_position = (\n  music_top200\n  &gt;&gt; group_by(_.position)\n  &gt;&gt; summarize(max_streams = _.streams.max(),\n               min_streams = _.streams.min())\n)\nby_position</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>position</th> <th>max_streams</th> <th>min_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>1</td> <td>12987027</td> <td>13604</td> </tr> <tr> <th>1</th> <td>2</td> <td>9163134</td> <td>10801</td> </tr> <tr> <th>2</th> <td>3</td> <td>8043475</td> <td>9510</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>197</th> <td>198</td> <td>1606234</td> <td>1472</td> </tr> <tr> <th>198</th> <td>199</td> <td>1606153</td> <td>1470</td> </tr> <tr> <th>199</th> <td>200</td> <td>1597824</td> <td>1470</td> </tr> </tbody> </table> <p>200 rows × 3 columns</p> </div> <aside class=notes> <p>Rather than plotting the raw data, we can plot a summary.</p> <p>For example, previously we summarized data by continent and position, to find the max and min streams.</p> <p>Let&#39;s do that again, but instead of viewing the summarized data as a table, let&#39;s save it as an object called by_continent_position, so you can visualize the data using plotnine.</p> </aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300"> <h1 id=plotting>Plotting</h1> <pre><code class=language-python>(by_position\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;max_streams&quot;))\n   + geom_point()\n   + labs(title = &quot;Top 200 hits - max streams overall&quot;)\n)</code></pre> <aside class=notes> <p>You would construct the graph with the three steps of plotnine:</p> <ul> <li>The data, which is by_year.</li> <li>The aesthetics, which puts year on the x-axis and total population on the y-axis.</li> <li>The type of graph, which in this case is a scatter plot, represented by geom_point.</li> </ul> <p>Notice that the steps are the same as when you were graphing countries in a scatter plot, even though it&#39;s a new dataset.</p> </aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300"> <h1 id=plotting-result>Plotting (result)</h1> <pre><code class=language-python>(by_position\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;max_streams&quot;))\n   + geom_point()\n   + labs(title = &quot;Top 200 hits - max streams overall&quot;)\n)</code></pre> <p><img src='+o()(d.a)+' alt=png></p> <pre><code>&lt;ggplot: (8766222752321)&gt;</code></pre><aside class=notes> <p>The resulting graph of max streams by position, which is much easier to read than the previous plot with all the raw data.</p> <p>The top track is (by definition) the most streamed, with about 100 million streams!</p> <p>You might notice that the graph is a little misleading because it doesn&#39;t include zero: It&#39;s hard to get a a sense of how many streams the last position track had, since it is at the bottom of the graph.</p> </aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300"> <h1 id=starting-y-axis-at-0>Starting y-axis at 0</h1> <pre><code class=language-python>(by_position\n  >> ggplot(aes("position", "max_streams"))\n   + geom_point()\n   <mark>+ expand_limits(y = 0)</mark>\n   + labs(title = "Top 200 hits - max streams overall"))</code></pre> <p><img src='+o()(p.a)+' alt=png></p> <pre><code>&lt;ggplot: (8766222744449)&gt;</code></pre><aside class=notes> <p>This is a good time to introduce another graphing option. By adding &quot;expand underscore limits y = 0&quot; to the end of the ggplot call, you can specify that you want the y-axis to start at zero.</p> <p>Notice that you added it to the end just like you would with facet_wrap.</p> <p>Now the graph makes it clearer that the top position track has over three times as many streams, as the lowest position one.</p> <p>You could have created other graphs of summarized data, such as a graph of the average streams rather than max, by changing the y aesthetic.</p> </aside><aside class=notes> </aside></section></section><section class=""><section class=""> <h1 id=calculating-min-and-max-streams-1>Calculating min and max streams</h1> <pre><code class=language-python>by_continent_position = (\n  music_top200\n  &gt;&gt; group_by(_.continent, _.position)\n  &gt;&gt; summarize(max_streams = _.streams.max(),\n               min_streams = _.streams.min())\n)\nby_continent_position</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>continent</th> <th>position</th> <th>max_streams</th> <th>min_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Africa</td> <td>1</td> <td>94422</td> <td>94422</td> </tr> <tr> <th>1</th> <td>Africa</td> <td>2</td> <td>74689</td> <td>74689</td> </tr> <tr> <th>2</th> <td>Africa</td> <td>3</td> <td>67552</td> <td>67552</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>997</th> <td>Oceania</td> <td>198</td> <td>225951</td> <td>44570</td> </tr> <tr> <th>998</th> <td>Oceania</td> <td>199</td> <td>225492</td> <td>44364</td> </tr> <tr> <th>999</th> <td>Oceania</td> <td>200</td> <td>225179</td> <td>44291</td> </tr> </tbody> </table> <p>1000 rows × 4 columns</p> </div> <aside class=notes> <p>So far you&#39;ve been graphing the by-position summarized data. But you have also learned to summarize after grouping by both position and continent, to see how much countries are streaming top tracks on different continents continents.</p> </aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300"> <h1 id=visualize>Visualize</h1> <pre><code class=language-python>(by_continent_position\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;max_streams&quot;, color = &quot;continent&quot;))\n   + geom_point()\n   + expand_limits(y = 0)\n   + labs(title = &quot;Top 200 hits - max streams overall&quot;))</code></pre> <p><img src='+o()(l.a)+' alt=png></p> <pre><code>&lt;ggplot: (8766222514297)&gt;</code></pre><aside class=notes> <p>Since you now have data over position within each continent, you need a way to separate it in a visualization. </p> <p>To do that you can use the color aesthetic you learned about in chapter two.</p> <p>By setting color equals continent, you can show five separate trends on the same graph.</p> <p>This lets us see that a country in the Americas has a hit tracks with a large number of streams, while there aren&#39;t any countries in Africa doing a lot of streaming spotify hits (for more on companies competing to stream in Africa, see <a href=https://weetracker.com/2020/05/13/music-streaming-africa/ >this article</a>).</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>You&#39;ll often combine siuba verbs and plotnine visualizations as part of an exploratory analysis, so it&#39;s important to get into the habit of visualizing summarized or processed data.</p> <p>Scroll down to investigate the music data with filter.</p> </aside></section></section>';e.a=m},839:function(t,e,a){t.exports=a.p+"assets/img/03c-slides_4_0.3ebbfec5.png"},840:function(t,e,a){t.exports=a.p+"assets/img/03c-slides_13_0.ba3fc677.png"},841:function(t,e,a){t.exports=a.p+"assets/img/03c-slides_17_0.073c644f.png"},842:function(t,e,a){t.exports=a.p+"assets/img/03c-slides_24_0.a908c50c.png"}}]);