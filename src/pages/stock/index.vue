<template>
    <div>{{data}}</div>
</template>

<script>
    export default {
        name: 'stock',
        data() {
            return {
                data: ''
            }
        },
        methods: {
            getStocks: function () {

            }
        },
        created() {
            this.getStocks();
        }
    }
</script>
