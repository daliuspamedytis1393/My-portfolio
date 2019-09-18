<template>
	<AppWhiteBox>

		<div class="projects">

			<div class="logo1">

				<a href="http://www.antpievos.lt">

					<Pieva/>

				</a>

				<div class="text">

					<a href="http://www.antpievos.lt">

						<h4 class="paragraph">Food service website</h4>

						<h6 class="paragraph2">Product page, website app</h6>

					</a>

				</div>

			</div>

			<div class="logo2">

				<a href="https://www.ampera.lt">

					<Ampera/>

				</a>

				<div class="text2">

					<a href="https://www.ampera.lt">

						<h4 class="paragraph">Electrical service website</h4>

						<h6 class="paragraph2">Product page, website app</h6>

					</a>

				</div>

			</div>

		</div>

	</AppWhiteBox>
</template>

<script>
import AppWhiteBox from '@/components/AppWhiteBox'
import Pieva from '@/components/Pieva'
import Ampera from '@/components/Ampera'

export default {
	name: 'Projects',
	components: {
		AppWhiteBox,
		Pieva,
		Ampera

	}
}
</script>

<style lang='scss'>
.projects {
	.logo1 {
		display: flex;
	}
	.logo2 {
		.text {
			color: black;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
		}
		display: flex;
	}
	.text,
	.text2 {
		padding-left: 20px;
		padding-top: 18px;
		a:hover {
			text-decoration: none;
		}
		h4 {
			font-size: 18px;
			color: black;
		}
		h6 {
			color: black;
		}
		* {
			transition: all 10ms ease-in-out
		}
		.paragraph {
			font-size: 17px;
			font-weight: 900;
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 200ms;
			opacity: 0;
		}
		.paragraph:hover{
			color: #37E9B8;
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
		.paragraph2 {
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 100ms;
			opacity: 0;
		}
		.logo1:hover {
			display: none !important;
		}
		.cursor {
			width: 4px;
			height: 40px;
			background-color: lightcoral;
			display: inline-block;
			animation: 1s blinking infinite;
		}
		@keyframes blinking {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes typing {
			from {
				width: 0;
				opacity: 1;
			}
		}
	}
}
@media only screen and (max-width: 775px) {
	.projects {
	.logo1 {
		display: flex;
	}
	.logo2 {
		.text {
			color: black;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
		}
		display: flex;
	}
	.text,
	.text2 {
		padding-left: 25px;
		padding-top: 10px;
		a:hover {
			text-decoration: none;
		}
		h4 {
			font-size: 18px;
			color: black;
		}
		h6 {
			font-size: 11px;
			color: black;
		}
		* {
			transition: all 10ms ease-in-out
		}
		.paragraph {
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 200ms;
			opacity: 0;
			font-size: 16px;
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
		.paragraph2 {
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 100ms;
			opacity: 0;
		}
		.logo1:hover {
			display: none !important;
		}
		.cursor {
			width: 4px;
			height: 40px;
			background-color: lightcoral;
			display: inline-block;
			animation: 1s blinking infinite;
		}
		@keyframes blinking {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes typing {
			from {
				width: 0;
				opacity: 1;
			}
		}
	}
}
}
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {
	.projects {
	.logo1 {
		display: flex;
	}
	.logo2 {
		.text {
			color: black;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
		}
		display: flex;
	}
	.text,
	.text2 {
		padding-left: 25px;
		padding-top: 10px;
		a:hover {
			text-decoration: none;
		}
		h4 {
			font-size: 18px;
			color: black;
		}
		h6 {
			font-size: 25px;
			color: black;
		}
		* {
			transition: all 10ms ease-in-out
		}
		.paragraph {
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 200ms;
			opacity: 0;
			font-size: 30px;
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
		.paragraph2 {
			object-fit: cover;
			animation-name: zoomOut;
			animation-duration: 500ms;
			animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1);
			animation-fill-mode: both;
			animation-delay: 100ms;
			opacity: 0;
		}
		.logo1:hover {
			display: none !important;
		}
		.cursor {
			width: 4px;
			height: 40px;
			background-color: lightcoral;
			display: inline-block;
			animation: 1s blinking infinite;
		}
		@keyframes blinking {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes typing {
			from {
				width: 0;
				opacity: 1;
			}
		}
	}
}

}
</style>
