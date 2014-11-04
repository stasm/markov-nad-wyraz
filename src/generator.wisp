;include macros.wisp

(ns mnw.generator
  "Create a Markov generator"
  (:require
    [wisp.sequence :refer [map reduce]]
    [wisp.string :refer [join split split-lines]]
    [promise :as Promise]
    [polish-proverbs :as pp]
    [markoff :as Markov]
    [mnw.errors :refer [logError]]
    [mnw.ngram :refer [ngram]]))

(promisify getProverbs []
  (pp (fn [txt]
    (resolv (split-lines txt)))))

(defn- tokenize [n sequence]
  (map (bind-fn join "|") (ngram n sequence)))

(defn- add-tokens [n markov line]
  (.addTokens markov (tokenize n (split line #",?\s+")))
  markov)

(defn teach [n markov proverbs]
  (reduce (bind-fn add-tokens n) markov proverbs))

(defn getGenerator [n]
  (->
    (getProverbs)
    (bind-fn teach n (Markov.))
    [nil logError]))
