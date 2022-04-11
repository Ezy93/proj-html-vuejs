<template>
    <section class="row my-5 py-5">
        
        <div class="col-3 text-center">
            <div class="description-container">
                <h4 class="fw-bolder"> Find a freshly baked product perfect for you  </h4>
                <p class="text-uppercase mt-3">Integer a nibh vitae ex porttitor rutrum et ut velit. etiam ac felis at leo feugiat placeragt. sed ac nulla id orci tempor convallis sed.</p>
                <div class="btn">
                    <a href="#" class="px-3">Shop All Product</a>
                </div>
            </div>
        </div>
        <!-- carousel statico  -->
        <div class="col-9 pe-0">
            <div class="my-thumbs-container">
                <div class="my-thumb d-flex justify-content-end gap-3 w-100 position-relative">
                    <div class="previous position-absolute py-4 px-3" @click="previous()">
                        <font-awesome-icon icon="fa-solid fa-angle-left" class="text-white" />
                    </div>
                    <div class="thumb text-center position-relative" :key="index" v-for="(element , index) in sliderItems" :class="(element.ID === activeElement) ? 'd-inline':'d-none'">
                        <div class="w-100  position-absolute my-hover align-items-center justify-content-center">
                            <p class="text-uppercase">
                                <a href="#">select options</a>
                                <span class="text-white mx-1">/</span>
                                <a href="#">quick view</a>
                            </p>
                        </div>
                        <img class="w-100" :src="require(`../../assets/images/${element.img}-200x255.jpg`)" :alt="`${element.name} picture`">
                        <h6 class="fw-bolder mt-3">{{element.name}}</h6>
                        <p>{{element.price}}</p>
                    </div>
                    
                    <div class="next position-absolute py-4 px-3" @click="next()">
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="text-white" />
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FreshlySection',
    data: function(){
        return{
            activeElement: 1,
            sliderItems:[
                {
                    name: 'Choco Chip Cookies',
                    price:'$18.00 - $32.00',
                    img: 'choco-chip-cookies',
                    ID: 1
                },
                {
                    name: 'Strawberry Jam Cookies',
                    price:'$36.00 - $60.00',
                    img: 'strawberry-jam-cookies',
                    ID: 1
                },
                {
                    name: 'Strawberry Donut',
                    price:'$24.00 - $48.00',
                    img: 'strawberry-donut',
                    ID: 1                
                },
                {
                    name: 'Perfect Macarons',
                    price:'$32.00 - $56.00',
                    img: 'perfect-macarons',
                    ID: 1
                },
                {
                    name: 'Premium Bread',
                    price:'$32.00 - $68.00',
                    img: 'premium-bread',
                    ID: 2
                },
                {
                    name: 'Cake with Cherry Topping',
                    price:'$99.00',
                    img: 'cherry-cake',
                    ID: 2
                },
                {
                    name: 'Cookies with ice cream',
                    price:'$18.00 - $34.00',
                    img: 'cookies-with-ice-cream',
                    ID: 2
                },
                {
                    name: 'Blackberry Stuffed Bread',
                    price:'$22.00 - $46.00',
                    img: 'blackberry-stuffed-bread',
                    ID: 2
                },
                {
                    name: 'Glazed Bread with Fruits',
                    price:'$24.00',
                    img: 'glazed-pancake-with-lemon',
                    ID: 3
                },
                {
                    name: 'Chocolate Cupcake',
                    price:'$26.00 - $68.00',
                    img: 'small-cupcake',
                    ID: 3
                },
                {
                    name: 'Homemade Bread',
                    price:'$26.00 - $68.00',
                    img: 'home-bread',
                    ID: 3
                },
                {
                    name: 'Choco Chip Cookies',
                    price:'$18.00 - $32.00',
                    img: 'choco-chip-cookies',
                    ID: 3
                },
            ]
        }
    },
    methods:{
        previous(){
            this.activeElement--
            if(this.activeElement < 1){
                this.activeElement = 2
            }
        },
        next(){
            this.activeElement++
            if(this.activeElement > 3){
                this.activeElement = 1
            }
            
        }

    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    section.row{
        div.col-3{
            position: relative;
            line-height: 1.2rem;
            div.description-container{
                position: absolute;
                bottom: 5rem;
                h4{
                    color: $Title_color;
                }
                p{
                    color: $Mamba;
                    font-size: .6rem;
                }
                div.btn{
                    background-color: $Title_color;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }
                div.btn:hover{
                    background-color: $perfume;
                    a{
                        text-decoration: none;
                        color: $Title_color;
                    }
                }
            }
        }
        div.col-9{
            div.my-thumb{
                div.my-hover{
                    height: 79%;
                    display: none;
                    background-color: rgba( lightgrey, .5);
                    p{
                        a{
                            text-decoration: none;
                            color: white;
                        }
                        a:hover{
                            color: $Title_color;
                        }
                    }
                }
                div.thumb:hover{
                    div.my-hover{
                        display: flex;
                    }
                }
                div.previous{
                    left: 0;
                }
                div.next,
                div.previous{
                    top: 40%;
                    background-color: rgba($perfume,0.5);
                    
                }
                div.previous{
                    z-index: 1;
                }
                div.thumb{
                    width: calc(100% / 4);
                    h6{
                        color: $Title_color;
                    }
                    p{
                        font-size: .8rem;
                        color: $Title_color; 
                    }
                }
            }
        }
    }
</style>