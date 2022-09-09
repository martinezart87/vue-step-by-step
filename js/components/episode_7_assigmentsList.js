import episode_7_assigment from "./episode_7_assigment.js"
import episode_11_assigmentsTags from "./episode_11_assigments-tags.js";

export default {
    components: { episode_7_assigment, episode_11_assigmentsTags },
    template: `
        <section v-show="assigments.length">
            <h2 class="font-bold mb-2">{{ title }}
                <span>({{ assigments.length }})</span>
            </h2>
            
            <episode_11_assigmentsTags 
                :initial-tags="assigments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            />

            <ul class="mt-6">
                <episode_7_assigment v-for="assigment in filteredAssigments" :key="assigment.id" :assigment="assigment">
            </ul>

            <!-- <pre>
                {{ assigments }}
            </pre> -->
        </section>
    `,

    props: {
        assigments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all' 
        };
    },

    computed: {
        filteredAssigments(){
            if(this.currentTag === 'all') {
                return this.assigments;
            }
            return this.assigments.filter(a => a.tag === this.currentTag);
        },


    }
}