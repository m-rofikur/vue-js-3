<template>
 <div class="block">
     <div class="block box" v-if="isShow" @click="stopTracker">
        click me
    </div>
 </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            isShow: false,
            track: null,
            number: 0
        }
    },
    mounted() {
        console.log('mounted')
        setTimeout(() => {
            this.isShow = !this.isShow
            this.startTracker()
        }, this.delay);
    },
    unmounted() {
        console.log('unmounted')
    },
    methods: {
        startTracker() {
            this.track = setInterval(() => {
                this.number ++
            }, 1);
        },
        stopTracker() {
            clearInterval(this.track)
            this.$emit('end', this.number)
        }
    }
}
</script>

<style>
    .block {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .box {
        margin: 10px;
        width: 100px;
        height: 100px;
        background: aquamarine;
    }
</style>