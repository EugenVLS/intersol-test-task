<template>
    <div class="vidget-slider">
        <div class="vidget-slider__btn vidget-slider__btn--prev">&#10094;</div>
        <div class="vidget-slider__content">
            <tiny-slider :auto-width="true"
                         :loop="false"
                         :nav="false"
                         prev-button=".vidget-slider__btn--prev"
                         next-button=".vidget-slider__btn--next">
                <div v-for="( item, index ) in items" :key="index">
                    <div class="vidget-slider__item"
                         :class="{ 'vidget-slider__item--active': active === item }"
                         @click="$emit( 'click', item )">
                        {{ item }}
                    </div>
                </div>
            </tiny-slider>
        </div>
        <div class="vidget-slider__btn vidget-slider__btn--next">&#10095;</div>
    </div>
</template>

<script>
    import VueTinySlider from 'vue-tiny-slider';

    export default {
        name: 'Slider',
        components: {
            'tiny-slider': VueTinySlider,
        },
        props: {
            items: {
                type: Array,
                default: () => [],
            },
            active: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .vidget-slider {
        position: relative;

        &__content {
            padding: 0 40px;
        }

        &__btn {
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #CCAE68;
            width: 40px;
            height: 100%;
            cursor: pointer;
            outline: none;
            transition: 0.1s;

            &--prev {
                left: 0;
            }

            &--next {
                right: 0;
            }

            &:hover {
                background-color: #fff1b8;
            }

            &[aria-disabled="true"] {
                opacity: 0;
            }
        }

        &__item {
            color: #CCAE68;
            padding: 14px 30px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            cursor: pointer;
            transition: 0.1s;

            &--active {
                color: #2B2D33;
                background: #FFFFFF;
            }

            &:hover {
                background-color: #fff1b8;
            }
        }
    }
</style>