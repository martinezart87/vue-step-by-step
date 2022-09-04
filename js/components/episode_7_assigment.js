export default {
    template: `
        <li>
            <label>
                {{ assigment.name }}
                <input type="checkbox" v-model="assigment.complete" name="" id="">
            </label>
        </li>
    `,

    props: {
        assigment: Object
    }
}