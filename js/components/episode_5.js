export default {
    // <slot /> - dodaje tekst z sekcji app-button
    template: `
        <div>What's up</div>
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
            Hi there <slot />
        </button>
    `,

    data() {
        return {
            processing: true
        };
    }

    // mounted() {
    //     alert('hello');
    // }
}