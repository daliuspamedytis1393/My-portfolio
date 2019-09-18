<template>
    <div id="My-img">
    
    
    
        <img :src="image" class="My-img" />
    
    
    
    </div>
</template>

<script>
import image from '@/assets/Dalius.jpg'

export default {
    name: 'MyImage',
    data: function() {
        return {
            image: image
        }
    }
}
</script>

<style lang="scss">
.My-img {
    height: 170px;
    width: 180px;
    border-radius: 50%;
    margin-left: 33px;
    object-fit: cover;
    animation-name: picImage;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
    animation-fill-mode: both;
    animation-delay: 700ms;
    opacity: 0;
}

@keyframes picImage {
    from {
        opacity: 0;
        transform: scale(1.2) translateY(-1rem);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@media only screen and (max-width: 775px) {
    .My-img {
        height: 76px;
        position: absolute;
        top: -25%;
        right: 61%;
        width: 76px;
        border-radius: 50%;
        margin-left: 33px;
        object-fit: cover;
        animation-name: picImage;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
        animation-fill-mode: both;
        animation-delay: 700ms;
        opacity: 0;
    }
}

@media only screen and (orientation:landscape) and (max-width: 760px) {
    .My-img {
        height: 76px;
        position: absolute;
        top: 3%;
        right: -11%;
        width: 76px;
        border-radius: 50%;
        margin-left: 33px;
        object-fit: cover;
        animation-name: picImage;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
        animation-fill-mode: both;
        animation-delay: 700ms;
        opacity: 0;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .My-img {
        height: 140px;
        position: absolute;
        top: -50%;
        right: 73%;
        width: 140px;
        border-radius: 50%;
        margin-left: 33px;
        object-fit: cover;
        animation-name: picImage;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
        animation-fill-mode: both;
        animation-delay: 700ms;
        opacity: 0;
    }
}
</style>
