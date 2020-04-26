<template>
  <el-option class="comp-upload-option" :value="-1" @click.native="clickUpload">
    Upload...
    <input class="file-input" type="file" ref="fileInput" accept=".csv, text/csv" @change="uploadFile">
  </el-option>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {postData} from "@/apis/data";
    import {MessageBox} from "element-ui";

    @Component
    export default class UploadOption extends Vue {
        clickUpload(): void {
            // @ts-ignore
            this.$refs.fileInput.click();
        }
        uploadFile(e: Event): void {
            if (e.target) {
                // @ts-ignore
                let file = e.target.files[0];
                postData({file}).then(res => {
                    if (res.success) {
                        this.$emit('uploaded', res.dataItem)
                    } else {
                        MessageBox({
                            title: 'Upload fail',
                            message: res.information,
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
  .comp-upload-option {
    width: 100%;
    .file-input {
      display: none;
    }
  }
</style>