import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,g as a}from"./app-CYPh8M6D.js";const o={},i=a(`<h1 id="bpmn" tabindex="-1"><a class="header-anchor" href="#bpmn"><span>bpmn</span></a></h1><ul><li>operation</li><li>condition</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  conditionalVar(yes, &lt;direction&gt;)-&gt;nextNode1
  conditionalVar(no, &lt;direction&gt;)-&gt;nextNode2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>inputoutput</li><li>parallel</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  parallelVar(path1, &lt;direction&gt;)-&gt;nextNode1
  parallelVar(path2, &lt;direction&gt;)-&gt;nextNode2
  parallelVar(path3, &lt;direction&gt;)-&gt;nextNode3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-flow line-numbers-mode" data-ext="flow" data-title="flow"><pre class="language-flow"><code>start<span class="token operator">=&gt;</span>start<span class="token operator">:</span> 开始
end<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束
modulesAndModdle<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 模块和模
型
initModeler<span class="token operator">=&gt;</span>parallel<span class="token operator">:</span> 初始化建模器


start<span class="token operator">-</span><span class="token operator">&gt;</span>initModeler
<span class="token function">initModeler</span><span class="token punctuation">(</span>path1<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>modulesAndModdle
<span class="token function">initModeler</span><span class="token punctuation">(</span>path2<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function s(r,p){return e(),n("div",null,l)}const u=t(o,[["render",s],["__file","bpmn.html.vue"]]),m=JSON.parse('{"path":"/frontend/bpmn.html","title":"bpmn","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-08-30T00:00:00.000Z","category":["前端开发"],"tag":["Git","指令"],"order":1,"description":"bpmn operation condition inputoutput parallel","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontend/bpmn.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"bpmn"}],["meta",{"property":"og:description","content":"bpmn operation condition inputoutput parallel"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-22T02:37:43.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"指令"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-22T02:37:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bpmn\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-22T02:37:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[],"git":{"createdTime":1716345463000,"updatedTime":1716345463000,"contributors":[{"name":"oy","email":"OY.Ou@weltronics.com","commits":1}]},"readingTime":{"minutes":0.25,"words":76},"filePathRelative":"frontend/bpmn.md","localizedDate":"2023年8月30日","excerpt":"\\n<ul>\\n<li>operation</li>\\n<li>condition</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>  conditionalVar(yes, &lt;direction&gt;)-&gt;nextNode1\\n  conditionalVar(no, &lt;direction&gt;)-&gt;nextNode2\\n</code></pre></div><ul>\\n<li>inputoutput</li>\\n<li>parallel</li>\\n</ul>","autoDesc":true}');export{u as comp,m as data};