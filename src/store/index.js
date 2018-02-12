import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    
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
      
    
  },
  mutations:{
    switchTab(state,payload){
      state.selected = payload
    }
  }
})