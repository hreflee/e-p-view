<template>
  <el-container class="main-page">
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <submit-train-form/>
          <train-table/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import SubmitTrainForm from "@/views/main/components/SubmitTrainForm.vue";
    import TrainTable from "@/views/main/components/TrainTable.vue";
    @Component({
        components: {TrainTable, SubmitTrainForm}
    })
    export default class MainPage extends Vue {
    }
</script>

<style lang="less" scoped>

</style>