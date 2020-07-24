<template>
    <div class="vidget-card">
        <div class="vidget-card__content">
            <div class="vidget-card__amount">
                {{ amount }}
                <span class="vidget-card__amount-label">{{ base }} =</span>
            </div>
            <div class="vidget-card__result">
                {{ ( rate * amount ).toFixed( 2 ).split( '.' ).join( ',' ) }}
                <span class="vidget-card__result-label">{{ label }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            base: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: '',
            },
            rate: {
                type: Number,
                default: null,
            },
            amount: {
                type: Number,
                default: null,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .vidget-card {
        width: 100%;
        padding: 9px;

        @media( min-width: 768px ) {
            width: 50%;
        }

        &__content {
            padding: 18px 30px;
            background: #FFFFFF;
            border-radius: 12px;
            box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
        }

        &__amount {
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.0171429px;
            margin-bottom: 19px;

            &-label {
                color: #B9B9B9;
            }
        }

        &__result {
            font-weight: 300;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: 0.0342857px;

            &-label {
                font-size: 24px;
                line-height: 28px;
            }
        }
    }
</style>