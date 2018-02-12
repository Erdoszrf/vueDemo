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
          <div v-for="(value,key) in resume[item.field]">
            <h3>{{key}}</h3>
            <el-input v-model="resume[item.field][key]" v-bind:placeholder="`请输入`+key"></el-input>
          </div>
          <!-- <el-button type="primary" icon="el-icon-circle-plus" v-show="selected != 'info' && selected !='phone'" @click="additem"></el-button>
          <el-button type="primary" icon="el-icon-circle-close" v-show="selected != 'info' && selected !='phone'"></el-button> -->
        </li>
      </ol>
      
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        selected:'info',
        resume:{
          config:[
          {field:'info',icon:'info'},
          {field:'work',icon:'work'},
          {field:'school',icon:'school'},
          {field:'project',icon:'project'},
          {field:'reward',icon:'reward'},
          {field:'phone',icon:'phone'}
        ] ,
        info:{
          姓名:'',
          年龄:''
        },
        work:{
          公司:'',
          职位:''
        },
        school:{
          学校:'',
          时间:'',
          学位:''
        },
        project:{
          项目名称:'',
          负责内容:''
        },
        reward:{
          获奖名称:''
        },
        phone:{
          手机号:'',
          QQ:'',
          wechat:''
        }
          
        
        }
        
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

  </style>