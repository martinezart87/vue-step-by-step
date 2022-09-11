import episode_7_assigmentsList from "./episode_7_assigmentsList.js";
import episode_9_assigmentCreate from "./episode_9_assigmentCreate.js";

export default {

    components: { episode_7_assigmentsList, episode_9_assigmentCreate },
    template: `
        <section class="flex gap-8">
            <episode_7_assigmentsList :assigments="filters.inProgress" title="In progress">
                <episode_9_assigmentCreate @add="add"></episode_9_assigmentCreate>
            </episode_7_assigmentsList>
            <episode_7_assigmentsList :assigments="filters.completed" title="Completed" can-toggle></episode_7_assigmentsList>
            
            <!-- <episode_9_assigmentCreate :assigments="assigments"></episode_9_assigmentCreate> 
            v-on:add=""
            --!>
        </section>
    `,

    data() {
        return {
            // assigments: [
            //     { name: 'Finish project', complete: false, id: 1, tag: 'math' },
            //     { name: 'Read chapter 4', complete: false, id: 2, tag: 'sience' },
            //     { name: 'Turn in homework', complete: false, id: 3, tag: 'math' },
            // ],

            // Episode 13
            assigments: [],
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

    // Episode 13 after component has been created - mounted()
    created() {
       fetch('http://localhost:3001/assigments')
            .then(response => response.json())
            // .then(data => {
            //     console.log(data);
            // })
            .then(assigments => {
                this.assigments = assigments;
            });
    },

    methods: {
        // bez refresha 
        // add(e) {
        //     e.preventDefault();
        //     alert('hi');
        // }
        add(name) {
            // this.assigments.push({
            //     name: this.newAssigment,
            //     completed:false,
            //     id: this.assigments.length + 1
            // });
            this.assigments.push({
                name: name,
                completed:false,
                id: this.assigments.length + 1
            });

        }
    }
}