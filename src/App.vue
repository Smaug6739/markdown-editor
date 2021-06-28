<template>
  <main style="width: 100%">
    <div id="editor">
      <div class="input">
        <textarea v-model="input"></textarea>
      </div>
      <div id="render" v-html="outputHTML"></div>
      <Window windowName="GET HTML" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Window from "@/components/common/window.vue";
import marked from "marked";
import * as prism from "prismjs";
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    return prism.highlight(code, prism.languages[lang], lang);
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default defineComponent({
  name: "App",
  data() {
    return {
      input: "# Hello World !",
    };
  },
  computed: {
    outputHTML(): string {
      return marked(this.input);
    },
  },
  components: {
    Window,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#btnModal {
  position: absolute;
  right: 10px;
  bottom: 30px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

main {
  overflow: auto;
}
#editor {
  display: flex;
  justify-content: space-between;
}
.input {
  width: 49%;
  height: 80vh;
  background-color: rgb(207, 207, 207);
}
textarea {
  width: 100%;
  height: 100%;
  background-color: rgb(207, 207, 207);
}
#render {
  width: 49%;
  height: 95vh;
}
@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Arvo);

@font-face {
  src: url(https://lea.verou.me/logo.otf);
  font-family: "LeaVerou";
}

/*
 Shared styles
 */

section h1,
#features li strong,
header h2,
footer p {
  font: 100% Rockwell, Arvo, serif;
}

/*
 Styles
 */

* {
  margin: 0;
  padding: 0;
}

body {
  font: 100%/1.5 Questrial, sans-serif;
  tab-size: 4;
  hyphens: auto;
}

a {
  color: inherit;
}

section h1 {
  font-size: 250%;
}

section section h1 {
  font-size: 150%;
}

section h1 code {
  font-style: normal;
}

section h1 > a,
section h2[id] > a {
  text-decoration: none;
}

section h1 > a:before,
section h2[id] > a:before {
  content: "§";
  position: absolute;
  padding: 0 0.2em;
  margin-left: -1em;
  border-radius: 0.2em;
  color: silver;
  text-shadow: 0 1px white;
}

section h1 > a:hover:before,
section h2[id] > a:hover:before {
  color: black;
  background: #f1ad26;
}

p {
  margin: 1em 0;
}

section h1,
h2,
h3 {
  margin: 1em 0 0.3em;
}

h2,
h3 {
  font-weight: normal;
}

dt {
  margin: 1em 0 0 0;
  font-size: 130%;
}

dt:after {
  content: ":";
}

dd {
  margin-left: 2em;
}

strong {
  font-weight: bold;
}

code,
pre {
  font-family: Consolas, Monaco, "Andale Mono", "Lucida Console", monospace;
  hyphens: none;
}

pre {
  max-height: 30em;
  overflow: auto;
}

pre > code.highlight {
  outline: 0.4em solid red;
  outline-offset: 0.4em;
}

header,
body > section {
  display: block;
  max-width: 900px;
  margin: auto;
}

header:before,
footer:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-size: 20px 40px;
  background-repeat: repeat-x;
  background-image: linear-gradient(
      45deg,
      transparent 34%,
      white 34%,
      white 66%,
      transparent 66%
    ),
    linear-gradient(
      135deg,
      transparent 34%,
      white 34%,
      white 66%,
      transparent 66%
    );
}

header .intro,
html.simple header {
  overflow: hidden;
}

header h1 {
  float: left;
  margin-right: 30px;
  color: #7fab14;
  text-align: center;
  font-size: 140%;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}

header h2 {
  margin-top: 0.5em;
  color: #f1ad26;
}

header h1 a {
  text-decoration: none;
}

header img {
  display: block;
  width: 150px;
  height: 128px;
  margin-bottom: 0.3em;
  border: 0;
}

header h2 {
  font-size: 300%;
}

header .intro p {
  margin: 0;
  font: 150%/1.4 Questrial, sans-serif;
  font-size: 150%;
}

#features {
  width: 66em;
  margin-top: 2em;
  font-size: 80%;
}

#features li {
  margin: 0 0 2em 0;
  list-style: none;
  display: inline-block;
  width: 27em;
  vertical-align: top;
}

#features li:nth-child(odd) {
  margin-right: 5em;
}

#features li:before {
  content: "✓";
  float: left;
  margin-left: -0.8em;
  color: #7fab14;
  font-size: 400%;
  line-height: 1;
}

#features li strong {
  display: block;
  margin-bottom: 0.1em;
  font-size: 200%;
}

