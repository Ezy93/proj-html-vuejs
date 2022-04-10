<template>
    <main class="container">
        <PastrieSection></PastrieSection>
        <SpecialSection></SpecialSection>
        <FreshlySection></FreshlySection>
        <BannerSection></BannerSection>
        <VisitBakerySection></VisitBakerySection>
        <SharingSection></SharingSection>

    </main>
</template>

<script>
import PastrieSection from './sub_components/PastrieSection.vue';
import SpecialSection from './sub_components/SpecialSection.vue';
import FreshlySection from './sub_components/FreshlySection.vue';
import BannerSection  from './sub_components/BannerSection.vue';
import VisitBakerySection from './sub_components/VisitBakerySection.vue';
import SharingSection from './sub_components/SharingSection.vue'

export default {
    name:'indexMain',
    components:{
        PastrieSection,
        SpecialSection,
        FreshlySection,
        BannerSection,
        VisitBakerySection,
        SharingSection,
    }
}
</script>

<style lang="scss" scoped>

</style>