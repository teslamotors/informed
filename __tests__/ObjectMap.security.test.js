import { ObjectMap } from '../src/ObjectMap.js';

describe('ObjectMap Security Tests', () => {
  describe('Prototype Pollution Prevention', () => {
    beforeEach(() => {
      // Clean up any existing prototype pollution before each test
      delete Object.prototype.isAdmin;
      delete Object.prototype.role;
      delete Object.prototype.polluted;
    });

    afterEach(() => {
      // Clean up after each test
      delete Object.prototype.isAdmin;
      delete Object.prototype.role;
      delete Object.prototype.polluted;
    });

    it('should prevent prototype pollution with __proto__.isAdmin', () => {
      // Verify clean state before attack
      expect(Object.prototype.isAdmin).toBeUndefined();
      expect(({}).isAdmin).toBeUndefined();

      // Simulate the attack path described in the security report
      // This mimics what happens when a malicious form field name is processed
      const state = { values: {} };
      
      // This should be blocked by the security fix
      expect(() => {
        ObjectMap.set(state.values, '__proto__.isAdmin', true);
      }).toThrow('Dangerous property access blocked');

      // Verify prototype pollution was prevented
      expect(Object.prototype.isAdmin).toBeUndefined();
      expect(({}).isAdmin).toBeUndefined();
      expect(new Object().isAdmin).toBeUndefined();
      
      // Verify no global contamination occurred
      const newObj = {};
      expect(newObj.isAdmin).toBeUndefined();
    });

    it('should prevent prototype pollution with __proto__.role', () => {
      // Verify clean state before attack
      expect(Object.prototype.role).toBeUndefined();
      expect(({}).role).toBeUndefined();

      // Attack with different property - should be blocked
      const state = { values: {} };
      expect(() => {
        ObjectMap.set(state.values, '__proto__.role', 'tesla_admin');
      }).toThrow('Dangerous property access blocked');

      // Verify prototype pollution was prevented
      expect(Object.prototype.role).toBeUndefined();
      expect(({}).role).toBeUndefined();
      expect(new Object().role).toBeUndefined();
    });

    it('should prevent prototype pollution with constructor.prototype', () => {
      // Verify clean state before attack
      expect(Object.prototype.polluted).toBeUndefined();
      expect(({}).polluted).toBeUndefined();

      // Attack using constructor.prototype path - should be blocked
      const state = { values: {} };
      expect(() => {
        ObjectMap.set(state.values, 'constructor.prototype.polluted', true);
      }).toThrow('Dangerous property access blocked');

      // Verify prototype pollution was prevented
      expect(Object.prototype.polluted).toBeUndefined();
      expect(({}).polluted).toBeUndefined();
    });

    it('should prevent pollution from persisting across different objects', () => {
      // Attempt attack - should be blocked
      const state1 = { values: {} };
      expect(() => {
        ObjectMap.set(state1.values, '__proto__.persistent', 'attacker_controlled');
      }).toThrow('Dangerous property access blocked');

      // Create new objects after blocked attack
      const obj1 = {};
      const obj2 = new Object();
      const obj3 = { someOtherProp: 'value' };

      // All objects should remain clean
      expect(obj1.persistent).toBeUndefined();
      expect(obj2.persistent).toBeUndefined();
      expect(obj3.persistent).toBeUndefined();
      expect(Object.prototype.persistent).toBeUndefined();
    });

    it('should prevent realistic attack scenario with form field names', () => {
      // This test simulates the realistic attack scenario from the security report
      // where malicious form field names can be used to pollute the prototype

      // Simulate form state
      const formState = { values: {} };

      // Simulate processing of malicious form fields
      // These would come from user input in form field names
      const maliciousFields = [
        { name: '__proto__.isAdmin', value: true },
        { name: '__proto__.role', value: 'admin' },
        { name: '__proto__.permissions', value: ['read', 'write', 'delete'] }
      ];

      // Process each malicious field - all should be blocked
      maliciousFields.forEach(field => {
        expect(() => {
          ObjectMap.set(formState.values, field.name, field.value);
        }).toThrow('Dangerous property access blocked');
      });

      // Verify all prototype pollution was prevented
      expect(Object.prototype.isAdmin).toBeUndefined();
      expect(Object.prototype.role).toBeUndefined();
      expect(Object.prototype.permissions).toBeUndefined();

      // Verify new objects remain clean
      const newUser = {};
      expect(newUser.isAdmin).toBeUndefined();
      expect(newUser.role).toBeUndefined();
      expect(newUser.permissions).toBeUndefined();
    });

    it('should prevent vulnerability in the ldset function directly', () => {
      // This test directly calls the vulnerable ldset function to show the root cause
      // We need to access the internal ldset function for this test
      
      // Since ldset is not exported, we'll test through ObjectMap.set which uses it
      const testObj = {};
      
      // This should be blocked by the security fix in ldset at line 114
      expect(() => {
        ObjectMap.set(testObj, '__proto__.directAttack', 'success');
      }).toThrow('Dangerous property access blocked');
      
      // Verify the attack was prevented
      expect(Object.prototype.directAttack).toBeUndefined();
      expect(({}).directAttack).toBeUndefined();
    });
  });
});
