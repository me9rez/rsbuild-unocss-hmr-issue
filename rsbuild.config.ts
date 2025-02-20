import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [UnoCSSRspackPlugin()]
    }
  }
});
