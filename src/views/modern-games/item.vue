<template>
  <div class="item-page">
    <div class="traditional-item">
      <el-image class="img" :src="modern1" fit="fill" />
      <div class="title" style="margin: 20px 0px">Perak Bukkake</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        Perak Puppetry (also known as Huang Wenze Puppetry and Perak Puppetry Animation) is a series of Puppetry theatre
        episodes produced in Taiwan since 1984, with the word "Perak" in front of the name of each episode, hence the
        name
      </div>
    </div>
    <div class="traditional-item" style="margin: 0 20px">
      <el-image class="img" :src="modern2" fit="fill" />
      <div class="title">GOLDEN LIGHT PUPPET PERFORMANCE</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        Huang Junxiong's Bukkhu Opera is also known as the Jinguang series, because the mainstream of Bukkhu Opera from
        1950 to 1970 was called "Jinguang Opera". The performance form of attracting the audience with sound props and
        other strange changes in scenery was called "Golden Light Theatre", that is, it began to give up the traditional
        palm puppet, and replaced it with a larger puppet to perform, this period of change gave an opportunity to
        transform the Bu Bu Bu Dang Opera, and later, Master Huang Jhun-Hsiung put the Golden Light Theatre's
        performance form on the TV stage, that is, in 1970, the story of "Yunzhou Daju Chivalry Shiyan-Wen". In 1994,
        when Master Huang resumed filming the series of Yunzhou Daju Warrior stories, he called his own Bu Bu Bu Dang
        theatre business Jin Guang Bu Dang theatre because of his feelings for the "Jin Guang theatre change" in 1970.
      </div>
    </div>
    <div class="traditional-item">
      <el-image class="img" :src="modern3" fit="fill" />
      <div class="title" style="margin: 10px 0px">Tianyu Puppet Theatre</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        The "Tianyu Bukkake" is a series of episodes in the Taiwan TV Bukkake, by Huang Wenyao take the oral and
        starring role, the plot is mostly about the non-human world of the sky, a brother of the red cloud proud of the
        two volumes of the book. In 1991, it was launched on Sanli TV as "Tianyu Killing Machine" (preceded by the
        experimental "Tianyu Killing Machine Prequel").In 2011, it was adapted from the old work to launch the new "New
        Century Ragamuffin Theatre".
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import modern1 from '@/assets/modern1.png'
import modern2 from '@/assets/modern2.png'
import modern3 from '@/assets/modern3.png'
</script>
  
  <style scoped>
.item-page {
  display: flex;
  justify-content: center;
}
.traditional-item {
  background: #fff;
  width: 230px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.title {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 40px;
}
.img {
  width: 230px;
  height: 230px;
  border-radius: 10px;
}
.text {
  text-align: left;
  line-height: 25px;
  font-size: 14px;
  margin-top: 15px;
}
</style>
  