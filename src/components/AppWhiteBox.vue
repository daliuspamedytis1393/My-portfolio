<template>
	<section class="app-whitebox">
		<h2 class="app-whitebox__title">
			{{ $route.meta.displayPageTitle }}

		</h2>
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: 'AppWhiteBox'
}
</script>

<style lang="scss">
.app-whitebox {
	align-content: center;
	width: 65vh;
	height: 302px;
	font-size: 38px;
}

@media only screen and (max-width: 775px) {
	.app-whitebox {
		align-content: center;
		width: 73%;
		margin: 0 auto;
		height: 300px;
		font-size: 38px;
	}
}
@media only screen and (orientation:landscape) and (max-width: 760px){
	.app-whitebox {
		align-content: center;
		width: 98%;
		margin: 0 auto;
		height: 300px;
		font-size: 38px;
	}
}
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {
	.app-whitebox {
		align-content: center;
		width: 98%;
		margin: 0 auto;
		height: 300px;
		font-size: 38px;
	}
}
</style>
