<template>
  <el-select :value="value" value-key="id" @change="onUpdateSelect">
    <el-option v-for="item in methodItems" :key="item.id" :value="item.id" :label="item.name"/>
  </el-select>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {MethodItem} from "@/apis/types/method";
    import {getMethods} from "@/apis/method";
    @Component
    export default class MethodPicker extends Vue {
        @Prop()
        value!: MethodItem | null;

        methodItems: MethodItem[] = [];

        beforeMount(): void {
            getMethods().then(data => this.methodItems = data.methods);
        }

        onUpdateSelect(item: MethodItem): void {
            this.$emit('input', item);
        }
    }
</script>

<style lang="less" scoped>

</style>