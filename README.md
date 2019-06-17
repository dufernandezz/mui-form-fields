#  MUI Form Fields

[![NPM Downloads](https://img.shields.io/npm/dt/mui-form-fields.svg?style=flat)](https://npmcharts.com/compare/mui-form-fields?minimal=true)
[![peerDependencies Status](https://david-dm.org/0soft/mui-form-fields/peer-status.svg)](https://david-dm.org/0soft/mui-form-fields?type=peer)
[![npm version](https://badge.fury.io/js/mui-form-fields.svg)](https://badge.fury.io/js/mui-form-fields)

**Warning: this repository is currently to be officially released**

Material UI + FinalForm Fields, packaged and ready to go! :package:


MUI Form Fields help you build beautiful material-ui components with the
mninimal amount of code possible. This way you can keep focusing on your logic.
:dart:

## Installation

```bash
$ npm i --save mui-form-fields
```

This project also require the following peer dependencies:

| Dependency                                                             | Version    |
| ---------------------------------------------------------------------- | ---------- |
| [@date-io/core](https://www.npmjs.com/package/@date-io/core)           | `^1.3.6`   |
| [@date-io/moment](https://www.npmjs.com/package/@date-io/moment)       | `^1.3.6`   |
| [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)   | `^4.1.0`   |
| [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) | `^4.1.0`   |
| [classnames](https://www.npmjs.com/package/classnames)                 | `^2.2.6`   |
| [core-js](https://www.npmjs.com/package/core-js)                       | `^3.1.3`   |
| [css-vendor](https://www.npmjs.com/package/css-vendor)                 | `^2.0.2`   |
| [final-form](https://www.npmjs.com/package/final-form)                 | `^4.13.1`  |
| [is-plain-object](https://www.npmjs.com/package/is-plain-object)       | `^3.0.0`   |
| [jss](https://www.npmjs.com/package/jss)                               | `^9.8.7`   |
| [moment](https://www.npmjs.com/package/moment)                         | `^2.24.0`  |
| [react](https://www.npmjs.com/package/react)                           | `>=16.8.6` |
| [react-dom](https://www.npmjs.com/package/react-dom)                   | `>=16.8.6` |
| [react-dropzone](https://www.npmjs.com/package/react-dropzone)         | `^10.1.5`  |
| [react-final-form](https://www.npmjs.com/package/react-final-form)     | `^6.0.1`   |
| [react-text-mask](https://www.npmjs.com/package/react-text-mask)       | `^5.4.3`   |
| [text-mask-addons](https://www.npmjs.com/package/text-mask-addons)     | `^3.8.0`   |

Install all of them via:

```bash
$ npm i --save @date-io/core @date-io/moment @material-ui/core @material-ui/icons classnames core-js css-vendor final-form is-plain-object jss moment react react-dom react-dropzone react-final-form react-text-mask text-mask-addons
```

## Examples

This form:

<div align="center">
  <img src="https://raw.githubusercontent.com/0soft/mui-form-fields/master/assets/images/example_dialog.png" />
</div>

is generated by this code:

```javascript
  <FormDialog
    size="sm"
    title="Create User"
    onClose={() => console.log("close")}
    onSubmit={(...args) => console.log(args)}
    open
  >
    <FormTextField icon="person" name="name" label="Full Name"/>
    <Divider/>
    <FormTextField icon="mail" name="email" label="Email"/>
    <Divider/>
    <FormPhoneField name="phone" label="Phone"/>
    <Divider/>
    <FormDateField icon="today" name="birthday" label="Birthday"/>
    <Divider/>
    <FormSwitchField icon="security" name="protected" label="Protected"/>
    <Divider/>
    <FormSwitchField icon="verified_user" name="admin" label="Admin"/>
    <Divider/>
    <FormFileUploadField icon="attachment" name="identification" label="Social Security"/>
    <Divider/>
  </FormDialog>
```

## Usage

We currently have the following FormFields available:

| Component                                                                            |
| ------------------------------------------------------------------------------------ |
| [`<FormButtonField/>`](https://zerosoft.dev/mui-form-fields/FormButtonField)         |
| [`<FormChipField/>`](https://zerosoft.dev/mui-form-fields/FormChipField)             |
| [`<FormDateField/>`](https://zerosoft.dev/mui-form-fields/FormDateField)             |
| [`<FormDateRangeField/>`](https://zerosoft.dev/mui-form-fields/FormDateRangeField)   |
| [`<FormDateTimeField/>`](https://zerosoft.dev/mui-form-fields/FormDateTimeField)     |
| [`<FormDialog/>`](https://zerosoft.dev/mui-form-fields/FormDialog)                   |
| [`<FormField/>`](https://zerosoft.dev/mui-form-fields/FormField)                     |
| [`<FormFileUploadField/>`](https://zerosoft.dev/mui-form-fields/FormFileUploadField) |
| [`<FormIntegerField/>`](https://zerosoft.dev/mui-form-fields/FormIntegerField)       |
| [`<FormMoneyField/>`](https://zerosoft.dev/mui-form-fields/FormMoneyField)           |
| [`<FormNumberField/>`](https://zerosoft.dev/mui-form-fields/FormNumberField)         |
| [`<FormPercentageField/>`](https://zerosoft.dev/mui-form-fields/FormPercentageField) |
| [`<FormPhoneField/>`](https://zerosoft.dev/mui-form-fields/FormPhoneField)           |
| [`<FormReadOnlyField/>`](https://zerosoft.dev/mui-form-fields/FormReadOnlyField)     |
| [`<FormShowField/>`](https://zerosoft.dev/mui-form-fields/FormShowField)             |
| [`<FormSwitchField/>`](https://zerosoft.dev/mui-form-fields/FormSwitchField)         |
| [`<FormTextField/>`](https://zerosoft.dev/mui-form-fields/FormTextField)             |
| [`<FormWeekField/>`](https://zerosoft.dev/mui-form-fields/FormWeekField)             |

Click on each of them to get more details about the usage of each of them.

## License

TBD
