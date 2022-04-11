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
                <div class="my-thumb position-relative">
                    
                    <div class="previous position-absolute py-4 px-3">
                        <font-awesome-icon icon="fa-solid fa-angle-left" class="text-white" />
                    </div>
                    <div class="d-flex" >
                        <div class="position-relative" >
                            <div class="position-absolute h-100 w-100 text-center flex-column justify-content-center text-white">
                                <h4>Choko Chip Cookies</h4>
                                <p>Cookies , Pastries</p>
                                <h3>$36.00 - $30.00</h3>
                            </div>
                            <img :src="require('../../assets/images/choco-chip-cookies-400x510.jpg')" alt="">
                        </div>
                        <div class="position-relative"> 
                            <div class="position-absolute h-100 text-center flex-column justify-content-center text-white ms-3 my-width">
                                <h4>Strawberry Jam Cookies</h4>
                                <p>Cookies , Pastries</p>
                                <h3>$36.00 - $60.00</h3>
                            </div>                       
                            <img class="ms-3" :src="require('../../assets/images/strawberry-jam-cookies-400x510.jpg')" alt="">
                        </div>
                    </div>
                    <div class="next position-absolute py-4 px-3">
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="text-white" />
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'PastrieSection',
    data: function(){
        return{
            activeElement: 0,
            pastriesArray:[
            
                    {
                        name: 'Choko Chip Cookies',
                        type: 'Cookies , Pastries',
                        price: '$18.00 - $32.00',
                    },
                    {
                        name: 'Strawberry Jam Cookies',
                        type: 'Cookies , Pastries',
                        price: '$36.00 - $60.00',
                    },
                

            
                    {
                        name: 'Cookies with ice cream',
                        type: 'Cookies , Pastries',
                        price: '$18.00 - $34.00',
                    },
                    {
                        name: 'Homemade Bread',
                        type: 'Breads , Pastries',
                        price: '$26.00 - $68.00',
                    },
            
            ]
        }
    }
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
                div.col-8{
                    div.my-thumb-container{
                        div.my-thumb{
                            div.d-flex{
                                div.position-relative{
                                    div.position-absolute{
                                        background-color: rgba($manatee, 0.5);
                                        display: none;
                                    }

                                    div.my-width{
                                        width: 96%;
                                    }
                                }
                                div.position-relative:hover{
                                    div.position-absolute{
                                        display: flex;
                                    }
                                }
                            }
                            div.previous{
                                z-index: 1;
                            }
                            div.previous,
                            div.next{
                                top: 45%;
                                background-color: rgba($perfume,0.5)
                            }
                            div.next{
                                right: 0;
                                
                            }

                        }
                    }
                }
            
    }
</style>