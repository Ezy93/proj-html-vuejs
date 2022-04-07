<template>
    <header class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <!-- logo della navbar -->
            <a class="navbar-brand" href="#">
                <img :src="require('../assets/images/avada-bakery-logo.png')" alt="">
            </a>
            
            <!-- links della navbar aggiunti dinamicamente  -->
            <div>
                <ul class="navbar-nav mr-auto d-flex align-items-center">
                    <li class="nav-item active mx-2" v-for="(element,index) in navbarLinks" :key="index">
                        <a class="nav-link text-uppercase" href="#">{{element}}</a>
                    </li>
                    <li class="nav-item">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    </li>
                </ul>
                
            </div>
        </nav>
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
    
</style>