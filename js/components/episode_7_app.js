import episode_7_assigments from "./episode_7_assigments.js"
import panel from "./panel.js"

export default {
    components: { episode_7_assigments, panel },
    template: `
        <episode_7_assigments />
        <panel heading="Hellooooo worlddddd" />

        <panel>
            <template v-slot:heading>
                Heading
            </template>

            <!-- default nie trzeba w template ubierać -->
            <template v-slot:default>
                This is my default content
            </template>
        
        </panel>

        <panel>
            <template v-slot:heading>
                Heading
            </template>

            <!-- default nie trzeba w template ubierać -->
            <template v-slot:default>
                This is my default content
            </template>
        
            <template v-slot:footer>
                This is my footer
            </template>
        </panel>

        <panel theme="light">
            <template v-slot:heading>
                Heading
            </template>

            <!-- default nie trzeba w template ubierać -->
            <template v-slot:default>
                This is my default content
            </template>
        
            <template v-slot:footer>
                This is my footer
            </template>
        </panel>
    `,

    
}