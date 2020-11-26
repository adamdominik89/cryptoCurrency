<template>
  <LoaderIconContainerWrapper>
    <ClipLoader
        :loading="isVisible"
        :color="color"
        :size="size"
    />
  </LoaderIconContainerWrapper>
</template>

<script>
import LoaderIconContainerWrapper from "@/components/atoms/Loader-icon-container-wrapper";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'CustomisedLoaderIcon',
  components: {
    LoaderIconContainerWrapper,
    ClipLoader
  },
  props: {
    isVisible: {type: Boolean, required: true},
    color: {type: String, default: '#e01010'},
    size: {type: String, default: '80px'}
  }
}
</script>
