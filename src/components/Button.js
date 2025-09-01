import {defineComponent} from "vue";

export default defineComponent(
    {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'secondary', 'danger'].includes(value)
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['click']
})
