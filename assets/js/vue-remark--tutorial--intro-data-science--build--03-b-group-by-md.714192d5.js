(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1014:function(t,e,a){"use strict";a.r(e);var n=a(9),s=a(836),o=a.n(s),i=a(983),r=a.n(i),d='<section class=""><section class=""> <h1 id=the-group_by-verb>The group_by verb</h1> <p>In the last lesson, you used the summarize verb to calculate an average either,</p> <ul> <li>across all countries (the entire dataset)</li> <li>within a particular country (filtered data)</li> </ul> <p>In this lesson you&#39;ll learn the group_by verb, which opens up a new option for calculating an average:</p> <ul> <li>within each country</li></ul></section></section><section class=""><section class="">   <h1 id=the-group_by-verb-1>The group_by verb</h1> <p><img src='+o()(r.a)+' alt=""></p> <aside class=notes> <p>You use group_by to define groupings of data (blue and green chunks in diagram).</p> <p>Then, you would follow it with summarize to convert those groups to a single value (like a mean).</p> </aside></section></section><section class=""><section class=""> <h1 id=the-summarize-verb>The summarize verb</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;Japan&quot;)\n  &gt;&gt; summarize(avg_duration = _.duration.mean()))</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>250.53499</td> </tr> </tbody> </table> </div> <aside class=notes> <p>For example, here you&#39;re finding the average track duration in Japan.</p> <p>What if we weren&#39;t interested just in the average duration for Japan, but for each country in the dataset?</p> <p>You could rerun this code and change the country each time, but that&#39;s very tedious.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-by-country>Summarizing by country</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.country)\n  &gt;&gt; summarize(avg_duration = _.duration.mean())\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>212.847855</td> </tr> <tr> <th>1</th> <td>Australia</td> <td>204.795300</td> </tr> <tr> <th>2</th> <td>Austria</td> <td>184.894870</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> </tr> <tr> <th>59</th> <td>United States</td> <td>190.827500</td> </tr> <tr> <th>60</th> <td>Uruguay</td> <td>210.796985</td> </tr> <tr> <th>61</th> <td>Viet Nam</td> <td>217.222830</td> </tr> </tbody> </table> <p>62 rows × 2 columns</p> </div> <aside class=notes> <p>Instead, you can use the group_by verb, which tells siuba to summarize within groups instead of summarizing the entire dataset. Notice that this replaces the filter country equals Japan with group_by country.</p> <p><code>group_by(_.country)</code> tells the summarize step that it should perform the summary within each country: within Argentina, then within Australia, and so on through Viet Nam, then combine the results.</p> <p>Instead of getting one row overall, you now get <strong>one row for each country</strong>. There&#39;s now a year variable along with the new avg_duration variable.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-by-continent-and-position>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.continent, _.position)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>continent</th> <th>position</th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Africa</td> <td>1</td> <td>94422</td> <td>94422</td> </tr> <tr> <th>1</th> <td>Africa</td> <td>2</td> <td>74689</td> <td>74689</td> </tr> <tr> <th>2</th> <td>Africa</td> <td>3</td> <td>67552</td> <td>67552</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>997</th> <td>Oceania</td> <td>198</td> <td>44570</td> <td>225951</td> </tr> <tr> <th>998</th> <td>Oceania</td> <td>199</td> <td>44364</td> <td>225492</td> </tr> <tr> <th>999</th> <td>Oceania</td> <td>200</td> <td>44291</td> <td>225179</td> </tr> </tbody> </table> <p>1000 rows × 4 columns</p> </div> <aside class=notes> <p>You can also group by multiple variables.</p> <p>Suppose you&#39;re interested calculating min and max streams within each continent, and each position.</p> <p>Now the output has one row for each combination of a continent and position.</p> <p><strong>(Click down to see what the steps leading to this code might look like)</strong></p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-1>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>1470</td> <td>12987027</td> </tr> </tbody> </table> </div> <aside class=notes> <p>You might start by summarizing min and max streams across all the data.</p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-2>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.continent == &quot;Oceania&quot;, _.position == 1)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>321272</td> <td>1757343</td> </tr> </tbody> </table> </div> <aside class=notes> <p>Then, you might add a filter, so your summarize is over one specific grouping (position 1 tracks in Oceania).</p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-3>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.continent, _.position)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>continent</th> <th>position</th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Africa</td> <td>1</td> <td>94422</td> <td>94422</td> </tr> <tr> <th>1</th> <td>Africa</td> <td>2</td> <td>74689</td> <td>74689</td> </tr> <tr> <th>2</th> <td>Africa</td> <td>3</td> <td>67552</td> <td>67552</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>997</th> <td>Oceania</td> <td>198</td> <td>44570</td> <td>225951</td> </tr> <tr> <th>998</th> <td>Oceania</td> <td>199</td> <td>44364</td> <td>225492</td> </tr> <tr> <th>999</th> <td>Oceania</td> <td>200</td> <td>44291</td> <td>225179</td> </tr> </tbody> </table> <p>1000 rows × 4 columns</p> </div> <aside class=notes> <p>Finally, you might replace the filter with a group_by.</p> <p>Note that you might save this result as a variable and use it in a new pipe or visualization. For example, the new pipe might filter to keep where position is 1, so you can inspect min and max streams for the top tracks across continents.</p> </aside><aside class=notes> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> </section></section>',c=a(835),l=a(7);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}l.a.config.optionMergeStrategies;var p={slides:d,VueRemarkRoot:c.a},u=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===h(p[t])&&"function"==typeof p[t].render?e[t]=p[t]:a[t]=function(){return p[t]}}))},m=l.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",y={excerpt:null,title:"Group by",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"summarize"};var b=function(t){t.options[g]&&(t.options[g]=y),l.a.util.defineReactive(t.options,g,y),t.options.computed=m.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},f=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/intro-to-siuba",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[n("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[n("pre",[n("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\nfrom music_top200 import music_top200, track_features\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n\n# remove the <ggplot: (528...)> printout\nhtml_formatter.for_type(ggplot, lambda g: "")\n')])])])],1),n("RevealSlides",{attrs:{slides:t.slides}}),n("h3",{attrs:{id:"exercise-1"}},[n("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),n("p",[t._v("Modify the code below so it calculates max popularity and average danceability "),n("strong",[t._v("for each artist")]),t._v(".")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[n("table",{staticClass:"dataframe",attrs:{border:"1"}},[n("thead",[n("tr",{staticStyle:{"text-align":"right"}},[n("th"),n("th",[t._v("max_popularity")]),n("th",[t._v("avg_danceability")])])]),n("tbody",[n("tr",[n("th",[t._v("0")]),n("td",[t._v("99")]),n("td",[t._v("0.677937")])])])]),n("p",[t._v("1 rows × 2 columns")])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[t._v("artists = (track_features\n  >> summarize(\n      max_popularity = _.popularity.max(),\n      avg_danceability = _.danceability.mean()\n  )\n)\nartists\n")])])]),n("p",[t._v("Make a scatterplot of the data.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",[t._v("\n\n\n\n")])])]),n("p",[t._v("In the plot above, what strange thing is going on with the distribution of max popularity?")]),n("details",[n("summary",[t._v("possible answer")]),n("p",[t._v("There are many artists with a max popularity of 0! ")])]),n("h3",{attrs:{id:"exercise-2"}},[n("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),n("p",[t._v("In the last exercise of the facets chapter, you examined track features for three artists.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",{pre:!0},[t._v('# This code keeps the 3 artists listed ----\n\nartists_to_keep = ["Billie Eilish", "ITZY", "Roddy Ricch"]\n\nsome_artists = (\n  track_features\n  >> filter(_.artist.isin(artists_to_keep))\n)\n\n#uncomment line below to see data\n#some_artists\n')])])]),n("p",[t._v("We used a plot and intuition to judge who tended to have highest energy and valence tracks.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[n("pre",[n("code",{pre:!0},[t._v("/opt/hostedtoolcache/Python/3.8.12/x64/lib/python3.8/site-packages/plotnine/utils.py:371: FutureWarning: The frame.append method is deprecated and will be removed from pandas in a future version. Use pandas.concat instead.\n")])]),n("p",[n("g-image",{attrs:{src:a(982),alt:"png"}})],1)]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[t._v('# This code plots the data ----\n(some_artists\n  >> ggplot(aes("energy", "valence", color = "artist"))\n   + geom_point()\n   + facet_wrap("~artist", nrow = 1)\n   + labs(title = "Song features across 3 artists")\n)\n')])])]),n("p",[t._v("Now you should be able to answer the question more directly!")]),n("p",[n("strong",[t._v("Use a grouped summarize to calculate the mean energy and valence for each artist")]),t._v(".")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",[t._v("# summarizing mean energy and valence for each artist\n\n\n\n")])])]),n("p",[t._v("Q: In this data, which artist has the lowest average energy, and what is its value?")]),n("details",[n("summary",[t._v("answer")]),t._v("Billie Eilish, 0.321004")]),n("p",[t._v("Q: What about for lowest average valence?")]),n("details",[n("summary",[t._v("answer")]),t._v("Billie Eilish, 0.266948")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof b&&b(f);e.default=f.exports},835:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},982:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/03b-group-by_11_1.8e7c192.647ad2f32f107cd70cca876c8c7c6e60.png",size:{width:482,height:293},sizes:"(max-width: 482px) 100vw, 482px",srcset:["/assets/static/03b-group-by_11_1.8e7c192.647ad2f32f107cd70cca876c8c7c6e60.png 482w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 482 293' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e2a791a2c9033a94167b22cadb76f55b'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e2a791a2c9033a94167b22cadb76f55b)' width='482' height='293' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAACXBIWXMAAAsTAAALEwEAmpwYAAAG3ElEQVRo3sVaZ1PrOhDN//81zMAHGBiGdimXXhII6U4jEBJSHbfs0xFZX9u4xTh5ntHItiRrtTpb5Qz5XPP5PLRwH8uyXOMMw6Blr7AxPFdcmpJcmaDFhzEE12QyoT9//tDx8TGdnZ3J%2bvz8nLa2tuj09JT29vbo%2bvrablcUhY6Ojuj29lY%2bo08%2bn5fl/v6eTk5OaH9/X9a7u7v08vISuvAgmpdlRiYOx/0u0zSpUCjQ4%2bMjlctl2tzcpE6nQ9lsVpZcLkdPT0%2byDfdvb2%2byb71ep2KxKNsqlQq1223Z5/n5Wd6jL5hSq9VCCfejLwkSMn5cLJVKcnGoQRwWhJ17fX2V9w8PD3KHqtUqNZtNubtYDEqj0ZAFC0WNNvTBAsEAjEMbCtrwDSwW9/yOayADczJT7u7uJF34FmgDI1GjXdO0ZAhwQocLJsXFMg4mANqXl5c2hAF/EOqUYxB2dXVlv8N4IAUXFgp4g2BGENp5Diwi%2b5S123Dd3NzIeXZ2diTTcY/5QQf6MO1g/GAwSC4C3kEXFxc2AsBlFDAFu4AabVxzO5gEWEMPgCB%2b7yz8TXv3it91pVShfO5FLoz7cj/MCdQAeXiPZ%2b%2b8QJaqqr9DAHbi8/OTRqOR/GiSazab2bIbhxCBN1m/6R1q62%2bklGuJZTmxDuBBuq5LGEL2ojRwkFaeTqdy95mhcceplkpjY0LlUjnRvL%2b2At5BgJbzfdRETgZA1mMjwPkNa07FUvFXCEjkB/gpQS8Dwu6TMoDbNUujL3MQyoA0djqWGeQ6CAGWEBNL11JBALcPjAEVVWEZhDFYlgFpMCEWAuzdardIazZWIgJhDIhC4K8R4P0g2%2bogbqclAtznw%2bhSTVUCrYCNli9DmEx1oWTTEQUbAXBcYMJ6vZ6LAVG7kQYDtLlGI2PssgK%2b35%2bYdH87DkVFmKWIZACIf39/lx6dS/aFm4n7WV0hS52mJgKufgEi4F0Ydr5amQlmWIGWahn/IOO3y14RmBbyYuEq9Xe3Se9%2bpKsDFt1My/wxb9ACHgQKWk0t0lL5KU3vsysaZOfFVoLSPlsrEQHvWMztxwC%2bHw1N4e5agXRwTIH5d7a3ZdyB8BveaRj9GQwE7DkACfMD5gsGBSnIVTKgWdeo3zNsBRgE/a%2bvL/oQLj3ceoTgvC4Onn4gAC7w4eGhTHAwIZIBi46zWpWsmRrLHqfNgDCvM/Rb1TKNBCN29/ZkkgVBFtbICRkXA6D8kLXhaMrWAawcP7s0N/RQc7gOBATJsS8tqk6mWNdUrAkbPB6PaTgcypAZNLoYgEQCUlCIApHAgDhwPsBvcokKpUpGv7cWBPB98VUVliraF0H9ZnyQNbekNUNShXMFfn0lA5DsQCfIDGQHMXeYTTUnY5dLvA4GjEbfMgwmDAZGKALquiJD7VarJXMHfolX7p%2bBckAW54cIRNjWdYmA93kyNqlSVn0YsMgwwFcQil%2bdqpIB49HY3liE%2bqihKG0E%2bHlnTitgO0pikHSEhEJUSwVfmVwlAuK646gLeVUsckhnZ6cyQ4UMNbJGuEdaDaiwGeCnWPyCIa3VpLlpSFNoqer/goAo93aZuMAWAT85ZzMon4UWnQsxmTX%2bucGrcIXjMKDd0qjV0CIt0j%2b32XJlppzPLhEIc4Unz9%2bZWv3jnYYXZ4vsjbVyBPhBHw7QMlFgnESKKycog6FOh/JCRmZCzi2HYjR6n65cwDoQEDcjlUo4DGuAkx1oyIIQAQumbmE%2btGadxve3NLr6m2pOMA4ChgNTxgErTYn9EIGFEuRLFWHq6OZS6oJ1BUN2suRdp%2b6HvrJk6Y%2bUmCUWWW40yRBh76z2neKeZB9d7vC6lOCqYB95Nvjy98J2db89v4kdCUadCzAD4p4LhCFg2fKr02HnRwrCf9aF02N02mQK5WcJN1lXqkudDCW5kp5IpXc6vPApc8IKDITj03vO0UCp0VQESmOhHCdih%2bEyY6cRPqPwM0q/35enSogvEIHxe2/foGecTPHzdDEXt0V9K1UElAUUKzWF6u02vYp7HEwq9TrVBLzhUsJRwk6jINqCawnow/fGOz7yxoL4GB3PODzls38U5zE7j8XRGh/PYV7ui8iOj%2b7Qn4/O%2bWjdDFDQif4QsQMPwVlMwuExnkE0R4vdble2gXjvhQiM/wCRlkTsGBbACVeMBeRBvPeCT8L/AfC8zrGIXDEvH8%2bn/oMEKzBwFYRDtvEOi8IzCtpBKOCO90530zkWxCPXAJGAiIB49MFYLjwmybxOZZsKAuJyMywQcRIESG9sbMiU1MHBgfyVxhl6B4XWy9CV6k9SUYcMcVLNzm9gN3m3sPv4D8hvbNJ5f%2bsZ/geddw%2bqDObt5QAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},983:function(t,e,a){t.exports=a.p+"assets/img/model_group_by.5d6d9d3e.png"}}]);