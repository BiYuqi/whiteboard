<template>
  <div class="warehouse">
    <el-tooltip
      class="warehouse__item"
      effect="light"
      content="历史快照"
      placement="top">
      <svg-icon
      @click.native="drawer = true"
      name="warehouse"
      :styles="$store.state.svgInfo" />
    </el-tooltip>
    <el-drawer
      title="历史快照"
      custom-class="whiteboard-drawer"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="34%">
      <el-row :gutter="12">
        <el-col :key="index" :span="12" v-for="(snap, index) in currentSnapShot">
          <el-card
            class="warehouse__card"
            :body-style="{ padding: '0px'}">
            <div style="padding: 14px;">
              <img :src="snap.base64" class="warehouse__image">
              <div class="bottom clearfix">
                <time class="time">{{snap.name}}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  computed: {
    ...mapGetters([
      'currentSnapShot'
    ])
  },
  methods: {
    handleClose () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
.warehouse {
  position: absolute;
  right: 20px;

  &__item {
    cursor: pointer;
    color: $toolBoxColor;
    margin: 0 12px;

    &:hover {
      color: $activeToolBoxColor;
    }
  }

  &__card {
    cursor: pointer;
  }

  &__image {
    width: 100%;
  }
}
.whiteboard-drawer {
  .el-drawer__body {
    display: flex;
    justify-content: space-around;
  }
}
</style>
