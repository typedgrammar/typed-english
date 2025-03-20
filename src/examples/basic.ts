/**
 * Runtime examples of English grammar type system
 * This file demonstrates how to use the type system with runtime values
 */

import type {
  Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Article, Interjection,
  Tense, Voice, Mood, Number, Case,
  NounPhrase, VerbPhrase, PrepositionalPhrase,
  Clause, SentenceType, Sentence, Paragraph, Text,
  ConjugateVerb, DeclensionNoun, GrammaticallyCorrect,
  SimpleSingularNounPhrase, SimplePluralNounPhrase,
  PresentTenseVerb, PastTenseVerb,
  SimplePresentClause, SimplePastClause,
  SimpleDeclarativeSentence
} from '../index.js';

// Example of a simple noun phrase
const dogNP: SimpleSingularNounPhrase<'dog', 'the'> = {
  article: 'the',
  adjectives: undefined,
  noun: 'dog',
  number: 'singular'
};

// Example of a noun phrase with adjectives
const bigRedDogNP: NounPhrase<'a', ['big', 'red'], 'dog', 'singular'> = {
  article: 'a',
  adjectives: ['big', 'red'],
  noun: 'dog',
  number: 'singular'
};

// Example of a verb phrase
const runningVP: VerbPhrase<'run', 'present', undefined, undefined, ['quickly']> = {
  verb: 'run',
  tense: 'present',
  voice: undefined,
  mood: undefined,
  adverbs: ['quickly']
};

// Example of a prepositional phrase
const inTheHousePP: PrepositionalPhrase<
  'in',
  NounPhrase<'the', undefined, 'house', 'singular'>
> = {
  preposition: 'in',
  object: {
    article: 'the',
    adjectives: undefined,
    noun: 'house',
    number: 'singular'
  }
};

// Example of a simple clause
const dogRunningClause: Clause<
  typeof dogNP,
  typeof runningVP
> = {
  subject: dogNP,
  predicate: runningVP,
  object: undefined,
  complements: undefined
};

// Example of a clause with an object
const dogChasingCatClause: Clause<
  typeof dogNP,
  VerbPhrase<'chase', 'present'>,
  NounPhrase<'a', undefined, 'cat', 'singular'>
> = {
  subject: dogNP,
  predicate: {
    verb: 'chase',
    tense: 'present',
    voice: undefined,
    mood: undefined,
    adverbs: undefined
  },
  object: {
    article: 'a',
    adjectives: undefined,
    noun: 'cat',
    number: 'singular'
  },
  complements: undefined
};

// Example of a simple declarative sentence
const dogRunsSentence: Sentence<
  'declarative',
  Clause<
    NounPhrase<'the', undefined, 'dog', 'singular'>,
    VerbPhrase<'run', 'present'>
  >
> = {
  type: 'declarative',
  mainClause: {
    subject: {
      article: 'the',
      adjectives: undefined,
      noun: 'dog',
      number: 'singular'
    },
    predicate: {
      verb: 'run',
      tense: 'present',
      voice: undefined,
      mood: undefined,
      adverbs: undefined
    },
    object: undefined,
    complements: undefined
  },
  subordinateClauses: undefined,
  conjunction: undefined
};

// Example of a complex sentence with a subordinate clause
const complexSentence: Sentence<
  'declarative',
  Clause<
    NounPhrase<'the', undefined, 'boy', 'singular'>,
    VerbPhrase<'say', 'past'>
  >,
  [
    Clause<
      NounPhrase<'the', undefined, 'dog', 'singular'>,
      VerbPhrase<'run', 'past'>
    >,
  ],
  'that'
> = {
  type: 'declarative',
  mainClause: {
    subject: {
      article: 'the',
      adjectives: undefined,
      noun: 'boy',
      number: 'singular'
    },
    predicate: {
      verb: 'say',
      tense: 'past',
      voice: undefined,
      mood: undefined,
      adverbs: undefined
    },
    object: undefined,
    complements: undefined
  },
  subordinateClauses: [
    {
      subject: {
        article: 'the',
        adjectives: undefined,
        noun: 'dog',
        number: 'singular'
      },
      predicate: {
        verb: 'run',
        tense: 'past',
        voice: undefined,
        mood: undefined,
        adverbs: undefined
      },
      object: undefined,
      complements: undefined
    }
  ],
  conjunction: 'that'
};

