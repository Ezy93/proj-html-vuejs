<template>

        <section class="row pb-5">
            <!-- banner tell us -->
            <div class="col-12 my-banner-top p-5">
                <div class="row mx-3 my-5">
                    <div class="col-5 text-white">
                        <h1 class="fw-bolder mb-5 pb-5">Tell us what you have in mind</h1>
                    </div>
                    <div class="col-7 text-white text-end">
                        <p class="my-fontS">01</p>
                    </div>
                    <div class="col-12 text-white mt-5 pt-5">
                        <div class="row d-flex justify-content-end">
                            <div class="col-4">
                                <h6 class="text-uppercase fw-bold">manual ingredients selection</h6>
                                <p class="fw-bold">
                                    cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat
                                    voluptat. Nullam quis sagittis nibh. morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner we start baking -->
            <div class="col-6 my-banner-start mt-4">
                <div class="row mx-3 my-5">
                    <div class="col-7 text-white">
                        <h1 class="fw-bolder mb-5 pb-5">We Start Baking</h1>
                    </div>
                    <div class="col-5 text-white text-end">
                        <p class="my-fontS">02</p>
                    </div>
                    <div class="col-12 text-white mt-5 pt-5">
                        <div class="row d-flex justify-content-start">
                            <div class="col-7">
                                <p class="text-uppercase">sweat and delicious</p>
                                <p class="fw-bold">
                                    cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat
                                    voluptat. Nullam quis sagittis nibh. morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner finnaly found -->
            <div class="col-6 my-banner-end">
                
            </div>
            <!-- banner delivery -->
        </section>

</template>

<script>
export default {
    name: 'BannerSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    section.row{
            .my-fontS{
                font-size: 4.5rem;
            }
            div.col-12.my-banner-top{
                background-image: url('../../assets/images/bakery-process-1.jpg');
                
                
            }
            div.col-6.my-banner-start{
                background-image: url('../../assets/images/bakery-process-2.jpg');
                background-position: center;
            }
            div.col-6.my-banner-end{

            }
            div.col-12.my-banner-bottom{
                background-image: url('../../assets/images/bakery-process-3.jpg');
            }
            div.col-12.my-banner-top,
            div.col-6.my-banner-start,
            div.col-12.my-banner-bottom{
                background-size: cover;
                background-repeat: no-repeat;
            }
        
    }
</style>