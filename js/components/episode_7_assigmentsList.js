import episode_7_assigment from "./episode_7_assigment.js"
import episode_11_assigmentsTags from "./episode_11_assigments-tags.js";

export default {
    components: { episode_7_assigment, episode_11_assigmentsTags },
    template: `
        <section v-show="show && assigments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <div class="flex justify-between item-start">
                <h2 class="font-bold mb-2">{{ title }}
                    <span>({{ assigments.length }})</span>
                </h2>
                
                
                <button v-show="canToggle" @click="show = false">&times</button>

            </div>
            <!-- <episode_11_assigmentsTags 
                :initial-tags="assigments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            /> -->

            <!-- Episode 12 -->
            <episode_11_assigmentsTags 
                v-model:currentTag="currentTag"
                :initial-tags="assigments.map(a => a.tag)"
            />

            

            <ul class="mt-6">
                <episode_7_assigment v-for="assigment in filteredAssigments" :key="assigment.id" :assigment="assigment">
            </ul>

            <!-- <pre>
                {{ assigments }}
            </pre> -->

            <slot></slot>
        </section>
    `,

    props: {
        assigments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all',
            show: true
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