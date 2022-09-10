export default {
    // @click="currentTag = tag"
    
    template: `
        <div class="flex gap-2">
            <!-- <button 
                @click="$emit('change', tag)"
                v-for="tag in tags" 
                class="border rounded py-1 px-1 text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >{{ tag }}</button> -->

                <!-- Episode 12 -->
                <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded py-1 px-1 text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >{{ tag }}</button>
        </div>
    `,

    props:{
        initialTags: Array,
        currentTag: String

        // Episode 12 - odnośi się do episode_7_assigmentsList.js jeżeli v-model a nie v-model:currentTag <!-- Episode 12 -->z
        // modelValue: String 
    },

    // data() {
    //     return {
    //         currentTag: 'all'
    //     }
    // },

    computed: {
        tags() {
            // return ['sience', 'math', 'reading'];
            // pobieranie z tagów assigments
            // new Set - usuwa duplikaty
            // ... - podają wyfiltrowane nazwy
            return ['all', ...new Set(this.initialTags)];
        }
    }
    
}