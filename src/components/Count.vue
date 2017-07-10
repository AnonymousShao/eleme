<template>
    <div class="test">
        <h2>{{msg}}</h2>
        <h3>{{count}}</h3>
        <h3>{{$store.state.a.count}}</h3>
        <p>
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<!--computed/mapState(对象（箭头函数）、数组)-->
<script type="text/ecmascript-6">
    import store from '@/vuex/store.js';
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {
                msg: 'vuex!'
            };
        },
        computed: {
            ...mapState(['count']),
             /* count() {
                return this.$store.getters.count;
            } */
            ...mapGetters(['count'])
        },
        methods: {
           ...mapMutations(['add', 'reduce']),
           ...mapActions(['addAction', 'reduceAction'])
        },
        store
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .test
      margin: 20px auto
      width: 100%
      text-align: center
      h2, h3
        padding: 15px 0
</style>
