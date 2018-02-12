<template>
  <div class="preview">
    {{resume}}
  </div>
</template>
<script>
  export default{
        name: 'ResumePreview',
        computed: {
          resume() {
            return this.$store.state.resume
          }
        }
      }


</script>
  <style>
    .preview{
      
      box-shadow:0px 0px 5px #111533;
    }
  </style>