<template>
    <div>
        <div class="container my-5 py-5">
                <div class="row">
                    <div class="col-4">
                        <p class="text-uppercase">our products</p>
                        <h4 class="fw-bolder"> All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all- natural, all organic ingredients  </h4>
                        <div class="btn mt-5">
                            <a href="#" class="px-3">explore our products</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'PastrieSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    div.container{
            
            div.row{
                div.col-4{
                    h4{
                        color: $Title_color;
                    }
                    p{
                        color: $Mamba;
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
        }
</style>