// Example of a compound sentence
const compoundSentence: Sentence<
  'declarative',
  Clause<
    NounPhrase<'the', undefined, 'sun', 'singular'>,
    VerbPhrase<'shine', 'past'>
  >,
  [
    Clause<
      NounPhrase<'the', undefined, 'birds', 'plural'>,
      VerbPhrase<'sing', 'past'>
    >
  ],
  'and'
> = {
  type: 'declarative',
  mainClause: {
    subject: {
      article: 'the',
      adjectives: undefined,
      noun: 'sun',
      number: 'singular'
    },
    predicate: {
      verb: 'shine',
      tense: 'past',
      voice: undefined,
      mood: undefined,
      adverbs: undefined
    },
    object: undefined,
    complements: undefined
  },
  subordinateClauses: [
    {
      subject: {
        article: 'the',
        adjectives: undefined,
        noun: 'birds',
        number: 'plural'
      },
      predicate: {
        verb: 'sing',
        tense: 'past',
        voice: undefined,
        mood: undefined,
        adverbs: undefined
      },
      object: undefined,
      complements: undefined
    }
  ],
  conjunction: 'and'
};

// Runtime implementation of verb conjugation
const conjugateVerb: ConjugateVerb<'walk', 'past'> = 'walked';

// Runtime implementation of noun declension
const declinedNoun: DeclensionNoun<'child', 'plural', 'possessive'> = "children's";

// Sample paragraph
const sampleParagraph: Paragraph<[
  typeof dogRunsSentence,
  typeof compoundSentence
]> = [
    dogRunsSentence,
    compoundSentence
  ];

// Using helper types for a more concise sentence construction
const conciseSentence: SimpleDeclarativeSentence<
  SimpleSingularNounPhrase<'cat', 'the'>,
  'sleep'
> = {
  type: 'declarative',
  mainClause: {
    subject: {
      article: 'the',
      adjectives: undefined,
      noun: 'cat',
      number: 'singular'
    },
    predicate: {
      verb: 'sleep',
      tense: 'present',
      voice: undefined,
      mood: undefined,
      adverbs: undefined
    },
    object: undefined,
    complements: undefined
  },
  subordinateClauses: undefined,
  conjunction: undefined
};

// More complex composition with helper types
const complexComposition: Sentence<
  'interrogative',
  Clause<
    SimpleSingularNounPhrase<'teacher', 'the'>,
    VerbPhrase<'ask', 'present'>,
    SimpleSingularNounPhrase<'question', 'a'>
  >
> = {
  type: 'interrogative',
  mainClause: {
    subject: {
      article: 'the',
      adjectives: undefined,
      noun: 'teacher',
      number: 'singular'
    },
    predicate: {
      verb: 'ask',
      tense: 'present',
      voice: undefined,
      mood: undefined,
      adverbs: undefined
    },
    object: {
      article: 'a',
      adjectives: undefined,
      noun: 'question',
      number: 'singular'
    },
    complements: undefined
  },
  subordinateClauses: undefined,
  conjunction: undefined
};

// Function to validate correctness of a sentence (runtime validation)
function validateSentence<T extends Sentence<any, any, any, any>>(sentence: GrammaticallyCorrect<T>): boolean {
  // Here we could add actual runtime validation logic
  return true;
}

// Testing validation
const isValid = validateSentence(dogRunsSentence); // Should be true

/**
 * Helper functions to convert typed English structures to string representation
 */

// Convert a noun phrase to string
function nounPhraseToString<
  A extends Article | undefined,
  Adj extends Adjective[] | undefined,
  N extends Noun,
  Num extends Number | undefined
>(np: NounPhrase<A, Adj, N, Num>): string {
  let result = '';

  // Add article if it exists
  if (np.article) {
    result += np.article + ' ';
  }

  // Add adjectives if they exist
  if (np.adjectives && np.adjectives.length > 0) {
    result += np.adjectives.join(' ') + ' ';
  }

  // Add noun
  result += np.noun;

  // Handle pluralization if needed
  if (np.number === 'plural' && !np.noun.endsWith('s')) {
    result += 's';
  }

  return result;
}

