<template>
    <footer class="mt-5 pt-5">
        <!-- parte superiore del footer che porta allo shop -->
        <div class="top-footer p-5 row">
            <div class="col-4 mb-5 mt-4 offset-2">
                <p>try our seasonal products</p>
                <h3 class="text-white fw-bolder mt-2">Order for pick-up or delivery to your home</h3>
                <div class="btn bg-white my-5">
                    <a href="#" class="px-3">Shop Now</a>
                </div>
            </div>
        </div>
        <!-- parte inferiore del footer con le info di conttato ed i social -->
        <div class="bot-footer container mt-5">
            
                <div class="row">
                    <nav class="col-6">
                        <div class="footer-logo">
                            <img :src="require('../assets/images/avada-bakery-logo-retina-200x97.png')" alt="">
                        </div>
                        <div class="footer-nav">
                            <ul class="d-flex ps-0 pt-5 align-items-baseline">
                                <li :key="index" v-for="(element ,index) in footerNav" class="me-4">
                                    {{element}}
                                </li>
                                <li class="ms-4 me-2">
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="my-title" />
                                </li>
                                <li>
                                    <div class="object-in-cart px-2 rounded-circle">
                                        0
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="col-6 d-flex flex-column align-items-end">
                        <h4 class="fw-bold pt-4">
                            Subscribe to our Newletter
                        </h4>
                        <div class="d-flex justify-content-end w-100 mt-4">
                            <input class="w-50" type="email" name="" id="" placeholder="Enter email address*">
                            <div class="btn py-1 ms-3">
                                <a href="#" class="text-white">Subscribe</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-5 my-5 justify-content-between" >
                    <div class="copyrigth col-7">
                        <font-awesome-icon icon="fa-solid fa-copyright" class="me-1"/>
                        <span>
                            Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
                        </span>
                    </div>
                    <div class="social-icons col-2 d-flex justify-content-around">
                        <font-awesome-icon :icon="`fa-brands fa-${element}`" v-for="(element,index) in footerSocial" :key="index" />
                    </div>
                </div>
            
        </div>
    </footer>
</template>

<script>


export default {
    name:'indexFooter',
    data: function(){
        return{
            footerNav:[
                'Shop',
                'About',
                'Gallery',
                'Location',
                'Journal',
                'Contact',
                'Orders'
            ],
            footerSocial:[
                'instagram',
                'twitter',
                'facebook',
                'pinterest'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
    footer{
        div.top-footer{
            background-image: url('../assets/images/call-to-action-bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            p{
                font-size: .8rem;
                color: $manatee;
            }
            div.btn{

                a{
                    text-decoration: none;
                    color: $Title-color;
                }
            }
        }

        div.bot-footer{
            div.row{
                nav.col-6{
                    div.footer-nav{
                        ul.d-flex{
                            color: $Title-color;
                            list-style: none;
                            li{
                                div.object-in-cart{
                                    background-color: #dacafa;
                                }
                            }
                        }
                    }
                }
                div.col-6{
                    h4{
                        color: $Title_color;
                    }
                    div{
                        input{
    
                        }
                        div.btn{
                            background-color: $Title_color;
                            a{
                                text-decoration: none;
                                
                            }
                        }
                    }
                }
            }
            div.row{
                div.copyrigth{
                    font-size: .8rem;
                    color: $manatee;
                }
                div.social-icons{
                    color: $Title_color;
                }
            }
        }
    }

</style>