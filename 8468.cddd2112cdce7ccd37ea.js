"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8468],{8468:function(n,a,s){s.r(a),a.default='<p><a href="https://npmjs.com/package/json-minimizer-webpack-plugin"><img src="https://img.shields.io/npm/v/json-minimizer-webpack-plugin.svg" alt="npm"></a> <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/json-minimizer-webpack-plugin.svg" alt="node"></a> <a href="https://david-dm.org/webpack-contrib/json-minimizer-webpack-plugin"><img src="https://david-dm.org/webpack-contrib/json-minimizer-webpack-plugin.svg" alt="deps"></a> <a href="https://github.com/webpack-contrib/json-minimizer-webpack-plugin/actions"><img src="https://github.com/webpack-contrib/json-minimizer-webpack-plugin/workflows/json-minimizer-webpack-plugin/badge.svg" alt="tests"></a> <a href="https://codecov.io/gh/webpack-contrib/json-minimizer-webpack-plugin"><img src="https://codecov.io/gh/webpack-contrib/json-minimizer-webpack-plugin/branch/master/graph/badge.svg" alt="cover"></a> <a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a> <a href="https://packagephobia.now.sh/result?p=json-minimizer-webpack-plugin"><img src="https://packagephobia.now.sh/badge?p=json-minimizer-webpack-plugin" alt="size"></a></p> <p>This plugin uses <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">JSON.stringify()</a> to minify your JSON.</p> <h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To begin, you\'ll need to install <code>json-minimizer-webpack-plugin</code>:</p> <pre><code class="hljs language-console">$ npm install json-minimizer-webpack-plugin --save-dev\n</code></pre> <p>Then add the plugin to your <code>webpack</code> configuration. For example:</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> JsonMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"json-minimizer-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> CopyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"copy-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.json$/i</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CopyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      patterns<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          context<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token keyword">from</span><span class="token operator">:</span> <span class="token string">"./src/*.json"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line</span>\n      <span class="token comment">// `...`</span>\n      <span class="token keyword">new</span> <span class="token class-name">JsonMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>And run <code>webpack</code> via your preferred method.</p> <h2 id="options">Options<a href="#options" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <table> <thead> <tr> <th align="center">Name</th> <th align="center">Type</th> <th align="center">Default</th> <th align="left">Description</th> </tr> </thead> <tbody> <tr> <td align="center" data-th="Name"><span><strong><a href="#test"><code>test</code></a></strong></span></td> <td align="center" data-th="Type"><span><code>String|RegExp|Array&#x3C;String|RegExp></code></span></td> <td align="center" data-th="Default"><span><code>/\\.json(\\?.*)?$/i</code></span></td> <td align="left" data-th="Description"><span>Test to match files against.</span></td> </tr> <tr> <td align="center" data-th="Name"><span><strong><a href="#include"><code>include</code></a></strong></span></td> <td align="center" data-th="Type"><span><code>String|RegExp|Array&#x3C;String|RegExp></code></span></td> <td align="center" data-th="Default"><span><code>undefined</code></span></td> <td align="left" data-th="Description"><span>Files to include.</span></td> </tr> <tr> <td align="center" data-th="Name"><span><strong><a href="#exclude"><code>exclude</code></a></strong></span></td> <td align="center" data-th="Type"><span><code>String|RegExp|Array&#x3C;String|RegExp></code></span></td> <td align="center" data-th="Default"><span><code>undefined</code></span></td> <td align="left" data-th="Description"><span>Files to exclude.</span></td> </tr> <tr> <td align="center" data-th="Name"><span><strong><a href="#minimizeroptions"><code>minimizerOptions</code></a></strong></span></td> <td align="center" data-th="Type"><span><code>Object</code></span></td> <td align="center" data-th="Default"><span><code>{ replacer: null, space: null }</code></span></td> <td align="left" data-th="Description"><span><code>JSON.stringify()</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">options</a>.</span></td> </tr> </tbody> </table> <h3 id="test"><code>test</code><a href="#test" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code> - default: <code>/\\.json(\\?.*)?$/i</code></p> <p>Test to match files against.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">JsonMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.foo\\.json/i</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="include"><code>include</code><a href="#include" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code> Default: <code>undefined</code></p> <p>Files to include.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">JsonMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        include<span class="token operator">:</span> <span class="token regex">/\\/includes/</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="exclude"><code>exclude</code><a href="#exclude" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code> Default: <code>undefined</code></p> <p>Files to exclude.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">JsonMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        exclude<span class="token operator">:</span> <span class="token regex">/\\/excludes/</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="minimizeroptions"><code>minimizerOptions</code><a href="#minimizeroptions" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Type: <code>Object</code> Default: <code>{ replacer: null, space: null }</code></p> <p><code>JSON.stringify()</code> <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">options</a>.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">JsonMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        minimizerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n          space<span class="token operator">:</span> <span class="token string">"\\t"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p> <p><a href="https://github.com/webpack-contrib/json-minimizer-webpack-plugin/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p> <h2 id="license">License<a href="#license" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><a href="https://github.com/webpack-contrib/json-minimizer-webpack-plugin/blob/master/LICENSE">MIT</a></p> '}}]);