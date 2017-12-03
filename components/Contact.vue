<template>
	<div class="container py-5" id="contact">
		<div class="row mb-5">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<h2 class="text-uppercase letter-spacing-1 mb-3 text-center">{{lang[5]}}</h2>
				<form>
					<div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputName" class="col-form-label">{{lang[6]}}</label>
							<input type="text" :class="'form-control'+(touched&&nameErr!==''?' is-invalid':'')" id="inputName" @input="input('name', $event.target.value.trim())">
							<div class="invalid-feedback text-capitalize">{{nameErr}}</div>
						</div>
						<div class="form-group col-md-6">
							<label for="inputEmail" class="col-form-label">{{lang[7]}}</label>
							<input type="email" :class="'form-control'+(touched&&emailErr!==''?' is-invalid':'')" id="inputEmail" @input="input('email', $event.target.value.trim())">
							<div class="invalid-feedback text-capitalize">{{emailErr}}</div>
						</div>
					</div>
					<label for="inputMessage" class="col-form-label">{{lang[8]}}</label>
					<textarea rows="3" :class="'form-control mb-3'+(touched&&messageErr!==''?' is-invalid':'')" id="inputMessage" @input="input('message', $event.target.value.trim())"></textarea>
					<div class="invalid-feedback text-capitalize">{{messageErr}}</div>
					<button :disabled="!canSend&&touched" @click.prevent="sendContact" type="submit" class="btn btn-hc-solid d-block mx-auto">{{lang[9]}}</button>
				</form>
				<transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
					<div class="text-center" key="success" v-show="showingMessage==='success'"><h4 class="mb-0 mt-3">{{lang[10]}}</h4></div>
					<div class="text-center text-danger" key="error" v-show="showingMessage==='error'"><h4 class="mb-0 mt-3">Something went wrong!</h4></div>
				</transition-group>
			</div>
		</div>
		<div class="text-center">
			<a target="_blank" href="https://www.instagram.com/hyacinthcapital/"><i class="fa fa-2x fa-instagram pointer" aria-hidden="true"></i></a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name: '',
			nameErr: 'name required',
			email: '',
			emailErr: 'email required',
			message: '',
			messageErr: 'message required',
			touched: false, // show invalid feedback only when form is touched
			showingMessage: null // for success or error message
		}
	},
	computed: {
		canSend () {
			return this.nameErr === '' && this.emailErr === '' && this.messageErr === ''
		}
	},
	methods: {
		input (key, value) {
			this[key] = value
			if (key === 'email') {
				this[key + 'Err'] = value === '' ? key + ' required' : (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) ? 'invalid email' : ''
			} else {
				this[key + 'Err'] = value === '' ? key + ' required' : ''
			}
		},
		sendContact () {
			this.touched = true
			if (this.canSend) {
				fetch('https://formspree.io/michellehanyeung@gmail.com', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						Name: this.name,
						Email: this.email,
						Message: this.message
					})
				}).then(r => {
					if (r.status >= 200 && r.status < 300) {
						document.getElementById('inputMessage').value = ''
						this.touched = false
						this.messageErr = 'message required'
						this.showingMessage = 'success'
						setTimeout(() => { this.showingMessage = null }, 5000)
					} else {
						this.showingMessage = 'error'
						setTimeout(() => { this.showingMessage = null }, 5000)
					}
				})
			}
		}
	}
}
</script>

<style scoped>
</style>
