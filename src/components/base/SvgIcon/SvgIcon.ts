import { defineComponent, defineAsyncComponent, h } from "vue";
import type { AsyncComponentLoader } from "vue";

const svgModules = import.meta.glob("./svg/**/*.svg", {
  query: "?component",
});

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: { type: String, default: "" },
  },
  setup(props) {
    const SvgComponent = defineAsyncComponent(
      svgModules[`./svg/${props.name}.svg`] as AsyncComponentLoader,
    );
    return () => h(SvgComponent);
  },
});
