<template>
  <el-button @click="viewLog">Log</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {TrainItem} from "@/apis/types/train";
    @Component
    export default class LogBtn extends Vue {
        @Prop()
        trainItem!: TrainItem | null;

        viewLog():void {
            // TODO
        }
    }
</script>

<style lang="less" scoped>

</style>