<template>
  <div class="videoPlayer">
    <div class="left">
      <div><Button @click="startVideo(1)">播1路</Button></div>
      <div><Button @click="startVideo(2)">播2路</Button></div>
      <div><Button @click="startVideo(3)">播3路</Button></div>
      <div><Button @click="startVideo(4)">播4路</Button></div>
      <div><Button @click="startVideo(1)">播5路</Button></div>
      <div><Button @click="startVideo(2)">播6路</Button></div>
      <div><Button @click="startVideo(3)">播7路</Button></div>
      <div><Button @click="startVideo(4)">播8路</Button></div>
      <div><Button @click="startVideo(1)">播9路</Button></div>
    </div>
    <div class="videoBox">
      <video-player-pannel
        ref="VideoPannel"
        :treeList="treeList"
        @startCount="startCount"
        @toYunControl="toYunControl"
        @handlePTZControlVideo="handlePTZControlVideo"
      ></video-player-pannel>
    </div>
  </div>
</template>

<script>
import { VideoPlayerPannel } from "vue-h5player-components";
export default {
  components: { VideoPlayerPannel },
  data() {
    return {
      channelInfo1: {
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
      },
      channelInfo2: {
        ChannelNum: "0",
        DeviceIP: "192.168.1.202",
        DevicePort: "554",
        DeviceType: "1101",
        PassWord: "123",
        StreamServerIP: "172.16.96.165",
        StreamServerPort: "10088",
        UserName: "admin",
        ChannelId: "47ce58b1362c43c898269d299d203c23-0000",
        name: "172.16.67.250",
        code: "47ce58b1362c43c898269d299d203c23-0000",
        ptzLock: "",
      },
      channelInfo3: {
        ChannelNum: "0",
        DeviceIP: "192.168.1.218",
        DevicePort: "5546",
        DeviceType: "1101",
        PassWord: "123",
        StreamServerIP: "172.16.96.165",
        StreamServerPort: "10088",
        UserName: "admin",
        ChannelId: "47ce58b1362c43c898269d299d203c23-0000",
        name: "172.16.67.250",
        code: "47ce58b1362c43c898269d299d203c23-0000",
        ptzLock: "",
      },
      channelInfo4: {
        ChannelNum: "0",
        DeviceIP: "192.168.1.192",
        DevicePort: "554",
        DeviceType: "1101",
        PassWord: "123",
        StreamServerIP: "172.16.96.165",
        StreamServerPort: "10088",
        UserName: "admin",
        ChannelId: "47ce58b1362c43c898269d299d203c23-0000",
        name: "172.16.67.250",
        code: "47ce58b1362c43c898269d299d203c23-0000",
        ptzLock: "",
      },
      vCount: 0,
      panLoading: false,
      panShow: null, //云台锁定标识
      treeList: [],
    };
  },
  mounted() {
    //console.log(VideoPlayer)
  },
  methods: {
    startCount(n) {
      this.vCount = n;
      //    this.$refs['roundPlayContext'].getId(n);
    },
    handleClear() {
      this.$refs.videoEl.toClear();
    },
    startVideo(num) {
      console.log(this["channelInfo" + num]);
      this.$refs.VideoPannel.openVideo(this["channelInfo" + num]);
    },
    toYunControl(id,callback){
      callback(true)
    },
    handlePTZControlVideo(ptzCmd){
      console.log(ptzCmd)
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
.left {
  width: 200px;
}
.videoBox {
  flex: 1;
}
</style>