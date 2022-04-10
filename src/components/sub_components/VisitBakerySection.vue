<template>
    <section class="row pb-3">
        <div class="col-12 text-center">
            <p class="text-uppercase">location</p>
            <h4 class="fw-bolder">Visit Our Bakeries</h4>
        </div>
        <!-- bakery di new york -->
        <div class="col-6 px-0" v-for="(element ,index) in bakeries" :key="index">
            <img class="w-100"  :src="require(`../../assets/images/${element.img}`)" :alt="`bakery of ${element.city}`">
            <div class="text-center" :class="(element.city === 'New York') ? 'my-NY-bakery' : 'my-LN-bakery' ">
                <h3 class="fw-bold p-3">{{element.city}}</h3>
                <div class="d-flex justify-content-around">
                    <div>
                        <h6 class="text-uppercase">call us</h6>
                        <p>{{element.telephone}}</p>
                    </div>

                    <div>
                        <h6 class="text-uppercase">open all week</h6>
                        <p>{{element.timetables}}</p>
                    </div>

                    <div>
                        <div class="btn p-2 rounded-3 w-50 ">
                            <a href="#">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
export default {
    name:'VisitBakerySection',
    data: function(){
        return{
            bakeries:[
                {
                    city: 'New York',
                    telephone: '1.800.458.556',
                    timetables: '9:00 AM - 6:00 PM',
                    img: 'new-york-bk-600x397.jpg',
                },
                {
                    city: 'London',
                    telephone: '1.800.458.556',
                    timetables: '9:00 AM - 6:00 PM',
                    img: 'london-bk-600x397.jpg',
                }
            ]
        }
    },
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
        div.col-6{
            h3{
                color: $Title_color;
            }
            div.my-NY-bakery,
            div.my-LN-bakery{
                
                div.d-flex{
                    div{
                        
                        width: calc(100% / 3);
                        h6{
                            font-size: .65rem;
                        }
                        p{
                            font-size: .9rem;
                        }
                        a{
                            text-decoration: none;
                            color: $Title_color;
                            font-size: .8rem;
                            
                        }
                        
                        div.btn{
                            background-color: white;
                        }
                        div.btn:hover{
                            background-color: $Title_color;
                            a{
                                color:white
                            }
                        }
                    }
                }
            }
            div.my-NY-bakery{
                background-color: #f1f9fb;
            }
            div.my-LN-bakery{
                background-color: #faf3e3;
            }
        }
}

</style>