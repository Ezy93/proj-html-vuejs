<template>
    <header class="bg-transparent">
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
                    <li class="nav-item">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="my-title" />
                    </li>
                </ul>
            
            </div>
            
        </nav>
        <div class="my-jumbotron">
            <div class="container-fluid">
                <!-- conterrà i piccoli quadratini con demos e sale -->
                <div class="row">
                    <div class="col-12">

                    </div>

                    <div class="col-12">

                    </div>
                </div>
            </div>
            <!-- conterrà explore our products -->
            <div class="container">

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
    }
    nav.navbar{

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