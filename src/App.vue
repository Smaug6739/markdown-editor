<template>
  <main>
    <div class="input">
      <ToolBar textareaID="textareaInput" @CHANGE_TEXT="changeText" />
      <textarea v-model="input" id="textareaInput"></textarea>
    </div>
    <div class="output" v-html="outputHTML"></div>
    <Window windowName="GET HTML">
      <template v-slot:windowContent> {{ outputHTML }} </template>
    </Window>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Window from "@/components/common/window.vue";
import ToolBar from "@/components/toolbar/toolbar.vue";
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
  methods: {
    changeText(param: any) {
      this.input = param.value;
    },
  },
  components: {
    Window,
    ToolBar,
  },
});
</script>

<style lang="scss">
main {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 90vh;
}

.input {
  width: 50%;
  border: 2px black solid;
  display: flex;
  flex-direction: column;
  textarea {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    resize: none;
  }
}
.output {
  width: 50%;
  border: 2px black solid;
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