<template>
    <div class="vidget-pagination">
        <button type="button"
                class="vidget-pagination__btn"
                :disabled="value === 0"
                @click="page--">
            &#10094;&nbsp;Назад
        </button>
        <button type="button"
                class="vidget-pagination__btn"
                :disabled="value === pages.length - 1"
                @click="page++">
            Далее&nbsp;&#10095;
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            value: {
                type: Number,
                default: null,
            },
            pages: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            page: {
                get: vm => vm.value,
                set( value ) {
                    this.$emit( 'input', value );
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .vidget-pagination {
        display: flex;
        justify-content: center;

        &__btn {
            display: block;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #2B2D33;
            padding: 10px 20px;
            background: #FFFFFF;
            box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
            border: 0;
            border-radius: 8px;
            outline: none;
            cursor: pointer;

            &:disabled {
                color: #787878;
                background: #EFEFEF;
            }

            &:first-child {
                margin-right: 20px;
            }

            &:hover:not( :disabled ) {
                background-color: #fff1b8;
            }
        }
    }
</style>