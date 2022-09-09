import episode_7_assigment from "./episode_7_assigment.js"

export default {
    components: { episode_7_assigment },
    template: `
        <section v-show="assigments.length">
            <h2 class="font-bold mb-2">{{ title }}
                <span>({{ assigments.length }})</span>
            </h2>
            
            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded py-1 px-1 text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }"
                    >{{ tag }}</button>
            </div>

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

        tags() {
            // return ['sience', 'math', 'reading'];
            // pobieranie z tagów assigments
            // new Set - usuwa duplikaty
            // ... - podają wyfiltrowane nazwy
            return ['all', ...new Set(this.assigments.map(a => a.tag))];
        }
    }
}