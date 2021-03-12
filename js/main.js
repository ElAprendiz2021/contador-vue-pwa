const app = Vue.createApp({
    data() {
        return {
            title: "Contador Vue",
            count: 0,
        };
    },

    methods: {
        restar() {
            this.count -= 1;
        },

        sumar() {
            this.count += 1;
        },

        opera(instruction = "add", limit = 1) {
            if(instruction == "add"){
                this.count += limit;  
            } else {
                this.count -= limit; 
            }
        },

    }
});

