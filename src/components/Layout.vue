<template>
	<section class="Layout">
	
		<AppHeader/>
		<div class="Layout__content">
			<router-view></router-view>
		</div>
	
	</section>
</template>

<script>
import AppWhiteBox from '@/components/AppWhiteBox'
import AppHeader from '@/components/AppHeader'
export default {
	name: 'Layout',
	components: {
		AppHeader,
		AppWhiteBox
	}
}
</script>

<style lang="scss">
.Layout {
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	align-items: center;
	background-position: center;
	background-size: 100%;
	background-image: url('https://themockup.club/wp-content/uploads/2018/01/Black-iMac-Pro-on-Table-Mockup.jpg');
	&__content {
		vertical-align: middle;
		margin: 0;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	&__whitebox {
		min-width: 80%;
		padding: 0 130px;
	}
}

@media only screen and (max-width: 760px) {
	.Layout {
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		align-items: center;
		background-position: center;
		background-size: contain;
		background-color: white;
		background-repeat: no-repeat;
		background-image: url('https://www.fleetlink.de/wp-content/uploads/2019/06/PinClipart.com_night-sky-clip-art_3622838.png');
		&__content {
			vertical-align: middle;
			margin: 0;
			position: absolute;
			top: 77%;
			-ms-transform: translateY(-50%);
			transform: translateY(-70%);
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
	}
}

@media only screen and (orientation:landscape) and (max-width: 760px) {
	.Layout {
		background-image: url('https://ctaa.org/wp-content/uploads/2019/04/dribbble-shot-for-ui-_-ux-with-iphone-x-landscape_frame.png') !important;
		background-size: 110%;
		&__content {
			vertical-align: middle;
			margin: 0;
			position: absolute;
			top: 85%;
			-ms-transform: translateY(-50%);
			transform: translateY(-70%);
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
	}
}

@media only screen and (orientation:landscape) and (min-width: 768px) and (max-width: 1100px) {
	.Layout {
		background-image: url('https://www.pinpng.com/pngs/m/59-596032_free-icons-png-ipad-blank-screen-landscape-transparent.png') !important;
		background-size: cover;
		background-position: top;
		&__content {
			vertical-align: middle;
			margin: 0;
			position: absolute;
			top: 65%;
			-ms-transform: translateY(-50%);
			transform: translateY(-70%);
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
	}
}

@media only screen and (min-width: 768px) and (max-width: 1100px) {
	.Layout {
		background-image: url('https://www.trzcacak.rs/myfile/detail/26-263894_download-png-image-report-ipad-pro-png-transparent.png') !important;
		background-size: cover;
		background-position: top;
		&__content {
			vertical-align: middle;
			margin: 0;
			position: absolute;
			top: 65%;
			-ms-transform: translateY(-50%);
			transform: translateY(-70%);
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
	}
}
</style>
