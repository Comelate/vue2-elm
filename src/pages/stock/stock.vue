<template>
    <div>
        <div v-for="v in data">
            {{v.stockName}}({{v.stockCode}})#{{v.closePrice}}#{{v.stockAM}}
        </div>
        <foot-guide/>
    </div>
</template>

<script>
    import footGuide from '../../components/footer/footGuide'

    export default {
        name: 'stock',
        data() {
            return {
                data: ''
            }
        },
        methods: {
            getStocks() {
                let url = '/api/Lhb/TradeDetailList';
                let param = {
                    startDate: '2019-07-08',
                    endDate: '2019-07-08',
                    pageSize: 100,
                    page: 1,
                    gpfw: 0
                };
                let params = [];

                Object.keys(param).forEach(s => {
                    params.push(s + '=' + param[s]);
                });

                url += '?' + params.join('&');

                this.$http.get(url).then(res => {
                    // 重新编排返回数据
                    this.data = res.body.result.map(s => {
                        return {
                            closePrice: s['ClosePrice'],
                            stockName: s['SName'],
                            stockCode: s['SCode'],
                            stockDate: s['Tdate'],
                            stockAM: parseFloat(s['Chgradio']).toFixed(2),
                        };
                    });
                });
            }
        },
        created() {
            this.getStocks();
        },
        components: {
            footGuide
        }
    }
</script>
