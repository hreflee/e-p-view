<template>
  <el-form label-width="100px">
    <el-form-item label="Method">
      <method-picker v-model="method"/>
    </el-form-item>
    <el-form-item label="Data">
      <data-picker v-model="data"/>
    </el-form-item>
    <div class="train-btn-wrapper">
      <el-button class="train-btn" type="primary">TRAIN IT!</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import DataPicker from "@/views/main/components/DataPicker.vue";
    import {DataItem} from "@/apis/types/data";
    import MethodPicker from "@/views/main/components/MethodPicker.vue";
    import {MethodItem} from "@/apis/types/method";
    @Component({
        components: {MethodPicker, DataPicker}
    })
    export default class MainPage extends Vue {
        method: MethodItem | null = null;
        data: DataItem | null = null;
        attributes: string[] = [];
    }
</script>

<style lang="less" scoped>
  /deep/ .el-select {
    width: 100%;
  }
  .train-btn-wrapper {
    display: flex;
    justify-content: center;
    .train-btn {
      width: 50%;
    }
  }
</style>