import { defineComponent } from "vue";
export default defineComponent({
	name: "ToolBar",
	props: {
		textareaID: {
			type: String,
			required: true,
		},
	},
	data: function () {
		return {
			textarea: null as null | HTMLTextAreaElement,
		};
	},
	template: './toolbar.vue',
	methods: {
		// eslint-disable-next-line
		getSelectionText(): string | null {
			// eslint-disable-next-line
			if (this.textarea) {
				const start = this.textarea.selectionStart;
				const finish = this.textarea.selectionEnd;
				return this.textarea.value.substring(start, finish);
			}
			return null;
		},
		addAttributeSelection(start: string | null, end: string | null) {
			const startSelection = this.textarea!.selectionStart;
			const endSelection = this.textarea!.selectionEnd;
			const splitText = this.textarea!.value.split("");
			splitText.forEach((c: string, i: number) => {
				if (i === startSelection && start) splitText[i] = `${start}${c}`;
				if (i === endSelection - 1 && end) splitText[i] = `${c}${end}`;
			});
			return splitText.join("");
		},
		addAttributePosition(start: string | null, end: string | null) {
			const startSelection = this.textarea!.selectionStart;

			if (!startSelection) return (this.textarea!.value += `${start ? start : ""}${end ? end : ""}`);
			const splitText = this.textarea!.value.split("");
			if (this.textarea!.value.length === startSelection) return this.textarea!.value += `${start}${end}`
			splitText.forEach((c: string, i: number) => {
				if (i === startSelection)
					splitText[i] = `${start ? start : ""}${end ? end : ""}${c}`;
			});
			return splitText.join("");
		},
		checkAndChange(start: string | null, end: string | null) {
			if (this.getSelectionText()) {
				this.$emit("CHANGE_TEXT", {
					value: this.addAttributeSelection(start, end),
				});
			} else {
				this.$emit("CHANGE_TEXT", {
					value: this.addAttributePosition(start, end),
				});
			}
		},
		markdown(type: string): void {
			switch (type.toLowerCase()) {
				case "bold":
					this.checkAndChange("**", "**")
					break;
				case "italic":
					this.checkAndChange("*", "*")
					break;
				case "strike":
					this.checkAndChange("<s>", '</s>')
					break;
				case "underline":
					this.checkAndChange("<u>", "</u>")
					break;
				case "h1":
					this.checkAndChange("# ", null)
					break;
				case "h2":
					this.checkAndChange("## ", null)
					break;
				case "h3":
					this.checkAndChange("### ", null)
					break;
				case "quote":
					this.checkAndChange(">", null)
					break;
			};
		},
	},
	mounted() {
		this.textarea = document.getElementById(
			this.textareaID
		) as HTMLTextAreaElement;
	},
});