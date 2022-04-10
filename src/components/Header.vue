<template>
    <header class="bg-transparent position-relative">
        <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid position-fixed top-0 bg-transparent">

            <!-- logo della navbar -->
            <a class="navbar-brand" href="#">
                <img :src="require('../assets/images/avada-bakery-logo.png')" alt="">
            </a>
            
            <!-- links della navbar aggiunti dinamicamente  -->
            
            <div class="my-links-container position-absolute">
                <ul class="navbar-nav mr-auto d-flex align-items-center">
                    <li class="nav-item active mx-2" v-for="(element,index) in navbarLinks" :key="index">
                        <a class="nav-link text-uppercase my-title" href="#">{{element}}</a>
                    </li>
                    <li class="nav-item mx-3">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="my-title" />
                    </li>
                </ul>
            
            </div>
            
        </nav>
        <div class="my-jumbotron position-relative">
            <div class="container-fluid position-fixed">
                <!-- conterrà i piccoli quadratini con demos e sale -->
                <div class="row">
                    <div class="col-12 d-flex justify-content-end">
                        <div class="my-demo rounded-3">
                            <div class="text-center">
                                <svg  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26 5.99994H6C5.44772 5.99994 5 6.44765 5 6.99994C5 7.55222 5.44772 7.99994 6 7.99994H26C26.5523 7.99994 27 7.55222 27 6.99994C27 6.44765 26.5523 5.99994 26 5.99994Z"></path>
                                    <path d="M24 2.99994H8C7.44772 2.99994 7 3.44765 7 3.99994C7 4.55222 7.44772 4.99994 8 4.99994H24C24.5523 4.99994 25 4.55222 25 3.99994C25 3.44765 24.5523 2.99994 24 2.99994Z"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.9999C3 10.7908 4.79086 8.99994 7 8.99994H25C27.2091 8.99994 29 10.7908 29 12.9999V24.9999C29 27.2091 27.2091 28.9999 25 28.9999H7C4.79086 28.9999 3 27.2091 3 24.9999V12.9999ZM11.2142 23.9962C11.0575 23.9962 10.9524 23.8414 11.0218 23.7026L15.8007 14.1131C15.8761 13.9623 16.0883 13.9623 16.1637 14.1131L16.5247 14.8371C18.9529 19.7192 15.6459 24.0041 11.2142 23.9962ZM18.3797 19.2906C18.4531 19.1399 18.6674 19.1399 18.7428 19.2906L20.9785 23.7065C21.0459 23.8414 20.9467 24.0001 20.796 24.0001H18.8578C17.4335 24.0001 16.6896 22.6194 17.2807 21.4371L18.3797 19.2906Z"></path>
                                </svg>
                            </div>
                            <p class="mb-0 text-center fw-bold">Demos</p>
                            
                        </div>
                    </div>

                    <div class="col-12  mt-2 d-flex justify-content-end">
                        <div class="my-demo rounded-3 text-center">
                            <h5 class="fw-bolder mb-0 mt-1">
                                <sup>$</sup>39
                            </h5>
                            <p class="mb-0 fw-bolder">On Sale</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- conterrà explore our products -->
            <div class="container my-relative">
                <div class="row">
                    <div class="col-4">
                        <p class="text-uppercase">fresh & tasty bakery every day</p>
                        <h1 class="fw-bolder"> The Perfect Fresh Bread  </h1>
                        <p>Cras consequat lectus vestibulum tortor pulvinar, quis eusimod nisl varius.Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor</p>
                        <div class="btn mt-3">
                            <a href="#" class="px-3">explore our products</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'indexHeader',
    data: function(){
        return{
            navbarLinks:[
                'home',
                'shop',
                'about',
                'gallery',
                'location',
                'journal',
                'contact',
                'my account',
            ]
        }
        
    },
    created: function(){
        
    },
    methods:{
        
    }

}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
header{
    div.my-jumbotron{
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/images/hero-header-bakery.jpg');
        background-position: center;
        background-size: cover;
        div.container-fluid{
            top: 8rem;
        }
        div.row{
            div.my-demo,
            div.my-sale{
                width: 3rem;
                height: 3rem;
                background-color: white;
                svg{
                    fill: $outer_space;
                    padding: .2rem;
                }
                p{
                    font-size: .6rem;
                    color: $outer_space;
                }
                h5{
                    color: $OnSale_text;
                    sup{
                        font-size: .7rem;
                    }
                }
            }
        }
        div.my-relative{
            position: relative;
            top: 17rem;
            div.row{
                div.col-4{
                    h1{
                        color: $Title_color;
                    }
                    p{
                        color: $Mamba;
                    }
                    div.btn{
                        background-color: white;
                        a{
                            text-decoration: none;
                            color: $Title_color;
                        }
                    }
                }
            }
        }
    }
    nav.navbar{
        z-index: 1;
        div.my-links-container{
            right: 12px;
            ul.navbar-nav{

                .my-title{
                    
                    color: $Title_color;
                    
                }
            }
        }
    }
}
</style>