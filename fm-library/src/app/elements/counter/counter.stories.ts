// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {CounterComponent} from './counter.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';

export default {
  title: 'switches/CounterComponent',
  component: CounterComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faCircleCheck);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CounterComponent> = (args: CounterComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  placeholder: '0',
  value: 0,
  step: 1,
  min: 0,
  max: 10,
  name: 'name',
  light: false,
};

