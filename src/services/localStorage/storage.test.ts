import { save, load } from './storage';

describe('localStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('save', () => {
    it('should save value to localStorage', () => {
      save('testKey', 'testValue');
      expect(localStorage.getItem('testKey')).toBe('"testValue"');
    });

    it('should not throw an error when saving to localStorage', () => {
      expect(() => save('testKey', 'testValue')).not.toThrow();
    });

    it('should catch and log errors when they occur', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      const mockError = new Error('Test Error');
      jest.spyOn(JSON, 'stringify').mockImplementation(() => {
        throw mockError;
      });

      save('testKey', 'testValue');

      expect(consoleSpy).toHaveBeenCalledWith(
        `Set state error: ${mockError.message}`
      );
    });
  });

  describe('load', () => {
    it('should load value from localStorage', () => {
      localStorage.setItem('testKey', JSON.stringify('testValue'));
      expect(load('testKey')).toBe('testValue');
    });

    it('should return undefined when the key does not exist', () => {
      expect(load('nonExistentKey')).toBeUndefined();
    });

    // it('should catch and log errors when they occur', () => {
    //   const consoleSpy = jest
    //     .spyOn(console, 'error')
    //     .mockImplementation(() => {});
    //   const mockError = new Error('Test Error');
    //   jest.spyOn(JSON, 'parse').mockImplementation(() => {
    //     throw mockError;
    //   });

    //   localStorage.setItem('testKey', 'testValue');
    //   const result = load('testKey');

    //   expect(result).toBeUndefined();
    //   expect(consoleSpy).toHaveBeenCalledWith(
    //     `Get state error: ${mockError.message}`
    //   );
    // });
  });
});
