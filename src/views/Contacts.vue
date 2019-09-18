<template>
	<div class="contacts">

		<AppWhiteBox>
<h3>Drop me a line</h3>
			<div id="contact-form" class="contact-form">

				<form class="form" id="form">

					<ValidationObserver ref="observer">
						<div class="hello">
						<validation-provider rules="required">

							<template #default="{ errors }">

								<input placeholder="Name" type="text" rules="required|name" name="name" v-model="form.name">

								<br>

								<small>{{ errors[0] }}</small>
</template>
					</validation-provider>
					<validation-provider rules="required">
						<div slot-scope="{ errors }">
							<input placeholder="Email"  name="email" rules="required|email" type="email" v-model="form.email">
							<br>
							<small >{{ errors[0] }}</small>
						</div>
					</validation-provider>
					</div>
					<validation-provider rules="required">
						<div slot-scope="{ errors }">
							<textarea name="message" rows="2" placeholder="Message" v-model="form.message"></textarea>
							<br>
							<small>{{ errors[0] }}</small>
						</div>
					</validation-provider>
					</ValidationObserver>

				<button class="button" type="button" @click="send()">Send</button>
			</form>
			<div class="outer">
  				<div class="inner"></div>
			</div>
		</div>
		</AppWhiteBox>
	</div>
</template>
<script>
import * as emailjs from 'emailjs-com'
import AppWhiteBox from '@/components/AppWhiteBox'
import { extend } from 'vee-validate';


export default {
	name: 'Contacts',
	components: {
		AppWhiteBox
	},
	data () {
		return {
			form: {
				name: null,
				email: null,
				message: null
			},
			errorMessage: {
				name: 'vardas privalomas',
				email: 'el. paštas privalomas',
				message: 'žinutė privaloma'
			}
		}
	},
	methods: {
		async send () {
			const isValid = await this.$refs.observer.validate()
			if (isValid) {
				emailjs.send('gmail', 'template_lDnrInB3', this.form, 'user_FVas56fqmIZMP3HJU1Xhu')
					.then(response => {
						alert('išsiųsta !')
						location.reload()
					}, function (error) {
						alert('oops kažkas ne taip', error)
					})
			}
		},
		
	}
}
</script>

<style lang="css">
.contacts {
	width: 100%;
}

.contact-form {
	font-family: 16px;
	max-width: 50%;
}

textarea {
	min-width: 100%;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 13px;
	min-width: 100%;
	margin-top: 13px;
}

input {
	min-width: 100%;
}

h3{
	font-size: 25px;

}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 5px;
	outline: none;
	text-transform: lowercase;
}

small {
	margin-left: 40px;
	color: red;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
	width: 100%;
	background: rgba(0, 0, 0, 0.9);
	color: white;
	border: none;
	cursor: pointer;
	margin-top: 2px;
	border-radius: 0;
	text-align: center;
}

.contact-form .button:hover {
	background: #37E9B8;
	color: black;
	font-weight: 600;
	border-radius: 0;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	
}
@media only screen and (orientation:landscape) and (max-width: 760px){
	h3{
		
		font-size: 21px!important;
		margin-left: 95px;
		text-transform: uppercase;
		font-weight: 900!important;

	}
	.hello{
		display: flex;
	}
	.contacts {
	width: 100%;
}

.contact-form {
	font-family: 16px;
	max-width: 50%;
}

textarea {
	min-width: 100%;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 13px;
	min-width: 50%;
	
	margin-top: 13px;
}

input {
	min-width: 100%;
	
}

h3{
	font-size: 25px;

}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 5px;
	outline: none;
	text-transform: lowercase;
}

small {
	margin-left: 40px;
	color: red;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
	width: 100%;
	background: rgba(0, 0, 0, 0.9);
	color: white;
	border: none;
	cursor: pointer;
	margin-top: 2px;
	border-radius: 0;
	text-align: center;
}

.contact-form .button:hover {
	background: #37E9B8;
	color: black;
	font-weight: 600;
	border-radius: 0;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
}
}

@media only screen and (max-width: 775px) {
	h3{
		padding-left: 45px;
		font-size: 21px!important;
		float: left;
		text-transform: uppercase;
		font-weight: 900!important;

	}
	.contact-form {
		min-width: 70%;
		font-family: 16px;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		width: 90%;
		margin: 0 auto;
	}

	small {
	margin-left: 10px;
	color: red;
}
	.contact-form .button {
		width: 100%;
		align-items: flex-end;
		background: rgba(0, 0, 0, 0.9);
		color: white;
		cursor: pointer;
		margin-top: 10px;
		text-align: center;
	}
}
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) {
	h3{
		padding-left: 27px;
		font-size: 28px!important;
		float: left;
		text-transform: uppercase;
		font-weight: 900!important;

	}
	.contact-form {
		min-width: 90%;
		font-family: 16px;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		width: 90%;
		margin: 0 auto;
	}
	input {
	min-height: 45px;
	
	
}
  textarea{
	  min-height: 120px;
  }

	small {
	margin-left: 10px;
	color: red;
}
	.contact-form .button {
		width: 100%;
		height: 40px;
		align-items: flex-end;
		background: rgba(0, 0, 0, 0.9);
		color: white;
		cursor: pointer;
		margin-top: 10px;
		text-align: center;
	}
}
</style>
