export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssigment" placeholder="New assimgent..." class="p-2" />
                <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
            </div>
        </form>
    `,

    // props: {
    //     assigments: Array
    // },
    
    data(){
        return {
            newAssigment: '',
        }
    },

    methods: {
        // odwołuje się do parenta 
        add() {
            this.$emit('add', this.newAssigment);
            // this.assigments.push({
            //     name: this.newAssigment,
            //     completed:false,
            //     id: this.assigments.length + 1
            // });

            this.newAssigment = '';
        }
    }
}