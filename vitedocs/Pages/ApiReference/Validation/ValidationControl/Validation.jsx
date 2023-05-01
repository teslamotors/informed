import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import Close from '@spectrum-icons/workflow/Close';
import Checkmark from '@spectrum-icons/workflow/Checkmark';

export const ValidationControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Validation Control</code>
      </h1>
      <Info>
        By default fields will only validate on blur and on submit. To get more
        granular validation, simply pass in <code>validateOn</code> props.
        <br />
        <Code>
          {`<Input label="Name:" name="name" required validateOn="change" />`}
        </Code>
        <br />
        <strong>Note: </strong> See table below for mapping:
      </Info>
      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider>validateOn</Column>
          <Column showDivider>derived</Column>
          <Column showDivider>change</Column>
          <Column showDivider>blur</Column>
          <Column showDivider>submit</Column>
          <Column showDivider>default</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>"change"</code>
            </Cell>
            <Cell>change-change</Cell>
            <Cell>sync + async</Cell>
            <Cell>sync + async</Cell>
            <Cell>sync + async</Cell>
            <Cell />
          </Row>
          <Row>
            <Cell>
              <code>"blur"</code>
            </Cell>
            <Cell>blur-blur</Cell>
            <Cell>
              <Close size="S" color="negative" />
            </Cell>
            <Cell>sync + async</Cell>
            <Cell>sync + async</Cell>
            <Cell>
              <Checkmark size="S" color="positive" />
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>"change-blur"</code>
            </Cell>
            <Cell>change-blur</Cell>
            <Cell>sync</Cell>
            <Cell>sync + async</Cell>
            <Cell>sync + async</Cell>
            <Cell />
          </Row>
          <Row>
            <Cell>
              <code>"change-submit"</code>
            </Cell>
            <Cell>change-submit</Cell>
            <Cell>sync</Cell>
            <Cell>sync</Cell>
            <Cell>sync + async</Cell>
            <Cell />
          </Row>
          <Row>
            <Cell>
              <code>"blur-submit"</code>
            </Cell>
            <Cell>blur-submit</Cell>
            <Cell>
              <Close size="S" color="negative" />
            </Cell>
            <Cell>sync</Cell>
            <Cell>sync + async</Cell>
            <Cell />
          </Row>
          <Row>
            <Cell>
              <code>"submit"</code>
            </Cell>
            <Cell>submit-submit</Cell>
            <Cell>
              {' '}
              <Close size="S" color="negative" />
            </Cell>
            <Cell>
              {' '}
              <Close size="S" color="negative" />
            </Cell>
            <Cell>sync + async</Cell>
            <Cell />
          </Row>
        </TableBody>
      </TableView>

      <Info>
        Validation is controlled via the validateOn prop, but in order to
        control when it shows, use the <code>showErrorIfError</code> and{' '}
        <code>showErrorIfDirty</code>
        props.
        <br />
        <br />
        This is because sometimes you may want the form to be invalid but not
        show the error to the user yet ( default is showErrorIfTouched )
      </Info>

      <TableView
        aria-label="Example table for prop description and default"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={220}>
            prop
          </Column>
          <Column showDivider>description</Column>
          <Column showDivider width={100}>
            default
          </Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>showErrorIfError</code>
            </Cell>
            <Cell>
              will set showError for that field to true whenever there is an
              error (typically used with validateOnMount)
            </Cell>
            <Cell />
          </Row>
          <Row>
            <Cell>
              <code>showErrorIfTouched</code>
            </Cell>
            <Cell>
              will set showError for that field to true whenever there is an
              error and the field is touched
            </Cell>
            <Cell>
              <Checkmark size="S" color="positive" />
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>showErrorIfDirty</code>
            </Cell>
            <Cell>
              will set showError for that field to true whenever there is an
              error and the field is dirty
            </Cell>
            <Cell />
          </Row>
        </TableBody>
      </TableView>

      <Info>
        Finally we have a use case for validating right away ( on mount )
      </Info>

      <TableView
        aria-label="Example table for prop description and default"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={220}>
            prop
          </Column>
          <Column showDivider>description</Column>
          <Column showDivider width={100}>
            default
          </Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>validateOnMount</code>
            </Cell>
            <Cell>Will trigger validation onMount</Cell>
            <Cell>false</Cell>
          </Row>
        </TableBody>
      </TableView>

      <Info>The best way to understand this is by example.</Info>

      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
};
