---
title: "Aesthetics"
output: html_document
editor_options: 
  chunk_output_type: console
chunk: visualize
---

<Notebook
  v-slot="nb"
  branch="master"
  repo="machow/intro-to-siuba"
  url="https://mybinder.org"
  useBinder="1"
  useStorage="1"
  >


<details v-fix-codemirror v-show="nb.debut">
<code-cell  :status="nb.status" :onExecute="nb.execute" :onReady="nb.updateSetupCode"  language="python">


    # TODO: explain how to run this, and that they only need the gist (loads tools)
    
    # wranglign ---------
    import pandas as pd
    from siuba import *
    
    # plotting ----------
    from plotnine import *
    
    theme_set(theme_classic(base_family = "Noto Sans CJK JP"))
    
    # data --------------
    from music_top200 import music_top200, track_features
    
    # student support ----------
    from siuba import pipe
    from IPython.display import HTML, display
    from siututor import Blank
    ___ = Blank()
    
    # DataFrame display --------
    pd.set_option("display.max_rows", 6)
    
    from IPython import get_ipython
    # special ipython function to get the html formatter
    html_formatter = get_ipython().display_formatter.formatters['text/html']
    
    # here, we avoid the default df._repr_html_ method, since it inlines css
    # (style tags make vue angry)
    html_formatter.for_type(
        pd.DataFrame,
        lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)
    )
    
    # remove the <ggplot: (528...)> printout
    html_formatter.for_type(ggplot, lambda g: "")
    




</code-cell>
</details>

import slides from '../slides/02c-slides.markdown'

<RevealSlides :slides="slides" />

The plot below shows all top 200 hundred hits for Eric Chou across countries. 
Use the code cell below to recreate it.

(Note: running the code won't delete the plot!).


<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    # your code here
    
    
    
    #




</code-cell>




    
![png](./02c-aesthetics_files/02c-aesthetics_4_0.png)
    











### Exercise 2:

Use plots of the data for the artists Snelle, Bazzi, and Davyi, to answer the questions below.

You may need to write and run code multiple times, and produce multiple plots.

<code-cell  :status="nb.status" :onExecute="nb.execute"  ex="a" :exIndx="0" language="python">


    (
        
    )


<template v-slot:output>




    ()



</template>

</code-cell>



<prompt-expandable header="Which of these artists have hit tracks in the most continents?">

<q-multiple-choice>
  <q-opt text="Snelle"><span>Incorrect. Did you try using the color aesthetic?</span></q-opt>
  <q-opt text="Bazzi"><span>That's right. Bazzi has hits on every continent.</span></q-opt>
  <q-opt text="Dayvi"><span>Incorrect. Did you try using the color aesthetic?</span></q-opt>
</q-multiple-choice>

</prompt-expandable>


<prompt-expandable header="How many *countries* does Dayvi have hit tracks in?">

<q-multiple-choice>
  <q-opt text="1"><span>Incorrect.</span></q-opt>
  <q-opt text="2"><span>That's right.</span></q-opt>
  <q-opt text="3"><span>Incorrect.</span></q-opt>
</q-multiple-choice>

</prompt-expandable>



</Notebook>

