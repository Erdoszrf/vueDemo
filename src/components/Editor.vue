<template>
  <div class="editor">
    <div class="buttonitem">
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}" v-on:click="currentTab = i">
            <svg class="icon">
                <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
            </svg>
        </li>
      </ol>
    </div>
    <div class="tabs">
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}">
        tab{{i+1}}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        currentTab:0,
        icons:['info','work','school','project','reward','phone']
      }
      
    }
  }
</script>
  <style lang="scss">
    .editor{
      display: flex;
      box-shadow:0px 0px 5px #111533;
      border-radius: 5px;
    }
    .buttonitem{
      font-size: 30px;
      background: black;
        li{
            padding:16px;
            color:white;
            
          }
          & .active{
            background: white;
            color:black;
            
          }
    }
    .tabs li{
      display: none;
    &.active{
      display: block;
    }
    }

  </style>