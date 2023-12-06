import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,a as n,b as s,d as e,e as p}from"./app-d21c18da.js";const u="/my-blob/assets/express-a829db26.png",r="/my-blob/assets/tips-e8b94698.png",d="/my-blob/assets/help-50595678.png",k="/my-blob/assets/CRUD-4b019e6e.png",v="/my-blob/assets/POST-a0a19428.png",m="/my-blob/assets/cookie-3c300ebc.png",b="/my-blob/assets/code-4102cc1d.png",t="/my-blob/assets/7.1-eaca8c72.png",y={},g=n("h1",{id:"nest-js-学习",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nest-js-学习","aria-hidden":"true"},"#"),s(" Nest JS 学习")],-1),f=n("h2",{id:"_1、介绍nestjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、介绍nestjs","aria-hidden":"true"},"#"),s(" 1、介绍nestjs")],-1),h=n("p",null,"Nestjs 是一个用于构建高效可扩展的一个基于Node js 服务端 应用程序开发框架",-1),w=n("p",null,"并且完全支持typeScript 结合了 AOP 面向切面的编程方式",-1),x=n("p",null,"nestjs 还是一个spring MVC 的风格 其中有依赖注入 IOC 控制反转 都是借鉴了Angualr",-1),_=n("p",null,"nestjs 的底层代码运用了 express 和 Fastify 在他们的基础上提供了一定程度的抽象，同时也将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块",-1),j={href:"https://nestjs.com/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://nestjs.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://docs.nestjs.cn/",target:"_blank",rel:"noopener noreferrer"},U=n("h3",{id:"nestjs内置框架express-默认express",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nestjs内置框架express-默认express","aria-hidden":"true"},"#"),s(" nestjs内置框架express 默认express")],-1),C=n("p",null,"能够快速构建服务端应用程序，且学习成本非常低，容易上手",-1),D=n("figure",null,[n("img",{src:u,alt:"01",tabindex:"0",loading:"lazy"}),n("figcaption",null,"01")],-1),P={href:"https://www.expressjs.com.cn/",target:"_blank",rel:"noopener noreferrer"},B=p(`<p>###nestjs唯二内置框架 Fastify</p><ul><li>高性能： 据我们所知，Fastify 是这一领域中最快的 web 框架之一，另外，取决于代码的复杂性，Fastify 最多可以处理每秒 3 万次的请求。</li><li>可扩展： Fastify 通过其提供的钩子（hook）、插件和装饰器（decorator）提供完整的可扩展性。</li><li>基于 Schema： 即使这不是强制性的，我们仍建议使用 JSON Schema 来做路由（route）验证及输出内容的序列化，Fastify 在内部将 schema 编译为高效的函数并执行。</li><li>日志： 日志是非常重要且代价高昂的。我们选择了最好的日志记录程序来尽量消除这一成本，这就是 Pino!</li><li>对开发人员友好： 框架的使用很友好，帮助开发人员处理日常工作，并且不牺牲性能和安全性。</li><li>支持 TypeScript： 我们努力维护一个 TypeScript 类型声明文件，以便支持不断成长的 TypeScript 社区。</li></ul><p>##2、IOC控制反转 DI依赖注入</p><p>在学习<code>nestjs</code>之前需要先了解其设计模式</p><p>IOC</p><p>Inversion of Control字面意思是<code>控制反转</code>，具体定义是高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。</p><p>DI</p><p>依赖注入（Dependency Injection）其实和IoC是同根生，这两个原本就是一个东西，只不过由于控制反转概念比较含糊（可能只是理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系），所以2004年大师级人物Martin Fowler又给出了一个新的名字：“依赖注入”。 类A依赖类B的常规表现是在A中使用B的instance。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
    entity<span class="token operator">:</span><span class="token constant">A</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
 
c<span class="token punctuation">.</span>entity<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，<strong>B</strong> 中代码的实现是需要依赖 <strong>A</strong> 的，<strong>两者的代码耦合度非常高。当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展</strong>。</p><p>为了解决这个问题可以使用IOC容器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//中间件用于解耦</span>
<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token punctuation">{</span>
    modeuls<span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>modeuls <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> modeuls<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>modeuls<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> modeuls
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modeuls<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> mo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;张三1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token string">&#39;张三2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token builtin">any</span>
    c<span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>container<span class="token operator">:</span> Container<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span>mo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实就是写了一个中间件，来收集依赖，主要是为了解耦，减少维护成本</p><p>##3、前置知识装饰器</p><p>###1、什么是装饰器</p><p>装饰器是一种特殊的类型声明，他可以附加在类，方法，属性，参数上面</p><p>装饰器写法 <strong>tips（需要开启一项配置）</strong></p><figure><img src="`+r+`" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><p>###类装饰器 主要是通过@符号添加装饰器</p><p>他会自动把class的构造函数传入到装饰器的第一个参数 target</p><p>然后通过prototype可以自定义添加属性和方法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">decotators</span> <span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token punctuation">}</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">decotators</span></span>
 
<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
 
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> user<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性装饰器" tabindex="-1"><a class="header-anchor" href="#属性装饰器" aria-hidden="true">#</a> 属性装饰器</h3><p>同样使用@符号给属性添加装饰器</p><p>他会返回两个参数</p><p>1.原形对象</p><p>2.属性的名称</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> currency<span class="token operator">:</span> <span class="token function-variable function">PropertyDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">class</span> <span class="token class-name">Xiaoman</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">currency</span></span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数装饰器" tabindex="-1"><a class="header-anchor" href="#参数装饰器" aria-hidden="true">#</a> 参数装饰器</h3><p>同样使用@符号给属性添加装饰器</p><p>他会返回两个参数</p><p>1.原形对象</p><p>2.方法的名称</p><p>3.参数的位置从0开始</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> currency<span class="token operator">:</span> <span class="token function-variable function">ParameterDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">class</span> <span class="token class-name">Xiaoman</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">currency</span></span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法装饰器" tabindex="-1"><a class="header-anchor" href="#方法装饰器" aria-hidden="true">#</a> 方法装饰器</h3><p>同样使用@符号给属性添加装饰器</p><p>他会返回两个参数</p><p>1.原形对象</p><p>2.方法的名称</p><p>3.属性描述符 可写对应writable，可枚举对应enumerable，可配置对应configurable</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> currency<span class="token operator">:</span> <span class="token function-variable function">MethodDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>descriptor<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span>descriptor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">class</span> <span class="token class-name">Xiaoman</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">currency</span></span>
    <span class="token function">getName</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###实现一个GET请求</p><p>安装依赖npm install axios -S</p><p>定义控制器 Controller</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token punctuation">}</span>
    <span class="token function">getList</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义装饰器</p><p>这时候需要使用装饰器工厂</p><p>应为装饰器默认会塞入一些参数</p><p>定义 descriptor 的类型 通过 descriptor描述符里面的value 把axios的结果返回给当前使用装饰器的函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
 
<span class="token keyword">const</span> Get <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> MethodDecorator <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fnc <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">fnc</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">fnc</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                status<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">//定义控制器</span>
<span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token punctuation">}</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;https://api.apiopen.top/api/getHaoKanVideo?page=0&amp;size=10&#39;</span><span class="token punctuation">)</span>
    <span class="token function">getList</span> <span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>list<span class="token punctuation">,</span> status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##4、nestjs cli</p><h4 id="通过cli创建nestjs项目" tabindex="-1"><a class="header-anchor" href="#通过cli创建nestjs项目" aria-hidden="true">#</a> 通过cli创建nestjs项目</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span>g @nestjs<span class="token operator">/</span>cli

nest <span class="token keyword">new</span> <span class="token punctuation">[</span>项目名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目 我们需要<code>热更新</code>就启动npm run start:dev就可以了</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nest start&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nest start --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start:debug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nest start --debug --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node dist/main&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="目录介绍" tabindex="-1"><a class="header-anchor" href="#目录介绍" aria-hidden="true">#</a> 目录介绍</h4><p>1.main.ts 入口文件主文件 类似于vue 的main.ts</p><p>通过 NestFactory.create(AppModule) 创建一个app 就是类似于绑定一个根组件App.vue</p><p>app.listen(3000); 监听一个端口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span><span class="token punctuation">;</span>
 
 
 
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Controller.ts 控制器</p><p>你可以理解成vue 的路由</p><p>private readonly appService: AppService 这一行代码就是依赖注入不需要实例化 appService 它内部会自己实例化的我们主需要放上去就可以了</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.service&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> appService<span class="token operator">:</span> AppService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appService<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token comment">//-----------------------------------------------------</span>
<span class="token comment">//修改地址之后</span>
 
<span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.service&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> appService<span class="token operator">:</span> AppService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/hello&#39;</span><span class="token punctuation">)</span>
  <span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appService<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.app.service.ts</p><p>这个文件主要实现业务逻辑的 当然Controller可以实现逻辑，但是就是单一的无法复用，放到app.service有别的模块也需要就可以实现复用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppService</span> <span class="token punctuation">{</span>
  <span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##5、nestjs cli 常用命令</p><p>###nest --help 可以查看nestjs所有的命令</p><figure><img src="`+d+`" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure><h4 id="_1-生成controller-ts" tabindex="-1"><a class="header-anchor" href="#_1-生成controller-ts" aria-hidden="true">#</a> 1.生成controller.ts</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>nest g co user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-生成-module-ts" tabindex="-1"><a class="header-anchor" href="#_2-生成-module-ts" aria-hidden="true">#</a> 2.生成 module.ts</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>nest g mo user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-生成service-ts" tabindex="-1"><a class="header-anchor" href="#_3-生成service-ts" aria-hidden="true">#</a> 3.生成service.ts</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>nest g s user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="以上步骤一个一个生成的太慢了我们可以直接使用一个命令生成curd" tabindex="-1"><a class="header-anchor" href="#以上步骤一个一个生成的太慢了我们可以直接使用一个命令生成curd" aria-hidden="true">#</a> 以上步骤一个一个生成的太慢了我们可以直接使用一个命令生成CURD</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> nest g resource user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><p><code>nest-cli.json</code>添加此配置，不会生成测试文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;generateOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##6、nestjs 控制器</p><h3 id="controller-request-获取前端传过来的参数" tabindex="-1"><a class="header-anchor" href="#controller-request-获取前端传过来的参数" aria-hidden="true">#</a> Controller Request （获取前端传过来的参数）</h3><p><code>nestjs</code>提供了方法参数装饰器 用来帮助我们快速获取参数 如下</p><table><thead><tr><th style="text-align:left;">@Request()</th><th>req</th></tr></thead><tbody><tr><td style="text-align:left;">@Response()</td><td>res</td></tr><tr><td style="text-align:left;">@Next()</td><td>next</td></tr><tr><td style="text-align:left;">@Session()</td><td>req.session</td></tr><tr><td style="text-align:left;">@Param(key?: string)</td><td>req.params<code>/</code>req.params[key]</td></tr><tr><td style="text-align:left;">@Body(key?: string)</td><td>req.body<code>/</code>req.body[key]</td></tr><tr><td style="text-align:left;">@Query(key?: string)</td><td>req.query<code>/</code>req.query[key]</td></tr><tr><td style="text-align:left;">@Headers(name?: string)</td><td>req.headers<code>/</code>req.headers[name]</td></tr><tr><td style="text-align:left;">@HttpCode</td><td></td></tr></tbody></table><h4 id="_1-获取get请求传参" tabindex="-1"><a class="header-anchor" href="#_1-获取get请求传参" aria-hidden="true">#</a> 1.获取get请求传参</h4><p>可以使用Request装饰器或者 Query 装饰器 跟express 完全一样</p><p>也可以使用Query 直接获取 不需要在通过req.query 了</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Patch<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Version<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-user.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-user.dto&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-post-获取参数" tabindex="-1"><a class="header-anchor" href="#_2-post-获取参数" aria-hidden="true">#</a> 2.post 获取参数</h4><p>可以使用Request装饰器 或者 Body 装饰器 跟express 完全一样</p><p>或者直接使用Body 装饰器</p><p>也可以直接读取key</p><figure><img src="`+v+`" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Patch<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Version<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-user.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-user.dto&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-动态路由" tabindex="-1"><a class="header-anchor" href="#_3-动态路由" aria-hidden="true">#</a> 3.动态路由</h4><p>可以使用Request装饰器 或者 Param 装饰器 跟express 完全一样</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Patch<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Version<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-user.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-user.dto&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token function">findId</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-读取header-信息" tabindex="-1"><a class="header-anchor" href="#_4-读取header-信息" aria-hidden="true">#</a> 4.读取header 信息</h4><p>我在调试工具随便加了一个cookie</p><figure><img src="`+m+`" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Patch<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Version<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Query<span class="token punctuation">,</span> Ip<span class="token punctuation">,</span> Header<span class="token punctuation">,</span> Headers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-user.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-user.dto&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token function">findId</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Headers</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-状态码" tabindex="-1"><a class="header-anchor" href="#_5-状态码" aria-hidden="true">#</a> 5.状态码</h4><p>使用 HttpCode 装饰器 控制接口返回的状态码</p><figure><img src="`+b+`" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Patch<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Version<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Query<span class="token punctuation">,</span> Ip<span class="token punctuation">,</span> Header<span class="token punctuation">,</span> Headers<span class="token punctuation">,</span> HttpCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-user.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-user.dto&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">HttpCode</span></span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token function">findId</span> <span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Headers</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
       code<span class="token operator">:</span><span class="token number">500</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、nestjs-提供者" tabindex="-1"><a class="header-anchor" href="#_7、nestjs-提供者" aria-hidden="true">#</a> 7、nestjs 提供者</h2><p>Providers<br> Providers 是 Nest 的一个基本概念。许多基本的 Nest 类可能被视为 provider - service, repository, factory, helper 等等。 他们都可以通过 constructor 注入依赖关系。 这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 Nest运行时系统。 Provider 只是一个用 @Injectable() 装饰器注释的类。</p><h4 id="_1-基本用法" tabindex="-1"><a class="header-anchor" href="#_1-基本用法" aria-hidden="true">#</a> 1.基本用法</h4><p>module 引入 service 在 providers 注入</p><figure><img src="`+t+'" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><p>在Controller 就可以使用注入好的service 了</p><figure><img src="'+t+'" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><h4 id="_2-service-第二种用法-自定义名称" tabindex="-1"><a class="header-anchor" href="#_2-service-第二种用法-自定义名称" aria-hidden="true">#</a> 2.service 第二种用法(自定义名称)</h4>',115),N={href:"https://so.csdn.net/so/search?q=%E8%AF%AD%E6%B3%95%E7%B3%96&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},A=p(`<p>其实他的全称是这样的</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.controller&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span>UserController<span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    provide<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
    useClass<span class="token operator">:</span> UserService
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义名称之后 需要用对应的Inject 取 不然会找不到的</p><h4 id="_3-自定义注入值" tabindex="-1"><a class="header-anchor" href="#_3-自定义注入值" aria-hidden="true">#</a> 3.自定义注入值</h4><p>通过 useValue</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.controller&#39;</span><span class="token punctuation">;</span>
 
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span>UserController<span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    provide<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
    useClass<span class="token operator">:</span> UserService
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    provide<span class="token operator">:</span> <span class="token string">&quot;JD&quot;</span><span class="token punctuation">,</span>
    useValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;TB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PDD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JD&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-工厂模式" aria-hidden="true">#</a> 3.工厂模式</h4><p>如果服务 之间有相互的依赖 或者逻辑处理 可以使用 useFactory</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre class="language-TypeScript"><code>import { Module } from &#39;@nestjs/common&#39;;
import { UserService } from &#39;./user.service&#39;;
import { UserService2 } from &#39;./user.service2&#39;;
import { UserService3 } from &#39;./user.service3&#39;;
import { UserController } from &#39;./user.controller&#39;;
 
@Module({
  controllers: [UserController],
  providers: [{
    provide: &quot;user&quot;,
    useClass: UserService
  }, {
    provide: &quot;JD&quot;,
    useValue: [&#39;TB&#39;, &#39;PDD&#39;, &#39;JD&#39;]
  },
    UserService2,
  {
    provide: &quot;Test&quot;,
    inject: [UserService2],
    useFactory(UserService2: UserService2) {
      return new UserService3(UserService2)
    }
  }
  ]
})
export class UserModule { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-异步模式" tabindex="-1"><a class="header-anchor" href="#_4-异步模式" aria-hidden="true">#</a> 4.异步模式</h4><p>useFactory 返回一个promise 或者其他异步操作</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre class="language-TypeScript"><code>import { Module } from &#39;@nestjs/common&#39;;
import { UserService } from &#39;./user.service&#39;;
import { UserService2 } from &#39;./user.service2&#39;;
import { UserService3 } from &#39;./user.service3&#39;;
import { UserController } from &#39;./user.controller&#39;;
 
@Module({
  controllers: [UserController],
  providers: [{
    provide: &quot;user&quot;,
    useClass: UserService
  }, {
    provide: &quot;JD&quot;,
    useValue: [&#39;TB&#39;, &#39;PDD&#39;, &#39;JD&#39;]
  },
    UserService2,
  {
    provide: &quot;Test&quot;,
    inject: [UserService2],
    useFactory(UserService2: UserService2) {
      return new UserService3(UserService2)
    }
  },
  {
    provide: &quot;sync&quot;,
    async useFactory() {
      return await  new Promise((r) =&gt; {
        setTimeout(() =&gt; {
          r(&#39;sync&#39;)
        }, 3000)
      })
    }
  }
  ]
})
export class UserModule { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function I(G,M){const a=c("ExternalLinkIcon");return i(),l("div",null,[g,f,h,w,x,_,n("p",null,[s("nest js 英文官网 "),n("a",j,[s("NestJS - A progressive Node.js framework"),e(a)])]),n("p",null,[s("nestjs 中文网 "),n("a",q,[s("NestJS 简介 | NestJS 中文文档 | NestJS 中文网"),e(a)])]),n("p",null,[s("nestjs 中文网2 "),n("a",S,[s("Nest.js 中文文档"),e(a)])]),U,C,D,n("p",null,[s("express 文档 "),n("a",P,[s("Express - 基于 Node.js 平台的 web 应用开发框架 - Express 中文文档 | Express 中文网"),e(a)])]),B,n("p",null,[s("第一种用法就是一个"),n("a",N,[s("语法糖"),e(a)])]),A])}const F=o(y,[["render",I],["__file","Nest JS.html.vue"]]);export{F as default};
