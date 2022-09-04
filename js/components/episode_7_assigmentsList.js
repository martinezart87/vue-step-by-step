import episode_7_assigment from "./episode_7_assigment.js"

export default {
    components: { episode_7_assigment },
    template: `
        <section v-show="assigments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul>
                <episode_7_assigment v-for="assigment in assigments" :key="assigment.id" :assigment="assigment">
            </ul>

            <!-- <pre>
                {{ assigments }}
            </pre> -->
        </section>
    `,

    props: {
        assigments: Array,
        title: String
    }
}