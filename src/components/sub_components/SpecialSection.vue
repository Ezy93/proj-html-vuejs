<template>
    <section class="row">
        <div class="col-12 text-center py-5">
            <p class="text-uppercase">corporate & weddings</p>
            <h4 class="fw-bolder">Baking Special Moments  </h4>
        </div>
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-6 my-corporate me-5">

                </div>
                <div class="col-6 my-wedding">

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
                    
                }
                div.my-wedding{
                    background-image: url('../../assets/images/wedding-bg.jpg');
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