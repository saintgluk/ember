<template>
  <div :style="{height: windowHeight + 'px'}">
    <h3 class="title">
      404 - PAGE NOT FOUND
    </h3>
    <bongo-cat />
  </div>
</template>

<script>
import BongoСat from '@/components/404/BongoСat';
import { resizeWindow } from '@/components/mixins/resizeWindow';

export default {
  mixins: [resizeWindow],
  components: {
    'bongo-cat': BongoСat
  },
};
</script>