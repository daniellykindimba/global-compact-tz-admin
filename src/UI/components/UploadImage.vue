<style>
  .image-picker{
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ddd;
    font-weight: 100;
    font-size: 1.3em;
    line-height: 1.25em;
    cursor: pointer;
    background-color: #f5f5f5;
    background-size: cover;
    background-position: center;
    height: 200px;
  }

  .image-picker span{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .image-picker.has-image:not(:hover) span{
    opacity: 0;
  }

  .image-picker.has-image span{
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }

  .image-picker + input{
    display: none;
  }
</style>

<template>
  <div>
    <label class="image-picker" for="impactImage1"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      :class="{'has-image': image !== null}">
      <span v-if="image !== null">Change Image</span>
      <span class="black--text" v-else>Click to pick image</span>
    </label>
    <input id="impactImage1" type="file" @change="setImage">
  </div>
</template>

<script>

export default {
  name: 'UploadImage',
  props: ['value'],
  data(){
    return {
      image: this.value
    }
  },
  methods: {
    processImage(image){
      return new Promise((resolve, reject) => {
        const reader  = new FileReader();

        reader.onloadend = function () {
          resolve(reader.result);
        }

        if(image)
          reader.readAsDataURL(image);
        else
          resolve(null);
      });
    },
    async setImage(e){
      var file = e.target.files[0];
      e.target.value = "";
      const image = await this.processImage(file);
      this.$emit('input', image);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue){
        this.image = newValue;
      }
    }
  }
}
</script>
