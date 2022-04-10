<template>
    <section class="row mt-5 pt-5">
        <!-- ricordarsi di sistemare il gutter tra i vari col  -->
        <div :class="(element.paragraph !== '') ? 'col-6' :'col-3'"   v-for="(element , index) in shared" :key="index" class="p-3">
            <img class="img-fluid" :src="require(`../../assets/images/${element.image}`)" alt="shared photo" v-if="element.paragraph === ''">
            <div v-else class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <p class="text-uppercase fw-bold">made for sharing</p>
                <h3 class="fw-bolder"> let's stay in touch</h3>
                <div class="btn d-flex align-items-center justify-content-evenly mt-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    <p class="mb-0">Follow Us</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:'SharingSection',
    data: function(){
        return{
            shared:[
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-1.jpg'
                },
                {
                    paragraph: 'made for sharing',
                    title: 'Let\'s stay in touch',
                    button: 'Follow Us',
                    image: 'social-1.jpg'
                },
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-2.jpg'
                },
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-3.jpg'
                },
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-4.jpg'
                },
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-5.jpg'
                },
                {
                    paragraph: '',
                    title: '',
                    button: '',
                    image:'social-6.jpg'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
    div.col-6{
        
        div.w-100{
            background-color: #f3edf4;
            h3{
                color: $Title_color;
            }
            p.text-uppercase{
                color: $manatee;
                font-size: .6rem
            }
            div.btn{
                height: 2rem;
                width: 8rem;
                background-color: $Title_color;
                svg{
                    height: .8rem;
                    filter: invert(100%);
                }
                p{
                    font-size: .8rem;
                }
                
            }
            div.btn:hover{
                background-color: $perfume;
                p{
                    color: $Title_color;
                }
                svg{
                    
                    filter: none;
                }
            }
        }
    }
</style>