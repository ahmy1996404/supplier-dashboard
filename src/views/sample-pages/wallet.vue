<template lang="html">
    <section style="direction: rtl;" class="col-md-12 col-xs-12">
        <div class="row" style="text-align: -webkit-auto; padding: 5ex; background-color: white; margin-bottom: 20px; border-radius: 10px;">
            <div class="col-md-6" >
                <p style="font-size: 30px; font-weight: bold;">اهلاً <span>{{username}}</span></p>
                <p style="font-size: 30px;">مرحباً بك في محفظتك.</p>
            </div>
            <div class="col-md-6" style="text-align: -webkit-center;">
              <img src="../../assets/images/Wallet.png" alt="walletImg" height="140" width="140" >
            </div>
        </div>
        <div class="row text-center" style="text-align: -webkit-auto; margin-bottom: 20px;">
            <div class="col-md-12" style="background-color: white; margin-left:auto; padding: 2ex; height: 300px; border-radius: 10px;" >
                <p style="font-size: 25px; font-weight: bold;">اجمالي الربح</p>
                <p style="font-size: 35px; text-align: center; position: absolute; left: 0; right: 0; top: 45%; bottom: 0; margin: auto;">
                    <span>  {{user.wallet}} </span>
                    </p>
             </div>
             
        </div>
        <div class="row" style="text-align: -webkit-auto; margin-bottom: 20px; background-color: white; ">

                            <table id="dtBasicExample" style="text-align:center; " class="table center-aligned-table table-hover">
                                <thead style="background-color: #0F3B51;">
                                
                                <tr>
                                    <th class="border-bottom-0" style="color:white;"> رقم الرحلة</th>
                                    <th class="border-bottom-0" style="color:white;"> أسم السائق</th>
                                    <th class="border-bottom-0" style="color:white;">طريقة الدفع</th>
                                    <th class="border-bottom-0" style="color:white;">ثمن الرحلة</th>
                                    <th class="border-bottom-0" style="color:white;"> تاريخ الرحلة </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in wallet">
                                    <td>{{item.id}}</td>
                                    <td>{{item.trip.car.now_being_drove.user.name}}</td>
                                    <td>{{item.trip.payment_method}}</td>
                                    <td>{{item.trip.cost - item.trip.cost_summery.company_commission}}</td>
                                    <td>{{item.trip.updated_at}}</td>
                                </tr>
                                </tbody>
                            </table>

        </div>



        <div></div>
    </section>
</template>
<script lang="js">
    import headers from '../../functions/header'
    import axios from "axios"
    export default {
        name: 'wallet',
        data(){
            return{
                
                 upperFlag:false,
                 lowerFlag:false,
                 stayFlag:false,
                 wallet: null,
                 username: null,
                 user: []
            }
        },
        computed:{
                transactionStatus(){
                                for ( let i = 0; i < this.transactions.length(); i++) {
                                    if (this.transactions.charAt(i) == '+') {
                                        this.upperFlag = true;
                                    }
                                    else if (this.transactions.charAt(i) == '-'){
                                        this.lowerFlag= true;
                                    }
                                    else {
                                        this.stayFlag= true;
                                    }
                                }
                            }
                 },
        created(){
            
            axios.get(process.env.WEBSITE_URL+'/api/suppliers/getUserInfo',headers())
            .then ( response => this.username = response.data.name   )
            
            this.wallet = axios.get(process.env.WEBSITE_URL+'/api/suppliers/getPaymentTracker',headers())
                .then(response=>{
                    this.wallet = response.data.data;
                })
                .catch(error=>{
                        console.log('error')
                });


            this.user=this.$store.state.currentUser;
            axios.get(process.env.WEBSITE_URL+'/api/suppliers/getUserInfo',headers())
                .then(response=>{
                    console.log(response.data);
                })
                .catch(error=>{
                        console.log('error')
                });

        }
    }
</script>
<style>
</style>