// Helper function for past participle
function pastParticiple(verb: string): string {
  // 简化的实现加上一些常见不规则动词
  const irregularVerbs: Record<string, string> = {
    'be': 'been',
    'begin': 'begun',
    'break': 'broken',
    'bring': 'brought',
    'buy': 'bought',
    'choose': 'chosen',
    'come': 'come',
    'do': 'done',
    'drink': 'drunk',
    'drive': 'driven',
    'eat': 'eaten',
    'fall': 'fallen',
    'fly': 'flown',
    'get': 'got',
    'give': 'given',
    'go': 'gone',
    'grow': 'grown',
    'have': 'had',
    'hear': 'heard',
    'know': 'known',
    'make': 'made',
    'read': 'read',
    'run': 'run',
    'say': 'said',
    'see': 'seen',
    'sing': 'sung',
    'shine': 'shone',
    'sit': 'sat',
    'speak': 'spoken',
    'swim': 'swum',
    'take': 'taken',
    'teach': 'taught',
    'tell': 'told',
    'think': 'thought',
    'throw': 'thrown',
    'understand': 'understood',
    'wear': 'worn',
    'write': 'written'
  };

  if (irregularVerbs[verb]) {
    return irregularVerbs[verb];
  }

  if (verb.endsWith('e')) {
    return verb + 'd';
  } else if (verb.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(verb.charAt(verb.length - 2))) {
    return verb.slice(0, -1) + 'ied';
  } else {
    return verb + 'ed';
  }
}

// Handle verb conjugation based on tense
function conjugateVerbByTense(verb: string, tense: Tense, subject?: NounPhrase<any, any, any, any> | Pronoun): string {
  // 不规则动词的过去式形式
  const pastIrregular: Record<string, string> = {
    'be': 'was',
    'begin': 'began',
    'break': 'broke',
    'bring': 'brought',
    'buy': 'bought',
    'choose': 'chose',
    'come': 'came',
    'do': 'did',
    'drink': 'drank',
    'drive': 'drove',
    'eat': 'ate',
    'fall': 'fell',
    'fly': 'flew',
    'get': 'got',
    'give': 'gave',
    'go': 'went',
    'grow': 'grew',
    'have': 'had',
    'hear': 'heard',
    'know': 'knew',
    'make': 'made',
    'read': 'read',
    'run': 'ran',
    'say': 'said',
    'see': 'saw',
    'sing': 'sang',
    'shine': 'shone',
    'sit': 'sat',
    'speak': 'spoke',
    'swim': 'swam',
    'take': 'took',
    'teach': 'taught',
    'tell': 'told',
    'think': 'thought',
    'throw': 'threw',
    'understand': 'understood',
    'wear': 'wore',
    'write': 'wrote'
  };

  switch (tense) {
    case 'present':
      // Simple present tense conjugation
      if (subject && typeof subject !== 'string') {
        // Third person singular in present tense
        if (subject.number === 'singular' &&
          subject.noun !== 'I' &&
          subject.noun !== 'you') {
          // Handle special cases and regular conjugation
          if (verb.endsWith('s') || verb.endsWith('x') || verb.endsWith('ch') || verb.endsWith('sh')) {
            return verb + 'es';
          } else if (verb.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(verb.charAt(verb.length - 2))) {
            return verb.slice(0, -1) + 'ies';
          } else {
            return verb + 's';
          }
        }
      }
      return verb;
    case 'past':
      // Check irregular verbs first
      if (pastIrregular[verb]) {
        return pastIrregular[verb];
      }

      // Simple past tense conjugation (regular verbs)
      if (verb.endsWith('e')) {
        return verb + 'd';
      } else if (verb.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(verb.charAt(verb.length - 2))) {
        return verb.slice(0, -1) + 'ied';
      } else {
        return verb + 'ed';
      }
    case 'future':
      return 'will ' + verb;
    case 'present perfect':
      return 'have ' + pastParticiple(verb);
    case 'past perfect':
      return 'had ' + pastParticiple(verb);
    case 'future perfect':
      return 'will have ' + pastParticiple(verb);
    default:
      return verb;
  }
}

