<template>
  <hr />
  <div class="test">
    <h2 class="red">初めてのコンポーネント</h2>
    <p>Count:{{ tacount }}</p>
    <p>Ref Count:{{ count }}</p>
    <div>
      <button @click="addCount">Count+</button>
      <button @click="addRefCount">Ref Count+</button>
      <button @click="clear">Clear</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const count = ref(0);

export default {
  data: function () {
    return {
      tacount: 0,
      count: count,
    };
  },
  methods: {
    addRefCount() {
      this.count++;
    },
    addCount() {
      this.tacount++;
    },
    clear() {
      this.count = ref(0);
      this.tacount = 0;
    },
  },
};
</script>

<style scoped>
.red {
  color: #f00;
}
</style>
