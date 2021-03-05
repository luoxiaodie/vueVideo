<template>
  <div class="videoPlayer">
    <div class="btn">
      <div><Button @click="startVideo(1)">播1路</Button></div>
      <div><Button @click="startVideo(2)">播2路</Button></div>
      <div><Button @click="startVideo(3)">播3路</Button></div>
      <div><Button @click="startVideo(4)">播4路</Button></div>
      <div><Button @click="startVideo(1)">播5路</Button></div>
      <div><Button @click="startVideo(2)">播6路</Button></div>
      <div><Button @click="startVideo(3)">播7路</Button></div>
      <div><Button @click="startVideo(4)">播8路</Button></div>
      <div><Button @click="startVideo(1)">播9路</Button></div>
      <div>
        <label>开始时间</label>
        <el-date-picker
          size="mini"
          style="width:auto"
            v-model="startTime"
            type="datetime"
            placeholder="开始时间"
          >
          </el-date-picker>
      </div>
      <div>
        <label>结束时间</label>
        <el-date-picker
          size="mini"
          style="width:auto"
            v-model="endTime"
            type="datetime"
            placeholder="结束时间"
          >
          </el-date-picker>
      </div>
      <el-button type="primary" @click="search()">查询</el-button>
    </div>
    <div class="videoBox">
      <video-player-back-pannel ref="VideoBackPannel"></video-player-back-pannel>
    </div>
  </div>
</template>

<script>
import { VideoPlayerBackPannel } from "vue-h5player-components";
export default {
  components: { VideoPlayerBackPannel },
  data() {
    return {
      startTime:'',
      endTime:new Date(),
      channelInfo1: {
        channelId: "3cb574910fe04f37a2421677dfe2fab7-0000",
        name: "B1取餐区东北侧",
        port: 10090,
        serverIP: "172.16.96.165",
      },
      channelInfo2: {
        channelId: "f8785be0cfe440b4bf37c53a90604fd6-0000",
        name: "B-1就餐区西南侧",
        port: 10090,
        serverIP: "172.16.96.165",
      },
      channelInfo3: {
        channelId: "f662944174914f608898aea7ce71dca4-0000",
        name: "B-1餐厅东北角",
        port: 10090,
        serverIP: "172.16.96.165",
      },
      channelInfo4: {
        channelId: "4d1f36c840dc4aca828a3eb8d96834b4-0000",
        name: "B1取餐区南侧",
        port: 10090,
        serverIP: "172.16.96.165",
      },
      timeInfo:{},
    };
  },
  mounted(){
    let today = new Date();
    let time = today.getTime() - 1000 * 60 * 60 * 24;
    //this.startTime = this.$.parseDate(new Date(time));
    this.startTime = new Date(time);
  },
  methods: {
    // 日期格式化
    dateFormat: function (time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    startVideo(num) {
      this.$refs.VideoBackPannel.addVideo(this['channelInfo'+num]);
    },
    //查询
    async search() {
      this.$refs.VideoBackPannel.recordSearch(this.dateFormat(this.startTime),this.dateFormat(this.endTime));
    },
    
  },
};
</script>
<style scoped>
.videoPlayer {
  width: 100%;
  height: 100%;
  display: flex;
}
.btn {
  width: 200px;
}
.videoBox {
  flex: 1;
}
</style>