import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormDateField } from '../src';

const FormTest = ({
  onSubmit,
  initial,
  render,
  mutators,
}: {
  onSubmit: any;
  initial?: Object;
  render: Function;
  mutators?: any;
}) => (
  <Form
    initialValues={initial}
    onSubmit={onSubmit}
    mutators={mutators}
    render={({ handleSubmit, invalid, submitting, ...props }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>{render({ ...props, invalid })}</div>
        </form>
      );
    }}
  />
);

storiesOf('FormDateField', module).add('default', () => {
  return (
    <FormTest
      initial={{
        date_initial: '2019-02-26',
      }}
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormDateField icon="today" name="date" label="Datepicker" />
            <Divider variant="inset" />
            <FormDateField
              icon="today"
              name="date_initial"
              label="Initial Date"
            />
            <Divider variant="inset" />
            <FormDateField
              icon="today"
              name="clearable"
              label="Clearable"
              clearable
            />
            <Divider variant="inset" />
            <FormDateField
              icon="today"
              name="disabled"
              label="Disabled"
              disabled
            />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
