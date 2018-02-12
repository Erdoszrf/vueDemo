<template>
  <div class="editor">
    <div class="buttonitem">
      <ol>
        <li v-for="(item,index) in resume.config" v-bind:class="{active:selected === item.field}" v-on:click="selected = item.field">
            <svg class="icon">
                <use v-bind:xlink:href="`#icon-${item.icon}`"></use>
            </svg>
        </li>
      </ol>
    </div>
    <div class="tabs">
      <ol>
        <li v-for="item in resume.config" v-show="item.field === selected">
          <div v-for="(value,index) in resume[item.field]">
            <h3>{{index}}</h3>
            <el-input v-model="resume[item.field][index]" ></el-input>
          </div>
          
          
        </li>
      </ol>
      
    </div>
  </div>
</template>
<script>
    export default {
      name: 'ResumeEditor',
      computed: {
        selected:{
          get(){
            
            return this.$store.state.selected
         },
         set(value){
           return this.$store.commit('switchTab', value)
         }
       },
       resume (){
         return this.$store.state.resume
        }
      },

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

  </style>