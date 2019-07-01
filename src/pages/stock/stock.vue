<template>
    <div>{{data}}</div>
</template>

<script>
    import fetch from '../../config/fetch'

    export default {
        name: 'stock',
        data() {
            return {
                data: ''
            }
        },
        methods: {
            async getStocks() {
                let url = '/api/Lhb/TradeDetailList';

                let res = await fetch(url, {
                    startDate: '2019-07-01',
                    endDate: '2019-07-01',
                    pageSize: 150,
                    page: 1,
                    gpfw: 0
                }, 'GET', '');

                this.data = res.result;
            }
        },
        created() {
            this.getStocks();
        }
    }
</script>
