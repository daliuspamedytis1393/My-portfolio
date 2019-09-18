<template>
	<main class="app">

		<Layout/>

		<Footer/>

	</main>
</template>

<script>
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

export default {
	components: {
		Layout,
		Footer
	}
}
</script>
<style lang="scss">
.app {
	display: flex;
	flex-flow: column;
	min-height: 100%;
}
</style>
