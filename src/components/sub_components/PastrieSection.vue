<template>
    <section class="row my-5 py-5">
        
        <div class="col-4">
            <p class="text-uppercase">our products</p>
            <h4 class="fw-bolder"> All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all- natural, all organic ingredients  </h4>
            <div class="btn mt-5">
                <a href="#" class="px-3">explore our products</a>
            </div>
        </div>
        <!-- carousel statico  -->
        <div class="col-8 pe-0">
            <div class="my-thumb-container d-flex justify-content-end">
                <img :src="require('../../assets/images/choco-chip-cookies-400x510.jpg')" alt="">
                <img class="ms-3" :src="require('../../assets/images/choco-chip-cookies-400x510.jpg')" alt="">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'PastrieSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    section.row{
                div.col-4{
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
                            color: $Title_color;
                        }
                    }
                }
            
    }
</style>