header .download-button {
  float: right;
  margin: 0 0 0.5em 0.5em;
}

#theme {
  position: relative;
  z-index: 1;
  float: right;
  margin-right: -1em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

#theme > p {
  position: absolute;
  left: 100%;
  transform: translateX(50%) rotate(90deg);
  transform-origin: top left;
  font-size: 130%;
}

#theme > label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5em;
  height: 8.5em;
  line-height: 1em;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.5);
  cursor: pointer;
  font-size: 90%;
  padding: 0;
}

#theme > label:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: inherit;
  // background: url(img/spectrum.png) fixed;
}

#theme > label:nth-of-type(n + 2) {
  margin-top: -2.5em;
}

#theme > input:not(:checked) + label:hover {
  background: hsla(77, 80%, 60%, 0.5);
}

#theme > input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

#theme > input:checked + label {
  background: #7fab14;
}

footer {
  margin-top: 2em;
  background-position: bottom;
  color: white;
  text-shadow: 0 -1px 2px black;
}

footer:before {
  bottom: auto;
  top: 0;
  background-position: bottom;
}

footer p {
  font-size: 150%;
}

footer ul {
  column-count: 3;
}

.download-button {
  display: block;
  padding: 0.2em 0.8em 0.1em;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: #39a1cf;
  box-shadow: 0 2px 10px black, inset 0 1px hsla(0, 0%, 100%, 0.3),
    inset 0 0.4em hsla(0, 0%, 100%, 0.2),
    inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  color: white;
  text-shadow: 0 -1px 2px black;
  text-align: center;
  font-size: 250%;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  hyphens: manual;
}

.download-button:hover {
  background-color: #7fab14;
}

.download-button:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
}

#toc {
  position: fixed;
  bottom: 15px;
  max-width: calc(50% - 450px - 40px);
  font-size: 80%;
  z-index: 999;
  background: white;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 10px 10px;
  border-radius: 0 3px 3px 0;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  #toc {
    display: none;
  }
}

#toc:hover {
  color: rgba(0, 0, 0, 1);
}

#toc h1 {
  font-size: 180%;
  margin-top: 0.75rem;
}

#toc li {
  list-style: none;
}

#logo:before {
  content: "☠";
  float: right;
  font: 100px/1.6 LeaVerou;
}

.used-by-logos {
  overflow: hidden;
}
.used-by-logos > a {
  float: left;
  width: 33.33%;
  height: 100px;
  text-align: center;
  background: #f5f2f0;
  box-sizing: border-box;
  border: 5px solid white;
  position: relative;
}
.used-by-logos > a > img {
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

label a.owner {
  margin: 0 0.5em;
}

label a.owner:not(:hover) {
  text-decoration: none;
  color: #aaa;
}

#languages-list ul {
  column-count: 3;
}
#languages-list li {
  padding: 0.2em;
}
#languages-list li[data-id="javascript"] {
  border-bottom: 1px solid #aaa;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
}

ul.plugin-list {
  column-count: 2;
}
ul.plugin-list > li {
  break-inside: avoid;
  page-break-inside: avoid;
}
ul.plugin-list > li > a {
  font-size: 110%;
}
ul.plugin-list > li > div {
  margin-bottom: 0.5em;
}

/*
 * Fix for Toolbar's overflow issue
 */

div.code-toolbar {
  display: block;
  overflow: auto;
}
pre {
  background: black;
  margin: 1%;
  padding: 0.6%;
  border-radius: 10px;
}
code {
  background: black;
  padding: 0.3%;
  border-radius: 8px;
  color: white;
}
code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2b2b2b;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #d4d0ab;
}

.token.punctuation {
  color: #fefefe;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #ffa07a;
}

.token.boolean,
.token.number {
  color: #00e0e0;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #abe338;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #00e0e0;
}

.token.atrule,
.token.attr-value,
.token.function {
  color: #ffd700;
}

.token.keyword {
  color: #00e0e0;
}

.token.regex,
.token.important {
  color: #ffd700;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

@media screen and (-ms-high-contrast: active) {
  code[class*="language-"],
  pre[class*="language-"] {
    color: windowText;
    background: window;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: window;
  }

  .token.important {
    background: highlight;
    color: window;
    font-weight: normal;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.keyword,
  .token.operator,
  .token.selector {
    font-weight: bold;
  }

  .token.attr-value,
  .token.comment,
  .token.doctype,
  .token.function,
  .token.keyword,
  .token.operator,
  .token.property,
  .token.string {
    color: highlight;
  }

  .token.attr-value,
  .token.url {
    font-weight: normal;
  }
}
</style>