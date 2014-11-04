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

(defn- tokenize [sequence]
  (map (bind-fn join "|") (ngram 1 sequence)))

(defn- feed [markov line]
  (.addTokens markov (tokenize (split line #",?\s+")))
  markov)

(defn teach [markov proverbs]
  (reduce feed markov proverbs))

(defn getGenerator []
  (->
    (getProverbs)
    (bind-fn teach (Markov.))
    [nil logError]))
