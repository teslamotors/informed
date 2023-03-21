import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';
import Formatter from '../../ApiReference/Formatting/Formatter/Formatter';
import NumberFormatter from '../../ApiReference/Formatting/NumberFormatter/NumberFormatter';
import Mask from '../../ApiReference/Formatting/Mask/Mask';
import Clean from '../../ApiReference/Formatting/Clean/Clean';
import Parse from '../../ApiReference/Formatting/Parse/Parse';

export const Formatting = () => {
  return (
    <>
      <Formatter />
      <hr />
      <Clean />
      <hr />
      <Mask />
      <hr />
      <Parse />
      <hr />
      <NumberFormatter />
    </>
  );
};
