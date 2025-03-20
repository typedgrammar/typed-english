/**
 * Type definitions for English grammar
 */

// Parts of speech
export type Noun = string;
export type Pronoun = 'I' | 'you' | 'he' | 'she' | 'it' | 'we' | 'they' | 'me' | 'him' | 'her' | 'us' | 'them';
export type Verb = string;
export type Adjective = string;
export type Adverb = string;
export type Preposition = string;
export type Conjunction = 'and' | 'or' | 'but' | 'because' | 'if' | 'when' | 'while' | 'although' | 'that';
export type Article = 'a' | 'an' | 'the';
export type Interjection = string;

// Tenses
export type Tense = 'present' | 'past' | 'future' | 'present perfect' | 'past perfect' | 'future perfect';

// Voices
export type Voice = 'active' | 'passive';

// Moods
export type Mood = 'indicative' | 'imperative' | 'subjunctive' | 'conditional';

// Numbers
export type Number = 'singular' | 'plural';

// Cases
export type Case = 'nominative' | 'objective' | 'possessive';

// Generic type for noun phrases
export type NounPhrase<
  A extends Article | undefined = undefined,
  Adj extends Adjective[] | undefined = undefined,
  N extends Noun = Noun,
  Num extends Number | undefined = undefined
> = {
  article: A;
  adjectives: Adj;
  noun: N;
  number: Num;
};

// Generic type for verb phrases
export type VerbPhrase<
  V extends Verb = Verb,
  T extends Tense = Tense,
  Vo extends Voice | undefined = undefined,
  M extends Mood | undefined = undefined,
  Adv extends Adverb[] | undefined = undefined
> = {
  verb: V;
  tense: T;
  voice: Vo;
  mood: M;
  adverbs: Adv;
};

// Generic type for prepositional phrases
export type PrepositionalPhrase<
  P extends Preposition = Preposition,
  O extends NounPhrase<any, any, any, any> = NounPhrase<any, any, any, any>
> = {
  preposition: P;
  object: O;
};

// Generic type for clauses
export type Clause<
  S extends NounPhrase<any, any, any, any> | Pronoun = NounPhrase<any, any, any, any> | Pronoun,
  P extends VerbPhrase<any, any, any, any, any> = VerbPhrase<any, any, any, any, any>,
  O extends NounPhrase<any, any, any, any> | Pronoun | undefined = undefined,
  C extends (NounPhrase<any, any, any, any> | PrepositionalPhrase<any, any>)[] | undefined = undefined
> = {
  subject: S;
  predicate: P;
  object: O;
  complements: C;
};

// Generic type for sentences
export type Sentence<
  T extends SentenceType = SentenceType,
  M extends Clause<any, any, any, any> = Clause<any, any, any, any>,
  S extends Clause<any, any, any, any>[] | undefined = undefined,
  C extends Conjunction | undefined = undefined
> = {
  type: T;
  mainClause: M;
  subordinateClauses: S;
  conjunction: C;
};

// Sentence types
export type SentenceType = 'declarative' | 'interrogative' | 'imperative' | 'exclamative';

// Paragraph and Text types with generics
export type Paragraph<S extends Sentence<any, any, any, any>[] = Sentence<any, any, any, any>[]> = S;
export type Text<P extends Paragraph<any>[] = Paragraph<any>[]> = P;

// Utility types with generics
export type ConjugateVerb<V extends Verb, T extends Tense> = string;
export type DeclensionNoun<N extends Noun, Num extends Number, C extends Case> = string;

// Type to represent grammatical correctness
export type GrammaticallyCorrect<T> = T;

// Helper types for common constructions
export type SimpleSingularNounPhrase<N extends Noun, A extends Article> = NounPhrase<A, undefined, N, 'singular'>;
export type SimplePluralNounPhrase<N extends Noun> = NounPhrase<undefined, undefined, N, 'plural'>;
export type PresentTenseVerb<V extends Verb> = VerbPhrase<V, 'present'>;
export type PastTenseVerb<V extends Verb> = VerbPhrase<V, 'past'>;
export type SimplePresentClause<S extends NounPhrase<any, any, any, any> | Pronoun, V extends Verb> = Clause<S, PresentTenseVerb<V>>;
export type SimplePastClause<S extends NounPhrase<any, any, any, any> | Pronoun, V extends Verb> = Clause<S, PastTenseVerb<V>>;
export type SimpleDeclarativeSentence<S extends NounPhrase<any, any, any, any> | Pronoun, V extends Verb> = Sentence<'declarative', SimplePresentClause<S, V>>;
