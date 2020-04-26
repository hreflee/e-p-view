<template>
  <el-button @click="submitRetrain">Retrain</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {TrainItem} from "@/apis/types/train";
    @Component
    export default class RetrainBtn extends Vue {
        @Prop()
        trainItem!: TrainItem | null;

        submitRetrain(): void {
            // TODO
        }
    }
</script>

<style lang="less" scoped>

</style>