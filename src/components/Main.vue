<template>
    <main class="container">
        <PastrieSection></PastrieSection>
        <SpecialSection></SpecialSection>
    </main>
</template>

<script>
import PastrieSection from './sub_components/PastrieSection.vue'
import SpecialSection from './sub_components/SpecialSection.vue'

export default {
    name:'indexMain',
    components:{
        PastrieSection,
        SpecialSection,
    }
}
</script>

<style lang="scss" scoped>

</style>