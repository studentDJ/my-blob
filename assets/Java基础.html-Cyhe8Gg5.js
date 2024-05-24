import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as t}from"./app-BSHJb8UQ.js";const e="/my-blob/assets/6-1-C6dO91nM.png",p="/my-blob/assets/6-2-CWGlUqB9.png",i="/my-blob/assets/6-3-sRXim2Nw.png",c="/my-blob/assets/6-4-C_ev7U3Z.png",o="/my-blob/assets/6-5-D0jnbZBX.png",l="/my-blob/assets/6-6-DFgm3jiq.png",u="/my-blob/assets/6-7-U6mSN8Pv.png",d="/my-blob/assets/6-8-BlDWfRM0.png",r="/my-blob/assets/6-9-CA0pBMZI.png",k="/my-blob/assets/7-1-DXvBcb_D.png",v="/my-blob/assets/7-2-DDpGCZSt.png",m="/my-blob/assets/7-3-Crm22GSK.png",b="/my-blob/assets/String-1-BkHdiSpF.png",g="/my-blob/assets/String-2-D4qXDuOD.png",y="/my-blob/assets/String-3-BSrzVyaj.png",h={},w=t(`<h1 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础"><span>Java 基础</span></a></h1><h2 id="模块六-、方法" tabindex="-1"><a class="header-anchor" href="#模块六-、方法"><span>模块六 、方法</span></a></h2><h3 id="第一章、方法的使用" tabindex="-1"><a class="header-anchor" href="#第一章、方法的使用"><span>第一章、方法的使用</span></a></h3><h4 id="_1-方法介绍以及简单方法定义-无参无返回值" tabindex="-1"><a class="header-anchor" href="#_1-方法介绍以及简单方法定义-无参无返回值"><span>1.方法介绍以及简单方法定义(无参无返回值)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.问题描述:
  之前所有的代码都在main方法中写,如果我们将来将所有功能的代码都放到main方法中,会显得main方法代码太多,太乱,太臃肿-&gt; 不好维护

  解决:将不同功能的代码放到不同的方法中,想执行某个功能,直接调用方法名就行了,对应的代码就自动执行起来了
      将来维护的时候,直接找到对应的方法,就可以对其直接修改维护

2.方法:
  拥有功能性代码的代码块
  将不同的功能放在不同的方法中,给每个方法取个名字,直接调用方法名,对应的方法就执行起来了,好维护

3.通用定义格式:
  修饰符 返回值类型 方法名(参数){
      方法体
      return 结果
  }

4.通过通用格式,分成四种方法来学习:
  a.无参无返回值方法
  b.有参无返回值方法
  c.无参有返回值方法
  d.有参有返回值方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.无参无返回值方法定义:
  public static void 方法名(){
      方法体 -&gt; 实现此方法的具体代码

  }

2.调用:直接调用
  在其他方法中: 方法名()

3.注意事项:
  a.void关键字代表无返回值,写了void,就不要在方法中写return 结果
  b.方法不调用不执行, main方法是jvm调用的
  c.方法之间不能互相嵌套,方法之间是平级关系
  d.方法的执行顺序只和调用顺序有关
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">farmer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//农民伯伯</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">farmer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;播种&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;施肥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;拔草&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;浇水&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;除虫&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收割&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//厨师</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;洗菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;切菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;炒菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;装盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;上菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//我们自己</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;洗手&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>定义一个方法,实现两个整数相加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;哈哈哈哈哈&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-无参数无返回值的方法执行流程" tabindex="-1"><a class="header-anchor" href="#_2-无参数无返回值的方法执行流程"><span>2.无参数无返回值的方法执行流程</span></a></h4><figure><img src="`+e+`" alt="6-1" tabindex="0" loading="lazy"><figcaption>6-1</figcaption></figure><h4 id="_3-方法定义各部分解释" tabindex="-1"><a class="header-anchor" href="#_3-方法定义各部分解释"><span>3.方法定义各部分解释</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.通用格式:
  修饰符 返回值类型 方法名(参数){
      方法体
      return 结果
  }

2.各部分解释:
  a.修饰符: public static
  b.返回值类型:
    该方法最终返回的结果的数据类型
        比如: return 1 -&gt; 方法上的返回值类型写int
             return 2.5 -&gt; 方法上的返回值类型写double
             return &quot;&quot; -&gt; 方法上的返回值类型写String
    如果没有返回值,不要写具体的返回值类型了,要写void


  c.方法名:见名知意(小驼峰式)
  d.参数:进入到方法内部参与执行的数据(数据类型 变量名,数据类型 变量名)
  e.方法体:实现该方法的具体代码
  f.return 结果: 如果有返回值,可以利用return 将结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="6-2" tabindex="0" loading="lazy"><figcaption>6-2</figcaption></figure><h4 id="_4-有参数无返回值的方法定义和执行流程" tabindex="-1"><a class="header-anchor" href="#_4-有参数无返回值的方法定义和执行流程"><span>4.有参数无返回值的方法定义和执行流程</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>格式<span class="token operator">:</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> 方法名<span class="token punctuation">(</span>数据类型 变量名<span class="token punctuation">)</span><span class="token punctuation">{</span>
      方法体
  <span class="token punctuation">}</span>

<span class="token number">2.</span>调用<span class="token operator">:</span>
  直接调用<span class="token operator">:</span>方法名<span class="token punctuation">(</span>具体的值<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 调用的时候要给参数赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:定义一个方法,实现两个整数相加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="6-3" tabindex="0" loading="lazy"><figcaption>6-3</figcaption></figure><h4 id="_5-无参数有返回值定义以及执行流程" tabindex="-1"><a class="header-anchor" href="#_5-无参数有返回值定义以及执行流程"><span>5.无参数有返回值定义以及执行流程</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>格式<span class="token operator">:</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> 返回值类型 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      方法体
      <span class="token keyword">return</span> 结果
  <span class="token punctuation">}</span>

<span class="token number">2.</span>调用<span class="token operator">:</span> 返回值返回给了谁<span class="token operator">?</span> 哪里调用返回给哪里
  a<span class="token punctuation">.</span>打印调用<span class="token operator">:</span><span class="token function">sout</span><span class="token punctuation">(</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 不推荐使用
  b<span class="token punctuation">.</span>赋值调用<span class="token operator">:</span>调用完之后用一个变量接收返回值结果 <span class="token operator">-&gt;</span> 极力推荐
    数据类型 变量名 <span class="token operator">=</span> 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:定义一个方法,实现两个整数相加,将结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo04Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//打印调用 -&gt; 涛哥不推荐</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//赋值调用-&gt; 极力推荐</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
        <span class="token comment">//return a+b;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="6-4" tabindex="0" loading="lazy"><figcaption>6-4</figcaption></figure><h4 id="_6-有参数有返回值定义以及执行流程" tabindex="-1"><a class="header-anchor" href="#_6-有参数有返回值定义以及执行流程"><span>6.有参数有返回值定义以及执行流程</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>格式<span class="token operator">:</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> 返回值类型 方法名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">{</span>
      方法体
      <span class="token keyword">return</span> 结果
  <span class="token punctuation">}</span>

<span class="token number">2.</span>调用<span class="token operator">:</span>
  a<span class="token punctuation">.</span>打印调用<span class="token operator">:</span>
    <span class="token function">sout</span><span class="token punctuation">(</span>方法名<span class="token punctuation">(</span>具体的值<span class="token punctuation">)</span><span class="token punctuation">)</span>

  b<span class="token punctuation">.</span>赋值调用<span class="token punctuation">(</span>极力推荐<span class="token punctuation">)</span>
    数据类型 变量名 <span class="token operator">=</span> 方法名<span class="token punctuation">(</span>具体的值<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:定义一个方法,实现两个整数相加,将结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo05Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="6-5" tabindex="0" loading="lazy"><figcaption>6-5</figcaption></figure><h4 id="_7-形式参数和实际参数区别" tabindex="-1"><a class="header-anchor" href="#_7-形式参数和实际参数区别"><span>7.形式参数和实际参数区别</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.形式参数(形参):在定义方法的时候形式上定义的参数,此参数还没有值
2.实际参数(实参):在调用方法的时候给形参赋予的具体的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="6-6" tabindex="0" loading="lazy"><figcaption>6-6</figcaption></figure><h4 id="_8-参数和返回值使用的时机" tabindex="-1"><a class="header-anchor" href="#_8-参数和返回值使用的时机"><span>8.参数和返回值使用的时机</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.参数:
  当想将方法A的数据传递到方法B时,那么定义方法B时就需要带个参数,在方法A中调用方法B时,可以将方法A中的数据通过参数传递到方法B中

2.返回值:
  调用方法A时,想要方法A的结果,去参与其他的操作,那么方法A就需要将自己的结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="6-7" tabindex="0" loading="lazy"><figcaption>6-7</figcaption></figure><blockquote><p>1.controller 接收的请求参数需要一层一层传递到 service 层,service 层需要将请求参数再传递到 dao 层</p><p>此时 service 的方法以及 dao 的方法都需要参数,去接收</p><p>2.dao 层的结果需要传递给 service,service 再传递给 controller 层,此时 dao 层和 service 方法需要返回值</p></blockquote><h4 id="_9-变量作为实参使用" tabindex="-1"><a class="header-anchor" href="#_9-变量作为实参使用"><span>9.变量作为实参使用</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:定义一个方法,比较两个整数的大小,如果第一个比第二个大,返回true,否则返回false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo07Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">//传递的是i和j,但是我们真正传递的是i和j代表的数据,不是变量本身</span>
        <span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">&gt;</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二章、方法注意事项" tabindex="-1"><a class="header-anchor" href="#第二章、方法注意事项"><span>第二章、方法注意事项</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.方法不调用不执行
2.方法的执行顺序只和调用顺序有关
3.方法之间不能互相嵌套

4.void不能和[return 结果]共存,但是void能和[return]共存
  a.void:代表没有返回值
  b.return 结果:就代表有返回值了
               先将结果返回,然后结束方法

  c.return:仅仅代表结束方法,不代表有返回值

5.一个方法中不能连续写多个return(也就是说一个方法不能都多个返回值)

6.调用方法的时候要看看下面有没有这个方法,没有的方法直接调用会报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo08Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">method01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//method04();</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">method01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">method03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//return 2;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>初学者怎么写:
 1.先定义,再调用
 2.如果是没有返回值的方法,直接在被调用的方法内部输出结果
 3.如果是带返回值的方法,就调用完毕之后,用一个变量去接收结果,输出这个变量
 4.调用方法:
    直接调用:方法名() 或者 方法名(实参) -&gt; 只针对于无返回值的方法
    打印调用:sout(方法名()) 或者 sout(方法名(实参)) -&gt; 针对有返回值的方法 -&gt; 不推荐使用
    赋值调用:数据类型 变量名 = 方法名() 或者 数据类型 变量名 = 方法名(实参) -&gt; 针对于有返回值的方法 -&gt; 推荐使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>怎么练习:
1.如果定义的方法没有返回值,写个void 不要写return 结果
2.如果定义的方法有返回值,就将void改成具体的返回值类型,在 方法体中最后写一个return 结果,将结果返回
3.如果方法有返回值,调用的时候推荐使用赋值调用,如果没有返回值,使用直接调用
4.练习的时候,只需要完成一个简单的需求(比如两个整数相加),针对此需求,定义4种方法,并成功调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="第三章、方法练习" tabindex="-1"><a class="header-anchor" href="#第三章、方法练习"><span>第三章、方法练习</span></a></h3><h4 id="_1-方法练习-1-判断奇偶性" tabindex="-1"><a class="header-anchor" href="#_1-方法练习-1-判断奇偶性"><span>1.方法练习 1(判断奇偶性)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:
   键盘录入一个整数,将整数传递到另外一个方法中,在此方法中判断这个整数的奇偶性
   如果是偶数,方法返回&quot;偶数&quot;  否则返回&quot;奇数&quot;

方法三要素:
  方法名:要
  参数:要
  返回值:要
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> data <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
         键盘录入一个整数,将整数传递到另外一个方法中,在此方法中判断这个整数的奇偶性
         如果是偶数,方法返回&quot;偶数&quot;  否则返回&quot;奇数&quot;
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;偶数&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方法练习-2-1-100-的和" tabindex="-1"><a class="header-anchor" href="#_2-方法练习-2-1-100-的和"><span>2.方法练习 2(1-100 的和)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求 :  求出1-100的和,并将结果返回

方法名:要
参数:不要
返回值:要
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-方法练习-3-不定次数打印" tabindex="-1"><a class="header-anchor" href="#_3-方法练习-3-不定次数打印"><span>3.方法练习 3(不定次数打印)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:
   定义一个方法,给这个方法传几,就让这个方法循环打印几次&quot;我是一个有经验的JAVA开发工程师&quot;

方法名:要
参数:要
返回值:不要
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">method</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是一个有经验的java开发工程师&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-方法练习-4-遍历数组" tabindex="-1"><a class="header-anchor" href="#_4-方法练习-4-遍历数组"><span>4.方法练习 4(遍历数组)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:
  在main方法中定义一个数组,将数组传递到另外一个方法中,在此方法中遍历数组

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo04Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
       <span class="token function">method</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
       调用method方法,传递的实参时int[]数组
       所以形参也应该用int型数组来接收
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//int[] arr2 = arr1</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="6-8" tabindex="0" loading="lazy"><figcaption>6-8</figcaption></figure><blockquote><p>数组本身是引用数据类型,引用数据类型做方法参数传递,传递的是地址值</p></blockquote><h4 id="_5-练习-7-数组作为返回值返回" tabindex="-1"><a class="header-anchor" href="#_5-练习-7-数组作为返回值返回"><span>5.练习 7 数组作为返回值返回</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo05Method</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//int[] arr2 = arr1</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>

        <span class="token keyword">int</span> sub <span class="token operator">=</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span>sub<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> arr1<span class="token punctuation">;</span><span class="token comment">//返回的是一个int[],那么返回值类型也应该是int[]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四章、方法的重载" tabindex="-1"><a class="header-anchor" href="#第四章、方法的重载"><span>第四章、方法的重载</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>需求:定文三个方法，分别求2个整数相加,3个整数相加,4个整数相加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1OverLoad</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//  两个整数相加</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;两个整数相加的结果是：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//    三个整数相加</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;三个整数相加的结果是：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.概述:方法名相同,参数列表不同的方法
2.什么叫参数列表不同:
  a.参数个数不同
  b.参数类型不同
  c.参数类型顺序不同

3.判断两个方法是否为重载方法,和什么无关:
  a.和参数名无关
  b.和返回值无关
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">double</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">double</span> d<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">OPEN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="6-9" tabindex="0" loading="lazy"><figcaption>6-9</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如果定义方法功能一样,只不过实现细节不一样,就可以考虑定义成重载的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模块七、面向对象" tabindex="-1"><a class="header-anchor" href="#模块七、面向对象"><span>模块七、面向对象</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>模块六回顾<span class="token operator">:</span>
  <span class="token number">1.</span>概述<span class="token operator">:</span>拥有功能性代码的代码块
    将来干开发一个功能就应该对应一个方法
  <span class="token number">2.</span>方法的通用定义格式<span class="token operator">:</span>
    修饰符 返回值类型 方法名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">{</span>
        方法体
        <span class="token keyword">return</span> 结果
    <span class="token punctuation">}</span>

    a<span class="token punctuation">.</span>修饰符<span class="token operator">:</span><span class="token keyword">public</span> <span class="token keyword">static</span>
    b<span class="token punctuation">.</span>返回值类型<span class="token operator">:</span>方法最终返回的结果的数据类型
    c<span class="token punctuation">.</span>方法名<span class="token operator">:</span>给方法取的名字<span class="token punctuation">,</span>见名知意<span class="token punctuation">,</span>小驼峰式
    d<span class="token punctuation">.</span>参数<span class="token operator">:</span>进入到方法内部参与执行的数据
    e<span class="token punctuation">.</span>方法体<span class="token operator">:</span>具体实现该方法的具体代码
    f<span class="token punctuation">.</span><span class="token keyword">return</span> 结果<span class="token operator">:</span>该方法操作完参数之后<span class="token punctuation">,</span>最终返回的一个数据

  <span class="token number">3.</span>无参无返回值方法<span class="token operator">:</span>
    a<span class="token punctuation">.</span>定义<span class="token operator">:</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          方法体
      <span class="token punctuation">}</span>
    b<span class="token punctuation">.</span>调用<span class="token operator">:</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token number">4.</span>有参无返回值方法<span class="token operator">:</span>
    a<span class="token punctuation">.</span>定义<span class="token operator">:</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> 方法名<span class="token punctuation">(</span>形参<span class="token punctuation">)</span><span class="token punctuation">{</span>
          方法体
      <span class="token punctuation">}</span>

    b<span class="token punctuation">.</span>调用<span class="token operator">:</span>
      方法名<span class="token punctuation">(</span>实参<span class="token punctuation">)</span>

  <span class="token number">5.</span>无参有返回值方法<span class="token operator">:</span>
    a<span class="token punctuation">.</span>定义<span class="token operator">:</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> 返回值类型 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          方法体
          <span class="token keyword">return</span> 结果
      <span class="token punctuation">}</span>

    b<span class="token punctuation">.</span>调用<span class="token operator">:</span>
      数据类型 变量名 <span class="token operator">=</span> 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token number">6.</span>有参有返回值方法<span class="token operator">:</span>
    a<span class="token punctuation">.</span>定义<span class="token operator">:</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> 返回值类型 方法名<span class="token punctuation">(</span>形参<span class="token punctuation">)</span><span class="token punctuation">{</span>
          方法体
          <span class="token keyword">return</span> 结果
      <span class="token punctuation">}</span>

    b<span class="token punctuation">.</span>调用<span class="token operator">:</span>
      数据类型 变量名 <span class="token operator">=</span> 方法名<span class="token punctuation">(</span>实参<span class="token punctuation">)</span>

  <span class="token number">7.</span>注意事项<span class="token operator">:</span>
    a<span class="token punctuation">.</span>方法不调用不执行<span class="token punctuation">,</span>main方法是jvm调用的
    b<span class="token punctuation">.</span>方法之间不能互相嵌套
    c<span class="token punctuation">.</span>方法的执行顺序只和调用顺序有关
    d<span class="token punctuation">.</span><span class="token keyword">void</span>不能和<span class="token keyword">return</span> 结果共存<span class="token punctuation">,</span>但是能和<span class="token keyword">return</span>共存
      <span class="token keyword">void</span><span class="token operator">:</span>代表没有返回值
      <span class="token keyword">return</span> 结果<span class="token operator">:</span>代表有返回值<span class="token punctuation">,</span>先将结果返回<span class="token punctuation">,</span>再结束方法
      <span class="token keyword">return</span><span class="token operator">:</span>仅仅代表结束方法

    e<span class="token punctuation">.</span>一个方法中不能连续写多个<span class="token keyword">return</span>
    f<span class="token punctuation">.</span>调用方法是<span class="token punctuation">,</span>需要看有没有此方法


  <span class="token number">8.</span>参数和返回值使用时机<span class="token operator">:</span>
    a<span class="token punctuation">.</span>参数<span class="token operator">:</span>当想将一个方法中的数据<span class="token punctuation">,</span>传递到另外一个方法中操作<span class="token punctuation">,</span>就需要参数了
    b<span class="token punctuation">.</span>返回值<span class="token operator">:</span>如果调用者需要使用被调用者的结果<span class="token punctuation">,</span>被调用者就需要将自己的结果返回


  <span class="token number">9.</span>方法的重载<span class="token operator">:</span>
    a<span class="token punctuation">.</span>概述<span class="token operator">:</span>方法名相同<span class="token punctuation">,</span>参数列表不同
    b<span class="token punctuation">.</span>什么叫参数列表不同<span class="token operator">:</span>
      参数个数不同<span class="token punctuation">,</span>类型不同<span class="token punctuation">,</span>类型顺序不同
    c<span class="token punctuation">.</span>和什么无关<span class="token operator">:</span>
      和参数名无关<span class="token punctuation">,</span>和返回值无关

模块七重点<span class="token operator">:</span>
  <span class="token number">1.</span>知道为啥使用面向对象思想编程
  <span class="token number">2.</span>知道怎么使用面向对象思想编程
  <span class="token number">3.</span>知道什么时候使用面向对象思想编程
  <span class="token number">4.</span>会利用代码去描述世间万物的分类
  <span class="token number">5.</span>会在一个类中访问另外一个类中的成员 <span class="token operator">-&gt;</span> <span class="token keyword">new</span>对象
  <span class="token number">6.</span>成员变量和局部变量的区别
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第一章-类和对象" tabindex="-1"><a class="header-anchor" href="#第一章-类和对象"><span>第一章.类和对象</span></a></h3><h4 id="_1-面向对象的介绍" tabindex="-1"><a class="header-anchor" href="#_1-面向对象的介绍"><span>1.面向对象的介绍</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>面向过程<span class="token operator">:</span>自己的事情自己干<span class="token punctuation">,</span>代表语言<span class="token class-name">C</span>语言
          洗衣服<span class="token operator">:</span>每一步自己要亲力亲为 <span class="token operator">-&gt;</span> 找个盆<span class="token punctuation">,</span>放点水<span class="token punctuation">,</span>找个搓衣板<span class="token punctuation">,</span>搓搓搓
<span class="token number">2.</span>面向对象<span class="token operator">:</span>自己的事情别人帮忙去干<span class="token punctuation">,</span>代表语言<span class="token class-name">Java</span>语言
          洗衣服<span class="token operator">:</span>自己的事情别人干 <span class="token operator">-&gt;</span> 全自动洗衣机

<span class="token number">3.</span>为啥要使用面向对象思想编程<span class="token operator">:</span>懒
  很多功能别人都给我们实现好了<span class="token punctuation">,</span>我们只需要直接拿过来使用即可<span class="token punctuation">,</span>简化了我们自己的编写过程<span class="token punctuation">,</span>减少了我们的代码量

<span class="token number">4.</span>什么时候使用面向对象思想编程<span class="token operator">:</span>
  调用别人的功能时
  在一个类中想使用别的类中的成员时<span class="token punctuation">,</span>就使用面向对象思想编程
  至于我们使用的功能人家怎么实现的<span class="token punctuation">,</span>我们不需要关心<span class="token punctuation">,</span>我们只需要知道怎么使用即可

<span class="token number">5.</span>怎么使用面向对象思想编程<span class="token operator">:</span>
  a<span class="token punctuation">.</span><span class="token keyword">new</span>呀<span class="token punctuation">,</span><span class="token keyword">new</span>完点呀<span class="token operator">-&gt;</span> 点代表的是调用
  b<span class="token punctuation">.</span>特殊<span class="token operator">:</span>如果调用的成员带<span class="token keyword">static</span>关键字<span class="token punctuation">,</span>我们不需要<span class="token keyword">new</span><span class="token punctuation">,</span>我们直接类名点即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01Object</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
           我们想在Demo01Object类中使用Scanner类中的next方法实现录入字符串
           那么我们就需要使用面向对象思想编程

           对象:Scanner-&gt; new出来的
           对象实现好的功能:next()

           我们只需要知道找来Scanner这个对象,就可以调用这个对象中实现好的next方法
           至于next方法怎么实现的,我们不需要关心
         */</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> data <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data = &quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
           我们想在Demo01Object类中使用Random类中的nextInt方法实现随机整数
           那么我们就需要使用面向对象思想编程

           对象:Random -&gt; new出来的
           对象实现好的功能:nextInt()

           我们只需要知道找来Random这个对象,就可以调用Random中的nextInt方法
           至于nextInt怎么实现的,我们不需要关心
         */</span>
        <span class="token class-name">Random</span> rd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> data2 <span class="token operator">=</span> rd<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data2 = &quot;</span> <span class="token operator">+</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;====================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//[1,2,3,4]</span>
       <span class="token comment">/* System.out.print(&quot;[&quot;);
        for (int i = 0; i &lt; arr.length; i++) {
            if (i== arr.length-1){
                System.out.print(arr[i]+&quot;]&quot;);
            }else{
                System.out.print(arr[i]+&quot;,&quot;);
            }
        }*/</span>

        <span class="token comment">/*
           Arrays就是我们找来的对象
           toStrig就是此对象中实现好的功能
           我们只需要调用,怎么实现我们不关心
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-类和对象" tabindex="-1"><a class="header-anchor" href="#_2-类和对象"><span>2.类和对象</span></a></h4><h5 id="_2-1-类-实体类-class" tabindex="-1"><a class="header-anchor" href="#_2-1-类-实体类-class"><span>2.1 类(实体类)_class</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>测试类<span class="token operator">:</span>带main方法的类<span class="token punctuation">,</span>主要是运行代码的
<span class="token number">2.</span>实体类<span class="token operator">:</span>是一类事物的抽象表示形式
        世间万物的分类<span class="token operator">:</span>比如<span class="token operator">:</span> 人类   狗类   猫类   鼠标类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>组成部分<span class="token operator">:</span>
  <span class="token number">1.</span>属性<span class="token punctuation">(</span>成员变量<span class="token punctuation">)</span><span class="token operator">:</span>这一类事物有啥
    a<span class="token punctuation">.</span>定义位置<span class="token operator">:</span>类中方法外
    b<span class="token punctuation">.</span>作用范围<span class="token operator">:</span>作用于当前类
    c<span class="token punctuation">.</span>定义格式<span class="token operator">:</span> 数据类型 变量名
    d<span class="token punctuation">.</span>默认值<span class="token operator">:</span>
      整数<span class="token operator">:</span><span class="token number">0</span>
      小数<span class="token operator">:</span><span class="token number">0.0</span>
      字符<span class="token operator">:</span><span class="token char">&#39;\\u0000&#39;</span>
      布尔<span class="token operator">:</span><span class="token boolean">false</span>
      引用<span class="token operator">:</span><span class="token keyword">null</span>

  <span class="token number">2.</span>行为<span class="token punctuation">(</span>成员方法<span class="token punctuation">)</span><span class="token operator">:</span>这一类事物都能干啥
    只需要将模块六所学的方法中的<span class="token keyword">static</span>干掉<span class="token punctuation">,</span>其他的都一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性-&gt; 成员变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//行为 -&gt; 成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人要干饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人要喝水&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-对象" tabindex="-1"><a class="header-anchor" href="#_2-2-对象"><span>2.2 对象</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>概述<span class="token operator">:</span>一类事物的具体体现
<span class="token number">2.</span>使用<span class="token operator">:</span>
  a<span class="token punctuation">.</span>导包<span class="token operator">:</span> <span class="token keyword">import</span> 包名<span class="token punctuation">.</span>类名
    如果两个类在同一个包下<span class="token punctuation">,</span>想要使用对方的成员不需要导包
    如果两个类不在同一个包下<span class="token punctuation">,</span>想要使用对方的成员需要导包

    特殊包<span class="token operator">:</span>java<span class="token punctuation">.</span>lang <span class="token operator">-&gt;</span> 使用lang包下的类不需要导包 <span class="token operator">-&gt;</span> <span class="token class-name">String</span>

    友情提示<span class="token operator">:</span>在学四种权限修饰符之前<span class="token punctuation">,</span>尽量让两个类在同一个包下

  b<span class="token punctuation">.</span>创建对象<span class="token operator">:</span>想要使用哪个类中的成员<span class="token punctuation">,</span>就<span class="token keyword">new</span>哪个类的对象
    类名 对象名 <span class="token operator">=</span> <span class="token keyword">new</span> 类名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 比如<span class="token operator">:</span> <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  c<span class="token punctuation">.</span>调用成员<span class="token punctuation">(</span>成员变量<span class="token punctuation">,</span>成员方法<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 想要使用哪个类中的成员<span class="token punctuation">,</span>就用哪个类的对象去点哪个成员
    对象名<span class="token punctuation">.</span>成员变量名 <span class="token operator">=</span> 值
    对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 调用的是无参无返回值方法
    对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span>实参<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 调用的是有参无返回值方法
    数据类型 变量名 <span class="token operator">=</span> 对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 调用的是无参有返回值方法
    数据类型 变量名 <span class="token operator">=</span> 对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span>实参<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 调用的是有参有返回值方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性-&gt; 成员变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//行为 -&gt; 成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人要干饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人要喝水&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;金莲&quot;</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        person<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-匿名对象的使用" tabindex="-1"><a class="header-anchor" href="#_3-匿名对象的使用"><span>3.匿名对象的使用</span></a></h4><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span>
a<span class="token punctuation">.</span><span class="token keyword">int</span><span class="token operator">:</span>是数据类型
b<span class="token punctuation">.</span>i<span class="token operator">:</span>变量名
c<span class="token punctuation">.</span>等号右边的<span class="token number">10</span><span class="token operator">:</span>真正的数据

<span class="token number">2.</span>Person p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>等号左边的<span class="token class-name">Person</span><span class="token operator">:</span>对象的类型<span class="token punctuation">,</span>好比是<span class="token keyword">int</span>
b<span class="token punctuation">.</span>p<span class="token operator">:</span>对象名
c<span class="token punctuation">.</span>等号右边的<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>真正的数据<span class="token punctuation">,</span>是一个<span class="token class-name">Person</span>对象<span class="token punctuation">,</span>将这个对象真正创建出来了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>所谓的匿名对象<span class="token operator">:</span>其实就是没有等号左边的部分<span class="token punctuation">,</span>只有等号右边的部分<span class="token punctuation">(</span>对象<span class="token punctuation">)</span>
<span class="token number">2.</span>使用<span class="token operator">:</span>
 <span class="token keyword">new</span> 对象<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>成员

<span class="token number">3.</span>注意<span class="token operator">:</span>
 a<span class="token punctuation">.</span>如果我们只想单纯的调用一个方法<span class="token punctuation">,</span>让方法执行<span class="token punctuation">,</span>我们可以考虑使用匿名对象
 b<span class="token punctuation">.</span>但是如果涉及到赋值<span class="token punctuation">,</span>千万不要用匿名对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人要吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//原始方式</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;金莲&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//匿名对象</span>
        <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;大郎&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-一个对象的内存图" tabindex="-1"><a class="header-anchor" href="#_4-一个对象的内存图"><span>4.一个对象的内存图</span></a></h4><figure><img src="`+k+'" alt="7-1" tabindex="0" loading="lazy"><figcaption>7-1</figcaption></figure><h4 id="_5-两个对象的内存图" tabindex="-1"><a class="header-anchor" href="#_5-两个对象的内存图"><span>5.两个对象的内存图</span></a></h4><figure><img src="'+v+'" alt="7-2" tabindex="0" loading="lazy"><figcaption>7-2</figcaption></figure><blockquote><p>phone1 和 phone2 都是 new 出来的,所以在堆内存中产生了两个不同的空间,所以改变一个空间的数据不会 影响另外一个空间中的数据</p></blockquote><h4 id="_6-两个对象指向同一片空间内存图" tabindex="-1"><a class="header-anchor" href="#_6-两个对象指向同一片空间内存图"><span>6.两个对象指向同一片空间内存图</span></a></h4><figure><img src="'+m+`" alt="7-3" tabindex="0" loading="lazy"><figcaption>7-3</figcaption></figure><blockquote><p>phone2 是 phone1 给的,phone1 在内存中保存的是地址值,此时 phone1 和 phone2 地址值是一样的了,操作的是同一片空间的数据,所以改变一个对象的数据会影响到另外一个对象</p></blockquote><h3 id="第二章-成员变量和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#第二章-成员变量和局部变量的区别"><span>第二章.成员变量和局部变量的区别</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>定义位置不同<span class="token punctuation">(</span>重点<span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>成员变量<span class="token operator">:</span>类中方法外
  b<span class="token punctuation">.</span>局部变量<span class="token operator">:</span>定义在方法之中或者参数位置

<span class="token number">2.</span>初始化值不同<span class="token punctuation">(</span>重点<span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>成员变量<span class="token operator">:</span>有默认值的<span class="token punctuation">,</span>所以不用先手动赋值<span class="token punctuation">,</span>就可以直接使用
  b<span class="token punctuation">.</span>局部变量<span class="token operator">:</span>是没有默认值的<span class="token punctuation">,</span>所以需要先手动赋值<span class="token punctuation">,</span>再使用

<span class="token number">3.</span>作用范围不同<span class="token punctuation">(</span>重点<span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>成员变量<span class="token operator">:</span>作用于整个类
  b<span class="token punctuation">.</span>局部变量<span class="token operator">:</span>只作用于自己所在的方法<span class="token punctuation">,</span>其他方法使用不了

<span class="token number">4.</span>内存位置不同<span class="token punctuation">(</span>了解<span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>成员变量<span class="token operator">:</span>在堆中<span class="token punctuation">,</span>跟着对象走
  b<span class="token punctuation">.</span>局部变量<span class="token operator">:</span>在栈中<span class="token punctuation">,</span>跟着方法走

<span class="token number">5.</span>生命周期不同<span class="token punctuation">(</span>了解<span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>成员变量<span class="token operator">:</span>随着对象的创建而产生<span class="token punctuation">,</span>随着对象的消失而消失
  b<span class="token punctuation">.</span>局部变量<span class="token operator">:</span>随着方法的调用而产生<span class="token punctuation">,</span>随着方法的调用完毕而消失
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">//成员变量</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//局部变量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//成员变量不用手动赋值可以直接使用,因为有默认值</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> j<span class="token punctuation">;</span>
        <span class="token comment">//System.out.println(j);//局部变量没有默认值,所以需要手动赋值再使用</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//System.out.println(i);//i是eat方法的局部变量,在drink中使用不了</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三章-练习" tabindex="-1"><a class="header-anchor" href="#第三章-练习"><span>第三章.练习</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>需求<span class="token operator">:</span>定义一个类<span class="token class-name">MyDate</span><span class="token punctuation">,</span>属性有 year  month  day

     再定义一个类<span class="token class-name">Citizen</span><span class="token punctuation">(</span>公民类<span class="token punctuation">)</span><span class="token punctuation">,</span>属性有 <span class="token function">name</span><span class="token punctuation">(</span><span class="token class-name">String</span>类型<span class="token punctuation">)</span>  <span class="token function">birthday</span><span class="token punctuation">(</span><span class="token class-name">MyDate</span>类型<span class="token punctuation">)</span>  <span class="token function">idCard</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>为这三个属性赋值<span class="token punctuation">,</span>然后将值取出来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDate</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> year<span class="token punctuation">;</span>
    <span class="token keyword">int</span> month<span class="token punctuation">;</span>
    <span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>
    <span class="token comment">//姓名</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>  <span class="token comment">//默认值 null</span>
    <span class="token comment">/*
      生日  MyDate类型

      MyDate属于自定义类型(引用数据类型)
      这种类型要操作之前必须要赋值
      怎么赋值?  需要new对象赋值
     */</span>
    <span class="token class-name">MyDate</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认值 null</span>
    <span class="token comment">//身份证</span>
    <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>  <span class="token comment">//默认值null</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Citizen</span> citizen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Citizen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        citizen<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;涛哥&quot;</span><span class="token punctuation">;</span>
        citizen<span class="token punctuation">.</span>idCard <span class="token operator">=</span> <span class="token string">&quot;111111111&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">/*
           citizen.birthday获取的是MyDate对象
           再去点year获取的是MyDate对象中的year

           链式调用
         */</span>
        citizen<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>year <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
        citizen<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        citizen<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>day <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>citizen<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;,&quot;</span><span class="token operator">+</span>citizen<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>year<span class="token operator">+</span><span class="token string">&quot;,&quot;</span><span class="token operator">+</span>citizen<span class="token punctuation">.</span>idCard<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>给引用数据类型赋值,需要 new 对象(String 比较特殊,可以直接=赋值)</p></blockquote><h2 id="模块八、面向对象" tabindex="-1"><a class="header-anchor" href="#模块八、面向对象"><span>模块八、面向对象</span></a></h2><h3 id="第一章-封装" tabindex="-1"><a class="header-anchor" href="#第一章-封装"><span>第一章.封装</span></a></h3><h4 id="_1-封装的介绍以及使用" tabindex="-1"><a class="header-anchor" href="#_1-封装的介绍以及使用"><span>1.封装的介绍以及使用</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.面向对象三大特征:  [封装]     继承    多态

2.什么是封装思想:
  a.我们找来了一个对象(洗衣机),只需要按一下按钮就可以了(使用洗衣机功能的过程就是在使用面向对象思想编程的过程),每一个按钮下面都包含了很多内部结构的细节(细节被封装到按钮里面了-&gt;封装),在使用的时候有必要了解洗衣机的内部构造吗?我们没有必要去了解内部结构,我们只知道调用就可以了

    所以,洗衣机来说,将细节隐藏起来了,细节我们不要关注,会对外提供了一个公共的接口(按钮),供我们人类使用

  b.隐藏对象内部的复杂性,只对外提供公开,公共的接口,便于外界调用,从而提高了系统的可扩展性,可维护性,安全性,通俗来说,把该隐藏的隐藏起来(细节),把该暴露的暴露出来(对外提供的供别人使用的接口),这就是封装思想

  我们只需要调用这个接口(功能)即可,此接口背后封装起来的细节就开始执行了,但是我们不需要关注细节,只关注公共的接口怎么调用

  c.将细节隐藏起来,不让外界随便使用,但是我们可以提供一个公共的接口让外界间接使用隐藏起来的细节-&gt;封装思想
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">1.</span>问题<span class="token operator">:</span>
  定义成员变量<span class="token punctuation">,</span>只要是<span class="token keyword">new</span>出来对象<span class="token punctuation">,</span>就可以随便调用<span class="token punctuation">,</span>随便赋值<span class="token punctuation">,</span>哪怕是不合理的值我们也挡不住<span class="token punctuation">,</span>怎么办<span class="token operator">?</span>
  将属性封装起来<span class="token punctuation">(</span>隐藏细节<span class="token punctuation">)</span>

  a<span class="token punctuation">.</span>关键字<span class="token operator">:</span><span class="token keyword">private</span><span class="token punctuation">(</span>私有化的<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> 被<span class="token keyword">private</span>修饰的成员只能在本类中使用<span class="token punctuation">,</span>在别的类中使用不了

  b<span class="token punctuation">.</span>注意<span class="token operator">:</span>
    将代码放到一个方法中<span class="token punctuation">,</span>也是封装的体现
    一个成员被<span class="token keyword">private</span>修饰也是封装的体现<span class="token punctuation">,</span>只不过<span class="token keyword">private</span>最具代表性

  c<span class="token punctuation">.</span><span class="token keyword">private</span>的使用<span class="token operator">:</span>
    修饰成员变量<span class="token operator">:</span><span class="token keyword">private</span> 数据类型 变量名
    修饰方法<span class="token operator">:</span>将<span class="token keyword">public</span>改成<span class="token keyword">private</span><span class="token punctuation">,</span>其他的都一样

<span class="token number">2.</span>问题<span class="token operator">:</span>属性被私有化了<span class="token punctuation">,</span>外界直接调用不了了<span class="token punctuation">,</span>那么此时属性就不能直接赋值取值了<span class="token punctuation">,</span>所以需要提供公共的接口
       get<span class="token operator">/</span>set方法

      set方法<span class="token operator">:</span>为属性赋值
      get方法<span class="token operator">:</span>获取属性值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-this-的介绍" tabindex="-1"><a class="header-anchor" href="#_2-this-的介绍"><span>2.this 的介绍</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>情况：成员变量和局部变量重名的情况，<span class="token class-name">Java</span>使用的是就近原则
    问题：非要使用成员变量，咋么办？
    解决：使用<span class="token keyword">this</span>关键字进行区分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>this 关键字的作用：</p><ul><li>this 可以调用本类成员(变量，方法)</li><li><code>this.</code>本类成员变量</li><li><code>this.</code>本类成员方法()</li></ul><p><code>this.</code>的省略规则：</p><ul><li>本类成员方法：没有前提条件，<code>this.</code>可以省略</li><li>本类成员变量:方法中没有出现重名的变量，<code>this.</code>才可以省略</li></ul></blockquote><blockquote><p>this 介绍：代表当前对象的引用</p></blockquote><h4 id="_3、构造方法" tabindex="-1"><a class="header-anchor" href="#_3、构造方法"><span>3、构造方法</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>构造方法<span class="token punctuation">(</span>构造器<span class="token punctuation">)</span>
	创建对象的时候，要执行的方法
格式<span class="token operator">:</span>
    <span class="token number">1.</span>方法名与类名相同，大小写也需要一致
    <span class="token number">2.</span>没有返回值类型，连<span class="token keyword">void</span>都没有
    <span class="token number">3.</span>没有具体的返回值<span class="token punctuation">(</span>不能由<span class="token keyword">return</span>语句带回结果数据<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>构造方法的执行时机：</p><ul><li>在创建对象的时候，被调用执行</li><li>每创建一次对象，就会执行一次构造方法</li></ul></blockquote><blockquote><p>构造方法的作用：</p><ul><li>本质的作用：创建对象</li><li>结合执行时机：可以创建对象的时候，给对象中的数据初始化</li></ul></blockquote><blockquote><p>构造方法的注意事项：</p><ul><li>一个类中，没有编写构造方法，系统将会提供一个<code>[默认的]</code> <code>[无参数]</code>的构造方法</li><li>一个类中，如果手动编写了构造方法，系统将不会再提供那个默认的无参构造了 <ul><li>建议:编写类的时候，无参构造，带参构造，全部手动给出</li></ul></li><li>构造方法不允许手动调用</li></ul></blockquote><h4 id="_4、封装" tabindex="-1"><a class="header-anchor" href="#_4、封装"><span>4、封装</span></a></h4><blockquote><p>权限修饰符</p><ul><li>private：同一个类中</li><li>（default）：同一个类中，同一个包中</li><li>protected：同一个类中，同一个包中，不同包的子类</li><li>public：任意位置访问</li></ul></blockquote><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2><blockquote><p>String 类的特点：</p><ul><li>1、Java 程序中所有双引号字符串，都是 String 这个类的对象</li><li>2、字符串一旦被创建，就不可更改</li><li>3、String 字符串虽然不可改变，但是可以被共享</li><li>字符串常量池：当我们使用双引号创建字符串对象时，会检查常量池中是否存在该数据 <ul><li>不存在：创建</li><li>存在：复用</li></ul></li></ul></blockquote><h3 id="string-类的常见构造方法" tabindex="-1"><a class="header-anchor" href="#string-类的常见构造方法"><span>String 类的常见构造方法</span></a></h3><table><thead><tr><th>构造方法</th><th>说明</th></tr></thead><tbody><tr><td><code>public String（）</code></td><td>创建空白字符串，不包含任何内容</td></tr><tr><td><code>public String（String original）</code></td><td>根据传入的字符串，创建字符串对象</td></tr><tr><td><code>public String（char[] chs）</code></td><td>根据字符数组，创建字符串对象</td></tr></tbody></table><h3 id="字符串对象-两种创建方式的区别" tabindex="-1"><a class="header-anchor" href="#字符串对象-两种创建方式的区别"><span>字符串对象，两种创建方式的区别</span></a></h3><blockquote><ul><li><p>双引号直接创建</p></li><li><p>通过构造方法创建</p></li></ul></blockquote><h3 id="string-类的常见面试题" tabindex="-1"><a class="header-anchor" href="#string-类的常见面试题"><span>String 类的常见面试题</span></a></h3><h4 id="一" tabindex="-1"><a class="header-anchor" href="#一"><span>一</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringTest1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="6-1" tabindex="0" loading="lazy"><figcaption>6-1</figcaption></figure><h4 id="二" tabindex="-1"><a class="header-anchor" href="#二"><span>二</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="6-1" tabindex="0" loading="lazy"><figcaption>6-1</figcaption></figure><h4 id="三" tabindex="-1"><a class="header-anchor" href="#三"><span>三</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s3 <span class="token operator">=</span> s2 <span class="token operator">+</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="6-1" tabindex="0" loading="lazy"><figcaption>6-1</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-类用于比较的方法" tabindex="-1"><a class="header-anchor" href="#string-类用于比较的方法"><span>String 类用于比较的方法</span></a></h3><blockquote><p><code>public boolean equals(Object anObject) </code> 将此学符非与指定的对象比较<br><code>public boolean equalsIgnoreCase(string anotherString) </code> 将此 String 与列一个 String 比较，不考您大小写</p></blockquote><h3 id="string-字符串的遍历" tabindex="-1"><a class="header-anchor" href="#string-字符串的遍历"><span>String 字符串的遍历</span></a></h3><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 将此字符串转换为一个新的字符数组

<span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">charAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> 返回指定索引处的<span class="token keyword">char</span>值

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 返回此字符串的长度，即字符的个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="string-字符串的截取方法" tabindex="-1"><a class="header-anchor" href="#string-字符串的截取方法"><span>String 字符串的截取方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token operator">:</span>根据传入的索引开始做截取，截取到字符串的末尾
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">,</span><span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> <span class="token operator">:</span>根据传入的索引开始做截取，截取到传入的索引结束<span class="token punctuation">(</span>包含头不包含尾<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-字符串的替换方法" tabindex="-1"><a class="header-anchor" href="#string-字符串的替换方法"><span>String 字符串的替换方法</span></a></h3><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">char</span> oldChar<span class="token punctuation">,</span> <span class="token keyword">char</span> newChar<span class="token punctuation">)</span>将所有oldChar替换为newChar并返回替换后的新字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="string-字符串的切割方法" tabindex="-1"><a class="header-anchor" href="#string-字符串的切割方法"><span>String 字符串的切割方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">String</span> regex<span class="token punctuation">)</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="string-方法小结" tabindex="-1"><a class="header-anchor" href="#string-方法小结"><span>String 方法小结</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> equals方法<span class="token punctuation">(</span>要比较的字符串<span class="token punctuation">)</span><span class="token operator">:</span>比较内容
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equalsIgnorecase</span><span class="token punctuation">(</span>要比较的字符串<span class="token punctuation">)</span><span class="token operator">:</span>比较内容，忽略大小写
<span class="token keyword">public</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span>toCharArray 将字符串转换为字符数组
<span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">chatAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span>根据索引找字符
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>返回字符串的长度
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> beginIndex<span class="token punctuation">)</span>截取到末尾
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> beginIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> 根据开始和结束索引做截取<span class="token punctuation">,</span>包含头不包含尾
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replace</span><span class="token punctuation">(</span>旧值<span class="token punctuation">,</span>新值<span class="token punctuation">)</span>替换
<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">String</span> regex<span class="token punctuation">)</span><span class="token operator">:</span>切割
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stringbuilder-类" tabindex="-1"><a class="header-anchor" href="#stringbuilder-类"><span>StringBuilder 类</span></a></h2><h3 id="stringbuilder-引入" tabindex="-1"><a class="header-anchor" href="#stringbuilder-引入"><span>StringBuilder 引入</span></a></h3><ul><li>提供字符串操作效率</li></ul><h3 id="stringbuilder-的介绍" tabindex="-1"><a class="header-anchor" href="#stringbuilder-的介绍"><span>StringBuilder 的介绍</span></a></h3><ul><li>1、一个可变的字符序列</li><li>2、StringBuilder 是字符串缓冲区，将其理解是容器，这个容器可以存储任意数据类型，但是只要进入到这个容器，全部变成字符串</li></ul><h3 id="stringbuilder-的构造方法" tabindex="-1"><a class="header-anchor" href="#stringbuilder-的构造方法"><span>StringBuilder 的构造方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span>创建一个空白的字符串缓冲区（容器），其初始容量为<span class="token number">16</span>个字符

<span class="token keyword">public</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>string str<span class="token punctuation">)</span> <span class="token operator">:</span>创建一个字符串缓冲区<span class="token punctuation">(</span>容器<span class="token punctuation">)</span>，容器在创建好之后，就会带有参数的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stringbuilder-常用方法" tabindex="-1"><a class="header-anchor" href="#stringbuilder-常用方法"><span>StringBuilder 常用方法</span></a></h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td><code>public StringBuilder append(任意类型)</code></td><td>添加数据，返回对象本身</td></tr><tr><td><code>public StringBuilder reverse()</code></td><td>反转容器中的内容</td></tr><tr><td><code>public int length()</code></td><td>返回长度（字符出现的个数）</td></tr><tr><td><code>public String toString()</code></td><td>通过<code>toString()</code>就可以实现把<code>StringBuilder</code>转换为<code>String</code></td></tr></tbody></table><h2 id="集合基础" tabindex="-1"><a class="header-anchor" href="#集合基础"><span>集合基础</span></a></h2><blockquote><p>什么事集合？</p><ul><li>集合是一种容器，用来装数据的，类似与数组。</li><li>数组定义完成并启动后，长度就固定了。</li><li>集合大小可变，开发中用的更多</li></ul></blockquote><blockquote><p>集合和数组的使用选择</p><ul><li>数组：存储的元素个数固定不变</li><li>集合：存储的元素个数经常发生改变</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span>集合的使用：
    细节：创建<span class="token class-name">String</span>，<span class="token class-name">StringBuilder</span>，<span class="token class-name">ArrayList</span>类的对象，打印对象名，都没有看到地址值，而是元素内容
    <span class="token number">1</span>、构造方法：
    	<span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>创建一个空的集合容器
    <span class="token number">2</span>、集合容器的创建细节：
    	<span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		现象：可以添加任意类型数据
        弊端：数据不够严谨
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>&lt;&gt;:泛型</p><ul><li>目前：使用泛型，可以对集合中存储的数据，进行类型限制</li><li>细节：泛型中，不允许编写基本数据类型</li><li>问题：那我要是想集合中，存储 整数、小数、字符....这些数据</li><li>解决：使用基本数据类型，所对应的包装类</li></ul></blockquote><table><thead><tr><th>基本数据类型</th><th>包装类</th></tr></thead><tbody><tr><td>byte</td><td>Byte</td></tr><tr><td>short</td><td>Short</td></tr><tr><td>int</td><td>Integer</td></tr><tr><td>long</td><td>Long</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>double</td><td>Double</td></tr><tr><td>boolean</td><td>Boolean</td></tr><tr><td>char</td><td>Character</td></tr></tbody></table><h3 id="arraylist-集合常用成员方法" tabindex="-1"><a class="header-anchor" href="#arraylist-集合常用成员方法"><span>ArrayList 集合常用成员方法</span></a></h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td><code>public boolean add(E e)</code></td><td>将指定的元素添加到此集合的末尾</td></tr><tr><td><code>public void add(int index,E element)</code></td><td>在此集合中的指定位置插入指定的元素</td></tr><tr><td><code>public E get(int index)</code></td><td>返回指定索引处的元素</td></tr><tr><td><code>public int size()</code></td><td>返回集合中的元素的个数</td></tr><tr><td><code>public E remove(int index)</code></td><td>删除指定索引处的元素，返回被删除的元素</td></tr><tr><td><code>public boolean remove(Object o)</code></td><td>删除指定的元素，返回删除是否成功</td></tr><tr><td><code>public E set(int index,E element)</code></td><td>修改指定索引处的元素，返回被修改的元素</td></tr></tbody></table>`,163),f=[w];function x(j,S){return a(),s("div",null,f)}const D=n(h,[["render",x],["__file","Java基础.html.vue"]]),z=JSON.parse('{"path":"/category/Java/JavaSE/Java%E5%9F%BA%E7%A1%80.html","title":"Java 基础","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-01T00:00:00.000Z","category":["后端"],"tag":["JAVA"],"star":true,"description":"Java 基础 模块六 、方法 第一章、方法的使用 1.方法介绍以及简单方法定义(无参无返回值) 2.无参数无返回值的方法执行流程 6-16-1 3.方法定义各部分解释 6-26-2 4.有参数无返回值的方法定义和执行流程 6-36-3 5.无参数有返回值定义以及执行流程 6-46-4 6.有参数有返回值定义以及执行流程 6-56-5 7.形式参数和实...","head":[["meta",{"property":"og:url","content":"https://studentdj.github.io/my-blob/category/Java/JavaSE/Java%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"月岛"}],["meta",{"property":"og:title","content":"Java 基础"}],["meta",{"property":"og:description","content":"Java 基础 模块六 、方法 第一章、方法的使用 1.方法介绍以及简单方法定义(无参无返回值) 2.无参数无返回值的方法执行流程 6-16-1 3.方法定义各部分解释 6-26-2 4.有参数无返回值的方法定义和执行流程 6-36-3 5.无参数有返回值定义以及执行流程 6-46-4 6.有参数有返回值定义以及执行流程 6-56-5 7.形式参数和实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T08:25:01.000Z"}],["meta",{"property":"article:author","content":"月岛"}],["meta",{"property":"article:tag","content":"JAVA"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-24T08:25:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-24T08:25:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"月岛\\",\\"url\\":\\"https://studentdj.github.io/my-blob/\\"}]}"]]},"headers":[{"level":2,"title":"模块六 、方法","slug":"模块六-、方法","link":"#模块六-、方法","children":[{"level":3,"title":"第一章、方法的使用","slug":"第一章、方法的使用","link":"#第一章、方法的使用","children":[]},{"level":3,"title":"第二章、方法注意事项","slug":"第二章、方法注意事项","link":"#第二章、方法注意事项","children":[]},{"level":3,"title":"第三章、方法练习","slug":"第三章、方法练习","link":"#第三章、方法练习","children":[]},{"level":3,"title":"第四章、方法的重载","slug":"第四章、方法的重载","link":"#第四章、方法的重载","children":[]}]},{"level":2,"title":"模块七、面向对象","slug":"模块七、面向对象","link":"#模块七、面向对象","children":[{"level":3,"title":"第一章.类和对象","slug":"第一章-类和对象","link":"#第一章-类和对象","children":[]},{"level":3,"title":"第二章.成员变量和局部变量的区别","slug":"第二章-成员变量和局部变量的区别","link":"#第二章-成员变量和局部变量的区别","children":[]},{"level":3,"title":"第三章.练习","slug":"第三章-练习","link":"#第三章-练习","children":[]}]},{"level":2,"title":"模块八、面向对象","slug":"模块八、面向对象","link":"#模块八、面向对象","children":[{"level":3,"title":"第一章.封装","slug":"第一章-封装","link":"#第一章-封装","children":[]}]},{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[{"level":3,"title":"String 类的常见构造方法","slug":"string-类的常见构造方法","link":"#string-类的常见构造方法","children":[]},{"level":3,"title":"字符串对象，两种创建方式的区别","slug":"字符串对象-两种创建方式的区别","link":"#字符串对象-两种创建方式的区别","children":[]},{"level":3,"title":"String 类的常见面试题","slug":"string-类的常见面试题","link":"#string-类的常见面试题","children":[]},{"level":3,"title":"String 类用于比较的方法","slug":"string-类用于比较的方法","link":"#string-类用于比较的方法","children":[]},{"level":3,"title":"String 字符串的遍历","slug":"string-字符串的遍历","link":"#string-字符串的遍历","children":[]},{"level":3,"title":"String 字符串的截取方法","slug":"string-字符串的截取方法","link":"#string-字符串的截取方法","children":[]},{"level":3,"title":"String 字符串的替换方法","slug":"string-字符串的替换方法","link":"#string-字符串的替换方法","children":[]},{"level":3,"title":"String 字符串的切割方法","slug":"string-字符串的切割方法","link":"#string-字符串的切割方法","children":[]},{"level":3,"title":"String 方法小结","slug":"string-方法小结","link":"#string-方法小结","children":[]}]},{"level":2,"title":"StringBuilder 类","slug":"stringbuilder-类","link":"#stringbuilder-类","children":[{"level":3,"title":"StringBuilder 引入","slug":"stringbuilder-引入","link":"#stringbuilder-引入","children":[]},{"level":3,"title":"StringBuilder 的介绍","slug":"stringbuilder-的介绍","link":"#stringbuilder-的介绍","children":[]},{"level":3,"title":"StringBuilder 的构造方法","slug":"stringbuilder-的构造方法","link":"#stringbuilder-的构造方法","children":[]},{"level":3,"title":"StringBuilder 常用方法","slug":"stringbuilder-常用方法","link":"#stringbuilder-常用方法","children":[]}]},{"level":2,"title":"集合基础","slug":"集合基础","link":"#集合基础","children":[{"level":3,"title":"ArrayList 集合常用成员方法","slug":"arraylist-集合常用成员方法","link":"#arraylist-集合常用成员方法","children":[]}]}],"git":{"createdTime":1716539101000,"updatedTime":1716539101000,"contributors":[{"name":"DJ","email":"2412205377@qq.com","commits":1}]},"readingTime":{"minutes":27.86,"words":8359},"filePathRelative":"category/Java/JavaSE/Java基础.md","localizedDate":"2024年3月1日","excerpt":"\\n<h2>模块六 、方法</h2>\\n<h3>第一章、方法的使用</h3>\\n<h4>1.方法介绍以及简单方法定义(无参无返回值)</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>1.问题描述:\\n  之前所有的代码都在main方法中写,如果我们将来将所有功能的代码都放到main方法中,会显得main方法代码太多,太乱,太臃肿-&gt; 不好维护\\n\\n  解决:将不同功能的代码放到不同的方法中,想执行某个功能,直接调用方法名就行了,对应的代码就自动执行起来了\\n      将来维护的时候,直接找到对应的方法,就可以对其直接修改维护\\n\\n2.方法:\\n  拥有功能性代码的代码块\\n  将不同的功能放在不同的方法中,给每个方法取个名字,直接调用方法名,对应的方法就执行起来了,好维护\\n\\n3.通用定义格式:\\n  修饰符 返回值类型 方法名(参数){\\n      方法体\\n      return 结果\\n  }\\n\\n4.通过通用格式,分成四种方法来学习:\\n  a.无参无返回值方法\\n  b.有参无返回值方法\\n  c.无参有返回值方法\\n  d.有参有返回值方法\\n</code></pre></div>","autoDesc":true}');export{D as comp,z as data};
