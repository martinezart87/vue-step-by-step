import episode_7_assigmentsList from "./episode_7_assigmentsList.js";

export default {

    components: { episode_7_assigmentsList },
    template: `
        <section class="space-y-6">
            <episode_7_assigmentsList :assigments="filters.inProgress" title="In progress"></episode_7_assigmentsList>
            <episode_7_assigmentsList :assigments="filters.completed" title="Completed"></episode_7_assigmentsList>
        </section>
    `,

    data() {
        return {
            assigments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
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

    }
}