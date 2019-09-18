<template>
    <div id="Pieva">
    
    
    
        <img :src="image" class="Pieva" />
    
    
    
    </div>
</template>

<script>
import image from '@/assets/Pieva.png'

export default {
    name: 'Pieva',
    data: function() {
        return {
            image: image
        }
    }
}
</script>

<style lang="scss">
.Pieva {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-left: 20px;
    margin-bottom: 20px;
    object-fit: cover;
    animation-name: zoomOut;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode: both;
    animation-delay: 100ms;
    opacity: 0;
    .Pieva:hover {
        display: none;
    }
    img:hover {
        transform: scale(1.2) !important;
        cursor: pointer;
    }
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

@media only screen and (orientation:landscape) and (max-width: 760px) {
    .Pieva {
        height: 70px !important;
        width: 70px !important;
        border-radius: 50%;
        margin-left: 10px;
        margin-bottom: 20px;
        object-fit: cover;
        animation-name: zoomOut;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
        animation-fill-mode: both;
        animation-delay: 100ms;
        opacity: 0;
        .Pieva:hover {
            display: none;
        }
        img:hover {
            transform: scale(1.2) !important;
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: 775px) {
    .Pieva {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        margin-left: 10px;
        margin-bottom: 20px;
        object-fit: cover;
        animation-name: zoomOut;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
        animation-fill-mode: both;
        animation-delay: 100ms;
        opacity: 0;
        .Pieva:hover {
            display: none;
        }
        img:hover {
            transform: scale(1.2) !important;
            cursor: pointer;
        }
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
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .Pieva {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-left: 10px;
        margin-bottom: 20px;
        object-fit: cover;
        animation-name: zoomOut;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
        animation-fill-mode: both;
        animation-delay: 100ms;
        opacity: 0;
        .Pieva:hover {
            display: none;
        }
        img:hover {
            transform: scale(1.2) !important;
            cursor: pointer;
        }
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
}
</style>
