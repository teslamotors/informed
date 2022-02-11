import React, { useState } from 'react';
import { Debug } from '../debug';
import { InformedContext } from '../Context';
const debug = Debug('informed:Informed' + '\t\t');

/* -------------------------------- Event Emitter ------------------------------ */
class Emitter {
  constructor() {
    // Initialize listeners
    this.subscriptions = new Map();

    // This is the emitter lol
    this.emitter = this;

    // Bind functions that will be called externally
    this.on = this.on.bind(this);
    this.emit = this.emit.bind(this);
  }

  emit(event, ...args) {
    // Grab the set based on the event
    const listeners = this.subscriptions.get(event);
    // Only call if we have listeners on that event ( null check )
    if (listeners) {
      listeners.forEach(listener => listener(...args));
    }
  }

  on(event, listener) {
    // Singleton check
    if (!this.subscriptions.get(event)) {
      this.subscriptions.set(event, new Set());
    }
    // Add listener
    const listeners = this.subscriptions.get(event);
    listeners.add(listener);
  }

  removeListener(event, listener) {
    // Remove listener
    const listeners = this.subscriptions.get(event);
    listeners.delete(listener);
  }
}

/* ----------------------- InformedController ----------------------- */

class InformedController {
  constructor() {
    this.emitter = new Emitter();

    // Map will store all forms by name
    // Key => name
    // Val => fieldMetaRef
    // Why? so the form knows about field meta
    this.formMap = new Map();

    // For saving values
    this.savedValues = new Map();

    this.getController = this.getController.bind(this);
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
  }

  register(name, controller) {
    debug('Register', name, controller);
    // Clear out old controller
    if (this.formMap.get(name)) {
      this.formMap.delete(name);
    }
    this.formMap.set(name, controller);
    this.emitter.emit(name, '_ALL_');
  }

  deregister(name) {
    debug('De-Register', name);
    if (this.formMap.get(name)) {
      this.formMap.delete(name);
      this.emitter.emit(name, '_ALL_');
    }
  }

  getController(name) {
    return this.formMap.get(name);
  }

  inform(name, target) {
    this.emitter.emit(name, target);
  }

  getSavedValues(name) {
    return this.savedValues.get(name);
  }

  setSavedValues(name, values) {
    return this.savedValues.set(name, values);
  }
}

export const Informed = ({ children }) => {
  debug('Render Informed Provider');

  // Create informed controller
  const [informedController] = useState(() => new InformedController());

  return (
    <InformedContext.Provider value={informedController}>
      {children}
    </InformedContext.Provider>
  );
};
