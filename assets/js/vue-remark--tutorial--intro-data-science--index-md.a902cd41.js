(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1026:function(t,e,o){"use strict";o.r(e);var n=o(9),i=o(835),a=o(7);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var r={VueRemarkRoot:i.a},c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===s(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:o[t]=function(){return r[t]}}))},u=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,title:"Intro Data Science with Siuba",chapters:[{path:"/intro-data-science/01-intro-data-science/",title:"Overview",description:"Get a feel for how siuba works. Meet the spotifycharts.com data.\n"},{path:"intro-data-science/01b-filter/",title:"1. Data wrangling",description:"Learn three key actions:\nfilter for specific observations (rows), arrange observations, and\nmutate to add new columns of data. Combine sequences of actions together\nusing pipes.\n"},{path:"/intro-data-science/02a-intro-data-viz/",title:"2. Data visualization",description:"Use the library plotnine to create and customize scatter plots. Add text labels\nto your plots, and vary aesthetics such as color and size. Split plots with\ntoo much information into subplots with facets.\n"},{path:"/intro-data-science/03a-summarize/",title:"3. Summaries",description:"Summarize across observations using measures such as a minimum or mean.\nUse the group_by verb to calculate summaries for multiple groups of observations.\nDiscover how summaries can lead to simpler, more readable plots.\n"},{path:"/intro-data-science/04a-line-plots/",title:"4. 🚧 Plot types 🚧",description:"Create line and bar plots for raw data. Use histograms and boxplots to examine\ndistributions of data. Select between plots, based on your data and question at hand.\n(Note: this chapter is under construction)\n"}],resources:[{name:"siuba github",url:"https://github.com/machow/siuba"},{name:"siuba docs",url:"https://siuba.readthedocs.io"},{name:"course data (spotifycharts.com)",url:"https://spotifycharts.com"}],authors:[{name:"Michael Chow",bio:'Michael is a data scientist and researcher.\nHe has programmed in python and R for a little over a decade, and received a PhD in cognitive psychology from Princeton University.\nHis research interests include statistical methods, skill acquisition, and human memory.\nYou can follow him on twitter <a href="https://twitter.com/chowthedog">@chowthedog</a>.\n'}]};var m=function(t){t.options[p]&&(t.options[p]=l),a.a.util.defineReactive(t.options,p,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("VueRemarkRoot")}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof m&&m(d);e.default=d.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);