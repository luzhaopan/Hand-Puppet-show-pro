<template>
  <div class="item-page">
    <div class="traditional-item">
      <el-image class="img" :src="t1" fit="fill" />
      <div class="title">Zhangzhou Puppet Show</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        Traditional Chinese puppet theatre can be divided into two different types of performances: puppet theatre for
        puppets and shadow theatre for leather puppets, and the Bu Bu Dai Opera belongs to one type of puppet theatre.
        In recent times, Southern Fujian Puppet Theatre is most representative of Zhangzhou. Zhangzhou Puppetry is a
        comprehensive traditional folk art which consists of puppet performance theatre, puppetry, puppet head carving
        and other combinations. Zhangzhou bag puppet theatre has a long history, which "originated in Jin, shaped in the
        Tang and Song dynasties, and flourished in the Ming Dynasty". As early as in the Ming Dynasty during the Wanli
        period, it spread to Southeast Asian countries and Taiwan and other places. In the course of its development, a
        number of different schools were formed, mainly the "Fuchun", "Fuxing" and "Peony Pavilion" schools, each with
        its own characteristics. Puppetry performances are delicate and lifelike. Puppet manipulation with five fingers
        can not only reflect the singing, reading, acting and playing of human theatre, as well as the feelings of joy,
        anger, sadness and happiness, but also perform some actions that are difficult to be reflected in human theatre,
        making it a kind of puppetry theatre with superb skills, exquisite modelling and unique styles.
      </div>
    </div>
    <div class="traditional-item" style="margin: 0 20px">
      <el-image class="img" :src="t2" fit="fill" />
      <div class="title">Fujian Puppet Theatre</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        Fujian Bubu Puppetry, also known as palm opera, palm puppet, is one of the representative traditional puppetry
        performance forms in southern Fujian Min, Xiamen, Fujian Province, traditional theatre, one of the provincial
        intangible cultural heritage in Fujian Province. Puppetry has a long history, and is said to have begun in the
        Ming Dynasty, circulating in Fujian Minnan, Taiwan and Southeast Asia where overseas Chinese reside. In the
        1920s and 1930s, Xiamen used to be the main place for the performance of Minnan Bubu Puppet Theatre. The puppet
        theatre uses gloves on the puppets, with the palm of the hand as the torso of the puppeteer, the index finger to
        support the head, the thumb and the other three fingers to support the left and right arms, respectively, to
        manipulate the puppets for theatre performances, which not only can reflect the human theatre of singing,
        reciting, doing, playing kung fu, but also can express the feelings of joy, anger, sadness and happiness.
      </div>
    </div>
    <div class="traditional-item">
      <el-image class="img" :src="t3" fit="fill" />
      <div class="title">Taiwan Puppet Theatre</div>
      <el-button style="width: 120px" type="danger"> Learn more </el-button>
      <div class="text">
        The traditional Taiwanese puppet theatre is said to have been introduced from the coastal areas of Fujian and
        Guangdong in the 18th year of the Shunzhi reign in the Qing Dynasty (1661). Initially, it was popular in Chiayi,
        Lugang, and other areas in Taiwan inhabited by southern Min people, and the songs and tunes were all in southern
        Min dialect, so it was known as the hometown theatre by southern Min people. Later, it gradually spread to the
        whole province of Taiwan. The Japanese imperialists invaded Taiwan and tried their best to implement the policy
        of "imperialisation", forcing the Taiwanese puppet theatre to be changed into Japanese puppet theatre, with
        Taiwanese mixed with Japanese, accompanied by Western instruments, which was mercilessly trampled on, and some
        of the old performers were transferred to the countryside and the people. In the 1950s, there were more than 500
        registered puppet theatre groups, but due to the impact of the so-called modern art, there were only a few left.
        Only a few troupes, such as Hsu Wang's Xiao Xiyuan and Li Tianlu's Yiyuanran in Taipei, still retain the
        remnants of Zhangquan Puppet Theatre.
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import t1 from '@/assets/t1.png'
import t2 from '@/assets/t2.png'
import t3 from '@/assets/t3.png'
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
  