// Convert a verb phrase to string
function verbPhraseToString<
  V extends Verb,
  T extends Tense,
  Vo extends Voice | undefined,
  M extends Mood | undefined,
  Adv extends Adverb[] | undefined
>(vp: VerbPhrase<V, T, Vo, M, Adv>, subject?: NounPhrase<any, any, any, any> | Pronoun): string {
  let result = conjugateVerbByTense(vp.verb, vp.tense, subject);

  // Add adverbs if they exist
  if (vp.adverbs && vp.adverbs.length > 0) {
    result += ' ' + vp.adverbs.join(' ');
  }

  return result;
}

// Convert a prepositional phrase to string
function prepositionalPhraseToString<
  P extends Preposition,
  O extends NounPhrase<any, any, any, any>
>(pp: PrepositionalPhrase<P, O>): string {
  return `${pp.preposition} ${nounPhraseToString(pp.object)}`;
}

// Convert a clause to string
function clauseToString<
  S extends NounPhrase<any, any, any, any> | Pronoun,
  P extends VerbPhrase<any, any, any, any, any>,
  O extends NounPhrase<any, any, any, any> | Pronoun | undefined,
  C extends (NounPhrase<any, any, any, any> | PrepositionalPhrase<any, any>)[] | undefined
>(clause: Clause<S, P, O, C>): string {
  let result = '';

  // Add subject
  if (typeof clause.subject === 'string') {
    result += clause.subject;
  } else {
    result += nounPhraseToString(clause.subject);
  }

  // Add predicate with subject information for correct conjugation
  result += ' ' + verbPhraseToString(clause.predicate, clause.subject);

  // Add object if it exists
  if (clause.object) {
    if (typeof clause.object === 'string') {
      result += ' ' + clause.object;
    } else {
      result += ' ' + nounPhraseToString(clause.object);
    }
  }

  // Add complements if they exist
  if (clause.complements && clause.complements.length > 0) {
    for (const complement of clause.complements) {
      if ('preposition' in complement) {
        result += ' ' + prepositionalPhraseToString(complement as PrepositionalPhrase<any, any>);
      } else {
        result += ' ' + nounPhraseToString(complement as NounPhrase<any, any, any, any>);
      }
    }
  }

  return result;
}

// Convert a sentence to string
function sentenceToString<
  T extends SentenceType,
  M extends Clause<any, any, any, any>,
  S extends Clause<any, any, any, any>[] | undefined,
  C extends Conjunction | undefined
>(sentence: Sentence<T, M, S, C>): string {
  let result = clauseToString(sentence.mainClause);

  // Add subordinate clauses if they exist
  if (sentence.subordinateClauses && sentence.subordinateClauses.length > 0) {
    if (sentence.conjunction) {
      result += ' ' + sentence.conjunction;
    }

    for (const clause of sentence.subordinateClauses) {
      result += ' ' + clauseToString(clause);
    }
  }

  // Handle different sentence types
  switch (sentence.type) {
    case 'declarative':
      result += '.';
      break;
    case 'interrogative':
      // Simple transformation for questions
      // A more accurate implementation would rearrange words
      result += '?';
      break;
    case 'imperative':
      result += '!';
      break;
    case 'exclamative':
      result += '!';
      break;
  }

  // Capitalize first letter
  return result.charAt(0).toUpperCase() + result.slice(1);
}

// Convert a paragraph to string
function paragraphToString<S extends Sentence<any, any, any, any>[]>(paragraph: Paragraph<S>): string {
  return paragraph.map(sentence => sentenceToString(sentence)).join(' ');
}

// Testing the string representation of our examples
const dogNPString = nounPhraseToString(dogNP);
console.log('Dog NP:', dogNPString);
// Expected: "the dog"

const bigRedDogNPString = nounPhraseToString(bigRedDogNP);
console.log('Big Red Dog NP:', bigRedDogNPString);
// Expected: "a big red dog"

