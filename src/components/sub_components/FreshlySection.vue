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
            <div class="my-thumbs-container d-flex justify-content-end gap-3 w-100">
                <div class="thumb text-center">
                    <img class="w-100" :src="require('../../assets/images/choco-chip-cookies-200x255.jpg')" alt="">
                    <h6 class="fw-bolder mt-3">Choco Chip Cookies</h6>
                    <p>$19.00 - $39.00</p>
                </div>
                <div class="thumb text-center">
                    <img class="w-100" :src="require('../../assets/images/choco-chip-cookies-200x255.jpg')" alt="">
                    <h6 class="fw-bolder mt-3">Choco Chip Cookies</h6>
                    <p>$19.00 - $39.00</p>
                </div>
                <div class="thumb text-center">
                    <img class="w-100" :src="require('../../assets/images/choco-chip-cookies-200x255.jpg')" alt="">
                    <h6 class="fw-bolder mt-3">Choco Chip Cookies</h6>
                    <p>$19.00 - $39.00</p>
                </div>
                <div class="thumb text-center">
                    <img class="w-100" :src="require('../../assets/images/choco-chip-cookies-200x255.jpg')" alt="">
                    <h6 class="fw-bolder mt-3">Choco Chip Cookies</h6>
                    <p>$19.00 - $39.00</p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FreshlySection'
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
            }
        }
        div.col-9{
            div.thumb{
                width: calc(100% / 4);
                h6{
                    color: $Title_color;
                }
                p{
                    font-size: .8rem;
                    color: $Title_color; ;
                }
            }
        }
    }
</style>