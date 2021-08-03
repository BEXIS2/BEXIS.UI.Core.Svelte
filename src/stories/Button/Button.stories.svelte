<!-- Button.stories.svelte -->

<script>
 import { Meta, Story } from '@storybook/addon-svelte-csf';
 import Color from '../Button/Color.svelte'
 import Size from '../Button/Size.svelte'
 import Icon from '../Button/Icon.svelte'
 import sourceColor  from '!!raw-loader!../Button/Color.svelte'
 import sourceSize  from '!!raw-loader!../Button/Size.svelte'
 import sourceIcon  from '!!raw-loader!../Button/Icon.svelte'
 import Example from '../Example.svelte'

</script>

<Meta title="Bexis2/Core/Button" 
 component={Color}
/>

<Story name="Colors"  >
<Example title="Color" source={sourceColor}>
 <Color/> 
 <span slot="info">
  This story shows all the colors of the different buttons.
 </span>
</Example>
</Story>

<Story name="Size"  >
 <Example title="Size" source={sourceSize}>
  <Size/> 
  <span slot="info">
   Easy change size.
  </span>
 </Example>
 </Story>

<Story name="Icon"  >
 <Example title="Icon" source={sourceIcon}>
  <Icon/> 
  <span slot="info">
   Button with icons are used as grid functions in bexis 2.
  </span>
 </Example>
 </Story>



