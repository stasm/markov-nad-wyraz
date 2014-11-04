;include macros.wisp

(ns mnw.index
  "Create a Markov generator"
  (:require
    [wisp.runtime :refer [dec]]
    [wisp.string :refer [join split]]
    [wisp.sequence :refer [map last]]
    [mnw.errors :refer [logError]]
    [mnw.generator :refer [getGenerator]]))

(defn- flatten [token]
  (last (split token "|")))

(defn- printMultiple [total maxlen markov]
  (loop [i total]
    (if (> i 0)
      (do
        (print (join " " (map flatten (.chain markov maxlen))))
        (recur (dec i))))))

(def getGenerator getGenerator)

(defn main [program]
  (->
    (getGenerator)
    (bind-fn printMultiple (.-count program) (.-maxlen program))
    [nil logError]))
