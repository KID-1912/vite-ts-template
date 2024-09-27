import { defineComponent, defineAsyncComponent, h } from "vue";
import type { AsyncComponentLoader } from "vue";

interface SvgModules {
  [key: string]: AsyncComponentLoader;
}

const svgModules: SvgModules = import.meta.glob("./svg/**/*.svg", { query: "?component" });

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    const SvgComponent = defineAsyncComponent(svgModules[`./svg/${props.name}.svg`]);
    return () => h(SvgComponent);
  },
});
