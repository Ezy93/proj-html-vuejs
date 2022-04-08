<template>
    <section class="row">
        <div class="col-12 text-center py-5">
            <p class="text-uppercase">location</p>
            <h4 class="fw-bolder">Visit Our Bakeries</h4>
        </div>
        <!-- bakery di new york -->
        <div class="col-6 my-NY-bakery">
            <img class="w-100" :src="require('../../assets/images/new-york-bk-600x397.jpg')" alt="">
            <div>
                <h3>New York</h3>
                
            </div>
        </div>
        <!-- bakery di londra -->
        <div class="col-6 my-LN-bakery">

        </div>
    </section>
</template>

<script>
export default {
    name:'VisitBakerySection'
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
}

</style>