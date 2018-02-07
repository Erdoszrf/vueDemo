<template>
  <div id="app">
    <Topbar/>
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>

  </div>
</template>

<script>

  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  export default {
    name: 'App',
    components: {
      Topbar, Editor, Preview,
    }
  }
</script>

<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex: 1;

    >.editor {
      min-width: 40em;
      margin: 16px 0 16px 16px;
    }
    >.preview {
      flex: 1;
      margin: 16px;
    }
  }
</style>