<template>
  <div>
    <div class="wrapper">
      <requestPart/>
      <StaticPart/>
      <Nearby/>
    </div>
    <Docker/>
  </div>
</template>

<script>
import requestPart from './request'
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { requestPart, StaticPart, Nearby, Docker }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
