<template>
    <nav class="app-nav">
    
        <label>
    
           <input type="checkbox" v-model="value" />
    
      		<span class="menu">
    
      	    <span class="hamburger"></span>
    
     	     </span>
    
    		  <ul class="app-nav__list">
    
    		  	<li
    
    		  		v-for="(item, index) in navigation"
    
    		  		:key="index"
    
    		  		class="app-nav__list-item "
    
    		  	>
    
    
    
      <div class="button_container">
    
    				  <router-link
    
    				  	:to="item.to"
    
    				  	:class="['app-nav__list-link btn', {
    
    				  		'app-nav__list-link--inverted': inverted
    
    				  	}]"
    
    				  	exact-active-class="app-nav__list-link--active"
    
                @click.native="value = false"
    
    				  >
    
              <span>
    
    				  	{{ item.name }}
    
                </span>
    
    			  	</router-link>
    
      </div>
    
    		  	</li>
    
    	  	</ul>
    
    		</label>
    
    </nav>
</template>
<script>
export default {
    name: 'AppNav',

    props: {
        navigation: {
            type: Array,
            required: true
        },
        inverted: {
            type: [Boolean, String],
            default: false
        }
    },
    data() {
        return {
            value: false
        }
    }
}
</script>

<style lang="scss">
.app-nav {
    @import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
    label {
        @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
        .button_container {
            left: 0;
            right: 0;
            top: 30%;
        }
        .description,
        .link {
            text-align: center;
        }
        .description {
            font-size: 35px;
        }
        .btn {
            border: none;
            display: block;
            text-align: center;
            cursor: pointer;
            text-transform: uppercase;
            outline: none;
            overflow: hidden;
            position: relative;
            color: #000;
            padding: 17px 60px;
            margin: 0 auto;
        }
        .btn span {
            position: relative;
            z-index: 1;
        }
        .btn:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 490%;
            width: 140%;
            background: #37E9B8;
            -webkit-transition: all .5s ease-in-out;
            transition: all .5s ease-in-out;
            -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
            transform: translateX(-98%) translateY(-25%) rotate(45deg);
        }
        .btn:hover:after {
            -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
            transform: translateX(-9%) translateY(-25%) rotate(45deg);
        }
        .link {
            font-size: 20px;
            margin-top: 30px;
            ;
        }
        .link a {
            color: #000;
            font-size: 25px;
        }
        .menu {
            position: fixed;
            right: -100px;
            top: -100px;
            z-index: 100;
            width: 200px;
            height: 200px;
            border-radius: 50% 50% 50% 50%;
            transition: .5s ease-in-out;
            cursor: pointer;
        }
        .hamburger {
            position: absolute;
            top: 135px;
            left: 50px;
            width: 30px;
            height: 5px;
            background: #000;
            display: block;
            transform-origin: center;
            transition: .5s ease-in-out;
            &:after,
            &:before {
                transition: .5s ease-in-out;
                content: "";
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                background: #000;
            }
            &:before {
                top: -10px;
            }
            &:after {
                bottom: -10px;
            }
        }
        input {
            display: none;
        }
        input:checked+.menu {
            border-radius: 0;
            overflow: hidden;
            .hamburger {
                transform: rotate(45deg);
                &:after {
                    transform: rotate(90deg);
                    bottom: 0;
                }
                &:before {
                    transform: rotate(90deg);
                    top: 0;
                }
            }
        }
        input:checked+.menu+ul {
            box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
            opacity: 1;
            pointer-events: all;
            transition: opacity .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
        ul {
            opacity: 0;
            pointer-events: none;
            z-index: 200;
            position: fixed;
            background-color: #FFF;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        a {
            font-size: 25px;
            margin-bottom: 5px;
            display: block;
            color: black;
            text-decoration: none;
        }
        a:hover {
            color: white;
        }
    }
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        text-align: center;
    }
}

