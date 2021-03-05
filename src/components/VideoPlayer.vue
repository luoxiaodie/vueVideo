<template>
  <div class="videoPlayer">
    <div class="left">
      <Button @click="startVideo()">开始播放</Button>
      <Button @click="handleClear()">停止播放</Button>
    </div>
    <div class="videoBox">
      <video-player :showPause="false" 
       :showDownload="false" 
       channelId="47ce58b1362c43c898269d299d203c23-0000" 
       channelName="172.16.67.250"
       @toYunControl="toYunControl"
       @handlePTZControlVideo="handlePTZControlVideo"
       ref="videoEl"></video-player>
    </div>
  </div>
</template>

<script>
import {VideoPlayer} from "vue-h5player-components";
export default {
  components:{VideoPlayer},
  data(){
      return {

      }
  },
  mounted(){
    //console.log(VideoPlayer)
  },
  methods:{
    startVideo(){
      let channelInfo1 = {
            DeviceIP: "192.168.1.188",
            DevicePort: "554",
            DeviceType: "1101",
            ChannelNum: "0",
            PassWord: "123",
            StreamServerIP: "172.16.96.165",
            StreamServerPort: "10088",
            UserName: "admin",
            ChannelId: "47ce58b1362c43c898269d299d203c23-0000",
            name: "172.16.67.250",
            code: "47ce58b1362c43c898269d299d203c23-0000",
            ptzLock: "",
        }
        this.$refs.videoEl.playVideo(channelInfo1)
    },
    handleClear(){
      this.$refs.videoEl.toClear()
    },
    toYunControl(id,callback){
      callback(true)
    },
    handlePTZControlVideo(ptzCmd){
      console.log(ptzCmd)
    },
	},
}
</script>
<style scoped>
.videoPlayer{
  width: 100%;
  height: 100%;
  display: flex;
}
.left{
  width: 200px;
}
.videoBox{
  flex: 1;
}
</style>