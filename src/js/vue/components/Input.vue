<template>
    <div class="vidget-input">
        <input v-model="amount" type="text">
        <span>{{ base }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            value: {
                type: Number,
                default: null,
            },
            base: {
                type: String,
                default: '',
            },
        },
        computed: {
            amount: {
                get: vm => vm.value,
                set( value ) {
                    const number = Number( value );

                    if ( isNaN( number ) ) return;

                    this.$emit( 'input', number );
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .vidget-input {
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        color: #B9B9B9;
        margin-bottom: 13px;

        input {
            width: 121px;
            text-align: right;
            font-size: 18px;
            color: #2B2D33;
            line-height: 21px;
            padding-bottom: 4px;
            border: 0;
            border-bottom: 1px solid #D9D9D9;
            outline: none;
        }
    }
</style>