@media only screen and (max-width: 775px) {
    .app-nav {
        @import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
        label {
            @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
            .button_container {
                left: 0;
                right: 0;
                top: 30%;
            }
            .description,
            .link {
                text-align: center;
            }
            .description {
                font-size: 35px;
            }
            .btn {
                border: none;
                display: block;
                text-align: center;
                cursor: pointer;
                text-transform: uppercase;
                outline: none;
                overflow: hidden;
                position: relative;
                color: #000;
                padding: 17px 60px;
                margin: 0 auto;
            }
            .btn span {
                position: relative;
                z-index: 1;
            }
            .btn:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                height: 490%;
                width: 140%;
                background: #37E9B8;
                -webkit-transition: all .5s ease-in-out;
                transition: all .5s ease-in-out;
                -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
                transform: translateX(-98%) translateY(-25%) rotate(45deg);
            }
            .btn:hover:after {
                -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
                transform: translateX(-9%) translateY(-25%) rotate(45deg);
            }
            .link {
                font-size: 20px;
                margin-top: 30px;
                ;
            }
            .link a {
                color: #000;
                font-size: 25px;
            }
            .menu {
                position: absolute;
                top: -7%;
                left: 60%;
                z-index: 100;
                width: 0px;
                height: 0px;
                border-radius: 50% 50% 50% 50%;
                transition: .5s ease-in-out;
                cursor: pointer;
            }
            .hamburger {
                position: absolute;
                top: 135px;
                left: 50px;
                width: 30px;
                height: 5px;
                background: #000;
                display: block;
                transform-origin: center;
                transition: .5s ease-in-out;
                &:after,
                &:before {
                    transition: .5s ease-in-out;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: #000;
                }
                &:before {
                    top: -10px;
                }
                &:after {
                    bottom: -10px;
                }
            }
            input {
                display: none;
            }
            input:checked+.menu {
                border-radius: 0;
                overflow: hidden;
                .hamburger {
                    transform: rotate(45deg);
                    &:after {
                        transform: rotate(90deg);
                        bottom: 0;
                    }
                    &:before {
                        transform: rotate(90deg);
                        top: 0;
                    }
                }
            }
            input:checked+.menu+ul {
                box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
                opacity: 1;
                margin-top: 50px;
                margin-left: 20px;
                pointer-events: all;
                transition: opacity .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
            }
            ul {
                opacity: 0;
                pointer-events: none;
                z-index: 200;
                position: fixed;
                background-color: #FFF;
                top: 38%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            a {
                font-size: 15px;
                margin-bottom: 5px;
                display: block;
                color: black;
                text-decoration: none;
            }
            a:hover {
                color: white;
            }
        }
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            text-align: center;
        }
    }
}

@media only screen and (orientation:landscape) and (max-width: 760px) {
    .app-nav {
        @import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
        label {
            @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
            .button_container {
                left: 0;
                right: 0;
                top: 30%;
            }
            .description,
            .link {
                text-align: center;
            }
            .description {
                font-size: 35px;
            }
            .btn {
                border: none;
                display: block;
                text-align: center;
                cursor: pointer;
                text-transform: uppercase;
                outline: none;
                overflow: hidden;
                position: relative;
                color: #000;
                padding: 17px 60px;
                margin: 0 auto;
            }
            .btn span {
                position: relative;
                z-index: 1;
            }
            .btn:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                height: 490%;
                width: 140%;
                background: #37E9B8;
                -webkit-transition: all .5s ease-in-out;
                transition: all .5s ease-in-out;
                -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
                transform: translateX(-98%) translateY(-25%) rotate(45deg);
            }
            .btn:hover:after {
                -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
                transform: translateX(-9%) translateY(-25%) rotate(45deg);
            }
            .link {
                font-size: 20px;
                margin-top: 30px;
                ;
            }
            .link a {
                color: #000;
                font-size: 25px;
            }
            .menu {
                position: absolute;
                top: -15%;
                left: 75%;
                z-index: 100;
                width: 0px;
                height: 0px;
                border-radius: 50% 50% 50% 50%;
                transition: .5s ease-in-out;
                cursor: pointer;
            }
            .hamburger {
                position: absolute;
                top: 135px;
                left: 50px;
                width: 30px;
                height: 5px;
                background: #000;
                display: block;
                transform-origin: center;
                transition: .5s ease-in-out;
                &:after,
                &:before {
                    transition: .5s ease-in-out;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: #000;
                }
                &:before {
                    top: -10px;
                }
                &:after {
                    bottom: -10px;
                }
            }
            input {
                display: none;
            }
            input:checked+.menu {
                border-radius: 0;
                overflow: hidden;
                .hamburger {
                    transform: rotate(45deg);
                    &:after {
                        transform: rotate(90deg);
                        bottom: 0;
                    }
                    &:before {
                        transform: rotate(90deg);
                        top: 0;
                    }
                }
            }
            input:checked+.menu+ul {
                box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
                opacity: 1;
                margin-top: 50px;
                margin-left: 20px;
                pointer-events: all;
                transition: opacity .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
            }
            ul {
                opacity: 0;
                pointer-events: none;
                z-index: 200;
                position: fixed;
                background-color: #FFF;
                top: 38%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            a {
                font-size: 15px;
                margin-bottom: 5px;
                display: block;
                color: black;
                text-decoration: none;
            }
            a:hover {
                color: white;
            }
        }
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            text-align: center;
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .menu {
        position: absolute;
        top: 3% !important;
        left: 75% !important;
        z-index: 100;
        width: 0px;
        height: 0px;
        border-radius: 50% 50% 50% 50%;
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    .app-nav label .btn {
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        outline: none;
        overflow: hidden;
        position: relative;
        color: #000;
        padding: 17px 60px;
        margin: 0 auto;
        font-size: 32px;
    }
}
</style>
