<template>
    <footer class="mt-5 pt-5">
        <div class="top-footer p-5 row">
            <div class="col-4 mb-5 mt-4 offset-2">
                <p>try our seasonal products</p>
                <h3 class="text-white fw-bolder mt-2">Order for pick-up or delivery to your home</h3>
                <div class="btn bg-white my-5">
                    <a href="#" class="px-3">Shop Now</a>
                </div>
            </div>
        </div>
        <div class="bot-footer">

        </div>
    </footer>
</template>

<script>


export default {
    name:'indexFooter'
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
    footer{
        div.top-footer{
            background-image: url('../assets/images/call-to-action-bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            p{
                font-size: .8rem;
                color: $manatee;
            }
            h3{

            }
            div.btn{

                a{
                    text-decoration: none;
                    color: $Title-color;
                }
            }
        }

        div.bot-footer{

        }
    }

</style>