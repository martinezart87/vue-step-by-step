export default {
    template: `
        <div :class="{
                'w-60 p-4 border rounded-lg': true,
                'bg-white border-gray-300 text-black' : theme === 'light',
                'bg-gray-700 border-gray-600 text-white' : theme === 'dark'
            }">
            <h2 class="font-bold">{{ heading }}</h2>
            <h2 class="font-bold" v-text="heading"></h2>
            
            <!-- jeżeli istnieje slots.heading -->
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    `,

    props: {
        // heading: String
        theme: { type: String, default: 'dark' }
    }
}