<template>
  <el-select :value="value" value-key="id" @change="onUpdateSelect">
    <el-option v-for="item in dataItems" :key="item.id" :value="item" :label="`${item.fileName} / Uploaded at:${item.uploadAt}`">
      <div class="data-item">
        <span>{{item.fileName}}</span>
        <span class="upload-at">Upload at: {{item.uploadAt}}</span>
      </div>
    </el-option>
    <UploadOption @uploaded="onUploadedFile"/>
  </el-select>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {getData} from "@/apis/data";
    import {DataItem} from "@/apis/types/data";
    import UploadOption from "@/views/main/components/UploadOption.vue";
    @Component({
        components: {UploadOption}
    })
    export default class DataPicker extends Vue {
        @Prop()
        value!: DataItem | null;

        dataItems: DataItem[] = [];

        beforeMount(): void {
            getData().then(data => this.dataItems = data.dataItems)
        }

        onUpdateSelect(item: DataItem): void {
            this.$emit('input', item);
        }

        onUploadedFile(dataItem: DataItem): void {
            this.dataItems.push(dataItem);
            this.$nextTick(() => {
                this.onUpdateSelect(dataItem)
            });
        }
    }
</script>

<style scoped lang="less">
  .data-item {
    display: flex;
    justify-content: space-between;

    .upload-at {
      font-weight: normal;
    }
  }
</style>