<template>
    <div id="react">

        <img :src="image" class="react" />

    </div>
</template>

<script>
import image from '@/assets/React.png'

export default {
	name: 'React',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
.react {
    height: 70px;
    width: 70px;
    margin-left: 33px;
    object-fit: cover;
    animation-name: picImage;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
    animation-fill-mode: both;
    animation-delay: 1300ms;
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
        height: 80px;
        position: absolute;
        top: 4%;
        right: 12%;
        width: 80px;
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
