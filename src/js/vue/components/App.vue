<template>
    <div v-if="!loading" class="vidget">
        <div class="vidget-header">
            <div class="vidget-header__title">Курс {{ base }} сегодня</div>
            <Slider v-if="labels.length"
                    :items="labels"
                    :active="base"
                    @click="onTabClick"/>
        </div>
        <div class="vidget-content">
            <Input v-model="amount"
                   :base="base"/>

            <div class="vidget-cards">
                <transition name="fade">
                    <div v-if="show" class="vidget-cards__content">
                        <Card v-for="( item, index ) in pages[currentPage]" :key="index"
                              :base="base"
                              :label="item"
                              :rate="rates[item]"
                              :amount="amount"/>
                    </div>
                </transition>
            </div>

            <Pagination v-model="currentPage"
                        :pages="pages"/>
        </div>
    </div>
</template>

<script>
    import Slider from '@/js/vue/components/Slider';
    import Card from '@/js/vue/components/Card';
    import Input from '@/js/vue/components/Input';
    import Pagination from '@/js/vue/components/Pagination';

    export default {
        name: 'App',
        components: {
            Slider,
            Card,
            Input,
            Pagination,
        },
        data: () => ( {
            amount: 1,
            base: '',
            rates: {},
            labels: [],
            currentPage: 0,
            isMobile: false,
            show: true,
            loading: true,
        } ),
        computed: {
            url: vm => `https://api.openrates.io/latest?base=${ vm.base }`,
            pages: vm => {
                const array = Object.keys( vm.rates );
                const result = [];
                const amount = vm.isMobile ? 2 : 4;

                while ( array.length ) {
                    result.push( array.splice( 0, amount ) );
                }

                return result;
            },
        },
        watch: {
            currentPage() {
                this.animate();
            },
        },
        created() {
            this.isMobile = window.innerWidth < 768;
            this.getDataFromApi();
        },
        methods: {
            animate() {
                this.show = false;

                setTimeout( () => {
                    this.show = true;
                } );
            },
            onTabClick( value ) {
                this.base = value;
                this.getDataFromApi();
            },
            getDataFromApi() {
                fetch( this.url )
                    .then( response => response.json() )
                    .then( result => {
                        const { base, rates } = result;

                        Object.assign( this.$data, { base, rates } );

                        if ( !this.labels.length ) {
                            this.labels = [ base, ...Object.keys( rates ) ];
                        }

                        this.loading = false;
                    } )
                    .catch( err => {
                        console.log( 'Ошибка получения данных', err );
                    } );
            },
        },
    };
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .vidget {
        background: #FFFFFF;
    }

    .vidget-header {
        background-color: #FFE782;

        &__title {
            font-size: 21px;
            color: #2B2D33;
            line-height: 25px;
            padding: 30px 24px 8px 24px;
        }
    }

    .vidget-content {
        padding: 29px 24px 24px 24px;
    }

    .vidget-cards {
        padding: 9px 0;
        margin-bottom: 30px;

        &__content {
            display: flex;
            flex-wrap: wrap;
            margin: -9px;
        }
    }
</style>