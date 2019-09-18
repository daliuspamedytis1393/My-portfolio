<template>
    <div class="skills">
        <AppWhiteBox>
            <div class="skills-flex">
                <div class="bars">
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="Css" level="65" />
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="Html" level="70" />
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="Sass" level="60" />
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="Js" level="37" />
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="React" level="35" />
                    <skill-bar class='text' barSize="22" barColor="#37E9B8" skill="Vue" level="40" label="none" />
                </div>
                <div class="scene">
                    <div class="cube">
                        <div class="side back"></div>
                        <div class="side left"></div>
                        <div class="side right"></div>
                        <div class="side top"></div>
                        <div class="side bottom"></div>
                        <div class="side front"></div>
                    </div>
                </div>
            </div>
        </AppWhiteBox>
    </div>
</template>

<script>
import AppWhiteBox from '@/components/AppWhiteBox'
import Css from '@/components/Css'
import Vue from '@/components/Vue'
import Js from '@/components/Js'
import Html from '@/components/Html'
import React from '@/components/React'
import Node from '@/components/Node'
export default {
    name: 'Skills',
    data() {
        return {}
    },
    components: {
        AppWhiteBox,
        Css,
        Vue,
        Js,
        Html,
        React,
        Node

    }
}
</script>

<style lang="scss">
.skills {
    display: flex;
    .skills-flex {
        display: flex;
    }
    .bars {
        min-width: 65%;
        label {
            &__value {
                display: none;
            }
        }
    }
    * {
        box-sizing: border-box;
        transition: .3s;
    }
    $size-px: 120px;
    $size: 120;
    $size-lg: $size * 1.5;
    $transform: $size-px / 2;
    html,
    body {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .vue-skill-level {
        border-radius: 0 !important;
    }
    .scene {
        perspective: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin-top: 40px;
        margin-left: 40px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        &:hover {
            .side {
                opacity: 1;
            }
        }
    }
    .cube {
        margin-bottom: 80px;
        transform-style: preserve-3d;
        position: relative;
        width: $size-px;
        height: $size-px;
        animation: rotate 10s ease-in-out infinite;
        transform-origin: center center;
    }
    .side {
        position: absolute;
        width: $size-px;
        height: $size-px;
        background-color: #333;
        opacity: .95;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .back {
        transform: translateZ(-#{$transform}) rotateX(180deg);
        background-image: url(https://az720974.vo.msecnd.net/blog/sass.png);
        background-position: center;
    }
    .left {
        transform: translateX(-#{$transform}) rotateY(90deg);
        background-image: url(http://www.sclance.com/pngs/css-logo-png/css_logo_png_352539.png);
        background-position: center;
    }
    .right {
        transform: translateX($transform) rotateY(90deg);
        background-image: url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png);
        background-position: center;
    }
    .top {
        transform: translateY(-#{$transform}) rotateX(90deg);
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png);
        background-position: center;
    }
    .bottom {
        transform: translateY($transform) rotateX(270deg);
        background-image: url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png);
        background-position: center;
    }
    .front {
        transform: translateZ($transform);
        background-image: url(https://miro.medium.com/max/1032/1*OrjCKmou1jT4It5so5gvOA.jpeg);
        background-position: center;
    }
    @keyframes rotate {
        0% {
            transform: rotateX(0)
        }
        12.5% {
            transform: rotateY(90deg)
        }
        25% {
            transform: rotateY(270deg)
        }
        37.5% {
            transform: rotateY(270deg)
        }
        50% {
            transform: rotateY(360deg)
        }
        62.5% {
            transform: rotateX(90deg)
        }
        75% {
            transform: rotateX(180deg)
        }
        87.5% {
            transform: rotateX(270deg)
        }
        100% {
            transform: rotateX(360deg)
        }
    }
}

@media only screen and (orientation:landscape) and (max-width: 760px) {
    .skills {
        min-width: 100%;
        display: flex;
        .skills-flex {
            display: flex !important;
            min-width: 200px;
            margin: -120px;
        }
        .bars {
            min-width: 247px !important;
            margin-right: 50px;
            margin-top: 15px;
            label {
                &__value {
                    display: none;
                }
            }
        }
        * {
            box-sizing: border-box;
            transition: .3s;
        }
        $size-px: 90px;
        $size: 120;
        $size-lg: $size * 1.5;
        $transform: $size-px / 2;
        html,
        body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        .vue-skill-level {
            border-radius: 0 !important;
        }
        .scene {
            perspective: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin-top: 70px !important;
            margin-left: 0px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            &:hover {
                .side {
                    opacity: 1;
                }
            }
        }
        .cube {
            margin-bottom: 80px;
            transform-style: preserve-3d;
            position: relative;
            width: $size-px;
            height: $size-px;
            animation: rotate 10s ease-in-out infinite;
            transform-origin: center center;
        }
        .side {
            position: absolute;
            width: $size-px;
            height: $size-px;
            background-color: #333;
            opacity: .95;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .back {
            transform: translateZ(-#{$transform}) rotateX(180deg);
            background-image: url(https://az720974.vo.msecnd.net/blog/sass.png);
            background-position: center;
        }
        .left {
            transform: translateX(-#{$transform}) rotateY(90deg);
            background-image: url(http://www.sclance.com/pngs/css-logo-png/css_logo_png_352539.png);
            background-position: center;
        }
        .right {
            transform: translateX($transform) rotateY(90deg);
            background-image: url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png);
            background-position: center;
        }
        .top {
            transform: translateY(-#{$transform}) rotateX(90deg);
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png);
            background-position: center;
        }
        .bottom {
            transform: translateY($transform) rotateX(270deg);
            background-image: url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png);
            background-position: center;
        }
        .front {
            transform: translateZ($transform);
            background-image: url(https://miro.medium.com/max/1032/1*OrjCKmou1jT4It5so5gvOA.jpeg);
            background-position: center;
        }
        @keyframes rotate {
            0% {
                transform: rotateX(0)
            }
            12.5% {
                transform: rotateY(90deg)
            }
            25% {
                transform: rotateY(270deg)
            }
            37.5% {
                transform: rotateY(270deg)
            }
            50% {
                transform: rotateY(360deg)
            }
            62.5% {
                transform: rotateX(90deg)
            }
            75% {
                transform: rotateX(180deg)
            }
            87.5% {
                transform: rotateX(270deg)
            }
            100% {
                transform: rotateX(360deg)
            }
        }
    }
}

@media only screen and (max-width: 775px) {
    .skills {
        min-width: 100%;
        display: block;
        .skills-flex {
            display: block;
            min-width: 200px;
            margin: -120px;
        }
        .bars {
            min-width: 100px;
            label {
                &__value {
                    display: none;
                }
            }
        }
        * {
            box-sizing: border-box;
            transition: .3s;
        }
        $size-px: 90px;
        $size: 120;
        $size-lg: $size * 1.5;
        $transform: $size-px / 2;
        html,
        body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        .vue-skill-level {
            border-radius: 0 !important;
        }
        .scene {
            perspective: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin-top: 40px;
            margin-left: 0px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            &:hover {
                .side {
                    opacity: 1;
                }
            }
        }
        .cube {
            margin-bottom: 80px;
            transform-style: preserve-3d;
            position: relative;
            width: $size-px;
            height: $size-px;
            animation: rotate 10s ease-in-out infinite;
            transform-origin: center center;
        }
        .side {
            position: absolute;
            width: $size-px;
            height: $size-px;
            background-color: #333;
            opacity: .95;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .back {
            transform: translateZ(-#{$transform}) rotateX(180deg);
            background-image: url(https://az720974.vo.msecnd.net/blog/sass.png);
            background-position: center;
        }
        .left {
            transform: translateX(-#{$transform}) rotateY(90deg);
            background-image: url(http://www.sclance.com/pngs/css-logo-png/css_logo_png_352539.png);
            background-position: center;
        }
        .right {
            transform: translateX($transform) rotateY(90deg);
            background-image: url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png);
            background-position: center;
        }
        .top {
            transform: translateY(-#{$transform}) rotateX(90deg);
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png);
            background-position: center;
        }
        .bottom {
            transform: translateY($transform) rotateX(270deg);
            background-image: url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png);
            background-position: center;
        }
        .front {
            transform: translateZ($transform);
            background-image: url(https://miro.medium.com/max/1032/1*OrjCKmou1jT4It5so5gvOA.jpeg);
            background-position: center;
        }
        @keyframes rotate {
            0% {
                transform: rotateX(0)
            }
            12.5% {
                transform: rotateY(90deg)
            }
            25% {
                transform: rotateY(270deg)
            }
            37.5% {
                transform: rotateY(270deg)
            }
            50% {
                transform: rotateY(360deg)
            }
            62.5% {
                transform: rotateX(90deg)
            }
            75% {
                transform: rotateX(180deg)
            }
            87.5% {
                transform: rotateX(270deg)
            }
            100% {
                transform: rotateX(360deg)
            }
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .skills {
        min-width: 100%;
        display: block;
        .skills-flex {
            display: block;
            min-width: 375px;
            margin: -120px;
        }
        .bars {
            min-width: 100px;
            label {
                &__value {
                    display: none;
                }
            }
        }
        * {
            box-sizing: border-box;
            transition: .3s;
        }
        $size-px: 155px;
        $size: 120;
        $size-lg: $size * 1.5;
        $transform: $size-px / 2;
        html,
        body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        .vue-skill-level {
            border-radius: 0 !important;
        }
        .scene {
            perspective: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin-top: 80px;
            margin-left: 0px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            &:hover {
                .side {
                    opacity: 1;
                }
            }
        }
        .cube {
            margin-bottom: 80px;
            transform-style: preserve-3d;
            position: relative;
            width: $size-px;
            height: $size-px;
            animation: rotate 10s ease-in-out infinite;
            transform-origin: center center;
        }
        .side {
            position: absolute;
            width: $size-px;
            height: $size-px;
            background-color: #333;
            opacity: .95;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .back {
            transform: translateZ(-#{$transform}) rotateX(180deg);
            background-image: url(https://az720974.vo.msecnd.net/blog/sass.png);
            background-position: center;
        }
        .left {
            transform: translateX(-#{$transform}) rotateY(90deg);
            background-image: url(http://www.sclance.com/pngs/css-logo-png/css_logo_png_352539.png);
            background-position: center;
        }
        .right {
            transform: translateX($transform) rotateY(90deg);
            background-image: url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png);
            background-position: center;
        }
        .top {
            transform: translateY(-#{$transform}) rotateX(90deg);
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png);
            background-position: center;
        }
        .bottom {
            transform: translateY($transform) rotateX(270deg);
            background-image: url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png);
            background-position: center;
        }
        .front {
            transform: translateZ($transform);
            background-image: url(https://miro.medium.com/max/1032/1*OrjCKmou1jT4It5so5gvOA.jpeg);
            background-position: center;
        }
        @keyframes rotate {
            0% {
                transform: rotateX(0)
            }
            12.5% {
                transform: rotateY(90deg)
            }
            25% {
                transform: rotateY(270deg)
            }
            37.5% {
                transform: rotateY(270deg)
            }
            50% {
                transform: rotateY(360deg)
            }
            62.5% {
                transform: rotateX(90deg)
            }
            75% {
                transform: rotateX(180deg)
            }
            87.5% {
                transform: rotateX(270deg)
            }
            100% {
                transform: rotateX(360deg)
            }
        }
    }
}
</style>