const runningVPString = verbPhraseToString(runningVP);
console.log('Running VP:', runningVPString);
// Expected: "run quickly"

const inTheHousePPString = prepositionalPhraseToString(inTheHousePP);
console.log('In The House PP:', inTheHousePPString);
// Expected: "in the house"

const dogRunningClauseString = clauseToString(dogRunningClause);
console.log('Dog Running Clause:', dogRunningClauseString);
// Expected: "the dog runs quickly"

const dogChasingCatClauseString = clauseToString(dogChasingCatClause);
console.log('Dog Chasing Cat Clause:', dogChasingCatClauseString);
// Expected: "the dog chases a cat"

const dogRunsSentenceString = sentenceToString(dogRunsSentence);
console.log('Dog Runs Sentence:', dogRunsSentenceString);
// Expected: "The dog runs."

const complexSentenceString = sentenceToString(complexSentence);
console.log('Complex Sentence:', complexSentenceString);
// Expected: "The boy said that the dog ran."

const compoundSentenceString = sentenceToString(compoundSentence);
console.log('Compound Sentence:', compoundSentenceString);
// Expected: "The sun shone and the birds sang."

const sampleParagraphString = paragraphToString(sampleParagraph);
console.log('Sample Paragraph:', sampleParagraphString);
// Expected: "The dog runs. The sun shone and the birds sang."

const conciseSentenceString = sentenceToString(conciseSentence);
console.log('Concise Sentence:', conciseSentenceString);
// Expected: "The cat sleeps."

const complexCompositionString = sentenceToString(complexComposition);
console.log('Complex Composition:', complexCompositionString);
// Expected: "The teacher asks a question?"

// Testing against expected values
function assertStringEquals(actual: string, expected: string, label: string): void {
  if (actual === expected) {
    console.log(`✅ ${label} passed`);
  } else {
    console.error(`❌ ${label} failed`);
    console.error(`  Expected: "${expected}"`);
    console.error(`  Actual:   "${actual}"`);
  }
}

// Run string tests
function runStringTests(): void {
  assertStringEquals(dogNPString, "the dog", "Dog NP");
  assertStringEquals(bigRedDogNPString, "a big red dog", "Big Red Dog NP");
  assertStringEquals(runningVPString, "run quickly", "Running VP");
  assertStringEquals(inTheHousePPString, "in the house", "In The House PP");
  assertStringEquals(dogRunningClauseString, "the dog runs quickly", "Dog Running Clause");
  assertStringEquals(dogChasingCatClauseString, "the dog chases a cat", "Dog Chasing Cat Clause");
  assertStringEquals(dogRunsSentenceString, "The dog runs.", "Dog Runs Sentence");
  assertStringEquals(complexSentenceString, "The boy said that the dog ran.", "Complex Sentence");
  assertStringEquals(compoundSentenceString, "The sun shone and the birds sang.", "Compound Sentence");
  assertStringEquals(sampleParagraphString, "The dog runs. The sun shone and the birds sang.", "Sample Paragraph");
  assertStringEquals(conciseSentenceString, "The cat sleeps.", "Concise Sentence");
  assertStringEquals(complexCompositionString, "The teacher asks a question?", "Complex Composition");
}

// Export all helpers and string representations
export {
  dogNP, bigRedDogNP, runningVP, inTheHousePP,
  dogRunningClause, dogChasingCatClause,
  dogRunsSentence, complexSentence, compoundSentence,
  conjugateVerb, declinedNoun,
  sampleParagraph, conciseSentence, complexComposition,
  validateSentence, isValid,
  // String conversion helpers
  nounPhraseToString, verbPhraseToString, prepositionalPhraseToString,
  clauseToString, sentenceToString, paragraphToString,
  // String representations
  dogNPString, bigRedDogNPString, runningVPString, inTheHousePPString,
  dogRunningClauseString, dogChasingCatClauseString,
  dogRunsSentenceString, complexSentenceString, compoundSentenceString,
  sampleParagraphString, conciseSentenceString, complexCompositionString,
  // Testing functions
  assertStringEquals, runStringTests
};

// Run the tests
runStringTests(); 