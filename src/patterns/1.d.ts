/**
 * Type definitions for simple statements word order structure in English
 */

// Basic sentence component types
export type Who = string; // Who performs the action
export type Verb = string; // Action verb
export type What = string; // Object of the action
export type Where = string; // Location
export type How = string; // Manner
export type When = string; // Time

// Simple statement structure
// Note: According to the material, a simple statement can have six parts, but not every sentence has all of them
// The time adverbial (When) can be placed at the beginning or the end of a statement
export interface SimpleStatement {
  who: Who;      // Required: subject of the sentence
  verb: Verb;    // Required: action verb
  what?: What;   // Optional: object of the action
  where?: Where; // Optional: location
  how?: How;     // Optional: manner
  when?: When;   // Optional: time
  timePosition?: 'beginning' | 'end'; // Where to place the time adverbial, defaults to 'end' if not specified
}

// Example pattern: The policeman arrested the thief.
export type PolicemanArrestedThief = SimpleStatement & {
  who: 'The policeman',
  verb: 'arrested',
  what: 'the thief'
};

// Example pattern: The thief arrested the policeman.
export type ThiefArrestedPoliceman = SimpleStatement & {
  who: 'The thief',
  verb: 'arrested',
  what: 'the policeman'
};

// More complex example with time adverbial at the end
export type StatementWithTimeAtEnd = SimpleStatement & {
  who: 'The boy',
  verb: 'played',
  what: 'football',
  where: 'in the park',
  how: 'happily',
  when: 'yesterday',
  timePosition: 'end'
};

// Example with time adverbial at the beginning
export type StatementWithTimeAtBeginning = SimpleStatement & {
  who: 'the girl',
  verb: 'reads',
  what: 'books',
  where: 'in the library',
  how: 'quietly',
  when: 'every day',
  timePosition: 'beginning'
};

// Simple pattern without all optional parts
export type SimpleStatementMinimal = SimpleStatement & {
  who: 'The sun',
  verb: 'rises',
  where: 'in the east'
}; 