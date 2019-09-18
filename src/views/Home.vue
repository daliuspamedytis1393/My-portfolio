<template>
	<AppWhiteBox>

		<div class="home">

			<div class="text">

				<h1 class='line-1 anim-typewriter'>Hi, I'm Dalius Pamedytis</h1>

				<h4 class="title"> Junior frontend developer</h4>

				<hr>

				<h2>

					I spend my time creating websites,<br> learning more coding features.<br>
					Professional chef.

				</h2>

			</div>

			<MyImage/>

		</div>

	</AppWhiteBox>
</template>
<script>
import AppWhiteBox from '@/components/AppWhiteBox'
import MyImage from '@/components/MyImage'
export default {
	name: 'Home',
	components: {
		AppWhiteBox,
		MyImage
	}
}
</script>

<style lang="scss">
.home {
	display: flex;
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fillUp {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
	.img {
		border-radius: 50%;
		margin-left: 100px;
		box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
		animation-name: picImage;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
		animation-fill-mode: both;
		animation-delay: 700ms;
		opacity: 0;
	}
	hr {
		border-color: #37E9B8;
		width: 15%;
		content: "";
		height: 1px;
		padding: 0;
		margin: 0;
		transform-origin: center left;
		width: 14rem;
		animation-name: fillUp;
		animation-duration: 3s;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h1 {
		font-size: 20px;
		margin: 3px;
		animation-name: slideDown;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 100ms;
	}
	h2 {
		color: black;
		font-size: 20px;
		animation-name: slideUp;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 400ms;
	}
	h4 {
		font-size: 20px;
		color: black;
		margin-top: 0;
		animation-name: slideUp;
		animation-duration: 200ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 200ms;
	}
}
@media only screen and (orientation:landscape) and (max-width: 760px){
	.home {
		display: inline;
		@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fillUp {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
	.img {
		border-radius: 50%;
		margin-left: 100px;
		box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
		animation-name: picImage;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
		animation-fill-mode: both;
		animation-delay: 700ms;
		opacity: 0;
	}
	hr {
		border-color: #37E9B8;
		width: 15%;
		content: "";
		height: 1px;
		padding: 0;
		margin: 0;
		transform-origin: center left;
		width: 14rem;
		animation-name: fillUp;
		animation-duration: 3s;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h1 {
		font-size: 20px;
		margin: 3px;
		animation-name: slideDown;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h2 {
		color: black;
		font-size: 20px;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 600ms;
	}
	h4 {
		font-size: 20px;
		color: black;
		margin-top: 0;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 500ms;
	}
	}
	  

}	

@media only screen and (max-width: 775px) {
	.home {
		display: inline;
		@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fillUp {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
	.img {
		border-radius: 50%;
		margin-left: 100px;
		box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
		animation-name: picImage;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
		animation-fill-mode: both;
		animation-delay: 700ms;
		opacity: 0;
	}
	hr {
		border-color: #37E9B8;
		width: 15%;
		content: "";
		height: 1px;
		padding: 0;
		margin: 0;
		transform-origin: center left;
		width: 14rem;
		animation-name: fillUp;
		animation-duration: 3s;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h1 {
		font-size: 20px;
		margin: 3px;
		animation-name: slideDown;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h2 {
		color: black;
		font-size: 20px;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 600ms;
	}
	h4 {
		font-size: 20px;
		color: black;
		margin-top: 0;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 500ms;
	}
	}
}
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {
	.home {
		display: inline;
		@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fillUp {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
	.img {
		border-radius: 50%;
		margin-left: 100px;
		box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
		animation-name: picImage;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.6);
		animation-fill-mode: both;
		animation-delay: 700ms;
		opacity: 0;
	}
	hr {
		border-color: #37E9B8;
		width: 15%;
		content: "";
		height: 2px;
		padding: 0;
		margin: 0;
		transform-origin: center left;
		width: 25rem;
		animation-name: fillUp;
		animation-duration: 3s;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h1 {
		font-size: 38px;
		margin: 3px;
		animation-name: slideDown;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 300ms;
	}
	h2 {
		color: black;
		font-size: 35px;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 600ms;
	}
	h4 {
		font-size: 35px;
		color: black;
		margin-top: 0;
		animation-name: slideUp;
		animation-duration: 800ms;
		animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
		animation-fill-mode: both;
		animation-delay: 500ms;
	}
	}
	  
}
</style>
