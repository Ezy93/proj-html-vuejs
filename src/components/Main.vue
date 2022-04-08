<template>
    <main class="container">
        <PastrieSection></PastrieSection>
        <SpecialSection></SpecialSection>
        <FreshlySection></FreshlySection>
    </main>
</template>

<script>
import PastrieSection from './sub_components/PastrieSection.vue';
import SpecialSection from './sub_components/SpecialSection.vue';
import FreshlySection from './sub_components/FreshlySection.vue';

export default {
    name:'indexMain',
    components:{
        PastrieSection,
        SpecialSection,
        FreshlySection
    }
}
</script>

<style lang="scss" scoped>

</style>