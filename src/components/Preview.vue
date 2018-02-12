<template>
  <div class="preview">
    <section data-name="info" v-show="resume.info.姓名">
      <h1>个人资料</h1>
      <p><strong>姓名</strong>{{resume.info.姓名}}</p>
      <p><strong>年龄：</strong>{{resume.info.年龄}}</p>
    </section>
    <section data-name="phone" v-show="resume.phone.手机号">
        <h1>联系方式</h1>
        <p><strong>手机号：</strong>{{resume.phone.手机号}}</p>
        <p><strong>QQ：</strong>{{resume.phone.QQ}}</p>
        <p><strong>WeChat：</strong>{{resume.phone.wechat}}</p>
    </section>


    <section data-name="work" v-show="resume.work.公司">
      <h1>工作经历</h1>
      <h3>{{resume.work.公司}}</h3>
      <p>{{resume.work.职位}}</p>
    </section>

    <section data-name="school" v-show="resume.school.学校">
        <h1>教育背景</h1>
        <h3>{{resume.school.学校}}</h3>
        <p>{{resume.school.时间}}</p>
        <p>{{resume.school.学位}}</p>
    </section>

    <section data-name="project" v-show="resume.project.项目名称">
        <h1>项目经历</h1>
        <h3>{{resume.project.项目名称}}</h3>
        <p>{{resume.project.负责内容}}</p>
    </section>

    <section data-name="reward" v-show="resume.reward.获奖名称">
        <h1>所获荣誉</h1>
        <h3>{{resume.reward.获奖名称}}</h3>
    </section>

    
  </div>
</template>
<script>
 
   export default {
     name: 'ResumePreview',
     computed: {
       resume() {
         return this.$store.state.resume
       }
     },
     created() {
       
      }
    }

  </script>
<style lang="scss">
  .preview {
    box-shadow: 0px 0px 5px #111533;
    display: flex;
    flex-direction: column;
    overflow: scroll;
      > section{
        margin-left:2em;
        p{
          padding:8px 0;
          font-size:16px;
        }
      }
  }
  h1{
    display:inline-block;
    background:#ccc;
    
  }
</style>