<template>
  <el-table :data="trainItems" row-key="id">
    <el-table-column label="Method" prop="method.name"/>
    <el-table-column label="File">
      <template slot-scope="{row}">
        <p>{{row.data.fileName}} / {{row.data.uploadAt}}</p>
      </template>
    </el-table-column>
    <el-table-column label="Result">
      <template slot-scope="{row}">
        <div class="result-cell" v-if="row.status === 'TRAINING'">
          <span>
            <i class="el-icon-loading"/>
            Training...
          </span>
        </div>
        <div class="result-cell" v-if="row.status === 'FAIL'">
          <div class="result">
            <span><i class="el-icon-error"/>Error</span>
          </div>
          <div class="actions">
            <retrain-btn :train-item="row"/>
            <log-btn :train-item="row"/>
          </div>
        </div>
        <div class="result-cell" v-if="row.status === 'SUCCESS'">
          <div class="result">
            <p><i class="el-icon-time"/>{{row.completeAt}}</p>
            <p v-if="row.MAPE">MAPE: {{row.MAPE}}</p>
            <p v-if="row.RMSE">RMSE: {{row.RMSE}}</p>
          </div>
          <div class="actions">
            <retrain-btn :train-item="row"/>
            <log-btn :train-item="row"/>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {TrainItem} from "@/apis/types/train";
    import {getTrains} from "@/apis/train";
    import RetrainBtn from "@/views/main/components/RetrainBtn.vue";
    import LogBtn from "@/views/main/components/LogBtn.vue";
    @Component({
        components: {LogBtn, RetrainBtn}
    })
    export default class TrainTable extends Vue {
        trainItems: TrainItem[] = [];

        beforeMount(): void {
            this.updateTrainItems();
            setInterval(() => this.updateTrainItems(), 2000);
        }

        updateTrainItems(): void{
            getTrains().then(data => this.trainItems = data.trains);
        }
    }
</script>

<style lang="less" scoped>
  .attr-tags {
    margin-right: 10px;
  }
  .result-cell {
    display: flex;
    .result {
      flex: 1;
      margin-right: 20px;
    }
    .actions {
      flex: 2;
      display: flex;
      align-items: center;
    }
  }
</style>