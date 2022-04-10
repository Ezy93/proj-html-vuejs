<template>
    <section class="row">
        <div class="col-12 text-center py-5">
            <p class="text-uppercase">corporate & weddings</p>
            <h4 class="fw-bolder">Baking Special Moments  </h4>
        </div>
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-6 my-corporate me-5">
                    <div class="description-hover align-items-center h-100  flex-column justify-content-center ">
                        <p class="text-uppercase">international bakery</p>
                        <h3 class="fw-bold">Corporate Events</h3>
                        <div class="btn w-25 mt-3">
                            <a href="#">Explore more</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 my-wedding">
                    <div class="description-hover align-items-center h-100  flex-column justify-content-center ">
                        <p class="text-uppercase">private dining hall</p>
                        <h3 class="fw-bold">Wedding & parties</h3>
                        <div class="btn w-25 mt-3">
                            <a href="#">Explore more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SpecialSection'
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    section.row{
        
        div.col-12{
                    p{
                        color: $Mamba;
                        font-size: .6rem;
                    }
                    h4{
                        color: $Title_color;
                    }
        }
        div.col-12{
            div.row{
                
                div.my-corporate{
                    background-image: url('../../assets/images/corporate-bg.jpg');
                    div.description-hover{
                        display: none;
                        p,
                        h3,
                        a{
                            color: white;
                        }
                        
                        div.btn{
                            background-color: $Title_color;
                            a{
                                text-decoration: none;
                            }
                        }
                    }
                }
                div.my-corporate:hover{
                    background-image: url('../../assets/images/corporate-hover-bg.jpg');
                    div.description-hover{
                        display: flex;
                    }
                }
                div.my-wedding{
                    background-image: url('../../assets/images/wedding-bg.jpg');
                        div.description-hover{
                            display: none;
                        p,
                        h3,
                        a{
                            color: white;
                        }
                        
                        div.btn{
                            background-color: $Title_color;
                            a{
                                text-decoration: none;
                            }
                        }
                    }
                }
                div.my-wedding:hover{
                    background-image: url('../../assets/images/wedding-hover-bg.jpg');
                    div.description-hover{
                        display: flex;
                    }
                }
                .my-corporate,
                .my-wedding{
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: 44rem;
                    width: calc(50% - 1.5rem);
                }
            }
        }
    }

</style>