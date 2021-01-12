(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1015:function(t,e,a){"use strict";a.r(e);var s=a(9),i=a(836),o=a.n(i),n=a(980),r=a.n(n),d=a(981),l=a.n(d),h='<section class=""><section class=""> <h1 id=visualization-with-plotnine>Visualization with plotnine</h1> <aside class=notes> <p>In the last chapter, you used the dplyr package to answer some questions about the gapminder dataset.</p> <p>You&#39;ve been able to..</p> <ul> <li>filter for particular observations.</li> <li>arrange to find the highest or lowest values.</li> <li>mutate to add new columns.</li> </ul> <p>However, most of the code so far has only printed out results as a table. Often a better way to understand and present this kind of data is as a graph.</p> <p>In this chapter, you&#39;ll learn the essential skill of data visualization using the plotnine package.</p> </aside></section></section><section class=""><section class=""> <h1 id=visualizing-with-plotnine>Visualizing with plotnine</h1> <p><img src='+o()(r.a)+' alt=png></p> <aside class=notes> <p>In particular, this chapter will show you how to create scatterplots, like the one you see here.</p> <p>Scatterplots compare two variables on an x- and y- axis.</p> <p>Visualization and data wrangling are often intertwined, so you&#39;ll see how the siuba and plotnine packages work closely together to create informative graphs.</p> </aside></section></section><section class=""><section class=""> <h1 id=importing-plotnine>Importing plotnine</h1> <pre><code class=language-python>\nfrom siuba import *\nfrom plotnine import *\n</code></pre> <aside class=notes> <p>You&#39;ll be creating plots using the plotnine package.</p> <p>Just like the siuba package, you&#39;ll have to load it with <code>import</code>.</p> </aside></section></section><section class=""><section class=""> <h1 id=variables>Variables</h1> <pre><code class=language-python>billie = (\n  track_features\n  &gt;&gt; filter(_.artist == &quot;Billie Eilish&quot;)\n)</code></pre> <aside class=notes> <p>In this chapter, you&#39;ll sometimes be visualizing subsets of the <code>track_features</code> data. For example, this code gets only tracks by the artist Billie Eilish.</p> <p>When you&#39;re working with just that subset, sometimes it&#39;s useful to save the filtered data, as a new data frame.</p> <p>To do this, you use the assignment operator.</p> <p><strong>Click down for a breakdown of assignment</strong></p> </aside></section><section class=""> <h1 id=variables-1>Variables</h1> <pre><code class=language-python>(\n  track_features\n  &gt;&gt; filter(_.artist == &quot;Billie Eilish&quot;)\n)</code></pre> <aside class=notes> <p>First, write out the pipe with the filter verb.</p> <p>This is the same as you did in the previous chapter.</p> <p>Note that whether the name of the data, <code>track_features</code> is right after the <code>(</code> or on its own line, the code works the same.</p> </aside></section><section class=""> <h1 id=variables-2>Variables</h1> <pre><code class=language-python>\n<mark>billie = </mark>(\n  track_features\n  >> filter(_.artist == "Billie Eilish")\n)\n</code></pre> <aside class=notes> <p>Then, write the variable name, followed by the variable operator (an equal sign).</p> <p>In this case, the variable name is <code>billie</code>.</p> </aside></section></section><section class=""><section class=""> <h1 id=variables-result>Variables (result)</h1> <pre><code class=language-python>billie</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>artist</th> <th>album</th> <th>track_name</th> <th>energy</th> <th>valence</th> <th>danceability</th> <th>speechiness</th> <th>acousticness</th> <th>popularity</th> <th>duration</th> </tr> </thead> <tbody> <tr> <th>1273</th> <td>Billie Eilish</td> <td>dont smile ...</td> <td>my boy</td> <td>0.3940</td> <td>0.3240</td> <td>0.692</td> <td>0.2070</td> <td>0.472</td> <td>44</td> <td>170.852</td> </tr> <tr> <th>2899</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>listen befo...</td> <td>0.0561</td> <td>0.0820</td> <td>0.319</td> <td>0.0450</td> <td>0.935</td> <td>79</td> <td>242.652</td> </tr> <tr> <th>2950</th> <td>Billie Eilish</td> <td>lovely (wit...</td> <td>lovely (wit...</td> <td>0.2960</td> <td>0.1200</td> <td>0.351</td> <td>0.0333</td> <td>0.934</td> <td>89</td> <td>200.186</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>24857</th> <td>Billie Eilish</td> <td>WHEN WE ALL...</td> <td>ilomilo</td> <td>0.4230</td> <td>0.5720</td> <td>0.855</td> <td>0.0585</td> <td>0.724</td> <td>79</td> <td>156.371</td> </tr> <tr> <th>24997</th> <td>Billie Eilish</td> <td>WHEN I WAS ...</td> <td>WHEN I WAS ...</td> <td>0.3320</td> <td>0.0628</td> <td>0.696</td> <td>0.0425</td> <td>0.853</td> <td>71</td> <td>270.520</td> </tr> <tr> <th>25147</th> <td>Billie Eilish</td> <td>come out an...</td> <td>come out an...</td> <td>0.3210</td> <td>0.1770</td> <td>0.640</td> <td>0.0931</td> <td>0.693</td> <td>74</td> <td>210.376</td> </tr> </tbody> </table> <p>27 rows × 10 columns</p> </div> <aside class=notes> <p>Now if you print the <code>billie</code> dataset, we can see that it&#39;s another table.</p> <p>But this one has only 27 rows: one for each track by Billie Eilish in the original data.</p> </aside></section></section><section class="font-size-sm img-height-300"><section class="font-size-sm img-height-300"> <h1 id=visualizing-with-plotnine-1>Visualizing with plotnine</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n  + geom_point()\n  + labs(title = &quot;Billie Eilish hit track features&quot;)\n)</code></pre> <p><img src='+o()(l.a)+' alt=png></p> <aside class=notes> <p>Suppose you want to examine the energy and valence of Billie Eilish&#39;s songs.</p> <p>You could do this with a scatterplot comparing two variables in our track_features dataset: energy on the x-axis and valence on the y-axis.</p> <p>There are three parts to a plotnine graph.</p> <p><strong>(Click the down button to see a breakdown of the code)</strong></p> </aside></section><section class=font-size-sm> <h1 id=visualizing-with-plotnine-2>Visualizing with plotnine</h1> <pre><code class=language-python>(<mark>billie</mark>\n >> ggplot(aes("energy", "valence"))\n  + geom_point()\n  + labs(title = "Billie Eilish hit track features")  \n)\n</code></pre> <aside class=notes> <p>First is the data that we&#39;re visualizing. In this case, that is the <code>billie</code> variable you just created.</p> </aside></section><section class=font-size-sm> <h1 id=visualizing-with-plotnine-3>Visualizing with plotnine</h1> <pre><code class=language-python>(billie\n >> ggplot(<mark>aes("energy", "valence")</mark>)\n  + geom_point()\n  + labs(title = "Billie Eilish hit track features")\n)\n</code></pre> <aside class=notes> <p>Second is the mapping of variables in your dataset to aesthetics in your graph.</p> <p>An aesthetic is a visual dimension of a graph that can be used to communicate information.</p> <p>In a scatterplot, your two dimensions are the x axis and the y axis, so you write aes (for &quot;aesthetic&quot;), parentheses, x equals gdpPerCap, y = lifeExp, telling it which variables to place on which axes.</p> </aside></section><section class=font-size-sm> <h1 id=visualizing-with-plotnine-4>Visualizing with plotnine</h1> <pre><code class=language-python>(billie\n >> ggplot(aes("energy", "valence"))\n  <mark>+ geom_point()</mark>\n  + labs(title = "Billie Eilish hit track features")\n)\n</code></pre> <aside class=notes> <p>The third step is specifying the type of graph you&#39;re creating. You do that by adding a layer to the graph: use a plus after the ggplot, and then geom underscore point.</p> <p>The &quot;geom&quot; means you&#39;re adding a type of geometric object to the graph, the &quot;point&quot; indicates it&#39;s a scatter plot, where each observation corresponds to one point.</p> <p>Together, these three parts of the code--the data, the aesthetic mapping, and the layer--construct the scatter plot you see here.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>Scroll down to get started with practice!</p> </aside></section></section>',c=a(835),p=a(7);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}p.a.config.optionMergeStrategies;var g={slides:h,VueRemarkRoot:c.a},v=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(g).forEach((function(t){"object"===u(g[t])&&"function"==typeof g[t].render?e[t]=g[t]:a[t]=function(){return g[t]}}))},_=p.a.config.optionMergeStrategies,m="__vueRemarkFrontMatter",f={excerpt:null,title:"Getting started",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize"};var y=function(t){t.options[m]&&(t.options[m]=f),p.a.util.defineReactive(t.options,m,f),t.options.computed=_.computed({$frontmatter:function(){return t.options[m]}},t.options.computed)},b=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("Notebook",{attrs:{branch:"master",repo:"machow/intro-to-siuba",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[s("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\nfrom music_top200 import music_top200, track_features\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),s("RevealSlides",{attrs:{slides:t.slides}}),s("h3",{attrs:{id:"exercise-1"}},[s("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),s("p",[t._v("In this exercise, there are two code cells. The first defines variables for tracks by different artists. The second creates a plot.")]),s("p",[t._v("Read through the code and plot, and then modify it to answer the question beneath.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("table",{staticClass:"dataframe",attrs:{border:"1"}},[s("thead",[s("tr",{staticStyle:{"text-align":"right"}},[s("th"),s("th",[t._v("artist")]),s("th",[t._v("album")]),s("th",[t._v("track_name")]),s("th",[t._v("energy")]),s("th",[t._v("valence")]),s("th",[t._v("danceability")]),s("th",[t._v("speechiness")]),s("th",[t._v("acousticness")]),s("th",[t._v("popularity")]),s("th",[t._v("duration")])])]),s("tbody",[s("tr",[s("th",[t._v("1431")]),s("td",[t._v("ITZY")]),s("td",[t._v("IT'z Different")]),s("td",[t._v("달라달라 (DALLA DALLA)")]),s("td",[t._v("0.853")]),s("td",[t._v("0.713")]),s("td",[t._v("0.790")]),s("td",[t._v("0.0665")]),s("td",[t._v("0.00116")]),s("td",[t._v("73")]),s("td",[t._v("199.874")])]),s("tr",[s("th",[t._v("21148")]),s("td",[t._v("ITZY")]),s("td",[t._v("IT'z Different")]),s("td",[t._v("달라달라 DALLA DALLA")]),s("td",[t._v("0.853")]),s("td",[t._v("0.713")]),s("td",[t._v("0.790")]),s("td",[t._v("0.0665")]),s("td",[t._v("0.00116")]),s("td",[t._v("57")]),s("td",[t._v("199.874")])]),s("tr",[s("th",[t._v("22388")]),s("td",[t._v("ITZY")]),s("td",[t._v("It'z Me")]),s("td",[t._v("WANNABE")]),s("td",[t._v("0.911")]),s("td",[t._v("0.640")]),s("td",[t._v("0.809")]),s("td",[t._v("0.0617")]),s("td",[t._v("0.00795")]),s("td",[t._v("81")]),s("td",[t._v("191.242")])]),s("tr",[s("th",[t._v("25287")]),s("td",[t._v("ITZY")]),s("td",[t._v("IT'z ICY")]),s("td",[t._v("ICY")]),s("td",[t._v("0.904")]),s("td",[t._v("0.814")]),s("td",[t._v("0.801")]),s("td",[t._v("0.0834")]),s("td",[t._v("0.03240")]),s("td",[t._v("72")]),s("td",[t._v("191.142")])])])]),s("p",[t._v("4 rows × 10 columns")])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v('roddy = (\n  track_features\n  >> filter(_.artist == "Roddy Ricch")\n)\n\nbillie = (\n  track_features\n  >> filter(_.artist == "Billie Eilish")\n)\n\nother = (\n  track_features\n  >> filter(_.artist == "ITZY")\n)\n\nother\n')])])]),s("p",[t._v("The code below plots hits for the "),s("code",{pre:!0},[t._v("roddy")]),t._v(" variable.\nNote that you could swap out "),s("code",{pre:!0},[t._v("roddy")]),t._v(" for any of the other two variables above.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("p",[s("g-image",{attrs:{src:a(978),alt:"png"}})],1)]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v('(roddy\n  >> ggplot(aes("danceability", "speechiness"))\n   + geom_point()\n   + expand_limits(x = [0, 1], y = [0, 1])\n)\n')])])]),s("prompt-expandable",{attrs:{header:"Who has the widest range of danceability? (i.e. biggist difference between highest and lowest)"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"Roddy Ricch"}},[s("span",[t._v("Try again.")])]),s("q-opt",{attrs:{text:"Billie Eilish"}},[s("span",[t._v("That's right!")])]),s("q-opt",{attrs:{text:"ITZY"}},[s("span",[t._v("Try again. All the ITZY songs shown have roughly the same danceability.")])])],1)],1),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),s("p",[t._v("Does it look like there any extremely popular songs over 15 minutes long?")]),s("p",[t._v("There is not one concrete answer to this question.\nMake a plot below, and come up with an answer you might share with another person.")]),s("details",[s("summary",[t._v("hint")]),s("blockquote",[s("p",[t._v("The duration column contains the length of each song in seconds. Use this with the popularity column.")])])]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("p",[s("g-image",{attrs:{src:a(979),alt:"png"}})],1)]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v("(track_features\n  >> ggplot()\n\n)\n")])])]),s("details",[s("summary",[t._v("possible answers")]),s("a",{attrs:{target:"_blank",href:"https://v.usetapes.com/XhWxJ9lAox"}},[t._v("screencast")])]),s("h3",{attrs:{id:"exercise-3"}},[s("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),s("p",[t._v('Does the lowest energy track belong to a "low energy" artist? In this exercise, we\'ll explore the questions using tracks by two artists.')]),s("p",[t._v("Here is the track data sorted by energy.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("table",{staticClass:"dataframe",attrs:{border:"1"}},[s("thead",[s("tr",{staticStyle:{"text-align":"right"}},[s("th"),s("th",[t._v("artist")]),s("th",[t._v("album")]),s("th",[t._v("track_name")]),s("th",[t._v("energy")]),s("th",[t._v("valence")]),s("th",[t._v("danceability")]),s("th",[t._v("speechiness")]),s("th",[t._v("acousticness")]),s("th",[t._v("popularity")]),s("th",[t._v("duration")])])]),s("tbody",[s("tr",[s("th",[t._v("1003")]),s("td",[t._v("Simon Smith")]),s("td",[t._v("Loops")]),s("td",[t._v("Blagaslavlaju vas")]),s("td",[t._v("0.000778")]),s("td",[t._v("0.000")]),s("td",[t._v("0.779")]),s("td",[t._v("0.4210")]),s("td",[t._v("0.99400")]),s("td",[t._v("0")]),s("td",[t._v("36.038")])]),s("tr",[s("th",[t._v("5995")]),s("td",[t._v("DMS")]),s("td",[t._v("Prepáčte")]),s("td",[t._v("Nič")]),s("td",[t._v("0.000791")]),s("td",[t._v("0.000")]),s("td",[t._v("0.571")]),s("td",[t._v("0.4460")]),s("td",[t._v("0.95000")]),s("td",[t._v("25")]),s("td",[t._v("37.355")])]),s("tr",[s("th",[t._v("16689")]),s("td",[t._v("Peter Simon")]),s("td",[t._v("Snowrain")]),s("td",[t._v("Snowrain")]),s("td",[t._v("0.003480")]),s("td",[t._v("0.373")]),s("td",[t._v("0.472")]),s("td",[t._v("0.0517")]),s("td",[t._v("0.99600")]),s("td",[t._v("0")]),s("td",[t._v("31.000")])]),s("tr",[s("th",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")]),s("td",[t._v("...")])]),s("tr",[s("th",[t._v("22695")]),s("td",[t._v("Nino Xypolitas")]),s("td",[t._v("Epireastika")]),s("td",[t._v("Eime Enas Allos - Original")]),s("td",[t._v("0.996000")]),s("td",[t._v("0.517")]),s("td",[t._v("0.644")]),s("td",[t._v("0.1030")]),s("td",[t._v("0.00346")]),s("td",[t._v("34")]),s("td",[t._v("214.693")])]),s("tr",[s("th",[t._v("17072")]),s("td",[t._v("Otira")]),s("td",[t._v("Soundboy Burnin’")]),s("td",[t._v("Soundboy Burnin’")]),s("td",[t._v("0.997000")]),s("td",[t._v("0.327")]),s("td",[t._v("0.568")]),s("td",[t._v("0.2330")]),s("td",[t._v("0.00299")]),s("td",[t._v("14")]),s("td",[t._v("173.846")])]),s("tr",[s("th",[t._v("11069")]),s("td",[t._v("Scooter")]),s("td",[t._v("No Time To Chill")]),s("td",[t._v("How Much Is the Fish?")]),s("td",[t._v("0.999000")]),s("td",[t._v("0.615")]),s("td",[t._v("0.533")]),s("td",[t._v("0.0786")]),s("td",[t._v("0.00130")]),s("td",[t._v("48")]),s("td",[t._v("226.200")])])])]),s("p",[t._v("25321 rows × 10 columns")])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v("# this code is to help you examine track energy levels \n(\n  track_features\n  >> arrange(_.energy)\n)\n")])])]),s("p",[t._v(' Notice that Simon Smith has the lowest energy song ("Blagaslavlaju vas"), while Scooter has the highest energy song ("How Much is the Fish?").')]),s("p",[t._v("First, filter the track_features data to create a variable named "),s("code",{pre:!0},[t._v("artist_low")]),t._v(" that has only tracks by the artist Simon Smith.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v("# create artist_low variable here\n\nartist_low = (\n    \n)\n")])])]),s("p",[t._v("Next, create a variable named "),s("code",{pre:!0},[t._v("artist_high")]),t._v(" with tracks by the artist Scooter, who has the highest energy song.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v("# create artist_high variable here\n\n \n")])])]),s("p",[t._v("Based on separate plots of their data, does the artist with the lowest energy track seem to have lower energy songs in general?")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("p",[t._v("⚠️: "),s("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v("# examine plots of each artist, to answer question\n# note, we're examining energy, so to make a scatterplot you could set\n# the second variable to anything interesting (e.g. popularity)\n\n(___\n\n)\n")])])]),s("details",[s("summary",[t._v("possible answer")]),s("p",[t._v("The high energy artist, Scooter, seems to only have high energy songs (from about .9 to 1 energy).")]),s("p",[t._v("On the other hand, the low energy artist, Simon Smith, seems to have a wide range of energy values (from about 0 to 1 energy).")])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof v&&v(b),"function"==typeof y&&y(b);e.default=b.exports},835:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},978:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/02a-intro-data-viz_5_0.a0857a9.749a3bdae7aef8c5b0adcbf430478a02.png",size:{width:569,height:432},sizes:"(max-width: 569px) 100vw, 569px",srcset:["/assets/static/02a-intro-data-viz_5_0.a0857a9.749a3bdae7aef8c5b0adcbf430478a02.png 569w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 569 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2d1ad067d10562c21d0f6cb32d5feed6'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2d1ad067d10562c21d0f6cb32d5feed6)' width='569' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAADqElEQVRo3uVaa08qMRDd//9f%2bCYJSkIiyiM%2bIIryViOivAn4ABS15jQZU4aW7XJz7122TZrNFtqdGWbOzJzFE8r4/v7%2bvWJ%2bfn6u3EdxeHxBVfTm5mbFKJE3ACn5/v4uer2eKJVKbnkAKTmfz0W32xVXV1duh0CtVnMvBEhRAGC1WnXLAKqiX19fbhtguVyK6%2btrdzEABiiXy24YgBdAmM6FAFfQKQOoyI8i6O3tTV6dSYOk3HQ6FfV6Xc7b21txcXHhHgYsFgsJgPAAp0LAeQxQp1OVoKqYs6UwQK9YLK4o%2bvHx4U43eHJyItLptLu9wNnZmchkMr%2bKEx3mjAEuLy9l0cPHrhdCvMTX6SENEI/HRT6fl7/609OT5AI7nc5Od4OqzOTVRgMAA6AsgO/h4UGCIgwRBU6QZzltCJyfn/%2bCYFRCgDpajEQiIUleowfkcjlxdHQUKRBUvbbf78sS32gAxP/e3l4k0qCO2/ANgUqlIr2AM0K7CoK66tYIgnwhrAYwpTSKc64outnX11df%2bY3NUNhCwNa1ySCNRkMkk8m1NBioHUZohAkDuAz4hU9PTzcWO37e63Hgg%2bujHsA1TGmQflmkbIA2xvPz85oBTJ7i6wEqJQY6HNVgmCgx9b3lbDZb%2bSwWi0nZqY33K383UmIgRF9eXmTeDFsa1Lk2PAMGIcWDymqkxXEfZhDkoYExGo3E8fHx2roVJcbjJuyVoE4eeG7Qt1k7%2bXJUlQmdLMJWB5iBQoAfHmZKTDVAq9WSsmKMx2PZ%2bKhFklUW2DUPMMkD4L6/v1/zAt8soCsawowBOszSASNqBtQKW3nALvEBvDegexRJgQygNhLtdltiAB1KB/NX6Lr1f7XH7yzVI/geWjMaAC9HqRuM8tgYAuAKwRE%2bPj4aJzyFr4FPxBXE6qa9uj10tfm%2bOm3k4p%2bjcNKCIBkBPBomusK7uztJLUEp/IcQEw%2bGgeieJtZAqKIl5Z%2bRYOoazsQevJ2C59nugUx4p0EyqLIhPUI%2b9fuQH%2bdDLuiFtOnZMKiDwUButh0QCBkEjZXtaDabEnMgnM1AU4SGDUYYDofWz0G1OJlMNoeA7k/TmDqw0U36fwH2cJDaVKWpz9IBGD8HzwkqG/%2b%2b96e8uk2BwlMpXG9/f1%2bmKbTcmIVCQRwcHIhUKiUZajQ15HUm2s5vzUYXbxsebpsChWMLDJDNZmUMA2wPDw%2blAaA4sg/oLMSrqaozPSOoLt7/KlqC8Pp/swj7AeRTYlw0ypfAAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},979:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/02a-intro-data-viz_8_0.4d6b624.f5529f7d3b1c70932740789bef48b285.png",size:{width:519,height:393},sizes:"(max-width: 519px) 100vw, 519px",srcset:["/assets/static/02a-intro-data-viz_8_0.4d6b624.f5529f7d3b1c70932740789bef48b285.png 519w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 519 393' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-9300fdb47b8904dc7b53d4a4ab3890c4'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-9300fdb47b8904dc7b53d4a4ab3890c4)' width='519' height='393' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAApklEQVRo3u3aSwrEIBBF0ex/cc5UnLkHfyBqNdokZA2p%2b%2bCJU486q2utJXfeey259hJjlFqrSoQDYK2VlJJeAO%2b95JwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4JcE%2bKzjkPgpYeAOectNZEY55ZYWOMhBDOa/h694Xvs/be/wBjDCmlqOqejt/f/QfYZpJROcDlVwAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},980:function(t,e,a){t.exports=a.p+"assets/img/02-slides_6_0.bc5373f7.png"},981:function(t,e,a){t.exports=a.p+"assets/img/02-slides_24_0.9b206500.png"}}]);