<template>
  <el-select multiple :value="value" @change="onUpdateSelect">
    <el-option v-for="item in allAttrs" :key="item" :value="item"/>
  </el-select>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {getLastSelectedAttrs} from "@/apis/data";

    @Component
    export default class AttributesPicker extends Vue {
        @Prop()
        value!: string[];
        @Prop()
        dataId!: number;

        allAttrs: string[] = [];

        @Watch('dataId', {immediate: true})
        watchDataId(newValue:number) {
            console.log(newValue);
            if (newValue !== undefined) {
                getLastSelectedAttrs({dataId: this.dataId}).then(res => {
                    this.allAttrs = res.allAttrs;
                    this.onUpdateSelect(res.lastAttrs);
                })
            }
        }

        onUpdateSelect(nv: string[]): void {
            this.$emit('input', nv);
        }
    }
</script>

<style lang="less" scoped>

</style>