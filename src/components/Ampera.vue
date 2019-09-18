<template>
    <div id="Ampera">

        <img :src="image" class="Ampera" />

    </div>
</template>

<script>
import image from '@/assets/logo.jpg'

export default {
	name: 'Ampera',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
.Ampera {
    margin-left: 20px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    animation-name: zoomOut;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode: both;
    animation-delay: 100ms;
    opacity: 0;
}

@keyframes zoomOut {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media only screen and (max-width: 775px) {
  .Ampera {

    height: 90px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    animation-name: zoomOut;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode: both;
    animation-delay: 100ms;
    opacity: 0;
    margin-left: 12px;
}
}
@media only screen and (orientation:landscape) and (max-width: 760px){
    .Ampera {

    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    animation-name: zoomOut;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode: both;
    animation-delay: 100ms;
    opacity: 0;
    margin-left: 12px;
}
}
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {
     .Ampera {

    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    animation-name: zoomOut;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode: both;
    animation-delay: 100ms;
    opacity: 0;
    margin-left: 12px;
}
}
</style>
