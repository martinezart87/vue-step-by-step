import episode_7_assigmentsList from "./episode_7_assigmentsList.js";

export default {

    components: { episode_7_assigmentsList },
    template: `
        <section class="space-y-6">
            <episode_7_assigmentsList :assigments="filters.inProgress" title="In progress"></episode_7_assigmentsList>
            <episode_7_assigmentsList :assigments="filters.completed" title="Completed"></episode_7_assigmentsList>
            
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssigment" placeholder="New assimgent..." class="p-2" />
                    <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
                </div>
            </form>
        
        </section>
    `,

    data() {
        return {
            assigments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],

            newAssigment: ''
        }
    },

    // obiekt computed
    computed: {
        // inProgress() {
        //     return this.assigments.filter(assigment => ! assigment.complete);
        // },

        // completed() {
        //     return this.assigments.filter(assigment => assigment.complete);
        // },

        filters() {
            return {
                inProgress: this.assigments.filter(assigment => ! assigment.complete),
                completed: this.assigments.filter(assigment => assigment.complete)
            };
        }

    },

    methods: {
        // bez refresha
        // add(e) {
        //     e.preventDefault();
        //     alert('hi');
        // }
        add() {
            this.assigments.push({
                name: this.newAssigment,
                completed:false,
                id: this.assigments.length + 1
            });

            this.newAssigment = '';
            // alert(this.newAssigment);
            // document.querySelector
        }
    }
}