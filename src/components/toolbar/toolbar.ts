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
		addAttributeSelection(attribute: string, start?: boolean, end?: boolean) {
			const startSelection = this.textarea!.selectionStart;
			const endSelection = this.textarea!.selectionEnd;
			const splitText = this.textarea!.value.split("");
			splitText.forEach((c: string, i: number) => {
				if (i === startSelection && start) splitText[i] = `${attribute}${c}`;
				if (i === endSelection - 1 && end) splitText[i] = `${c}${attribute}`;
			});
			return splitText.join("");
		},
		addAttributePosition(attribute: string, start?: boolean, end?: boolean) {
			const startSelection = this.textarea!.selectionStart;

			if (!startSelection)
				return (this.textarea!.value += `${start ? attribute : ""}${end ? attribute : ""
					}`);
			const splitText = this.textarea!.value.split("");
			if (this.textarea!.value.length === startSelection) return this.textarea!.value += `${attribute}${attribute}`
			splitText.forEach((c: string, i: number) => {
				if (i === startSelection)
					splitText[i] = `${start ? attribute : ""}${end ? attribute : ""}${c}`;
			});
			return splitText.join("");
		},
		checkAndChange(attribute: string, start: boolean, end: boolean) {
			if (this.getSelectionText()) {
				this.$emit("CHANGE_TEXT", {
					value: this.addAttributeSelection(attribute, start, end),
				});
			} else {
				this.$emit("CHANGE_TEXT", {
					value: this.addAttributePosition(attribute, start, end),
				});
			}
		},
		markdown(type: string): void {
			switch (type.toLowerCase()) {
				case "bold":
					this.checkAndChange("**", true, true)
					break;
				case "italic":
					this.checkAndChange("**", true, true)

					break;
				case "h1":
					if (this.getSelectionText()) {
						this.$emit("CHANGE_TEXT", {
							value: this.addAttributeSelection("# ", true, false),
						});
					} else {
						this.$emit("CHANGE_TEXT", {
							value: this.addAttributePosition("# ", true, false),
						});
					}
					break;
			}
		},
	},
	mounted() {
		this.textarea = document.getElementById(
			this.textareaID
		) as HTMLTextAreaElement;
	},
});