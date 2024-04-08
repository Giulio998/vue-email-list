
  const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
        numberEmails: 10,
      }
    },
    methods: {
        getEmail(){
          for(let i = 0; i < this.numberEmails; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{
              this.emails.push(res.data.response);
            })
          }
        },
      },
    mounted(){
        this.getEmail()
    }


  }).mount('#app')