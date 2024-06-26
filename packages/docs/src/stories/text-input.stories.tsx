import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@miguel-rocketseat-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter email address',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter email address',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
