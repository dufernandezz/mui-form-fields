import 'jest-extended';
import { createNumberMask, getFnc, isExtendable, omit, setFocus } from '../../src/utils/helpers';
import { createNumberMask as _createNumberMask } from 'text-mask-addons';

describe('Helpers', () => {
  it('should return a text-mask number mask with options already set', () => {
    expect(JSON.stringify(createNumberMask({}))).toBe(JSON.stringify(_createNumberMask({})));
  });

  it('should return the correct key', () => {
    expect(getFnc({ a: 'a' }, 'a')).toEqual('a');
  });
  it('should return undefined when the key does not exists', () => {
    expect(getFnc({ a: 'a' }, 'b')).toEqual(undefined);
  });

  it('should return true for extendable objects', () => {
    [{}, function() {}, () => {}, []].forEach(it => {
      expect(isExtendable(it)).toBeTrue();
    });
  });
  it('should return false for not extandable objects', () => {
    [1, 'a', new Date()].forEach(it => {
      expect(isExtendable(it)).toBeFalse();
    });
  });

  it('shoud', () => {});
});
