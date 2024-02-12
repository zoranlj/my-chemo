import { objectToArray } from './data';
import { it, expect, describe } from '@jest/globals';
import { Datum } from '@nivo/line'

describe('objectToArray function', () => {
  it('should convert an object to an array of key-value pairs', () => {
    const data: Datum[] = [
      { x: 1, y: 2, a: 'test'},
      { x: 3, y: 4, b: 'test2'},
    ];
    
    const result = objectToArray(data);
    
    expect(result).toEqual([
      { key: '0', x: 1, y: 2, a: 'test'},
      { key: '1', x: 3, y: 4, b: 'test2'},
    ]);
  });

  it('should handle empty objects', () => {
    const data: Datum[] = [
      {},
      {},
    ];
    
    const result = objectToArray(data);
    
    expect(result).toEqual([
      { key: '0'},
      { key: '1'},
    ]);
  });
});