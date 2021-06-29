<template>
  <div id="toolbar">
    <ul>
      <li>
        <button @click="markdown('bold')">B</button>
      </li>
      <li>
        <button>I</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToolBar",
  props: {
    textareaID: {
      type: String,
      required: true,
    },
  },
  methods: {
    // eslint-disable-next-line
    getSelectionText(): string | null {
      // eslint-disable-next-line
      const textarea: any = document.getElementById(this.textareaID);
      if (textarea) {
        const start = textarea.selectionStart;
        const finish = textarea.onselectend;
        return textarea.value.substring(start, finish);
      }
      return null;
    },
    markdown(type: string): void {
      switch (type.toLowerCase()) {
        case "bold":
          /* eslint-disable */
          let r = this.getSelectionText();
          const textarea: any = document.getElementById(this.textareaID);
          const start = textarea.selectionStart;
          const finish = textarea.selectionEnd;
          const splitText = textarea.value.split("");
          let text = ``;
          splitText.forEach((c: string, i: number) => {
            if (i === start) splitText[i] = `**${c}`;
            if (i === finish - 1) splitText[i] = `${c}**`;
          });
          console.log(splitText);

          if (r) {
            this.$emit("CHANGE_TEXT", {
              value: splitText.join(""),
            });
          }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  li {
    margin-right: 3px;
    margin-top: 1px;
    margin-bottom: 1px;
    padding: 1px;
  }
}
</style>