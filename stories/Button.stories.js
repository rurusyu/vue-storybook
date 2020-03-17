import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// import Button from '../src/components/Button';
import ButtonNormal from './ButtonNormal.story.vue';
import ButtonPrimary from './ButtonPrimary.story.vue';

export default {
    title: 'Button',
};

// export const normalButton = () => ({
//     components: { Button },
//     template: '<Button>Normal Button</Button>',
// });

// export const primaryButton = () => ({
//     components: { Button },
//     template: '<Button color="primary">Normal Button</Button>',
// });

export const normalButton = () => ButtonNormal;

export const primaryButton = () => ButtonPrimary;