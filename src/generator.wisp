(ns mnw.generator
  "Create a Markov generator"
  (:require
    [wisp.string :refer [join split]]
    [wisp.sequence :refer [map reduce]]
    [markoff :as Markov]
    [mnw.errors :refer [logError]]
    [mnw.ngram :refer [ngram]]))

(defn- tokenize
  "Group input vector into stringified n-grams"
  [n sequence]
  (map (bind-fn join "|") (ngram n sequence)))

(defn- add-tokens
  "Add a single proverb to a Markov chain"
  [n markov line]
  (.addTokens markov (tokenize n (split line #",?\s+")))
  markov)

(defn teach
  "Create a new Markov chain and feed it proverbs"
  [n proverbs]
  (reduce (bind-fn add-tokens n) (Markov.) proverbs))
